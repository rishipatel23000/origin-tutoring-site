import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  GraduationCap,
  MapPin,
  Target,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Tutoring — Origin",
  description:
    "1-on-1 and small-group tutoring for Peel-region students, built around Ontario curriculum and each student's actual coursework.",
};

const formats = [
  {
    label: "Format 01",
    title: "1-on-1 tutoring",
    body: "A single tutor, matched to your student's grade and course, working from the actual homework, tests, and units on the syllabus — not a generic curriculum.",
    specs: [
      { icon: Clock, text: "60-minute sessions" },
      { icon: Users, text: "One student, one tutor" },
      { icon: Calendar, text: "Weekly, same time slot" },
      { icon: Target, text: "Best for a specific course or grade gap" },
    ],
  },
  {
    label: "Format 02",
    title: "Group sessions",
    body: "Three to four students in the same course, working through the same material together — the same standard of teaching as 1-on-1, at a lower price per seat.",
    specs: [
      { icon: Clock, text: "75-minute sessions" },
      { icon: Users, text: "Groups of 3–4, same course" },
      { icon: Calendar, text: "Weekly, fixed time slot" },
      { icon: Target, text: "Best for steady, ongoing support" },
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Coursework review",
    body: "Before the first session, the tutor reviews your student's current unit, recent tests, and report card so the first hour isn't spent getting oriented.",
  },
  {
    n: "02",
    title: "Working the material",
    body: "The session runs on whatever's due or upcoming — a problem set, an essay draft, test prep — worked through out loud, not lectured at.",
  },
  {
    n: "03",
    title: "Checking for gaps",
    body: "The tutor probes for the concept underneath the assignment, so the same gap doesn't resurface on the next test in a different form.",
  },
  {
    n: "04",
    title: "A plan for the week",
    body: "Every session ends with a short, specific list of what to do before the next one, and a note home if something needs attention.",
  },
];

export default function TutoringPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pb-16 pt-20 md:pt-28">
          <div className="mx-auto w-full max-w-[760px]">
            <Reveal>
              <p className="eyebrow">Tutoring</p>
              <h1 className="mt-5 text-h1">
                Built around your student&apos;s actual coursework.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-body-lg">
                Origin runs two formats — 1-on-1 and small groups — both
                taught by vetted tutors, both structured around what&apos;s
                actually on your student&apos;s desk this week, not a
                packaged curriculum.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Two formats, split panel */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid w-full max-w-[1120px] border-t border-line md:grid-cols-2">
            {formats.map((format, i) => (
              <Reveal
                key={format.title}
                delay={i * 0.1}
                className={
                  i === 0
                    ? "border-b border-line py-12 md:border-b-0 md:border-r md:py-14 md:pr-12"
                    : "py-12 md:py-14 md:pl-12"
                }
              >
                <p className="eyebrow">{format.label}</p>
                <h2 className="mt-4 text-h2">{format.title}</h2>
                <p className="mt-5 max-w-md text-body">{format.body}</p>
                <ul className="mt-8 flex flex-col gap-4">
                  {format.specs.map((spec) => (
                    <li
                      key={spec.text}
                      className="flex items-center gap-3 text-small"
                    >
                      <spec.icon size={16} className="shrink-0 text-accent" />
                      {spec.text}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className="mt-9 inline-flex items-center gap-2 text-small font-medium text-navy underline underline-offset-4 transition-colors hover:text-navy-mid"
                >
                  Book {format.title.toLowerCase()}
                  <ArrowRight size={14} />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* A session, start to finish */}
        <section className="bg-cream-deep px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">Structure</p>
              <h2 className="mt-4 max-w-md text-h2">
                A session, start to finish.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={0.1 + i * 0.08}>
                  <p className="font-body text-h1 font-semibold text-accent">
                    {step.n}
                  </p>
                  <h3 className="mt-3 text-h3">{step.title}</h3>
                  <p className="mt-3 text-small text-ink/80">{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ontario / PDSB alignment */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto grid w-full max-w-[1120px] items-start gap-14 lg:grid-cols-[3fr_2fr]">
            <div>
              <Reveal>
                <p className="eyebrow">Curriculum</p>
                <h2 className="mt-4 max-w-md text-h2">
                  Aligned to Ontario, built for Peel.
                </h2>
                <p className="mt-6 max-w-xl text-body">
                  Every course we tutor maps directly to Ontario Ministry of
                  Education curriculum expectations and the course codes
                  taught within the Peel District School Board — from
                  intermediate math and science in grades 6–8 through senior
                  academic and university-track courses in grades 11 and 12
                  (think MPM2D, SPH4U, ENG4U-style courses).
                </p>
                <p className="mt-5 max-w-xl text-body">
                  That alignment matters for two reasons: tutors already know
                  the pacing and expectations of your student&apos;s actual
                  course, and the work done in a session transfers directly
                  to the grade on the report card — not a parallel track.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ul className="flex flex-col gap-4 border-t border-line pt-8">
                {[
                  "Grades 6 through 12, academic and university-track streams",
                  "Math, science, English, and French course coverage",
                  "Tutors briefed on PDSB course outlines and assessment style",
                  "Session notes track directly against report card units",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-small">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3 text-small text-ink/70">
                <MapPin size={16} className="shrink-0 text-accent" />
                Serving students across the Peel District School Board
              </div>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-navy px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">Next step</p>
              <h2 className="mt-4 max-w-xl text-h2 text-cream">
                Not sure which format fits?
              </h2>
              <p className="mt-6 max-w-xl text-body-lg text-cream/85">
                Book a single 1-on-1 session first. If a group is a better
                fit once your student&apos;s tutor gets to know them, we&apos;ll
                say so.
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
                  className="inline-flex items-center gap-2 rounded-md border border-cream/40 px-6 py-3 text-small font-medium text-cream transition-colors hover:border-cream"
                >
                  <GraduationCap size={16} />
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
