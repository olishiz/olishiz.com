import { pageMetadata } from '@/lib/seo'
import { H1, H2, H3, P, A, UL, LI } from '@/components/ui'
import { experience, education, skills, certificates } from '@/data/resume'

export const metadata = pageMetadata({
  path: '/experience',
  title: 'Experience',
  description:
    "Oliver Sim's experience as a full stack engineer at Maybank, EDAG Malaysia, Etiqa Insurance & Takaful and iFAST, plus skills, education and Microsoft Azure certifications.",
})

export default function Experience() {
  return (
    <>
      <H1>Experience</H1>
      {experience.map((job) => (
        <section key={job.company}>
          <H2>
            <span className='inline-flex items-center gap-2.5 align-middle'>
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
          </H2>
          <p className='-mt-5 text-rurikon-400'>
            <time>{job.dates}</time> · {job.location}
          </p>
          <UL>
            {job.bullets.map((b) => (
              <LI key={b}>{b}</LI>
            ))}
          </UL>
        </section>
      ))}
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
