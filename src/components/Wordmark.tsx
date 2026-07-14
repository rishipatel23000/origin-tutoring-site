/*
  Site wordmark: "Origin Tutoring" set as one run in the display face --
  same size, weight, and color throughout, no attempt to visually
  separate the two words.

  Only reaches full cap height (text-h3) from sm (640px) up. At full
  size the string is ~171px wide, which leaves almost no room next to
  "Book a session" below ~375px viewports -- overflows outright at
  320px. Below sm it stays at the smaller size already verified safe
  (comfortable margin down to 360px).
*/
export default function Wordmark({
  tone = "navy",
}: {
  tone?: "navy" | "cream";
}) {
  const color = tone === "cream" ? "text-cream" : "text-navy";
  return (
    <span className={`font-display text-body sm:text-h3 font-medium ${color}`}>
      Origin Tutoring
    </span>
  );
}
