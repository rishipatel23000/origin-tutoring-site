import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  FileText,
  GraduationCap,
  MessageSquare,
  Milestone,
  Target,
} from "lucide-react";
import AscentMark from "@/components/AscentMark";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Ascent — Origin",
  description:
    "Ascent is Origin's university application and admissions consulting — program strategy, essays, and timelines, supplementary to tutoring.",
};

const timeline = [
  {
    when: "Grade 11 · Fall",
    icon: Target,
    title: "Program & school strategy",
    body: "We map target programs against your student's grades, courses, and actual interests, then build a balanced list — reach, match, and safety — instead of a wish list.",
  },
  {
    when: "Grade 11 · Winter–Spring",
    icon: Milestone,
    title: "Positioning & narrative",
    body: "Most students have more of a story than they realize. We find the through-line in their courses and activities and shape it into something an admissions reader remembers.",
  },
  {
    when: "Summer before Grade 12",
    icon: FileText,
    title: "Essays & personal statements",
    body: "Drafts are built around each program's actual prompts, not a template — with enough rounds of feedback to sound like the student, at their best.",
  },
  {
    when: "Grade 12 · Fall",
    icon: CalendarClock,
    title: "Applications & deadlines",
    body: "We track every deadline across OUAC and, where relevant, out-of-province and international systems, so nothing is submitted at 11:58pm by accident.",
  },
  {
    when: "Grade 12 · Winter",
    icon: MessageSquare,
    title: "Interviews & decisions",
    body: "Interview prep where programs require it, and a clear-headed read on offers when they arrive — including what to ask before committing.",
  },
];

export default function AscentPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pb-16 pt-20 md:pt-28">
          <div className="mx-auto grid w-full max-w-[1120px] items-end gap-16 lg:grid-cols-[3fr_2fr]">
            <div>
              <Reveal>
                <p className="eyebrow">Ascent · Admissions consulting</p>
                <h1 className="mt-5 max-w-xl text-h1">
                  The application, handled with the same rigor as the
                  coursework.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-xl text-body-lg">
                  Ascent is Origin&apos;s university application and
                  admissions consulting — program strategy, essays, and
                  timeline management for students aiming at competitive
                  programs. It runs alongside tutoring, or on its own.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="hidden lg:block">
              <AscentMark className="w-full" />
            </Reveal>
          </div>
        </section>

        {/* Positioning: supplementary, not standalone-only */}
        <section className="bg-cream-deep px-6 py-16 md:py-20">
          <div className="mx-auto grid w-full max-w-[1120px] gap-10 border-t border-line pt-12 md:grid-cols-2">
            <Reveal>
              <h2 className="text-h3">Pairs with tutoring</h2>
              <p className="mt-4 max-w-md text-body text-ink/85">
                For students already working with an Origin tutor, Ascent
                plugs straight into that relationship — the tutor is already
                tracking grades and course load, so strategy conversations
                start from real information, not a first meeting.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-h3">Or stands on its own</h2>
              <p className="mt-4 max-w-md text-body text-ink/85">
                Families who only want help with the application process are
                welcome too. Ascent is a distinct service — it doesn&apos;t
                require enrolling in tutoring to get program strategy, essay
                support, or deadline management.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">The process</p>
              <h2 className="mt-4 max-w-md text-h2">
                Two years, five checkpoints.
              </h2>
            </Reveal>
            <div className="mt-14 max-w-2xl">
              {timeline.map((item, i) => (
                <Reveal key={item.title} delay={0.06 * i}>
                  <div className="relative border-l border-line py-8 pl-10 last:border-transparent last:pb-0">
                    <span className="absolute left-0 top-9 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-navy bg-cream" />
                    <p className="eyebrow">{item.when}</p>
                    <div className="mt-3 flex items-start gap-3">
                      <item.icon
                        size={20}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <div>
                        <h3 className="text-h3">{item.title}</h3>
                        <p className="mt-2 max-w-lg text-small text-ink/80">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-cream-deep px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">Who it&apos;s for</p>
              <h2 className="mt-4 max-w-md text-h2">
                Grade 11 and 12, aiming high.
              </h2>
              <p className="mt-6 max-w-xl text-body-lg">
                Ascent is built for students applying to competitive programs
                — in Ontario through OUAC, or out-of-province and
                internationally — who want a second, experienced set of eyes
                on strategy, essays, and timing before anything gets
                submitted.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <AscentMark className="mb-10 w-48" />
              <h2 className="max-w-xl text-h2">
                Start the conversation before Grade 12 does.
              </h2>
              <p className="mt-5 max-w-xl text-body-lg">
                The earlier we start, the more the strategy can actually
                shape the application — rather than just cleaning it up at
                the deadline.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-small font-medium text-cream transition-colors hover:bg-navy-mid"
                >
                  Book an Ascent session
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/tutoring"
                  className="inline-flex items-center gap-2 rounded-md border border-navy px-6 py-3 text-small font-medium text-navy transition-colors hover:bg-cream-deep"
                >
                  <GraduationCap size={16} />
                  See tutoring
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
