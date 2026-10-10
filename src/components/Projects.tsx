import { ExternalLink, ImageIcon } from 'lucide-react'
import { projects } from '../data/content'
import type { Project } from '../data/types'
import { GithubIcon } from './BrandIcons'
import { Card, Reveal, SectionHeading } from './ui'

// Screenshots are picked up automatically by file name: src/assets/projects/<project-id>.(jpg|png|webp)
const shots = import.meta.glob<string>('../assets/projects/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function shotFor(id: string): string | undefined {
  const key = Object.keys(shots).find((k) => k.replace(/^.*\//, '').replace(/\.[^.]+$/, '') === id)
  return key ? shots[key] : undefined
}

function ProjectShot({ project }: { project: Project }) {
  const src = shotFor(project.id)
  if (src) {
    return (
      // Fixed aspect ratio reserves the space up front, so lazy-loaded images
      // never push the page down (which made anchor scrolling land short on mobile).
      <div
        className="mb-5 aspect-[2/1] w-full overflow-hidden rounded-xl border"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-alt)' }}
      >
        <img
          src={src}
          alt={`${project.title} interface preview`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
    )
  }
  return <ScreenshotPlaceholder project={project} />
}

function ScreenshotPlaceholder({ project }: { project: Project }) {
  return (
    <div
      role="img"
      aria-label={`${project.title} screenshot placeholder`}
      className="mb-5 flex aspect-[16/9] items-center justify-center rounded-xl"
      style={{
        background: 'linear-gradient(135deg, var(--bg-alt), var(--accent-soft))',
        border: '1px dashed var(--border)',
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <ImageIcon size={26} className="text-muted" aria-hidden="true" />
        <span className="text-muted font-mono text-xs">
          Screenshot · /public/screens/{project.id}.png
        </span>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Selected projects"
        subtitle="Full-stack and desktop systems built with layered architecture and strict validation."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.06}>
            <Card className="flex h-full flex-col p-6">
              <ProjectShot project={p} />
              <p className="accent text-xs font-semibold tracking-wide uppercase">{p.category}</p>
              <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
              {p.subtitle && (
                <p
                  className="text-muted mt-1 text-sm"
                  lang={/[؀-ۿ]/.test(p.subtitle) ? 'ar' : undefined}
                >
                  {p.subtitle}
                </p>
              )}
              <p className="text-muted mt-4 leading-relaxed">{p.description}</p>

              <ul className="mt-5 space-y-2.5 text-sm">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                      style={{ background: 'var(--accent)' }}
                      aria-hidden="true"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
                {p.stack.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3 pt-7">
                {p.repos.map((r) => (
                  <a
                    key={r.href + r.label}
                    href={r.href.replace(/\.git$/, '')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !px-4 !py-2.5"
                  >
                    <GithubIcon className="h-4 w-4" />
                    {r.label}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
