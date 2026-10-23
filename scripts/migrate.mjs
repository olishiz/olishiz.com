// Idempotent guestbook migration, run before `next build`.
// Uses the Supabase integration's direct Postgres URL. Skips quietly when it is
// not set (local builds, previews without the integration).
import pg from 'pg'

const raw = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL
if (!raw) {
  console.log('[migrate] No Postgres URL; skipping guestbook migration.')
  process.exit(0)
}

// Supabase's pooler uses a certificate chain Node doesn't trust by default.
const url = new URL(raw)
url.searchParams.delete('sslmode')
url.searchParams.delete('supa')

const client = new pg.Client({
  connectionString: url.toString(),
  ssl: { rejectUnauthorized: false },
})

const sql = `
create table if not exists public.guestbook_entries (
  id text primary key,
  name text,
  message text not null,
  email text,
  created_at timestamptz not null default now(),
  hidden boolean not null default false
);
create index if not exists guestbook_entries_created_at_idx
  on public.guestbook_entries (created_at);
-- Only the server (service role) reads and writes. RLS on, no policies.
alter table public.guestbook_entries enable row level security;
revoke all on table public.guestbook_entries from anon, authenticated;
`

try {
  await client.connect()
  await client.query(sql)
  console.log('[migrate] guestbook_entries is ready.')
} catch (err) {
  console.error('[migrate] Guestbook migration failed:', err.message)
  process.exit(1)
} finally {
  await client.end().catch(() => {})
}
