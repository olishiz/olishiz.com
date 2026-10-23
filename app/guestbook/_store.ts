// Guestbook storage backed by Supabase Postgres (Vercel Marketplace).
//
// Entries live in the `guestbook_entries` table (created by
// scripts/migrate.mjs at build time). RLS is on with no policies, so only this
// server code, using the service role key, can read or write. Set `hidden` to
// true on a row in the Supabase table editor to hide it.
//
// Env (added by the Supabase integration): SUPABASE_URL and
// SUPABASE_SERVICE_ROLE_KEY.

import 'server-only'
import { randomUUID } from 'node:crypto'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

import { collapseBlankLines } from './_sanitize'

const TABLE = 'guestbook_entries'

export type GuestbookEntry = {
  id: string
  name: string | null
  message: string
  createdAt: string
}

type Row = {
  id: string
  name: string | null
  message: string
  email: string | null
  created_at: string
  hidden: boolean
}

function supabaseUrl() {
  return process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
}

export function isStorageConfigured() {
  return Boolean(supabaseUrl() && process.env.SUPABASE_SERVICE_ROLE_KEY)
}

let client: SupabaseClient | null = null
function getClient() {
  if (!isStorageConfigured()) return null
  return (client ??= createClient(
    supabaseUrl()!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  ))
}

// Postgres returns e.g. "2026-10-23T05:00:00.123+00:00"; normalise to ISO UTC.
function iso(value: string) {
  return new Date(value).toISOString()
}

// Never return `email` from here: these objects are sent to the client.
export async function getEntries(): Promise<GuestbookEntry[]> {
  const db = getClient()
  if (!db) return []

  const { data, error } = await db
    .from(TABLE)
    .select('id, name, message, created_at')
    .eq('hidden', false)
    // Oldest first: the form is below the list, so new entries land next to it.
    .order('created_at', { ascending: true })
  if (error) {
    console.error('Failed to read guestbook:', error)
    return []
  }

  return (data ?? []).map((row) => ({
    id: row.id,
    name: row.name || null,
    // Older entries may contain blank lines; never display them.
    message: collapseBlankLines(row.message),
    createdAt: iso(row.created_at),
  }))
}

// Server-only: includes `email`. Used by the manage page behind a signed link.
export async function getStoredEntry(id: string) {
  const db = getClient()
  if (!db) return null
  const { data, error } = await db
    .from(TABLE)
    .select('id, name, message, email, created_at, hidden')
    .eq('id', id)
    .maybeSingle<Row>()
  if (error || !data) return null
  return {
    id: data.id,
    message: data.message,
    name: data.name || null,
    email: data.email || null,
    createdAt: iso(data.created_at),
    hidden: Boolean(data.hidden),
  }
}

export async function setEntryHidden(id: string, hidden: boolean) {
  const db = getClient()
  if (!db) throw new Error('Guestbook storage is not configured.')
  const { data, error } = await db
    .from(TABLE)
    .update({ hidden })
    .eq('id', id)
    .select('id')
  if (error) throw error
  return (data?.length ?? 0) > 0
}

export async function deleteEntry(id: string) {
  const db = getClient()
  if (!db) throw new Error('Guestbook storage is not configured.')
  const { data, error } = await db.from(TABLE).delete().eq('id', id).select('id')
  if (error) throw error
  return (data?.length ?? 0) > 0
}

export async function addEntry(input: {
  message: string
  name?: string
  email?: string
}): Promise<GuestbookEntry> {
  const db = getClient()
  if (!db) throw new Error('Guestbook storage is not configured.')

  const createdAt = new Date().toISOString()
  const id = `${Date.now().toString(36)}_${randomUUID().slice(0, 8)}`
  const { error } = await db.from(TABLE).insert({
    id,
    message: input.message,
    name: input.name || null,
    email: input.email || null,
    created_at: createdAt,
    hidden: false,
  })
  if (error) throw error

  return { id, name: input.name || null, message: input.message, createdAt }
}
