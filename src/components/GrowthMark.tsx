/*
  The Return page's motif: a single curve that steepens as it goes,
  with two faint progress ticks along the way -- earnings compounding
  over a career, not a straight ramp. Same navy/brass/contour-line
  vocabulary as AscentMark (the sitewide brand mark) so the two read as
  one family, but a distinct shape so this page isn't just reusing the
  general "ascent" motif for a page that's specifically about
  accelerating financial return.
*/
export default function GrowthMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 240"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <line x1="0" y1="220" x2="480" y2="220" stroke="var(--color-line)" />
      <line x1="0" y1="172" x2="480" y2="172" stroke="var(--color-line)" />
      <line x1="0" y1="124" x2="480" y2="124" stroke="var(--color-line)" />
      <line x1="0" y1="76" x2="480" y2="76" stroke="var(--color-line)" />
      <path
        d="M 20 220 C 140 210, 260 150, 340 90 C 380 60, 410 30, 460 15"
        stroke="var(--color-navy)"
        strokeWidth="2.5"
      />
      <circle
        cx="250"
        cy="149"
        r="3"
        fill="var(--color-cream)"
        stroke="var(--color-navy)"
        strokeWidth="1.5"
      />
      <circle
        cx="380"
        cy="58"
        r="3"
        fill="var(--color-cream)"
        stroke="var(--color-navy)"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="220" r="6" fill="var(--color-accent)" />
      <circle cx="460" cy="15" r="4" fill="var(--color-navy)" />
    </svg>
  );
}
