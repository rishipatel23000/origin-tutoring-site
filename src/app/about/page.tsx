import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AscentMark from "@/components/AscentMark";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About — Origin",
  description:
    "Why Origin exists, how tutors are vetted, and what we hold every session to.",
};

const credibility = [
  {
    headline: "Interviewed, then demo-taught.",
    body: "Every tutor sits a subject-matter interview first, then teaches a live demo before ever being matched with a student. Knowing the material and teaching it well are different skills — we screen for both.",
  },
  {
    headline: "Matched to the course, not the subject.",
    body: "Tutors are assigned by grade and specific course, so the pacing, vocabulary, and expectations match what's happening in class that week — not a generic version of the subject.",
  },
  {
    headline: "A note home after every session.",
    body: "Parents get a short summary of what was covered and what's next. No guessing at progress between report cards.",
  },
];

const vetting = [
  "Subject-matter interview before any student contact",
  "Live teaching demonstration, evaluated for clarity",
  "Ongoing parent feedback folded back into tutor matching",
  "Removed from rotation if a match isn't working — no exceptions",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pb-16 pt-20 md:pt-28">
          <div className="mx-auto w-full max-w-[720px]">
            <Reveal>
              <p className="eyebrow">About</p>
              <h1 className="mt-5 text-h1">
                Grades open doors. We&apos;re building the whole path.
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Why Origin exists — narrative */}
        <section className="px-6 pb-20 md:pb-24">
          <div className="mx-auto w-full max-w-[720px]">
            <Reveal>
              <p className="text-body-lg">
                Most tutoring is sold as a fix for a bad grade — a patch
                until the mark comes back up, and then it stops. Origin was
                built around a different question: what would tutoring look
                like if it were judged not by this term&apos;s report card,
                but by how ready a student is for university three or four
                years from now?
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <AscentMark className="my-10 w-32" />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-body-lg">
                That shift changes what happens in a session. It&apos;s
                still homework, still test prep, still the grade that
                matters this week — but a tutor thinking three years ahead
                teaches differently: more explanation of the why behind a
                method, more attention to study habits that outlast the
                course, and more honesty with parents about where a student
                actually stands.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Credibility — how we vet tutors */}
        <section className="bg-cream-deep px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">What we hold every tutor to</p>
            </Reveal>
            <div className="mt-10 grid gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8">
              {credibility.map((item, i) => (
                <Reveal key={item.headline} delay={0.1 + i * 0.1}>
                  <h2 className="text-h3">{item.headline}</h2>
                  <p className="mt-3 text-small text-ink/80">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who teaches */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto grid w-full max-w-[1120px] items-start gap-14 lg:grid-cols-[3fr_2fr]">
            <div>
              <Reveal>
                <p className="eyebrow">Who teaches</p>
                <h2 className="mt-4 max-w-md text-h2">
                  Chosen for the subject, and for the teaching.
                </h2>
                <p className="mt-6 max-w-xl text-body">
                  Origin tutors are current or recent university students in
                  the subject they teach, screened first on subject mastery
                  and then on how clearly they can explain it to a student
                  who&apos;s stuck. A tutor who can solve the problem but
                  can&apos;t explain the solution doesn&apos;t make it onto
                  the roster.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ul className="flex flex-col gap-4 border-t border-line pt-8">
                {vetting.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-small">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-navy px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1120px]">
            <Reveal>
              <p className="eyebrow">Next step</p>
              <h2 className="mt-4 max-w-xl text-h2 text-cream">
                Meet your student&apos;s tutor.
              </h2>
              <p className="mt-6 max-w-xl text-body-lg text-cream/85">
                Book a single session and see the approach firsthand — no
                package required to start.
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
