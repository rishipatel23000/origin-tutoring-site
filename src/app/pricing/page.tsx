import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gift, Mail, Receipt, Tag } from "lucide-react";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { sessionFormats } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing — Origin",
  description:
    "One price per session for 1-on-1 tutoring, group sessions, and Ascent — no packages or contracts required.",
};

const included = [
  {
    icon: Receipt,
    text: "Pay only for the session you book — no recurring or subscription charges",
  },
  {
    icon: Tag,
    text: "The exact price shown here is what you pay at checkout, nothing added",
  },
  {
    icon: Gift,
    text: "Referral codes apply automatically at checkout, not after the fact",
  },
  {
    icon: Mail,
    text: "A short session summary emailed home after every session",
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pb-16 pt-20 md:pt-28">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">Pricing</p>
              <h1 className="mt-5 max-w-2xl text-h1">
                One price per session. No packages required.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-body-lg">
                Every format is priced and billed per session — pay for the
                one you book, see how your student responds, and decide from
                there. Prices are in Canadian dollars.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pricing rows */}
        <section className="px-6 pb-16 md:pb-20">
          <div className="mx-auto w-full max-w-[1120px] border-t border-line">
            {sessionFormats.map((format, i) => (
              <Reveal key={format.slug} delay={i * 0.08}>
                <div className="grid gap-8 border-b border-line py-14 md:grid-cols-[3fr_2fr] md:items-center md:py-16">
                  <div>
                    <h2 className="text-h2">{format.title}</h2>
                    <p className="mt-4 max-w-md text-body">{format.blurb}</p>
                  </div>
                  <div className="md:pl-10">
                    <p className="font-body text-6xl font-semibold tracking-tight text-navy">
                      ${format.price}
                    </p>
                    <p className="mt-3 text-small text-ink/70">
                      {format.currency} per session
                    </p>
                    <Link
                      href={`/booking?format=${format.slug}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-small font-medium text-cream transition-colors hover:bg-navy-mid"
                    >
                      Book {format.title.toLowerCase()}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Why per-session, not packages */}
        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto w-full max-w-[720px]">
            <Reveal>
              <p className="text-body text-ink/80">
                We don&apos;t require packages or long-term contracts to get
                started. If tutoring isn&apos;t the right fit, you&apos;re
                only out the cost of the session you booked — not a
                semester&apos;s worth.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What's included, always */}
        <section className="bg-cream-deep px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">What&apos;s included, always</p>
            </Reveal>
            <div className="mt-10 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {included.map((item, i) => (
                <Reveal key={item.text} delay={0.06 * i}>
                  <div className="flex h-full flex-col gap-4 rounded-lg border border-line bg-cream p-8">
                    <item.icon size={22} className="text-accent" />
                    <p className="text-small text-ink/80">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-navy px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">Next step</p>
              <h2 className="mt-4 max-w-xl text-h2 text-cream">
                Ready when you are.
              </h2>
              <p className="mt-6 max-w-xl text-body-lg text-cream/85">
                Choose a format and book directly — payment is handled
                securely through Stripe.
              </p>
              <Link
                href="/booking"
                className="mt-9 inline-flex items-center gap-2 rounded-md bg-cream px-6 py-3 text-small font-medium text-navy transition-colors hover:bg-cream-deep"
              >
                Book a session
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
