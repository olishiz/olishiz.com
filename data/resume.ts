// Earlier roles follow Oliver_Resume_August_2026.pdf, retold as short
// first-person stories. A [label](url) in a story paragraph renders as a link.
// Dates are stored as MM/YYYY. The displayed span counts
// the start month and the end month, which is why Mar 2025 through Oct 2026
// reads "1 yr 8 mos".

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function parseMonthYear(value: string): { year: number; month: number } {
  const [month, year] = value.split('/')
  return {year: Number(year), month: Number(month)}
}

function linkedInDuration(total: number): string {
  if (total < 1) return 'less than a mo'
  const years = Math.floor(total / 12)
  const months = total % 12
  const parts: string[] = []
  if (years === 1) parts.push('1 yr')
  else if (years > 1) parts.push(`${years} yrs`)
  if (months === 1) parts.push('1 mo')
  else if (months > 1) parts.push(`${months} mos`)
  return parts.join(' ')
}

export function roleDates(dates: string, now = new Date()) {
  const [startRaw, endRaw] = dates.split('–').map((part) => part.trim())
  const start = parseMonthYear(startRaw)
  const present = /^present$/i.test(endRaw)
  const end = present
      ? {year: now.getFullYear(), month: now.getMonth() + 1}
      : parseMonthYear(endRaw)
  const total = (end.year - start.year) * 12 + (end.month - start.month) + 1
  const endLabel = present ? 'Present' : `${MONTHS[end.month - 1]} ${end.year}`
  return {
    present,
    range: `${MONTHS[start.month - 1]} ${start.year} – ${endLabel}`,
    duration: linkedInDuration(total),
    dateTime: `${start.year}-${String(start.month).padStart(2, '0')}`,
  }
}

type Role = {
  role: string
  company: string
  logo: string
  dates: string
  location: string
  bullets?: string[]
  story?: string[]
}

export const experience: Role[] = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'Maybank',
    logo: '/logos/maybank.png',
    dates: '03/2025 – Present',
    location: 'Kuala Lumpur, Malaysia',
    story: [
      'I joined Maybank as the bank [partnered with Microsoft](https://www.fintechfutures.com/cloud-services/maybank-partners-microsoft) to bring Microsoft services and products into core banking. I saw it as an opportunity to work on infrastructure, and to do more with cloud.',
      'The first project was the EA Portal, which I led. We built it in React, Node.js, and MongoDB so architects can raise requests, move them through approval, and follow them on dashboards, with filtering, personalization, and notifications.',
      'I also led our agentic AI workflows. They connect enterprise systems and carry a task through several steps. The aim was to introduce an AI development lifecycle, so the bank could spend less on development.',
    ],
  },
  {
    role: 'Senior Backend Engineer',
    company: 'EDAG Malaysia',
    logo: '/logos/edag.png',
    dates: '07/2022 – 12/2024',
    location: 'Shah Alam, Malaysia',
    story: [
      'At EDAG I joined a greenfield project started by the German team. The application was called Risk & Response from the Volkswagen team, and we built it with React, Spring Boot, Kotlin, and PostgreSQL.',
      'We built it from scratch: the auth module, the entire backend structure, database schema design, and migration scripts, with a clear architecture, test-driven development, and test coverage kept above 80%. We deployed to OpenShift with Docker, Kubernetes, and Helm charts, so releases stayed organized and easier to manage.',
      'I worked closely with the German engineers and we exchanged ways of learning and building. One of my favourite key-takeaway from this experience is that the German engineers way of thinking and working were highly efficient.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Etiqa Insurance & Takaful',
    logo: '/logos/etiqa.png',
    dates: '08/2020 – 07/2022',
    location: 'Kuala Lumpur, Malaysia',
    story: [
      'At Etiqa I built and maintained the Back Office Portal for insurance operations, with Angular on the front and Node.js, Express, and MariaDB behind it. The product I spent the most time on was SME BizCare, which had more than 1,500 active users.',
      'Day to day I wrote APIs and Sequelize database migrations, and I designed the frontend layouts, including forms and the user flows around them. I supported production releases and hotfixes, automated XLSX reports and credit breach notifications, and added SonarQube checks before anything went to production.',
    ],
  },
  {
    role: 'IT Specialist - Full Stack Developer',
    company: 'iFAST Service Centre Sdn Bhd',
    logo: '/logos/ifast.png',
    dates: '02/2019 – 01/2020',
    location: 'Kuala Lumpur, Malaysia',
    story: [
      'At iFAST I built an FAQ module in Angular 8 and Java that worked in both the client portal and the back office. I also added a translation module to the Client 3.0 login, so people could switch between English and Chinese.',
      'The other project was Soft Token, which added biometric and fingerprint checks for high-risk transactions. I shipped the work to staging and production with Git and Jenkins.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Computer Science (Honors)',
  school: 'Taylor’s University Lakeside Campus, Subang Jaya',
  dates: '2016 – 2019',
  grade: 'CGPA 3.88/4.00',
}

export const skills = [
  {label: 'Programming Languages', items: 'TypeScript, JavaScript, Kotlin, Java'},
  {label: 'Databases', items: 'Oracle DB, Postgres DB, MariaDB, MySQL'},
  {
    label: 'Frontend Frameworks & Libraries',
    items: 'Angular 9, AngularJS, React, Angular Material, Bootstrap, Material Design, TailwindCSS'
  },
  {label: 'Backend Frameworks & Libraries', items: 'Spring Boot, Hibernate, NestJS, Express, Flyway, Sequelize'},
  {
    label: 'DevOps Tools',
    items: 'Kubernetes, Docker, RedHat OpenShift, Helm, Jenkins, SonarQube, Bamboo, ArgoCD, GitHub Actions'
  },
  {label: 'Software Development', items: 'Agile Methodologies, Test-Driven Development, RESTful API Design, JIRA'},
]

// URLs: hyperlink annotations embedded in Oliver_Resume_August_2026.pdf (page 3).
export const certificates: { name: string; href?: string }[] = [
  {
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    href: 'https://learn.microsoft.com/en-us/users/olishiz/credentials/36f6abac6e70779e'
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    href: 'https://learn.microsoft.com/en-us/users/olishiz/credentials/37aa1f0ef5e89b77'
  },
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    href: 'https://learn.microsoft.com/en-us/users/olishiz/credentials/a87e4d82be8ad96d'
  },
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    href: 'https://learn.microsoft.com/en-us/users/olishiz/credentials/a3bfc8b32068f8a2'
  },
  {name: 'Rancher Academy - Kubernetes Basics', href: 'https://www.rancher.academy/certificates/gkqrww2hrk'},
]
