import { Database, GraduationCap, LayoutTemplate, Monitor, Server, Wrench } from 'lucide-react'
import type { ComponentType } from 'react'
import { skillCategories } from '../data/content'
import type { SkillCategory } from '../data/types'
import { Card, Reveal, SectionHeading } from './ui'

const icons: Record<SkillCategory['icon'], ComponentType<{ size?: number; className?: string }>> = {
  server: Server,
  monitor: Monitor,
  layout: LayoutTemplate,
  database: Database,
  wrench: Wrench,
  graduation: GraduationCap,
}

export function Skills() {
  return (
    <section id="skills" className="section border-t" style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-alt)' }}>
      <SectionHeading eyebrow="Tech stack" title="Skills & tools" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = icons[cat.icon]
          return (
            <Reveal key={cat.id} delay={(i % 3) * 0.06}>
              <Card className="h-full p-6">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="accent flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: 'var(--accent-soft)' }}
                  >
                    <Icon size={20} />
                  </span>
                  <span
                    className="text-muted rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{ border: '1px solid var(--border)' }}
                  >
                    {cat.level}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{cat.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
