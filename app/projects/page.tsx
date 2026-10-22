import { pageMetadata } from '@/lib/seo'
import { H1, H2, P, A, UL, LI, HR } from '@/components/ui'
import { projects } from '@/data/projects'
import { clientWork } from '@/data/work'
import { Timeline } from '@/components/project-timeline'

export const metadata = pageMetadata({
  path: '/projects',
  title: 'Projects',
  description:
    'Side projects by Oliver Sim, including JomLari, Carbnb and a VS Code-style portfolio, plus websites built for clients.',
})

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)
  return (
    <>
      <H1>Projects</H1>
      <P>Things I build on the side, plus websites I’ve made for clients.</P>
      <Timeline projects={featured} />
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
