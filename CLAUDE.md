@AGENTS.md

# Origin Tutoring — Project Context

## What this is
A single marketing + booking site with two sections:
- **Origin Tutoring** — 1-on-1 and group tutoring, sold as university preparation.
- **Ascent** — university application/admissions consulting (supplementary).
One site, two sections. Ascent is a section of Origin, not a separate site.

## Positioning
- Core pitch: tutoring as an *investment in the student's future*. University readiness, not just grades.
- A key page shows postgraduate salary data to frame tuition as ROI.
- Audience: middle school through high school students in the Peel District
  School Board, Ontario curriculum.

## Buyer vs. user (important)
- Parents BUY. Students USE.
- Parent-facing copy (landing, pricing, outcomes, salary/ROI page): trust,
  results, credentials, return on investment.
- Student-facing copy (what a session is like, tutors, booking): respectful,
  clear, not condescending, not childish.
- Rule of thumb: parent language above the fold, student language deeper in.

## Design language
- Modern, editorial, premium. Think Notion's clarity + a private-institution feel.
- NO gradients. NO purple. NO generic SaaS card-with-drop-shadow look. No emoji as icons.
- Palette: deep NAVY (anchor), warm CREAM/off-white (background "paper"),
  one restrained accent for CTAs/links. Light mode only.
- All colors come from CSS tokens in globals.css. Never use raw Tailwind
  default colors (no bg-blue-500, etc.).
- Typography: one editorial/modern display face for headings, one clean
  neutral face for body. Real hierarchy — vary size and weight meaningfully.
- Generous whitespace. Left-aligned text blocks, not everything centered.
- Icons: one consistent set only (Lucide). Never mix icon families.

## Stack
- Next.js (App Router), deployed on Vercel.
- Supabase (Postgres) for data.
- Stripe via webhooks for payment. NEVER handle raw card data.
- Tailwind for layout, but colors/spacing/type come from tokens.
- Framer Motion for restrained motion only (easing + reveals, no bounce).

## v1 scope
- Pages: Landing, Origin Tutoring (1-on-1 vs Groups), Ascent, Pricing,
  ROI/Salary page, About, Booking, Payment. Referral code entry at checkout.
- A visitor can: book a session, pay, and enter a referral code.
- NOT in v1: community/Discord, progress/completion tracking, ambassador
  dashboard on-site (referral codes work, but the ambassador page can live
  elsewhere).

## Data (referral)
- Referral rewards attribute on CONFIRMED PAYMENT, never on signup. Fraud prevention.
- Minimal tables: signups linked to a ref_code; ref_code validated at checkout.

## Working style
- Build in small reviewed steps, not one giant generation.
- Explain tradeoffs briefly when you make a structural decision.
- I'm a solo beginner-ish dev — favor clarity and standard patterns I can
  troubleshoot, over clever abstractions.

## Design system (decided)
Direction: "Quadrangle" — Ivy editorial. Fraunces (display, weights 500/600)
+ Inter (body, 400/500/600) via next/font. Navy-filled CTAs with cream text;
brass for links/eyebrows only, never large fills. Sharp radii (2/6/10px).
Tokens live in src/app/globals.css; see /styleguide for the living reference.
