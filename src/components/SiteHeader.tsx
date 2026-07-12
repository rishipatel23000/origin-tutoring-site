import Link from "next/link";

const nav = [
  { href: "/tutoring", label: "Tutoring" },
  { href: "/ascent", label: "Ascent" },
  { href: "/pricing", label: "Pricing" },
  { href: "/roi", label: "The Return" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-line bg-cream">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-h3 font-medium text-navy">
          Origin
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-small font-medium text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/booking"
          className="inline-flex items-center rounded-md bg-navy px-5 py-2.5 text-small font-medium text-cream transition-colors hover:bg-navy-mid"
        >
          Book a session
        </Link>
      </div>
    </header>
  );
}
