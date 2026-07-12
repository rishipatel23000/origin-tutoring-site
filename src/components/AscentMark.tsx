/*
  The Origin/Ascent motif: a brass point of origin, a stepped path
  climbing across faint contour lines. Used large in the hero and
  small as a divider elsewhere.
*/
export default function AscentMark({ className }: { className?: string }) {
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
        d="M 20 220 H 130 V 172 H 240 V 124 H 350 V 76 H 460"
        stroke="var(--color-navy)"
        strokeWidth="2.5"
      />
      <circle cx="20" cy="220" r="6" fill="var(--color-accent)" />
      <circle cx="460" cy="76" r="4" fill="var(--color-navy)" />
    </svg>
  );
}
