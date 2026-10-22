/* eslint-disable @next/next/no-img-element */
import type { Project } from '@/data/projects'

// Vertical timeline of featured projects, grouped by year.
export function Timeline({ projects }: { projects: Project[] }) {
  const years = [...new Set(projects.map((p) => p.year))]
  return (
    <div className='mt-7'>
      {years.map((year) => (
        <section key={year ?? 'undated'} aria-label={year ? `Projects from ${year}` : 'Projects'}>
          {year ? (
            <p className='relative pl-7 font-semibold text-rurikon-600 tabular-nums'>
              <span
                aria-hidden
                className='absolute left-[3px] top-1/2 size-[9px] -translate-y-1/2 rounded-full bg-rurikon-400'
              />
              {year}
            </p>
          ) : null}
          <ol className='relative mt-4 border-l border-rurikon-border ml-[7px] pl-[20px]'>
            {projects
              .filter((p) => p.year === year)
              .map((p) => (
                <li key={p.slug} id={p.slug} className='relative pb-10 last:pb-2 scroll-mt-8'>
                  <span
                    aria-hidden
                    className='absolute -left-[24px] top-[9px] size-[7px] rounded-full bg-rurikon-200 ring-4 ring-[#fcfcfc]'
                  />
                  <h2 className='flex items-center gap-2.5 font-semibold text-rurikon-600'>
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt=''
                        width={22}
                        height={22}
                        className='size-[22px] shrink-0 rounded-[6px] ring-1 ring-rurikon-100'
                      />
                    ) : null}
                    <a
                      href={p.href}
                      className='rounded-sm underline decoration-rurikon-200 underline-offset-[3px] hover:decoration-rurikon-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rurikon-400'
                    >
                      {p.name}
                    </a>
                  </h2>
                  <p className='mt-3'>{p.description}</p>
                  <p className='mt-2 text-rurikon-400'>
                    {p.tags.join(', ')} ·{' '}
                    <a
                      href={p.href}
                      className='rounded-sm underline decoration-rurikon-200 underline-offset-[3px] hover:decoration-rurikon-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rurikon-400'
                    >
                      {p.hrefLabel}
                    </a>
                  </p>
                  {p.preview ? (
                    <a
                      href={p.href}
                      className='group mt-4 block max-w-[400px] overflow-hidden rounded-lg ring-1 ring-rurikon-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rurikon-400'
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
                </li>
              ))}
          </ol>
        </section>
      ))}
    </div>
  )
}
