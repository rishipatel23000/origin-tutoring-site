-- Ambassadors: people with a referral code that earns a reward when a
-- signup they referred reaches confirmed payment (see signups migration).

create extension if not exists pgcrypto;

create table if not exists ambassadors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  ref_code text not null unique,
  created_at timestamptz not null default now()
);

comment on table ambassadors is
  'Referral partners. ref_code is what customers enter at checkout.';

-- RLS is enabled with no policies attached. All reads/writes to this
-- table happen server-side through the Supabase service role key
-- (src/lib/supabase/server.ts), which bypasses RLS entirely. This just
-- makes sure the anon/public key can never touch ambassador data, even
-- by accident, without anyone having to remember to write a policy.
alter table ambassadors enable row level security;
