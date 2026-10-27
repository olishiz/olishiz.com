import {carbnbLogo, jomlariLogo, vscodePortfolioLogo} from './project-logos'

// Side projects, in display order. One entry per project.
// Descriptions summarise what each live site (or, with no live site, the public
// GitHub README) says, checked 2026-10-23.
export interface Project {
  slug: string
  name: string
  description: string
  tags: string[]
  href: string
  hrefLabel: string
  featured: boolean
  /** Logo from the live site's icon (data URI). */
  logo?: string
  /** Preview screenshot of the live app in /public (640x400 WebP). */
  preview?: string
}

export const projects: Project[] = [
  {
    slug: 'jomlari',
    name: 'JomLari',
    description: 'Built a simple app to show which run clubs in Malaysia that running tonight, sorted by when they run. The idea is to find your nearest run clubs and join them in a quick manner and also to promote healthy lifestyle to the public. I scraped most of the information via run clubs directories and also community posts via Threads & Instagram',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind', 'Leaflet', 'GitHub Actions', 'Vercel'],
    href: 'https://jomlari.app',
    hrefLabel: 'jomlari.app',
    featured: true,
    logo: jomlariLogo,
    preview: '/projects/jomlari.webp',
  },
  {
    slug: 'carbnb',
    name: 'Carbnb',
    description:
        'Developed an end-to-end car subscription platform: select a vehicle, have it delivered, and pay a single monthly fee that includes insurance, road tax, and maintenance. Focused on SEO and visibility to help the service gain traction.',
    tags: ['Next.js', 'React', 'TypeScript', 'Curlec', 'PWA', 'Vercel'],
    href: 'https://carbnb.my/',
    hrefLabel: 'carbnb.my',
    featured: true,
    logo: carbnbLogo,
    preview: '/projects/carbnb.webp',
  },
  {
    slug: 'vscode-portfolio',
    name: 'VS Code Portfolio',
    description:
        'My developer portfolio laid out as a Visual Studio Code window, where each section (home, about, projects, contact) opens as a file from the explorer.',
    tags: ['Next.js', 'React 19', 'TypeScript', 'CSS Modules', 'GitHub Pages'],
    href: 'https://olishiz.github.io/portfolio/vscode/',
    hrefLabel: 'olishiz.github.io/portfolio/vscode',
    featured: true,
    logo: vscodePortfolioLogo,
    preview: '/projects/vscode-portfolio.webp',
  },
]
