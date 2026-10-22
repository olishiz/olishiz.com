import type { MDXComponents } from 'mdx/types'
import type { ReactNode } from 'react'

import Link from 'next/link'
import Image from 'next/image'


import { BlockSideTitle } from '@/components/block-sidetitle'


export const components: Record<
  string,
  (props: any) => ReactNode | Promise<ReactNode>
> = {
  h1: (props) => (
    <h1
      className='font-semibold mb-7 text-rurikon-600 text-balance'
      {...props}
    />
  ),
  h2: ({ children, ...props }) => {
    const getText = (node: any): string => {
      if (typeof node === 'string') return node
      if (Array.isArray(node)) return node.map(getText).join('')
      if (node?.props?.children) return getText(node.props.children)
      return ''
    }
    const id = getText(children)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    return (
      <h2
        id={id}
        className='group relative font-semibold mt-14 mb-7 text-rurikon-600 text-balance scroll-mt-6 sm:scroll-mt-14'
        {...props}
      >
        <a
          href={`#${id}`}
          className='absolute md:w-14 sm:w-10 mobile:w-6 w-6 -translate-x-[calc(100%-2px)] text-center opacity-0 blur-xs group-hover:opacity-100 group-hover:blur-none text-rurikon-200 hover:text-rurikon-500 transition-all delay-0 duration-500 group-target:blur-none group-target:opacity-100 group-hover:delay-300 select-none'
          aria-label='Link to this section'
        >
          #
        </a>
        {children}
      </h2>
    )
  },
  h3: (props) => (
    <h3
      className='font-semibold mt-14 mb-7 text-rurikon-600 text-balance'
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className='mt-7 list-disc list-outside marker:text-rurikon-200 pl-5'
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className='mt-7 list-decimal list-outside marker:text-rurikon-200 pl-5'
      {...props}
    />
  ),
  li: (props) => <li className='pl-1.5' {...props} />,
  a: ({ href, ...props }) => {
    const className =
      'break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted'

    if (href?.startsWith('#')) {
      return (
        <a className={className} href={href} draggable={false} {...props} />
      )
    }

    return (
      <Link
        className={className}
        href={href}
        draggable={false}
        {...(href?.startsWith('https://')
          ? {
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
        {...props}
      />
    )
  },
  strong: (props) => <strong className='font-bold' {...props} />,
  p: (props) => <p className='mt-7' {...props} />,
  blockquote: (props) => (
    <blockquote
      className='pl-6 -ml-6 sm:pl-10 sm:-ml-10 md:pl-14 md:-ml-14 not-mobile:text-rurikon-400'
      {...props}
    />
  ),
  pre: (props) => (
    <pre className='mt-7 whitespace-pre md:whitespace-pre-wrap' {...props} />
  ),
  code: (props) => <code className='inline' {...props} />,
  Image,
  hr: (props) => <hr className='my-14 w-24 border-rurikon-border' {...props} />,
  BlockSideTitle,
}

export function useMDXComponents(inherited: MDXComponents): MDXComponents {
  return {
    ...inherited,
    ...(components as any),
  }
}
