"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { sessionFormats, getSessionFormat } from "@/lib/pricing";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = getSessionFormat(searchParams.get("format"));
  const canceled = searchParams.get("canceled") === "1";

  const [selectedSlug, setSelectedSlug] = useState(
    preselected?.slug ?? sessionFormats[0].slug
  );
  const [refCode, setRefCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const format = getSessionFormat(selectedSlug);
    if (!format) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: format.priceId,
          refCode: refCode.trim() || undefined,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.url) {
        throw new Error(
          data?.error ?? "Something went wrong starting checkout."
        );
      }

      window.location.href = data.url;
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {canceled && (
        <p
          role="status"
          className="mb-8 rounded-md border border-line bg-cream-deep px-5 py-4 text-small text-ink/80"
        >
          Checkout was canceled — you were not charged.
        </p>
      )}

      <fieldset>
        <legend className="eyebrow">Choose a session</legend>
        <div className="mt-5 flex flex-col gap-3">
          {sessionFormats.map((format) => {
            const isSelected = format.slug === selectedSlug;
            return (
              <label
                key={format.slug}
                className={`flex cursor-pointer items-start justify-between gap-6 rounded-md border px-5 py-4 transition-colors ${
                  isSelected
                    ? "border-navy bg-cream-deep"
                    : "border-line hover:border-navy/40"
                }`}
              >
                <span className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="format"
                    value={format.slug}
                    checked={isSelected}
                    onChange={() => setSelectedSlug(format.slug)}
                    className="mt-1 accent-navy"
                  />
                  <span>
                    <span className="block text-body font-medium text-navy">
                      {format.title}
                    </span>
                    <span className="mt-1 block max-w-sm text-small text-ink/75">
                      {format.blurb}
                    </span>
                  </span>
                </span>
                <span className="shrink-0 whitespace-nowrap text-body font-medium text-navy">
                  ${format.price}{" "}
                  <span className="text-small font-normal text-ink/60">
                    {format.currency}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8">
        <label
          htmlFor="refCode"
          className="block text-small font-medium text-navy"
        >
          Referral code <span className="text-ink/60">(optional)</span>
        </label>
        <input
          id="refCode"
          type="text"
          value={refCode}
          onChange={(event) => setRefCode(event.target.value)}
          placeholder="e.g. JESS10"
          className="mt-2 w-full max-w-xs rounded-sm border border-line bg-cream px-4 py-2.5 text-body text-ink placeholder:text-ink/40 focus:border-navy focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 rounded-md border border-error px-5 py-4 text-small text-error"
        >
          {errorMessage} Nothing was charged — you can try again, or refresh
          the page and start over.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-9 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-small font-medium text-cream transition-colors hover:bg-navy-mid disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Starting checkout…
          </>
        ) : (
          <>
            Continue to payment
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="mt-5 flex items-center gap-2 text-small text-ink/60">
        <ShieldCheck size={15} className="shrink-0" />
        Payment is processed securely by Stripe — Origin never sees or
        stores your card details.
      </p>
    </form>
  );
}
