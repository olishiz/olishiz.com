import { InfoTooltip } from './info-tooltip'

// The guestbook renders on every request, so the server takes a moment to
// answer. Show the page shell straight away so a tap on the nav link responds
// at once instead of seeming to do nothing.
export default function Loading() {
  return (
    <div aria-busy='true'>
      <div className='flex items-center gap-2 mb-7'>
        <h1 className='font-semibold text-rurikon-600 text-balance'>
          Guestbook
        </h1>
        <InfoTooltip label='About the guestbook'>
          a public wall — say hi, leave a note, or start a conversation.
        </InfoTooltip>
      </div>
      <p className='sr-only' role='status'>
        Loading messages…
      </p>
      <ul aria-hidden='true' className='flex flex-col gap-7'>
        {[0, 1].map((i) => (
          <li key={i} className='flex flex-col gap-2'>
            <span className='h-4 w-2/3 rounded-xs bg-rurikon-50 motion-safe:animate-pulse' />
            <span className='h-3 w-24 rounded-xs bg-rurikon-50 motion-safe:animate-pulse' />
          </li>
        ))}
      </ul>
    </div>
  )
}
