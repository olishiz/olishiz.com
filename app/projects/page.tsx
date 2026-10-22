import { H1, H2, P, A, UL, LI, HR } from '@/components/ui'
import { projects } from '@/data/projects'
import { clientWork } from '@/data/work'

export const metadata = {
  title: 'Projects',
  description: 'Side projects and client work by Oliver Sim.',
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)
  return (
    <>
      <H1>Projects</H1>
      <P>Things I build on the side, plus websites I’ve made for clients.</P>
      {featured.map((p) => (
        <section key={p.slug} id={p.slug}>
          <H2>
            <A href={p.href}>{p.name}</A>
          </H2>
          <P>{p.description}</P>
          <p className='mt-3.5 text-rurikon-400'>
            {p.year} · {p.tags.join(', ')} · <A href={p.href}>{p.hrefLabel}</A>
          </p>
        </section>
      ))}
      <HR />
      <p>Other projects (on <A href='https://github.com/olishiz'>GitHub</A>):</p>
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
