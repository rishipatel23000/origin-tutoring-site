/*
  Site wordmark: "Origin" in the display face at full weight/size, with
  "Tutoring" set in the same face -- smaller and lighter weight, same
  baseline, same color -- so it reads as part of the logo rather than a
  section eyebrow. Meaningfully narrower than "Origin Tutoring" set at a
  single size, which keeps the mobile header from crowding the "Book a
  session" button.
*/
export default function Wordmark({
  tone = "navy",
}: {
  tone?: "navy" | "cream";
}) {
  const color = tone === "cream" ? "text-cream" : "text-navy";
  return (
    <span className="inline-flex items-baseline gap-x-2">
      <span className={`font-display text-h3 font-medium ${color}`}>
        Origin
      </span>
      <span className={`font-display text-body font-normal ${color}`}>
        Tutoring
      </span>
    </span>
  );
}
