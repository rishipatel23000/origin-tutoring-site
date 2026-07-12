import { createClient } from "@supabase/supabase-js";

/*
  Server-only Supabase client, authenticated with the service role key.
  This bypasses row-level security, so it must never be imported into
  client components -- only route handlers and other server-side code.
*/
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    // TODO: once Supabase project exists, set NEXT_PUBLIC_SUPABASE_URL
    // and SUPABASE_SERVICE_ROLE_KEY in .env.local (see SETUP.md).
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
