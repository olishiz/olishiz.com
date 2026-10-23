import { pageMetadata } from '@/lib/seo'
import { connection } from 'next/server'

import { getEntries } from './_store'
import { Guestbook } from './guestbook'
import { InfoTooltip } from './info-tooltip'

export const metadata = pageMetadata({
  path: '/guestbook',
  title: 'Guestbook',
  description: 'Leave a message for Oliver Sim.',
})

export default async function Page() {
  // Always render on request so new entries show up without a redeploy.
  await connection()
  const entries = await getEntries()

  return (
    <div>
      <div className='flex items-center gap-2 mb-7'>
        <h1 className='font-semibold text-rurikon-600 text-balance'>
          Guestbook
        </h1>
        <InfoTooltip label='About the guestbook'>
          a public wall — say hi, leave a note, or start a conversation.
        </InfoTooltip>
      </div>
      <Guestbook entries={entries} />
    </div>
  )
}
