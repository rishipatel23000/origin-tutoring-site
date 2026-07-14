/*
  Site wordmark: "Origin" in the display face, with "Tutoring" set as a
  small tracked eyebrow kicker beside it. Reads as one full-name lockup
  while staying meaningfully narrower than "Origin Tutoring" set at a
  single size -- keeps the mobile header from crowding the "Book a
  session" button.
*/
export default function Wordmark({
  tone = "navy",
}: {
  tone?: "navy" | "cream";
}) {
  const isCream = tone === "cream";
  return (
    <span className="inline-flex items-baseline gap-x-2">
      <span
        className={`font-display text-h3 font-medium ${
          isCream ? "text-cream" : "text-navy"
        }`}
      >
        Origin
      </span>
      {/* Brass (the "eyebrow" utility's color) is ~2.6:1 against navy --
          too low-contrast for the dark footer. Match eyebrow's type
          treatment there but with the muted-cream tone already used for
          the footer tagline instead of the utility's hardcoded brass. */}
      <span
        className={
          isCream
            ? "text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-cream/70"
            : "eyebrow"
        }
      >
        Tutoring
      </span>
    </span>
  );
}
