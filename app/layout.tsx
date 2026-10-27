import type { Metadata, Viewport } from 'next'

// @ts-expect-error types are not available yet?
import { ViewTransition } from 'react'

import cn from 'clsx'
import { Analytics } from '@vercel/analytics/next'
import localFont from 'next/font/local'

import Navbar from '@/components/navbar'
import { SidebarToggle } from '@/components/sidebar-toggle'
import './globals.css'

// Fonts are subset by `scripts/subset-fonts.py` (run manually) into a core
// layer (ASCII + common punctuation, preloaded) and an extended layer that the
// browser only downloads when a page uses one of its characters. The
// `unicode-range` values below are printed by that script.
//
// `adjustFontFallback: false` is required: a generated fallback face between
// the core and extended families would draw extended characters instead of
// the real font. Text stays invisible until the font arrives (`block`).

const sansCore = localFont({
  src: './_fonts/subset/inter-core.woff2',
  preload: true,
  display: 'block',
  adjustFontFallback: false,
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+0020-007E, U+00A0, U+2010, U+2013-2014, U+2018-2019, U+201C-201D, U+2026',
    },
  ],
})

const sansExt = localFont({
  src: './_fonts/subset/inter-ext.woff2',
  preload: false,
  display: 'block',
  adjustFontFallback: false,
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+00A1-00AC, U+00AE-0148, U+014A-017F, U+03BB, U+03C0, U+03C3, U+2192',
    },
  ],
})

const serifCore = localFont({
  src: './_fonts/subset/lora-italic-core.woff2',
  preload: true,
  display: 'block',
  adjustFontFallback: false,
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+0020-007E, U+00A0, U+2010, U+2013-2014, U+2018-2019, U+201C-201D, U+2026',
    },
  ],
})

const serifExt = localFont({
  src: './_fonts/subset/lora-italic-ext.woff2',
  preload: false,
  display: 'block',
  adjustFontFallback: false,
  declarations: [
    { prop: 'unicode-range', value: 'U+00A1-0137, U+0139-017F, U+03C0' },
  ],
})

const monoCore = localFont({
  src: './_fonts/subset/iosevka-core.woff2',
  preload: true,
  display: 'block',
  adjustFontFallback: false,
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+0020-007E, U+00A0, U+2010, U+2013-2014, U+2018-2019, U+201C-201D, U+2026',
    },
  ],
})

const monoExt = localFont({
  src: './_fonts/subset/iosevka-ext.woff2',
  preload: false,
  display: 'block',
  adjustFontFallback: false,
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+00A1-017F, U+03BB, U+03C0, U+03C3, U+2192',
    },
  ],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://olishiz.com'),
  applicationName: 'Oliver Sim',
  authors: [{ name: 'Oliver Sim', url: 'https://olishiz.com' }],
  creator: 'Oliver Sim',
  title: {
    template: '%s - Oliver Sim',
    default: 'Oliver Sim',
  },
  description: 'Oliver Sim, Senior Full Stack Application Developer from Selangor, Malaysia.',
  // Show the Open Graph image as a large card on X.
  twitter: { card: 'summary_large_image', creator: '@olishiz' },
  openGraph: { siteName: 'Oliver Sim', locale: 'en_MY', type: 'website' },
}

export const viewport: Viewport = {
  colorScheme: 'only light',
  themeColor: '#fcfcfc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='overflow-x-hidden touch-manipulation' suppressHydrationWarning>
      <head>
        {/* Restore the sidebar toggle before paint (see components/sidebar-toggle.tsx). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('olishiz:nav')==='hidden')document.documentElement.dataset.nav='hidden'}catch(e){}`,
          }}
        />
        {/* Chrome appends a reason to a skipped view transition, for example
            "Transition was aborted because of invalid state. Document hidden".
            React only ignores the exact message, so the suffix shows up as an
            uncaught error even though the update still applies.
            https://github.com/facebook/react/issues/37751 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function skipped(value) {
                  var message = typeof value === 'string' ? value : value && value.message
                  return typeof message === 'string' && message.indexOf('Transition was aborted because of invalid state') === 0
                }
                window.addEventListener('error', function (event) {
                  if (skipped(event.error) || skipped(event.message)) {
                    event.preventDefault()
                    event.stopImmediatePropagation()
                  }
                }, true)
                window.addEventListener('unhandledrejection', function (event) {
                  if (skipped(event.reason)) {
                    event.preventDefault()
                    event.stopImmediatePropagation()
                  }
                }, true)
              })()
            `,
          }}
        />
        <style>{`:root {
  --sans: ${sansCore.style.fontFamily}, ${sansExt.style.fontFamily};
  --serif: ${serifCore.style.fontFamily}, ${serifExt.style.fontFamily};
  --mono: ${monoCore.style.fontFamily}, ${monoExt.style.fontFamily};
}`}</style>
      </head>
      <body
        className={cn(
          'w-full p-6 sm:p-10 md:p-14',
          'text-sm leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7',
          'text-rurikon-500',
          'antialiased',
        )}
      >
        <div className='fixed sm:hidden h-6 sm:h-10 md:h-14 w-full top-0 left-0 z-30 pointer-events-none content-fade-out' />
        <div className='flex flex-col mobile:flex-row'>
          <Navbar />
          <a href='#content' className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-2'>Skip to content</a>
          <main id='content' className='relative flex-1 max-w-2xl [contain:inline-size]'>
            <div data-sidebar-divider className='absolute w-full h-px opacity-50 bg-rurikon-border right-0 mobile:right-auto mobile:left-0 mobile:w-px mobile:h-full mobile:opacity-100 mix-blend-multiply' />
            <ViewTransition name='crossfade'>
              <article data-sidebar-content className='pl-0 pt-6 pb-14 mobile:pt-0 mobile:pl-6 sm:pl-10 md:pl-14'>
                {children}
              </article>
            </ViewTransition>
          </main>
        </div>
        <SidebarToggle />
        <Analytics />
      </body>
    </html>
  )
}
