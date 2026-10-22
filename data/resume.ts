// Source: /workspace/job-apply/Oliver_Resume_August_2026.pdf (copied verbatim).
export const summary = [
  'Versatile Full Stack Engineer with over 7+ years of experience developing, integrating, and maintaining enterprise applications across frontend, backend, cloud, and DevOps.',
  'Skilled in Java, Kotlin, Node.js, React, Angular, MongoDB, Azure, CI/CD, and API integrations, with hands-on experience delivering scalable systems and AI-enabled solutions.',
  'Strong end-to-end delivery mindset, with the ability to support the full software lifecycle from application development to infrastructure and production operations.',
]

export const experience = [
  {
    role: 'Senior Full Stack Engineer', company: 'Maybank', logo: '/logos/maybank.png', dates: '03/2025 – Present', location: 'Kuala Lumpur, Malaysia',
    bullets: [
      'Delivered and evolved the EA Portal (React, Node.js, MongoDB) as a lead member of the team, covering request management, approval workflows, dashboards, filtering, personalization, and automated notifications.',
      'Led Agentic AI initiatives using Microsoft Copilot Studio (Agent Builder) to design and integrate agentic AI workflows, connecting enterprise systems and automating multi-step business processes across the AI development lifecycle.',
      'Modernizing enterprise applications by decoupling production databases and migrating workloads to scalable, maintainable cloud-based systems.',
      'Designed and integrated agentic AI workflows using Microsoft Copilot Studio (Agent Builder), connecting enterprise systems and automating multi-step business processes.',
      'Reduced security findings by remediating vulnerabilities, upgrading outdated packages/dependencies, and keeping runtime libraries aligned with bank security standards.',
      'Shipped 20+ production releases with zero-downtime deployment practices, supporting feature enhancements, cost monitoring, and operational improvements.',
    ],
  },
  {
    role: 'Senior Backend Engineer', company: 'EDAG Malaysia', logo: '/logos/edag.png', dates: '07/2022 – 12/2024', location: 'Shah Alam, Malaysia',
    bullets: [
      'Designed and developed high-throughput backend services using Spring Boot, Kotlin, and Gradle, with focus on scalability, reliability, and maintainability.',
      'Optimized Oracle and PostgreSQL database queries, schemas, and data access patterns for high-volume, data-intensive workloads.',
      'Built and maintained CI/CD pipelines using Bamboo, Docker, Kubernetes, Helm, and OpenShift to improve deployment consistency and production release quality.',
      'Developed ETL services to ingest and process large-scale data from Amazon S3 into backend platforms.',
      'Implemented RBAC and JWT-based authentication to strengthen application security and access control.',
      'Improved code quality by maintaining SonarQube quality gate standards above 80%, reducing technical debt and improving maintainability.',
      'Contributed to technical design, solution planning, and delivery coordination across backend, database, and DevOps workstreams.',
    ],
  },
  {
    role: 'Full Stack Developer', company: 'Etiqa Insurance & Takaful', logo: '/logos/etiqa.png', dates: '08/2020 – 07/2022', location: 'Kuala Lumpur, Malaysia',
    bullets: [
      'Developed and maintained Back Office Portal features using Angular, Angular Material, Node.js, Express, and MariaDB for enterprise insurance operations.',
      'Built RESTful APIs, backend services, and database workflows to support business-critical application functionality.',
      'Managed Sequelize ORM database migrations, server integration, RTC check-ins, and environment setup to streamline deployment activities.',
      'Delivered the SME BizCare platform, supporting 500+ active users across frontend and backend modules.',
      'Automated XLSX report generation and credit breach notification workflows, reducing manual effort and improving operational tracking.',
      'Supported production releases, hotfix deployments, and application stability for Angular and Node.js services.',
      'Integrated SonarQube quality checks to improve code maintainability and reduce technical debt before production release.',
    ],
  },
  {
    role: 'IT Specialist - Full Stack Developer', company: 'iFAST Service Centre Sdn Bhd', logo: '/logos/ifast.png', dates: '02/2019 – 01/2020', location: 'Kuala Lumpur, Malaysia',
    bullets: [
      'Developed a versatile FAQ module for an external project, integrating Angular 8 and Java with both client and back office portals',
      'Implemented a comprehensive translation module for Client 3.0 login portal, enabling seamless language switching between English and Chinese',
      'Streamlined deployment processes to staging and production environments using Git and Jenkins for efficient version control and automation',
      'Contributed to the Soft Token project, enhancing client security for high-risk transactions through biometric and fingerprint authentication',
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
  { label: 'Programming Languages', items: 'TypeScript, JavaScript, Kotlin, Java' },
  { label: 'Databases', items: 'Oracle DB, Postgres DB, MariaDB, MySQL' },
  { label: 'Frontend Frameworks & Libraries', items: 'Angular 9, AngularJS, React, Angular Material, Bootstrap, Material Design, TailwindCSS' },
  { label: 'Backend Frameworks & Libraries', items: 'Spring Boot, Hibernate, NestJS, Express, Flyway, Sequelize' },
  { label: 'DevOps Tools', items: 'Kubernetes, Docker, RedHat OpenShift, Helm, Jenkins, SonarQube, Bamboo, ArgoCD, GitHub Actions' },
  { label: 'Software Development', items: 'Agile Methodologies, Test-Driven Development, RESTful API Design, JIRA' },
]

// URLs: hyperlink annotations embedded in Oliver_Resume_August_2026.pdf (page 3).
export const certificates: { name: string; href?: string }[] = [
  { name: 'Microsoft Certified: Azure Solutions Architect Expert', href: 'https://learn.microsoft.com/en-us/users/olishiz/credentials/36f6abac6e70779e' },
  { name: 'Microsoft Certified: Azure Administrator Associate', href: 'https://learn.microsoft.com/en-us/users/olishiz/credentials/37aa1f0ef5e89b77' },
  { name: 'Microsoft Certified: Azure Developer Associate', href: 'https://learn.microsoft.com/en-us/users/olishiz/credentials/a87e4d82be8ad96d' },
  { name: 'Microsoft Certified: Azure AI Fundamentals', href: 'https://learn.microsoft.com/en-us/users/olishiz/credentials/a3bfc8b32068f8a2' },
  { name: 'Rancher Academy - Kubernetes Basics', href: 'https://www.rancher.academy/certificates/gkqrww2hrk' },
]
