import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { H1, A } from '@/components/ui'
import { getPost, getSlugs } from '../_lib'

export const dynamicParams = false

export async function generateStaticParams() {
  return (await getSlugs()).map((slug) => ({ slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params
  const { metadata } = await getPost(slug)
  const base = pageMetadata({
    path: `/blog/${slug}`,
    title: metadata.title,
    description: metadata.description,
  })
  return {
    ...base,
    // The Medium article is the original, so search engines should credit it.
    alternates: { canonical: metadata.medium || `/blog/${slug}` },
    openGraph: { ...base.openGraph, type: 'article', publishedTime: metadata.published },
  }
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const { Content, metadata } = await getPost(slug)
  return (
    <div>
      <H1>{metadata.title}</H1>
      <p className='-mt-5 text-rurikon-400'>
        <time
          className='tabular-nums tracking-tighter'
          dateTime={metadata.published || metadata.date.replaceAll('.', '-')}
        >
          {metadata.date}
        </time>
        {metadata.medium ? (
          <>
            {' · '}
            <A href={metadata.medium}>originally published on Medium</A>
          </>
        ) : null}
      </p>
      <Content />
    </div>
  )
}
