import { promises as fs } from 'fs'
import path from 'path'

// Posts are MDX files in app/blog/_posts. Adding a post is one file: export a
// `metadata` object (title, date as YYYY.MM.DD, description, optional medium
// URL for the canonical link) and write the body in Markdown below it.
export type PostMeta = {
  title: string
  date: string
  published?: string
  description: string
  medium?: string
  draft?: boolean
}

const dir = path.join(process.cwd(), 'app', 'blog', '_posts')

export async function getSlugs() {
  return (await fs.readdir(dir))
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export async function getPost(slug: string) {
  const mod = await import('./_posts/' + slug + '.mdx')
  if (!mod.metadata) throw new Error('Missing `metadata` in ' + slug + '.mdx')
  return { Content: mod.default as React.ComponentType, metadata: mod.metadata as PostMeta }
}

export async function getPosts() {
  const posts = []
  for (const slug of await getSlugs()) {
    const { metadata } = await getPost(slug)
    if (metadata.draft) continue
    posts.push({ slug, ...metadata })
  }
  // Newest first; posts on the same day fall back to the full timestamp.
  return posts.sort((a, b) =>
    (b.published || b.date).localeCompare(a.published || a.date),
  )
}
