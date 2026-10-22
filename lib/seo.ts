import type { Metadata } from 'next'

export const SITE_URL = 'https://olishiz.com'
export const SITE_NAME = 'Oliver Sim'

// Per-page metadata: canonical URL plus matching Open Graph / Twitter fields.
// The Open Graph image comes from app/opengraph-image.tsx.
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}): Metadata {
  return {
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: path === '/' ? 'profile' : 'website',
      url: path,
      siteName: SITE_NAME,
      locale: 'en_MY',
      title: path === '/' ? title : `${title} - ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@olishiz',
      title: path === '/' ? title : `${title} - ${SITE_NAME}`,
      description,
    },
  }
}
