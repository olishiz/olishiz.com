/* eslint-disable @next/next/no-img-element */
import { pageMetadata } from '@/lib/seo'
import { H1, H2, P, A, UL, LI } from '@/components/ui'
import { projects } from '@/data/projects'
import { clientWork } from '@/data/work'

export const metadata = pageMetadata({
  path: '/projects',
  title: 'Projects',
  description:
    'Side projects by Oliver Sim, including JomLari, Carbnb and a VS Code-style portfolio, plus websites built for clients.',
})

const linkClassName =
  'break-words underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)
  return (
    <>
      <H1>Projects</H1>
      <P>Things I build on the side, plus websites I’ve made for clients.</P>
      {featured.map((p) => (
        <section key={p.slug} id={p.slug} aria-labelledby={`${p.slug}-title`} className='scroll-mt-6 sm:scroll-mt-14'>
          <h2 id={`${p.slug}-title`} className='mt-14 mb-7 flex items-center gap-2.5 font-semibold text-rurikon-600 text-balance'>
            {p.logo ? (
              <img src={p.logo} alt='' width={20} height={20} className='size-5 shrink-0 rounded-[5px] ring-1 ring-rurikon-100' />
            ) : null}
            <a href={p.href} className={linkClassName}>
              {p.name}
            </a>
          </h2>
          <P>{p.description}</P>
          <p className='mt-2 text-sm text-rurikon-400'>
            {[p.year, ...p.tags].filter(Boolean).join(' · ')}
          </p>
          {p.preview ? (
            <a
              href={p.href}
              className='group mt-7 block max-w-[400px] overflow-hidden rounded-md ring-1 ring-rurikon-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rurikon-400'
            >
              <img
                src={p.preview}
                alt={`Preview of the ${p.name} home page (opens ${p.hrefLabel})`}
                width={640}
                height={400}
                loading='lazy'
                decoding='async'
                className='block h-auto w-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.02]'
              />
            </a>
          ) : null}
        </section>
      ))}
      <H2>Other projects</H2>
      <UL>
        {other.map((p) => (
          <LI key={p.slug}>
            <A href={p.href}>{p.name}</A>: {p.description}
          </LI>
        ))}
      </UL>
      <H2>Client work</H2>
      <UL>
        {clientWork.map((w) => (
          <LI key={w.href}>
            <A href={w.href}>{w.project}</A> ({w.year}, {w.stack}): {w.description}
          </LI>
        ))}
      </UL>
    </>
  )
}
