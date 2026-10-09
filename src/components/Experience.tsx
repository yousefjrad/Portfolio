import { Briefcase, Cpu, GraduationCap, Presentation } from 'lucide-react'
import type { ComponentType } from 'react'
import { timeline } from '../data/content'
import type { TimelineItem } from '../data/types'
import { Reveal, SectionHeading } from './ui'

const icons: Record<TimelineItem['type'], ComponentType<{ size?: number }>> = {
  freelance: Briefcase,
  engineering: Cpu,
  teaching: Presentation,
  education: GraduationCap,
}

export function Experience() {
  return (
    <section
      id="experience"
      className="section border-t"
      style={{ borderColor: 'var(--border-soft)', background: 'var(--bg-alt)' }}
    >
      <SectionHeading
        eyebrow="Experience"
        title="Experience"
        subtitle="Freelance work, system engineering, and workshops delivered in Hama."
      />
      <ol className="relative ml-4 border-l sm:ml-6" style={{ borderColor: 'var(--border)' }}>
        {timeline.map((item, i) => {
          const Icon = icons[item.type]
          return (
            <li key={item.id} className="relative mb-8 pl-8 last:mb-0 sm:pl-12">
              <span
                className="accent absolute top-1 -left-[19px] flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <Icon size={16} />
              </span>
              <Reveal delay={i * 0.04}>
                <div className="card p-6">
                  <p className="accent text-xs font-semibold tracking-wide uppercase">{item.period}</p>
                  <h3 className="mt-1 text-xl font-semibold">{item.role}</h3>
                  <p className="text-muted text-sm">{item.org}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                          style={{ background: 'var(--accent)' }}
                          aria-hidden="true"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
