import type { Metadata } from "next";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book a session — Origin",
  description:
    "Book and pay for a 1-on-1, group, or Ascent session. Secure checkout through Stripe.",
};

export default function BookingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="px-6 pb-16 pt-20 md:pt-28">
          <div className="mx-auto w-full max-w-[640px]">
            <Reveal>
              <p className="eyebrow">Booking</p>
              <h1 className="mt-5 text-h1">Book a session.</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-body-lg">
                Choose a format below. You&apos;ll pay securely through
                Stripe, and we&apos;ll follow up by email to schedule the
                time.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto w-full max-w-[640px]">
            <Reveal delay={0.15}>
              <Suspense fallback={null}>
                <BookingForm />
              </Suspense>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
