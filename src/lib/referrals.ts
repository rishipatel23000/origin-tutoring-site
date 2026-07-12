import { getSupabaseServerClient } from "@/lib/supabase/server";

/*
  Checks a ref_code against the ambassadors table. Returns the code
  back if it's real, or null if it isn't -- callers should treat null
  as "proceed without a referral," not as an error, since an invalid
  or missing code shouldn't block checkout.
*/
export async function validateRefCode(
  refCode: string | null | undefined
): Promise<string | null> {
  const trimmed = refCode?.trim();
  if (!trimmed) return null;

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("ambassadors")
    .select("ref_code")
    .eq("ref_code", trimmed)
    .maybeSingle();

  if (error) throw error;
  return data?.ref_code ?? null;
}

/*
  Creates the signup row at the start of checkout, before payment is
  confirmed. status stays 'pending' -- this row existing is NOT what
  earns a referral reward (see confirmSignupPayment).
*/
export async function createPendingSignup(
  refCode: string | null
): Promise<string> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("signups")
    .insert({ ref_code: refCode, status: "pending" })
    .select("id")
    .single();

  if (error) throw error;
  return data.id as string;
}

/*
  The only place paid_at is ever set. Called exclusively from the
  Stripe webhook after a checkout.session.completed event -- this is
  the confirmed-payment moment the referral reward attributes to, per
  CLAUDE.md ("Data (referral)": attribute on confirmed payment, never
  on signup).

  The `.is("paid_at", null)` guard makes this idempotent: Stripe can
  (and does) redeliver the same webhook event, and this must not
  re-fire or double-count a reward on a retry.
*/
export async function confirmSignupPayment(
  signupId: string,
  stripeCustomerId: string
): Promise<void> {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("signups")
    .update({
      status: "paid",
      paid_at: new Date().toISOString(),
      stripe_customer_id: stripeCustomerId,
    })
    .eq("id", signupId)
    .is("paid_at", null);

  if (error) throw error;
}
