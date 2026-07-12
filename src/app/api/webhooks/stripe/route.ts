import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripeClient } from "@/lib/stripe";
import { confirmSignupPayment } from "@/lib/referrals";

/*
  Stripe webhook endpoint.

  TODO once the Stripe account exists:
  1. Register this URL with Stripe and subscribe it to at least
     `checkout.session.completed`:
       - Production: dashboard.stripe.com -> Developers -> Webhooks ->
         add endpoint -> https://<your-domain>/api/webhooks/stripe
       - Local dev: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
  2. Both give you a signing secret -- set it as STRIPE_WEBHOOK_SECRET
     in .env.local. Dashboard and `stripe listen` secrets are
     DIFFERENT; don't reuse one for the other.

  Signature verification below is what proves a request actually came
  from Stripe and wasn't forged -- never skip it, even in dev.
*/
export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Missing signature or STRIPE_WEBHOOK_SECRET" },
      { status: 400 }
    );
  }

  // Signature verification needs the raw, unparsed body -- Route
  // Handlers don't auto-parse the body, so request.text() is safe here.
  const rawBody = await request.text();

  const stripe = getStripeClient();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: `Invalid signature: ${message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const signupId = session.metadata?.signup_id;
    const stripeCustomerId = session.customer;

    // This is the ONLY place a signup should ever flip to paid --
    // confirmed payment, per the referral attribution rule in
    // CLAUDE.md. confirmSignupPayment is idempotent, so a Stripe
    // retry of this same event can't double-attribute a reward.
    if (signupId && typeof stripeCustomerId === "string") {
      await confirmSignupPayment(signupId, stripeCustomerId);
    }
    // TODO: if ambassador rewards should trigger something (an email,
    // a credit, a dashboard update) rather than just sitting in the
    // signups row, hook it in here -- this is the confirmed-payment
    // moment.
  }

  return NextResponse.json({ received: true });
}
