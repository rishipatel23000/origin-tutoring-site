import {
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";

/*
  Living reference for the "Quadrangle" design system.
  Not linked from site navigation — visit /styleguide directly.
*/

const colors = [
  { cls: "bg-navy", name: "navy", hex: "#0B2239", use: "Headings, footer, primary buttons" },
  { cls: "bg-navy-mid", name: "navy-mid", hex: "#16385C", use: "Button hover, secondary navy surfaces" },
  { cls: "bg-ink", name: "ink", hex: "#24344D", use: "Body text" },
  { cls: "bg-cream", name: "cream", hex: "#FBF7EF", use: "Page background" },
  { cls: "bg-cream-deep", name: "cream-deep", hex: "#F4EDDF", use: "Alternating sections, cards" },
  { cls: "bg-line", name: "line", hex: "#E3D9C6", use: "Hairline borders" },
  { cls: "bg-accent", name: "accent", hex: "#7A5D22", use: "Brass — links & eyebrows only, never large fills" },
];

const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-16">
      <h2 className="text-h2">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function Styleguide() {
  return (
    <main className="px-6 py-24">
      <div className="mx-auto w-full max-w-[1120px]">
        <p className="eyebrow">Design system</p>
        <h1 className="mt-4 text-h1">Quadrangle</h1>
        <p className="mt-4 max-w-xl text-body-lg">
          Ivy editorial. Fraunces for display, Inter for body. Navy on cream,
          brass used sparingly. Sharp radii, generous whitespace.
        </p>

        <div className="mt-16">
          <Section title="Color">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {colors.map((c) => (
                <li key={c.name}>
                  <div
                    className={`h-20 rounded-lg border border-line ${c.cls}`}
                  />
                  <p className="mt-3 text-small font-medium">
                    {c.name}{" "}
                    <span className="font-normal text-ink/60">{c.hex}</span>
                  </p>
                  <p className="mt-1 text-small text-ink/70">{c.use}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Typography">
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-small text-ink/60">
                  display · Fraunces 500 · 40–64px fluid · hero only
                </p>
                <p className="mt-2 font-display text-display font-medium text-navy">
                  A place to begin.
                </p>
              </div>
              <div>
                <p className="text-small text-ink/60">h1 · Fraunces 500 · 44px</p>
                <p className="mt-2 font-display text-h1 font-medium text-navy">
                  University readiness, not just grades
                </p>
              </div>
              <div>
                <p className="text-small text-ink/60">h2 · Fraunces 500 · 32px</p>
                <p className="mt-2 font-display text-h2 font-medium text-navy">
                  How tutoring pays for itself
                </p>
              </div>
              <div>
                <p className="text-small text-ink/60">h3 · Fraunces 500 · 23px</p>
                <p className="mt-2 font-display text-h3 font-medium text-navy">
                  One-on-one sessions
                </p>
              </div>
              <div>
                <p className="text-small text-ink/60">body-lg · Inter 400 · 18px · lede paragraphs</p>
                <p className="mt-2 max-w-xl text-body-lg">
                  Every session is built around where your student is headed —
                  the course they want into, the program that follows, and the
                  career after that.
                </p>
              </div>
              <div>
                <p className="text-small text-ink/60">body · Inter 400 · 16px · default</p>
                <p className="mt-2 max-w-xl text-body">
                  Our tutors follow the Ontario curriculum used across the Peel
                  District School Board, so what happens in a session lines up
                  with what happens in class the next morning.
                </p>
              </div>
              <div>
                <p className="text-small text-ink/60">small · Inter 400 · 14px · meta, captions</p>
                <p className="mt-2 text-small">
                  Sessions run 60 or 90 minutes, online or in person.
                </p>
              </div>
              <div>
                <p className="text-small text-ink/60">eyebrow · Inter 600 · 13px caps · section labels</p>
                <p className="eyebrow mt-2">Why Origin</p>
              </div>
            </div>
          </Section>

          <Section title="Buttons & links">
            <div className="flex flex-wrap items-center gap-6">
              <button className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-small font-medium text-cream transition-colors hover:bg-navy-mid">
                Book a session
                <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center rounded-md border border-navy px-6 py-3 text-small font-medium text-navy transition-colors hover:bg-cream-deep">
                See pricing
              </button>
              <a
                href="#"
                className="text-small font-medium text-accent underline underline-offset-4 hover:text-navy"
              >
                Read about Ascent
              </a>
            </div>
            <p className="mt-6 max-w-xl text-small text-ink/70">
              Primary CTAs are always navy-filled. The outline button is the
              secondary action. Brass is reserved for inline links — never a
              button fill.
            </p>
          </Section>

          <Section title="Cards & hairlines">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-lg border border-line bg-cream-deep p-6">
                <BookOpen size={22} className="text-accent" />
                <h3 className="mt-4 text-h3">1-on-1 tutoring</h3>
                <p className="mt-2 text-small text-ink/80">
                  Flat color on hairline borders — no drop shadows.
                </p>
              </div>
              <div className="rounded-lg border border-line p-6">
                <Users size={22} className="text-accent" />
                <h3 className="mt-4 text-h3">Group sessions</h3>
                <p className="mt-2 text-small text-ink/80">
                  Cards can also sit directly on cream with just the border.
                </p>
              </div>
              <div className="rounded-lg bg-navy p-6">
                <TrendingUp size={22} className="text-cream" />
                <h3 className="mt-4 text-h3 text-cream">The return</h3>
                <p className="mt-2 text-small text-cream/80">
                  Navy card for emphasis — cream text, used sparingly.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Radii">
            <div className="flex flex-wrap items-end gap-8">
              <div>
                <div className="h-16 w-28 rounded-sm border border-navy bg-cream-deep" />
                <p className="mt-2 text-small text-ink/70">sm · 2px · inputs</p>
              </div>
              <div>
                <div className="h-16 w-28 rounded-md border border-navy bg-cream-deep" />
                <p className="mt-2 text-small text-ink/70">md · 6px · buttons</p>
              </div>
              <div>
                <div className="h-16 w-28 rounded-lg border border-navy bg-cream-deep" />
                <p className="mt-2 text-small text-ink/70">lg · 10px · cards</p>
              </div>
            </div>
          </Section>

          <Section title="Spacing">
            <p className="mb-6 max-w-xl text-small text-ink/70">
              4px base scale (Tailwind default): sections pad py-24 to py-32 on
              desktop, py-16 on mobile. Content max-width 1120px, prose capped
              at ~65ch, left-aligned.
            </p>
            <div className="flex flex-col gap-2">
              {spacing.map((s) => (
                <div key={s} className="flex items-center gap-4">
                  <span className="w-10 text-small text-ink/60">{s}</span>
                  <div className="h-3 bg-navy" style={{ width: s }} />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Icons">
            <div className="flex items-center gap-8 text-navy">
              <GraduationCap size={24} />
              <BookOpen size={24} />
              <Users size={24} />
              <TrendingUp size={24} />
              <Check size={24} />
              <ArrowRight size={24} />
            </div>
            <p className="mt-6 max-w-xl text-small text-ink/70">
              Lucide only, stroke width default, sized 16–24. Navy by default,
              brass when acting as an accent inside a card.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
