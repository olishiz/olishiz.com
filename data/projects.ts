import { jomlariLogo, carbnbLogo, vscodePortfolioLogo } from './project-logos'

// Side projects, in display order. One entry per project.
// Sources: olishiz/portfolio data/showcase.ts (featured) and data/projects.ts (other).
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
      'Who’s running tonight? 147 run clubs across Malaysia sorted by when they run, with a calendar, map, verified schedules and one-tap add-to-calendar.',
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
      'Car subscription in Malaysia: one monthly fee covers insurance, maintenance and road tax, with booking management, Curlec payments, an inventory dashboard and a master calendar.',
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
      'My developer portfolio as a VS Code workspace: explorer, tabs, command palette, a working terminal and switchable editor themes.',
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
      'A web and application studio delivering tailored websites, business platforms, e-commerce, hosting, SEO, and ongoing support.',
    tags: [],
    href: 'https://github.com/olishiz/the-shiz.co',
    hrefLabel: 'GitHub',
    featured: false,
  },
  {
    slug: 'ea-portal-ai-chatbot',
    name: 'EA Portal AI Chatbot',
    description:
      'An AI-enabled enterprise assistant exploring contextual knowledge retrieval and modern conversational application patterns.',
    tags: [],
    href: 'https://github.com/olishiz/eaportal-ai-chatbot',
    hrefLabel: 'GitHub',
    featured: false,
  },
  {
    slug: 'task-management-app',
    name: 'Task Management Platform',
    description:
      'A full-stack task management application with a NestJS backend, React frontend, and PostgreSQL database.',
    tags: [],
    href: 'https://github.com/olishiz/task-management-app',
    hrefLabel: 'GitHub',
    featured: false,
  },
  {
    slug: 'tamakaki',
    name: 'TamaKaki',
    description:
      'A modern virtual pet experience spanning life stages, skills, adventures, and home customization across devices.',
    tags: [],
    href: 'https://github.com/olishiz/Tamakaki',
    hrefLabel: 'GitHub',
    featured: false,
  },
]
