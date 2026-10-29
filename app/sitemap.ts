import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { placeholder as thoughtsPlaceholder } from '@/data/thoughts'

export default function sitemap(): MetadataRoute.Sitemap {
  // Blog posts are left out: their canonical URL is the Medium original.
  const paths = ['/', '/experience', '/blog', '/projects', '/guestbook']
  // /thoughts is noindex while it only has placeholder content.
  if (!thoughtsPlaceholder) paths.push('/thoughts')
  return paths.map((p) => ({
    url: p === '/' ? SITE_URL : `${SITE_URL}${p}`,
    changeFrequency: 'monthly',
    priority: p === '/' ? 1 : 0.8,
  }))
}
