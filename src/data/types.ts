export interface SocialLink {
  id: 'github' | 'linkedin' | 'email' | 'whatsapp'
  label: string
  href: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: 'server' | 'monitor' | 'layout' | 'database' | 'wrench' | 'graduation'
  level: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  subtitle?: string
  category: string
  description: string
  stack: string[]
  highlights: string[]
  repos: { label: string; href: string }[]
}

export interface TimelineItem {
  id: string
  period: string
  role: string
  org: string
  type: 'freelance' | 'engineering' | 'teaching' | 'education'
  points: string[]
}
