import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { getPosts } from './_lib'

export const metadata = pageMetadata({
  path: '/blog',
  title: 'Blog',
  description: 'Writing by Oliver Sim on Azure, containers, Kubernetes and search.',
})

// List layout from shud.in/thoughts: title, dot leaders, date.
export default async function Page() {
  const posts = await getPosts()
  return (
    <div>
      <h1 className='sr-only'>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className='font-medium'>
            <Link
              href={`/blog/${post.slug}`}
              className='group flex gap-1 -mx-2 px-2 justify-between items-center focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-dotted focus-visible:text-rurikon-600'
              draggable={false}
            >
              <span className='block text-rurikon-500 group-hover:text-rurikon-700 group-focus-visible:text-rurikon-700'>
                {post.title}
              </span>
              <span className='text-sm dot-leaders flex-1 text-rurikon-100 font-normal group-hover:text-rurikon-500 group-focus-visible:text-rurikon-500 transition-colors group-hover:transition-none leading-none' />
              <time
                dateTime={post.published || post.date.replaceAll('.', '-')}
                className='block text-rurikon-200 tabular-nums font-normal tracking-tighter group-hover:text-rurikon-500 group-focus-visible:text-rurikon-500 transition-colors group-hover:transition-none self-start'
              >
                {post.date}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
