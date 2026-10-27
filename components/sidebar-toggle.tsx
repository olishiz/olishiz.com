'use client'

import { useEffect, useState } from 'react'

const KEY = 'olishiz:nav'

// Hides the left sidebar on narrow screens so the text can use the full width.
// The choice lives on <html data-nav>, which an inline script in the root
// layout restores before first paint, so there is no flash on reload.
export function SidebarToggle() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setHidden(document.documentElement.dataset.nav === 'hidden')
  }, [])

  function toggle() {
    const next = !hidden
    const apply = () => {
      if (next) document.documentElement.dataset.nav = 'hidden'
      else delete document.documentElement.dataset.nav
    }
    // A short cross-fade where supported, none when reduced motion is on.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown }
    if (!reduce && doc.startViewTransition) doc.startViewTransition(apply)
    else apply()
    setHidden(next)
    try {
      if (next) localStorage.setItem(KEY, 'hidden')
      else localStorage.removeItem(KEY)
    } catch {}
  }

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={hidden ? 'Show navigation' : 'Hide navigation'}
      aria-expanded={!hidden}
      aria-controls='site-nav'
      title={hidden ? 'Show navigation' : 'Hide navigation'}
      className='fixed z-40 left-[max(0.75rem,env(safe-area-inset-left))] bottom-[max(0.75rem,env(safe-area-inset-bottom))] hidden mobile:inline-flex sm:hidden size-9 items-center justify-center rounded-full border border-rurikon-border bg-[#fcfcfc]/90 text-rurikon-400 shadow-[0_1px_6px_rgba(0,0,0,0.05)] backdrop-blur-sm hover:text-rurikon-600 focus-visible:outline focus-visible:outline-dotted focus-visible:outline-offset-2 focus-visible:outline-rurikon-400 motion-safe:transition-colors'
    >
      <svg viewBox='0 0 20 20' width='18' height='18' fill='none' stroke='currentColor' strokeWidth='1.4' aria-hidden='true'>
        <rect x='2.75' y='3.75' width='14.5' height='12.5' rx='2' />
        <path d='M7.25 3.75v12.5' />
        {hidden ? (
          <path d='M10.5 8l2 2-2 2' strokeLinecap='round' strokeLinejoin='round' />
        ) : (
          <path d='M12.5 8l-2 2 2 2' strokeLinecap='round' strokeLinejoin='round' />
        )}
      </svg>
    </button>
  )
}
