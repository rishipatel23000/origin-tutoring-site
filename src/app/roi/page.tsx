import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AscentMark from "@/components/AscentMark";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Return — Origin Tutoring",
  description:
    "What a university degree is worth: Statistics Canada data on wages, cumulative earnings, and low-pay risk by education level.",
};

function SourceLink({ label, href }: { label: string; href: string }) {
  return (
    <p className="mt-6 text-small text-ink/70">
      Source:{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-medium text-accent underline underline-offset-4 transition-colors hover:text-navy"
      >
        {label}
        <ArrowUpRight size={13} className="shrink-0" />
      </a>
    </p>
  );
}

export default function RoiPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pb-20 pt-20 md:pt-28">
          <div className="mx-auto grid w-full max-w-[1120px] items-end gap-16 lg:grid-cols-[3fr_2fr]">
            <div>
              <Reveal>
                <p className="eyebrow">The return</p>
                <h1 className="mt-5 max-w-2xl text-h1">
                  The math on a degree.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-xl text-body-lg">
                  Tutoring is a cost today against an outcome years away. So
                  here is the outcome, in Statistics Canada&apos;s numbers —
                  what university graduates earn compared with high-school
                  graduates, per hour, over a career, and when things
                  don&apos;t go to plan.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="hidden lg:block">
              <AscentMark className="w-full" />
            </Reveal>
          </div>
        </section>

        {/* Stat blocks */}
        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto w-full max-w-[1120px]">
            {/* Hourly wage */}
            <Reveal>
              <div className="grid gap-10 border-t border-line py-16 md:grid-cols-2 md:py-20">
                <div>
                  <h2 className="max-w-md text-h2">Higher pay, every hour.</h2>
                  <p className="mt-5 max-w-md text-body">
                    In 2024, employees with a bachelor&apos;s degree or higher
                    earned an average of $44.67 an hour. Employees with a high
                    school diploma earned $28.82. That gap applies to every
                    hour of a working life.
                  </p>
                  <SourceLink
                    label="Statistics Canada, Quality of Employment in Canada: Average earnings, 2024 (Labour Force Survey)"
                    href="https://www150.statcan.gc.ca/n1/pub/14-28-0001/2025001/article/00001-eng.htm"
                  />
                </div>
                <div className="md:pl-10">
                  <p className="font-body text-6xl font-semibold tracking-tight text-navy">
                    55%
                  </p>
                  <p className="mt-3 max-w-xs text-small text-ink/70">
                    higher average hourly wage with a bachelor&apos;s degree or
                    higher — $44.67 vs $28.82
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Cumulative earnings */}
            <Reveal>
              <div className="grid gap-10 border-t border-line py-16 md:grid-cols-2 md:py-20">
                <div>
                  <h2 className="max-w-md text-h2">
                    The gap compounds for twenty years.
                  </h2>
                  <p className="mt-5 max-w-md text-body">
                    Following the same graduates over two decades, Statistics
                    Canada found that bachelor&apos;s degree holders earned a
                    large multiple of what high-school graduates earned over
                    the same twenty years — and the advantage was even larger
                    for women than for men.
                  </p>
                  <SourceLink
                    label="Statistics Canada, The Cumulative Earnings of Postsecondary Graduates Over 20 Years"
                    href="https://www150.statcan.gc.ca/n1/pub/11-626-x/11-626-x2014040-eng.htm"
                  />
                </div>
                <div className="flex gap-14 md:pl-10">
                  <div>
                    <p className="font-body text-6xl font-semibold tracking-tight text-navy">
                      1.7×
                    </p>
                    <p className="mt-3 text-small text-ink/70">
                      cumulative 20-year earnings, men
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-6xl font-semibold tracking-tight text-navy">
                      2.1×
                    </p>
                    <p className="mt-3 text-small text-ink/70">
                      cumulative 20-year earnings, women
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Low-pay risk — downside protection */}
            <Reveal>
              <div className="grid gap-10 border-t border-line py-16 md:grid-cols-2 md:py-20">
                <div>
                  <h2 className="max-w-md text-h2">
                    And a floor, not just a ceiling.
                  </h2>
                  <p className="mt-5 max-w-md text-body">
                    A degree isn&apos;t only about the best case — it protects
                    the worst case. In 2024, just 9.2% of workers with a
                    bachelor&apos;s degree or higher earned below Canada&apos;s
                    low-pay threshold, compared with 36.0% of those with a high
                    school diploma or less.
                  </p>
                  <SourceLink
                    label="Statistics Canada, Employees with low pay, 2024"
                    href="https://www150.statcan.gc.ca/n1/pub/14-28-0001/2025001/article/00002-eng.htm"
                  />
                </div>
                <div className="md:pl-10">
                  <p className="font-body text-6xl font-semibold tracking-tight text-navy">
                    9.2%
                  </p>
                  <p className="mt-3 max-w-xs text-small text-ink/70">
                    of degree holders earned low pay in 2024 — versus 36.0% of
                    workers with a high school diploma or less
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <p className="border-t border-line pt-8 text-small text-ink/60">
                Figures are national averages across all fields of study;
                individual outcomes vary. We show them because the direction
                and the scale of the difference are consistent across decades
                of Canadian data.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-navy px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">Next step</p>
              <h2 className="mt-4 max-w-xl text-h2 text-cream">
                The investment starts smaller than you think.
              </h2>
              <p className="mt-6 max-w-xl text-body-lg text-cream/85">
                One session is enough to see whether Origin is the right fit
                for your student — no package required.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 rounded-md bg-cream px-6 py-3 text-small font-medium text-navy transition-colors hover:bg-cream-deep"
                >
                  Book a session
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center rounded-md border border-cream/40 px-6 py-3 text-small font-medium text-cream transition-colors hover:border-cream"
                >
                  See pricing
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
