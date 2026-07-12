import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import AscentMark from "@/components/AscentMark";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getStripeClient } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Booking confirmed — Origin",
};

async function getConfirmation(sessionId: string | undefined) {
  if (!sessionId) return null;
  try {
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") return null;
    return {
      email: session.customer_details?.email ?? null,
      amount:
        session.amount_total != null
          ? (session.amount_total / 100).toFixed(2)
          : null,
      currency: session.currency?.toUpperCase() ?? null,
    };
  } catch {
    return null;
  }
}

export default async function BookingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const confirmation = await getConfirmation(sessionId);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[640px]">
            <Reveal>
              <AscentMark className="mb-10 w-40" />
              {confirmation ? (
                <>
                  <p className="eyebrow flex items-center gap-2">
                    <CircleCheck size={15} />
                    Booking confirmed
                  </p>
                  <h1 className="mt-5 text-h1">You&apos;re booked.</h1>
                  <p className="mt-7 text-body-lg">
                    We&apos;ve received payment
                    {confirmation.amount && confirmation.currency
                      ? ` of $${confirmation.amount} ${confirmation.currency}`
                      : ""}
                    {confirmation.email ? ` — a receipt is on its way to ${confirmation.email}.` : "."}{" "}
                    We&apos;ll follow up by email separately to schedule the
                    exact time.
                  </p>
                </>
              ) : (
                <>
                  <p className="eyebrow">Booking</p>
                  <h1 className="mt-5 text-h1">
                    We couldn&apos;t confirm that automatically.
                  </h1>
                  <p className="mt-7 text-body-lg">
                    If you completed payment, your booking is still safely
                    recorded — this page just failed to load the receipt. If
                    you don&apos;t hear from us by email shortly, something
                    may have gone wrong, and it&apos;s worth booking again or
                    checking with your bank.
                  </p>
                </>
              )}
              <Link
                href="/"
                className="mt-9 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-small font-medium text-cream transition-colors hover:bg-navy-mid"
              >
                Back to Origin
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
