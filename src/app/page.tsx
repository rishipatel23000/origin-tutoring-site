import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  Compass,
  ListChecks,
  MessageCircle,
  PencilLine,
  TrendingUp,
  Users,
} from "lucide-react";
import AscentMark from "@/components/AscentMark";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const trustSignals = [
  "Ontario curriculum, aligned with Peel District courses",
  "Vetted, credentialed tutors",
  "1-on-1 and small-group formats",
];

const programs = [
  {
    href: "/tutoring",
    icon: BookOpen,
    title: "1-on-1 tutoring",
    body: "A dedicated tutor working from your student's actual coursework — the fastest route from a struggling grade to a confident one.",
  },
  {
    href: "/tutoring",
    icon: Users,
    title: "Group sessions",
    body: "Small groups working through the same course together. The same standards as 1-on-1, at a lower price per session.",
  },
  {
    href: "/ascent",
    icon: Compass,
    title: "Ascent admissions",
    body: "Application and admissions guidance for students aiming at competitive programs — essays, timelines, and program strategy.",
  },
];

const studentPoints = [
  {
    icon: MessageCircle,
    title: "You set the agenda",
    body: "Bring the assignment that's due, the test that's coming, or the concept that didn't click in class. Sessions start from your actual work, not a script.",
  },
  {
    icon: PencilLine,
    title: "No lectures, no busywork",
    body: "You work through problems out loud with someone who explains clearly and doesn't make you feel behind for asking.",
  },
  {
    icon: ListChecks,
    title: "You leave with a plan",
    body: "Every session ends with a short, concrete list of what to do before the next one — so progress doesn't depend on motivation alone.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — parents */}
        <section className="px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto grid w-full max-w-[1120px] items-end gap-16 lg:grid-cols-[3fr_2fr]">
            <div>
              <Reveal>
                <p className="eyebrow">University preparation · Peel Region</p>
                <h1 className="mt-5 max-w-2xl text-display">
                  An investment in your student&apos;s future.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-xl text-body-lg">
                  Origin pairs middle- and high-school students with tutors who
                  teach for university readiness — stronger grades now, and the
                  study habits, confidence, and direction that carry into a
                  degree.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-small font-medium text-cream transition-colors hover:bg-navy-mid"
                  >
                    Book a session
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/roi"
                    className="inline-flex items-center rounded-md border border-navy px-6 py-3 text-small font-medium text-navy transition-colors hover:bg-cream-deep"
                  >
                    See what a degree is worth
                  </Link>
                </div>
                <ul className="mt-10 flex flex-col gap-3">
                  {trustSignals.map((signal) => (
                    <li
                      key={signal}
                      className="flex items-center gap-3 text-small"
                    >
                      <Check size={16} className="shrink-0 text-accent" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={0.25} className="hidden lg:block">
              <AscentMark className="w-full" />
            </Reveal>
          </div>
        </section>

        {/* ROI hook — parents */}
        <section className="bg-navy px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">The return</p>
              <h2 className="mt-4 max-w-xl text-h2 text-cream">
                A degree changes the math.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-body-lg text-cream/85">
                Over a working life, university graduates in Ontario out-earn
                high-school graduates by a wide margin. We put the salary data
                on one page, so you can weigh tutoring the way you&apos;d weigh
                any other investment in your child.
              </p>
              <Link
                href="/roi"
                className="mt-8 inline-flex items-center gap-2 text-small font-medium text-cream underline underline-offset-4 transition-colors hover:text-cream/80"
              >
                <TrendingUp size={16} />
                See the salary data
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Programs */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">Programs</p>
              <h2 className="mt-4 max-w-xl text-h2">
                Three ways in, one destination.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {programs.map((program, i) => (
                <Reveal key={program.title} delay={0.1 + i * 0.1}>
                  <Link
                    href={program.href}
                    className="group flex h-full flex-col rounded-lg border border-line bg-cream-deep p-8 transition-colors hover:border-navy"
                  >
                    <program.icon size={22} className="text-accent" />
                    <h3 className="mt-5 text-h3">{program.title}</h3>
                    <p className="mt-3 flex-1 text-small text-ink/80">
                      {program.body}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-small font-medium text-navy">
                      Learn more
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* For students */}
        <section className="bg-cream-deep px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">For students</p>
              <h2 className="mt-4 max-w-xl text-h2">
                What a session actually feels like.
              </h2>
              <p className="mt-6 max-w-xl text-body-lg">
                Not a second school day. An hour that makes the rest of the
                week easier.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {studentPoints.map((point, i) => (
                <Reveal key={point.title} delay={0.1 + i * 0.1}>
                  <point.icon size={22} className="text-navy" />
                  <h3 className="mt-4 text-h3">{point.title}</h3>
                  <p className="mt-3 text-body text-ink/80">{point.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <AscentMark className="mb-10 w-48" />
              <h2 className="max-w-xl text-h2">Start with one session.</h2>
              <p className="mt-5 max-w-xl text-body-lg">
                No packages required up front. Book a single session, see how
                your student responds, and decide from there.
              </p>
              <Link
                href="/booking"
                className="mt-9 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-small font-medium text-cream transition-colors hover:bg-navy-mid"
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
