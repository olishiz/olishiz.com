/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import { intro, placeholder, thoughts } from '@/data/thoughts'
import { mudkipAvatar } from '@/data/avatar'

export const metadata: Metadata = {
  title: 'Thoughts',
  description: 'Things Oliver Sim believes.',
  alternates: { canonical: '/thoughts' },
  ...(placeholder ? { robots: { index: false, follow: true } } : {}),
}

// Structure and type scale follow leerob.com/beliefs: a serif title, a small
// byline, then one heading per theme with a short square-bulleted list.
const serif =
  "font-['Iowan_Old_Style','Palatino_Linotype','Palatino','URW_Palladio_L','P052',ui-serif,Georgia,serif]"

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default function Thoughts() {
  return (
    <article className={`${serif} text-rurikon-700`}>
      <h1 className='text-[1.75rem] sm:text-[1.875rem] leading-[1.1] font-semibold tracking-[-0.02em] text-rurikon-800 text-balance mb-3'>
        Thoughts
      </h1>
      <p className='flex items-center gap-2 font-sans text-[13px] leading-[1.35] text-rurikon-400'>
        <img src={mudkipAvatar} alt='' width={20} height={20} className='size-5 rounded-full' />
        <span>Oliver Sim</span>
      </p>
      <p className='mt-4 text-[17px] leading-[1.6] text-rurikon-500 text-pretty'>{intro}</p>
      {thoughts.map((t) => (
        <section key={t.heading} aria-labelledby={slug(t.heading)}>
          <h2
            id={slug(t.heading)}
            className='mt-[3.1rem] mb-[1.2rem] text-[1.45rem] leading-[1.4] font-semibold tracking-[-0.02em] text-rurikon-800 text-balance scroll-mt-6 sm:scroll-mt-14'
          >
            {t.heading}
          </h2>
          <ul className='mt-4 mb-[1.2rem] list-[square] list-outside pl-5 marker:text-rurikon-300 text-[17px] leading-[1.6]'>
            {t.items.map((i, k) => (
              <li key={k} className='mb-[0.2rem] pl-1'>
                {i}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  )
}
