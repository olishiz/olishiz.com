import { jomlariLogo, carbnbLogo, vscodePortfolioLogo } from './project-logos'

// Side projects, in display order. One entry per project.
// Descriptions summarise what each live site (or, with no live site, the public
// GitHub README) says, checked 2026-10-23.
export interface Project {
  slug: string
  name: string
  description: string
  tags: string[]
  year?: number
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
    description:
      'Shows which run clubs in Kuala Lumpur, Penang and the rest of Malaysia are running tonight, sorted by when they run. Every 4 hours it re-reads each club’s public Strava page, Luma calendar or website, and each club page says when its listing was last verified.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind', 'Leaflet', 'GitHub Actions', 'Vercel'],
    year: 2026,
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
      'Car subscription in Malaysia: choose a new or used car, reserve it online and have it delivered, with one monthly fee covering insurance, road tax and maintenance. Plans run 12 to 36 months, and you can swap cars after your term.',
    tags: ['Next.js', 'React', 'TypeScript', 'Curlec', 'PWA', 'Vercel'],
    year: 2026,
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
    year: 2026,
    href: 'https://olishiz.github.io/portfolio/vscode/',
    hrefLabel: 'olishiz.github.io/portfolio/vscode',
    featured: true,
    logo: vscodePortfolioLogo,
    preview: '/projects/vscode-portfolio.webp',
  },
  {
    slug: 'the-shiz',
    name: 'The Shiz',
    description:
      'A studio that builds websites for Malaysian brands: web applications, web design (custom, Shopify and WordPress), e-commerce and SEO, plus maintenance and hosting.',
    tags: [],
    href: 'https://the-shiz-co.vercel.app',
    hrefLabel: 'the-shiz-co.vercel.app',
    featured: false,
  },
  {
    slug: 'ea-portal-ai-chatbot',
    name: 'EA Portal AI Chatbot',
    description:
      'An AI chatbot built on Vercel’s open-source Chat SDK template, using Next.js and the AI SDK.',
    tags: [],
    href: 'https://github.com/olishiz/eaportal-ai-chatbot',
    hrefLabel: 'GitHub',
    featured: false,
  },
  {
    slug: 'task-management-app',
    name: 'Task Management Platform',
    description:
      'A full-stack task management app with a NestJS GraphQL API and Prisma, a React and Vite frontend, and PostgreSQL, runnable with Docker Compose.',
    tags: [],
    href: 'https://github.com/olishiz/task-management-app',
    hrefLabel: 'GitHub',
    featured: false,
  },
  {
    slug: 'tamakaki',
    name: 'TamaKaki',
    description:
      'A virtual pet game inspired by modern Tamagotchi devices: raise a pet from baby to elder, teach it skills, take it on adventures and customise its home.',
    tags: [],
    href: 'https://github.com/olishiz/Tamakaki',
    hrefLabel: 'GitHub',
    featured: false,
  },
]
