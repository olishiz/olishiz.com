'use client'

import { useState, type KeyboardEvent } from 'react'
import cn from 'clsx'
import { P } from '@/components/ui'
import { bio, type BioLength } from '@/data/bio'

const lengths: { id: BioLength; label: string }[] = [
  { id: 'default', label: 'Default' },
  { id: 'long', label: 'Long' },
]

// Off until the Long bio has its own copy. The long paragraphs stay in data/bio.ts.
const showLengthToggle = false

export function Bio() {
  const [length, setLength] = useState<BioLength>('default')
  const active: BioLength = showLengthToggle ? length : 'default'

  function select(id: BioLength, focus = false) {
    setLength(id)
    if (focus) document.getElementById(`bio-tab-${id}`)?.focus()
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const index = lengths.findIndex((item) => item.id === length)
    const last = lengths.length - 1
    let next = index

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    else return

    event.preventDefault()
    select(lengths[next].id, true)
  }

  return (
    <section aria-label='Bio'>
      {showLengthToggle && (
        <div className='flex items-baseline justify-between gap-4 border-b border-rurikon-border'>
          <span className='pb-1.5 text-rurikon-400'>Bio</span>
          <div role='tablist' aria-label='Bio length' className='flex gap-4'>
            {lengths.map((item) => {
              const selected = length === item.id
              return (
                <button
                  key={item.id}
                  type='button'
                  role='tab'
                  id={`bio-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls='bio-panel'
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(item.id)}
                  onKeyDown={onKeyDown}
                  className={cn(
                    '-mb-px cursor-pointer border-b pb-1.5',
                    'focus-visible:outline focus-visible:outline-dotted focus-visible:outline-offset-4 focus-visible:outline-rurikon-400',
                    selected
                      ? 'border-rurikon-600 text-rurikon-800'
                      : 'border-transparent text-rurikon-300 hover:text-rurikon-500',
                  )}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
      <div
        {...(showLengthToggle
          ? {role: 'tabpanel' as const, id: 'bio-panel', 'aria-labelledby': `bio-tab-${active}`}
          : {})}
        key={active}
        className='motion-safe:animate-[appear_240ms_ease-out]'
      >
        {bio[active].map((paragraph) => (
          <P key={paragraph}>{paragraph}</P>
        ))}
      </div>
    </section>
  )
}
