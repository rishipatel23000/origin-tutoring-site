/*
  Single source of truth for what's bookable, shared by /pricing (display)
  and /booking (the form that actually calls /api/checkout). Price IDs are
  Stripe test-mode IDs -- not secrets, safe to ship to the browser, but
  keeping them in one place means the two pages can't drift out of sync.
*/
export type SessionFormat = {
  slug: "1on1" | "group" | "ascent";
  title: string;
  price: number;
  currency: "CAD";
  priceId: string;
  blurb: string;
};

export const sessionFormats: SessionFormat[] = [
  {
    slug: "1on1",
    title: "1-on-1 tutoring",
    price: 40,
    currency: "CAD",
    priceId: "price_1TsUtKEmnBQh1rd9iMNCTGnC",
    blurb: "A tutor matched to your student's exact course, adjusting focus session to session based on what's actually happening in class that week.",
  },
  {
    slug: "group",
    title: "Group session",
    price: 20,
    currency: "CAD",
    priceId: "price_1TsUtjEmnBQh1rd9Wm3n6DFU",
    blurb: "The same standard of teaching, in a group of 3–4 students working through the same course — steady support at a lower price per seat.",
  },
  {
    slug: "ascent",
    title: "Ascent",
    price: 50,
    currency: "CAD",
    priceId: "price_1TsV1dEmnBQh1rd9k3W6ymea",
    blurb: "Application and admissions strategy — program selection, essays, and timeline management — for students aiming at competitive programs.",
  },
];

export function getSessionFormat(slug: string | null | undefined) {
  return sessionFormats.find((format) => format.slug === slug);
}
