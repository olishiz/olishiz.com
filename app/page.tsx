import {H1, P, A, UL, LI} from '@/components/ui'
import {Bio} from '@/components/bio'
import {socials} from '@/data/profile'
import {pageMetadata} from '@/lib/seo'
import {mudkipAvatar} from '@/data/avatar'

export const metadata = pageMetadata({
  path: '/',
  title: 'Oliver Sim',
  description:
      'Oliver Sim is a Full Stack Developer / UX Engineer from Malaysia, currently a Senior Full Stack Engineer at Maybank. Passionate about clean architecture and best web development practice.',
})

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oliver Sim',
  url: 'https://olishiz.com',
  jobTitle: 'Senior Full Stack Engineer',
  worksFor: {'@type': 'Organization', name: 'Maybank'},
  address: {'@type': 'PostalAddress', addressRegion: 'Selangor', addressCountry: 'MY'},
  sameAs: ['https://x.com/olishiz', 'https://github.com/olishiz', 'https://www.linkedin.com/in/olishiz/'],
}

export default function Home() {
  return (
      <>
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
        />
        <H1>
        <span className='inline-flex items-center gap-2 align-middle'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
              src={mudkipAvatar}
              alt='Mudkip'
              width={26}
              height={26}
              className='size-[26px] rounded-full ring-1 ring-rurikon-100 select-none motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-rotate-6 motion-safe:hover:scale-110'
              draggable={false}
          />
          Oliver Sim
        </span>
        </H1>
        <Bio />
        <P>
          You can read about my <A href='/experience'>experience</A>, see my <A href='/projects'>projects</A>, or find
          me
          here:
        </P>
        <UL>
          {socials.map((s) => (
              <LI key={s.href}>
                {s.label}: <A href={s.href}>{s.handle}</A>
              </LI>
          ))}
        </UL>
      </>
  )
}
