# Setup — accounts and keys needed

This lists exactly what to create and where each value goes. Nothing in
the codebase has been run against live Supabase or Stripe yet — this is
the checklist for turning the scaffolding into something that actually
works.

Copy `.env.example` to `.env.local` before you start (`.env.local` is
gitignored, so real keys never get committed):

```
cp .env.example .env.local
```

## 1. Supabase

1. Create a project at [supabase.com](https://supabase.com) (free tier is fine to start).
2. In the project dashboard, go to **Settings → API** and copy:
   - **Project URL** → paste into `.env.local` as `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role key** (not the `anon` key — this one bypasses row-level
     security and must never be exposed to the browser) → paste as
     `SUPABASE_SERVICE_ROLE_KEY`
3. Run the migrations in `supabase/migrations/` against your project. Two ways:
   - **Easiest for now**: open the Supabase dashboard's **SQL Editor** and
     paste the contents of each file in `supabase/migrations/`, in order
     (`20260712120000_...` then `20260712120100_...`), and run each.
   - **Once you're using the Supabase CLI**: `supabase link` your project,
     then `supabase db push` will run every file in that folder for you.

## 2. Stripe

1. Create an account at [stripe.com](https://stripe.com). Stay in **test
   mode** (toggle top-right of the dashboard) until you're ready to take
   real payments.
2. Go to **Developers → API keys** and copy the **Secret key** → paste
   into `.env.local` as `STRIPE_SECRET_KEY`.
3. Create a Product + Price for each thing you sell (e.g. "1-on-1 session",
   "Group session", "Ascent session") under **Product catalog**. Each
   Price gets an ID like `price_1AbC...` — the checkout route
   (`src/app/api/checkout/route.ts`) expects the booking page to send one
   of these as `priceId`. There's no default price in the code on
   purpose, so a missing price fails loudly instead of charging the wrong
   amount.
4. Webhook secret — you need **two**, for two different situations, and
   they are not interchangeable:
   - **Local dev**: install the [Stripe CLI](https://docs.stripe.com/stripe-cli),
     run `stripe listen --forward-to localhost:3000/api/webhooks/stripe`,
     and it prints a `whsec_...` secret to your terminal. Use that as
     `STRIPE_WEBHOOK_SECRET` while developing locally.
   - **Production (once deployed)**: in the dashboard, go to
     **Developers → Webhooks → Add endpoint**, point it at
     `https://<your-real-domain>/api/webhooks/stripe`, subscribe it to at
     least `checkout.session.completed`, and it gives you a separate
     `whsec_...` secret — that's what goes into your **production**
     environment variables (e.g. Vercel project settings), not
     `.env.local`.

## 3. Site URL

Set `NEXT_PUBLIC_SITE_URL` in `.env.local`:
- Local dev: `http://localhost:3000`
- Production: your real domain, once you have one

This is used to build the Stripe checkout success/cancel redirect URLs.

## What's already built vs. what's still missing

Built (this session): SQL migrations for `ambassadors` and `signups`,
the Supabase/Stripe server clients, referral validation +
confirmed-payment attribution logic, and the `/api/checkout` +
`/api/webhooks/stripe` route handlers.

Not built yet: the `/booking` and `/pricing` pages that would actually
call `/api/checkout` from the browser, and an ambassador-facing view of
referral signups. Both are separate, focused pieces of work.

Pull request testing completed, everything is good - Adarsh

Branch Rishi