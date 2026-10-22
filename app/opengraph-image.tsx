import { ImageResponse } from 'next/og'

import { OgCard, ogFonts, ogSize } from './_og'

// Shared image for the homepage and any page without its own.
export const alt = 'Oliver Sim'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <OgCard
      title='Oliver Sim'
      description='Senior Full Stack Application Developer from Selangor, Malaysia.'
    />,
    {
      ...ogSize,
      fonts: ogFonts,
    },
  )
}
