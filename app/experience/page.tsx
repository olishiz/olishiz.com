import { pageMetadata } from '@/lib/seo'
import { H1, H2, H3, P, A, UL, LI } from '@/components/ui'
import { experience, education, skills, certificates, roleDates } from '@/data/resume'

export const metadata = pageMetadata({
  path: '/experience',
  title: 'Experience',
  description:
    "Oliver Sim's experience as a full stack engineer at Maybank, EDAG Malaysia, Etiqa Insurance & Takaful and iFAST, plus skills, education and Microsoft Azure certifications.",
})

function StoryParagraph({ text }: { text: string }) {
  const chunks = text.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean)
  return (
    <p className='mt-3'>
      {chunks.map((chunk) => {
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(chunk)
        if (!link) return chunk
        return (
          <A key={link[2]} href={link[2]}>
            {link[1]}
          </A>
        )
      })}
    </p>
  )
}

export default function Experience() {
  return (
    <>
      <H1 className='font-semibold mb-4 text-rurikon-600 text-balance'>Experience</H1>
      {experience.map((job, i) => {
        const when = roleDates(job.dates)
        return (
        <section key={job.company} className={i === 0 ? '[&>h2]:mt-0' : undefined}>
          <H2>
            <span className='flex items-center justify-between gap-3'>
              <span className='flex min-w-0 flex-1 items-center gap-2.5'>
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={24}
                  height={24}
                  loading='lazy'
                  className='inline-block size-6 shrink-0 rounded-md border border-rurikon-border bg-white object-contain'
                />
                <span>
                  {job.role}, {job.company}
                </span>
              </span>
              {when.present ? (
                <span className='shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium leading-5 text-emerald-700'>
                  Present
                </span>
              ) : null}
            </span>
          </H2>
          <p className='-mt-5 text-rurikon-400'>
            <time dateTime={when.dateTime}>
              {when.range} · {when.duration}
            </time>
            <br />
            {job.location}
          </p>
          {job.story ? (
            job.story.map((paragraph) => <StoryParagraph key={paragraph} text={paragraph} />)
          ) : (
            <UL>
              {job.bullets?.map((b) => (
                <LI key={b}>{b}</LI>
              ))}
            </UL>
          )}
        </section>
        )
      })}
      <H2>Skills</H2>
      <dl className='mt-7'>
        {skills.map((s) => (
          <div key={s.label} className='mt-3.5 first:mt-0'>
            <dt className='font-semibold text-rurikon-600'>{s.label}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
      <H2>Education</H2>
      <P>
        {education.degree}, {education.school}
        <br />
        <span className='text-rurikon-400'>
          {education.dates} · {education.grade}
        </span>
      </P>
      <H2>Certificates</H2>
      <UL>
        {certificates.map((c) => (
          <LI key={c.name}>{c.href ? <A href={c.href}>{c.name}</A> : c.name}</LI>
        ))}
      </UL>
    </>
  )
}
