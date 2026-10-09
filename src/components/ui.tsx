import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export const stagger = (delay = 0.06) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: fadeUp.hidden,
        show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="accent mb-2 text-sm font-semibold tracking-wide uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-muted mt-3 text-lg">{subtitle}</p>}
    </Reveal>
  )
}

/** Plain surface card with a subtle hover highlight (no 3D motion). */
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>
}
