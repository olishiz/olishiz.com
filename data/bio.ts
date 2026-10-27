// The two versions of the about bio. Default is the short introduction.
// Long is the fuller story. Edit the paragraphs here.

export type BioLength = 'default' | 'long'

export const bio: Record<BioLength, readonly string[]> = {
  default: [
    `I’m an engineer and a problem solver. I enjoy turning complex problems into simple solutions.`,
    `Currently a Senior Full Stack Engineer at Maybank.`,
    `Minimalist. Loves dogs. Enjoys football.`,
  ],
  long: [
    `I’m an engineer and a problem solver. I enjoy turning complex problems into simple solutions.`,
    `Since young, I enjoyed looking at how technology shapes our lives. I've been an avid gamer since childhood, and I believe this shapes my perspective on problem-solving and innovation.`,
    `Living in Selangor. I speak English, Malay, Mandarin, and some Hokkien.`,
    `Currently a Senior Full Stack Engineer at Maybank. Versatile Full Stack Engineer with over 7+ years of experience developing, integrating, and maintaining enterprise applications across frontend, backend, cloud, and DevOps.`,
    `Minimalist. Loves dogs. Enjoys football.`,
  ],
}
