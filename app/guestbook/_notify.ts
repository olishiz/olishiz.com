// Email notification for new guestbook entries, sent with Resend.
//
// Env: RESEND_API_KEY (added by the Resend integration). Optional:
// GUESTBOOK_NOTIFY_EMAIL (where notifications go, defaults to Oliver's inbox)
// and GUESTBOOK_FROM_EMAIL (a sender on a domain verified in Resend; defaults
// to Resend's shared test sender). A missing API key skips the email without
// affecting signing.

import { Resend } from 'resend'

import type { GuestbookEntry } from './_store'

const FROM =
  process.env.GUESTBOOK_FROM_EMAIL || 'Guestbook <onboarding@resend.dev>'
const DEFAULT_TO = 'zhuen1101@hotmail.com'

export async function notifyNewEntry({
  entry,
  email,
  manageUrl,
}: {
  entry: GuestbookEntry
  email?: string
  manageUrl: string | null
}) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.GUESTBOOK_NOTIFY_EMAIL || DEFAULT_TO
  if (!apiKey) return

  // Plain text only: the message is untrusted input.
  const text = [
    entry.message,
    '',
    `— ${entry.name || 'Anonymous'}${email ? ` <${email}>` : ''}`,
    entry.createdAt,
    '',
    manageUrl ? `Hide or delete: ${manageUrl}` : 'GUESTBOOK_SECRET is not set, so there is no manage link.',
  ].join('\n')

  const { error } = await new Resend(apiKey).emails.send({
    from: FROM,
    to,
    subject: `New guestbook message from ${entry.name || 'someone'}`,
    text,
    replyTo: email,
  })
  if (error) console.error('Failed to send guestbook notification:', error)
}
