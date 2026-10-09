import { Blocks, Code2, GraduationCap, Presentation } from 'lucide-react'
import { Avatar } from './Avatar'
import { Card, Reveal, SectionHeading } from './ui'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Informatics Engineering',
    text: '4th-year student at the Syrian Arab Private University, with hands-on full-stack project experience.',
  },
  {
    icon: Blocks,
    title: 'Architecture',
    text: 'Clean Architecture, SOLID principles and established design patterns, applied to real systems.',
  },
  {
    icon: Code2,
    title: 'APIs & Code Quality',
    text: 'Strict validation, API optimization and consistent clean code from the database to the UI.',
  },
  {
    icon: Presentation,
    title: 'Teaching',
    text: 'Instructor and workshop leader for web programming and software engineering fundamentals.',
  },
]

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About" title="About me" />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="space-y-5 lg:col-span-2">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 rounded-full" initialsClassName="text-lg" />
            <div>
              <p className="font-semibold" style={{ color: 'var(--heading)' }}>
                Yousef Jrad
              </p>
              <p className="text-muted text-sm">Full-Stack Engineer & Instructor</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            I&apos;m a 4th-year Informatics Engineering student at the Syrian Arab Private University
            with practical full-stack experience across enterprise backends, desktop systems and web
            front ends.
          </p>
          <p className="text-muted leading-relaxed">
            I care about software design patterns, Clean Architecture, SOLID principles and API
            performance, and I write code so the next person can read it.
          </p>
          <p className="text-muted leading-relaxed">
            I also work as a Software Engineering Instructor and Workshop Leader, teaching web
            programming and engineering fundamentals.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.06}>
              <Card className="h-full p-6">
                <h.icon size={24} className="accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{h.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">{h.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
