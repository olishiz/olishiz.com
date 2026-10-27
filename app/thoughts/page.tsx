/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { H1, H2, P, A, UL, LI } from '@/components/ui'
import { intro, placeholder, thoughts } from '@/data/thoughts'
import { mudkipAvatar } from '@/data/avatar'

export const metadata: Metadata = {
  title: 'Thoughts',
  description: 'Things Oliver Sim believes.',
  alternates: { canonical: '/thoughts' },
  ...(placeholder ? { robots: { index: false, follow: true } } : {}),
}

function renderItem(text: string) {
  const nodes: ReactNode[] = []
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g
  let last = 0

  for (const match of text.matchAll(linkPattern)) {
    const index = match.index ?? 0
    if (index > last) nodes.push(text.slice(last, index))
    nodes.push(
      <A key={`${match[2]}-${index}`} href={match[2]}>
        {match[1]}
      </A>,
    )
    last = index + match[0].length
  }

  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

// Same type as every other page: the shared H1/H2/P/UL/LI components and the
// body font, size and line-height set in the root layout.
export default function Thoughts() {
  return (
    <div>
      <H1>Thoughts</H1>
      <p className='flex items-center gap-2 text-rurikon-400'>
        <img src={mudkipAvatar} alt='' width={20} height={20} className='size-5 rounded-full' />
        <span>Oliver Sim</span>
      </p>
      <P>{intro}</P>
      {thoughts.map((t) => (
        <section key={t.heading}>
          <H2>{t.heading}</H2>
          <UL>
            {t.items.map((i, k) => (
              <LI key={k}>{renderItem(i)}</LI>
            ))}
          </UL>
        </section>
      ))}
    </div>
  )
}
