'use client'

import { useEffect, useId, useRef, useState } from 'react'
import cn from 'clsx'

// Small info icon with a tooltip. Opens on hover and keyboard focus (CSS), and
// toggles on tap/click for touch screens. Escape or tapping elsewhere closes it.
export function InfoTooltip({ label, children }: { label: string; children: React.ReactNode }) {
  const id = useId()
  const [pinned, setPinned] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!pinned) return
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setPinned(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPinned(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [pinned])

  return (
    <span ref={ref} className='group/tip relative inline-flex align-middle'>
      <button
        type='button'
        aria-label={label}
        aria-describedby={id}
        aria-expanded={pinned}
        onClick={() => setPinned((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setPinned(false)
            e.currentTarget.blur()
          }
        }}
        className='peer -m-1.5 inline-flex size-7 items-center justify-center rounded-full text-rurikon-300 hover:text-rurikon-500 focus-visible:text-rurikon-600 focus-visible:outline focus-visible:outline-dotted focus-visible:outline-rurikon-400 motion-safe:transition-colors'
      >
        <svg aria-hidden width='15' height='15' viewBox='0 0 16 16' fill='none'>
          <circle cx='8' cy='8' r='6.5' stroke='currentColor' strokeWidth='1.25' />
          <path d='M8 7.25v3.75' stroke='currentColor' strokeWidth='1.25' strokeLinecap='round' />
          <circle cx='8' cy='5' r='0.8' fill='currentColor' />
        </svg>
      </button>
      <span
        role='tooltip'
        id={id}
        className={cn(
          'pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-[min(15rem,calc(100vw-3rem))] -translate-x-1/2 rounded-sm border border-rurikon-border bg-white px-2.5 py-1.5',
          'font-sans text-xs font-normal leading-5 text-rurikon-500 text-pretty shadow-[0_1px_6px_rgba(0,0,0,0.04)]',
          'opacity-0 motion-safe:transition-opacity motion-safe:duration-150',
          'group-hover/tip:opacity-100 peer-focus-visible:opacity-100',
          pinned && 'opacity-100',
        )}
      >
        {children}
      </span>
    </span>
  )
}
