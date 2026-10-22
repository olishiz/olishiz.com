import { H1, P, A, UL, LI } from '@/components/ui'
import { socials } from '@/data/profile'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/',
  title: 'Oliver Sim - Full Stack Developer from Malaysia',
  description:
    'Oliver Sim is a Full Stack Developer / UX Engineer from Malaysia, currently a Senior Full Stack Engineer at Maybank. Passionate about clean architecture and best web development practice.',
})

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oliver Sim',
  url: 'https://olishiz.com',
  jobTitle: 'Senior Full Stack Engineer',
  worksFor: { '@type': 'Organization', name: 'Maybank' },
  address: { '@type': 'PostalAddress', addressRegion: 'Selangor', addressCountry: 'MY' },
  sameAs: ['https://x.com/olishiz', 'https://github.com/olishiz', 'https://www.linkedin.com/in/olishiz/'],
}

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <H1>Oliver Sim</H1>
      <P>
        I am a <strong>Full Stack Developer</strong> / <strong>UX Engineer</strong> from Malaysia. Passionate about
        clean architecture and best web development practice. Living in Selangor. I speak English, Malay, Mandarin, and
        some Hokkien.
      </P>
      <P>
        Currently a Senior Full Stack Engineer at Maybank. Versatile Full Stack Engineer with over 7+ years of
        experience developing, integrating, and maintaining enterprise applications across frontend, backend, cloud,
        and DevOps.
      </P>
      <P>Minimalist. Loves dogs. Enjoys football.</P>
      <P>
        You can read about my <A href='/experience'>experience</A>, see my <A href='/projects'>projects</A>, or find me
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
