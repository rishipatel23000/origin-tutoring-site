import Stripe from "stripe";

let client: Stripe | undefined;

/*
  Lazily-constructed Stripe client. Built on first use (inside a route
  handler) rather than at module import time, so importing this file
  doesn't crash `next build` or unrelated routes before
  STRIPE_SECRET_KEY exists in .env.local (see SETUP.md).
*/
export function getStripeClient() {
  if (client) return client;

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    // TODO: once the Stripe account exists, set STRIPE_SECRET_KEY in
    // .env.local.
    throw new Error("Missing STRIPE_SECRET_KEY env var.");
  }

  client = new Stripe(secretKey, {
    apiVersion: "2026-06-24.dahlia",
  });
  return client;
}
