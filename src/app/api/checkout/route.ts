import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { validateRefCode, createPendingSignup } from "@/lib/referrals";

/*
  Starts a Stripe Checkout session for a single booking.

  Expects a JSON body: { priceId: string, email?: string, refCode?: string }

  - priceId: the Stripe Price ID for whatever's being booked. See
    src/lib/pricing.ts for the current 1-on-1 / group / Ascent Price
    IDs -- that's the single source of truth /booking reads from.
    There's no fallback/default price here on purpose: picking one
    silently would be a pricing bug waiting to happen.
  - refCode: optional referral code entered at checkout. Invalid or
    missing codes don't block checkout (see validateRefCode).
*/
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const priceId = body?.priceId as string | undefined;
  const email = body?.email as string | undefined;
  const refCode = body?.refCode as string | undefined;

  if (!priceId) {
    return NextResponse.json({ error: "priceId is required" }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    // TODO: set NEXT_PUBLIC_SITE_URL in .env.local -- e.g.
    // http://localhost:3000 for dev, the real domain in production.
    return NextResponse.json(
      { error: "Server misconfigured: NEXT_PUBLIC_SITE_URL is not set" },
      { status: 500 }
    );
  }

  const validatedRefCode = await validateRefCode(refCode);
  const signupId = await createPendingSignup(validatedRefCode);

  const stripe = getStripeClient();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: email,
    // Stashing signup_id here is what lets the webhook find its way
    // back to this exact row -- see src/app/api/webhooks/stripe/route.ts.
    metadata: {
      signup_id: signupId,
      ref_code: validatedRefCode ?? "",
    },
    success_url: `${siteUrl}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/booking?canceled=1`,
  });

  return NextResponse.json({ url: session.url });
}
