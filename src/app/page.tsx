import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-24">
      <div className="mx-auto w-full max-w-[1120px]">
        <p className="eyebrow">Origin Tutoring</p>
        <h1 className="mt-4 max-w-3xl text-display">
          An investment in your student&apos;s future.
        </h1>
        <p className="mt-6 max-w-xl text-body-lg">
          University preparation for Peel-region students — 1-on-1 tutoring,
          small groups, and admissions guidance under one roof.
        </p>
        <div className="mt-10">
          <Link
            href="/styleguide"
            className="inline-flex items-center rounded-md bg-navy px-6 py-3 text-small font-medium text-cream transition-colors hover:bg-navy-mid"
          >
            View the styleguide
          </Link>
        </div>
      </div>
    </main>
  );
}
