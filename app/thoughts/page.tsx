import type { Metadata } from 'next'
import { H1, H2, P, UL, LI } from '@/components/ui'
import { intro, placeholder, thoughts } from '@/data/thoughts'

export const metadata: Metadata = {
  title: 'Thoughts',
  description: 'Things Oliver Sim believes.',
  ...(placeholder ? { robots: { index: false, follow: true } } : {}),
}

export default function Thoughts() {
  return (
    <>
      <H1>Thoughts</H1>
      <P>{intro}</P>
      {thoughts.map((t) => (
        <section key={t.heading}>
          <H2>{t.heading}</H2>
          <UL>
            {t.items.map((i, k) => (
              <LI key={k}>{i}</LI>
            ))}
          </UL>
        </section>
      ))}
    </>
  )
}
