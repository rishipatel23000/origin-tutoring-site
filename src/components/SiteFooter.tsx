import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-display text-h3 font-medium text-cream">
              Origin
            </p>
            <p className="mt-2 max-w-xs text-small text-cream/70">
              University preparation for Peel-region students. Ontario
              curriculum.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { href: "/tutoring", label: "Tutoring" },
              { href: "/ascent", label: "Ascent" },
              { href: "/pricing", label: "Pricing" },
              { href: "/roi", label: "The Return" },
              { href: "/about", label: "About" },
              { href: "/booking", label: "Book a session" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-small text-cream/80 transition-colors hover:text-cream"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 border-t border-cream/15 pt-6 text-small text-cream/50">
          © {new Date().getFullYear()} Origin Tutoring
        </p>
      </div>
    </footer>
  );
}
