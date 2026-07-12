-- Signups: one row per checkout attempt. A row is created (status
-- 'pending') when a customer starts checkout, and only the Stripe
-- webhook is allowed to move it to 'paid' + set paid_at.
--
-- Referral attribution rule (see CLAUDE.md "Data (referral)"): a
-- reward is earned on CONFIRMED PAYMENT, never on signup. In code
-- terms, that means only paid_at (not row existence, not status
-- alone) is ever treated as the attribution trigger.

create table if not exists signups (
  id uuid primary key default gen_random_uuid(),
  ref_code text references ambassadors (ref_code),
  stripe_customer_id text,
  status text not null default 'pending'
    check (status in ('pending', 'paid', 'canceled')),
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

comment on table signups is
  'One row per checkout attempt. paid_at is set exclusively by the Stripe webhook on confirmed payment -- that is the only valid referral-attribution trigger.';

create index if not exists signups_ref_code_idx on signups (ref_code);

-- Partial unique index: multiple pending signups can have a null
-- stripe_customer_id, but once one is set it must be unique.
create unique index if not exists signups_stripe_customer_id_idx
  on signups (stripe_customer_id)
  where stripe_customer_id is not null;

alter table signups enable row level security;
