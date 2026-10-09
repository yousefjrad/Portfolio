import { motion } from 'framer-motion'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { profile, socials } from '../data/content'
import { useTyping } from '../hooks/useTyping'
import { Avatar } from './Avatar'
import { SocialIcon } from './BrandIcons'
import { fadeUp, stagger } from './ui'

const roles = profile.roles

export function Hero() {
  const typed = useTyping(roles)
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero-bg relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-20 sm:px-8 lg:min-h-screen lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:pt-24">
        <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.p variants={fadeUp} className="text-muted mb-3 text-base font-medium">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl leading-tight font-bold tracking-tight sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="accent mt-6 flex h-8 items-center font-mono text-lg sm:text-xl"
            aria-label={roles.join(', ')}
          >
            <span aria-hidden="true">
              {typed}
              <span className="animate-blink">|</span>
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-muted mt-5 max-w-xl text-lg leading-relaxed">
            {profile.valueProp}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              Explore Projects <ArrowDown size={16} aria-hidden="true" />
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
            <a
              className="btn-secondary"
              href="https://wa.me/963930592537"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp Direct
            </a>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-8 flex gap-2">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target={s.id === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted flex h-11 w-11 items-center justify-center rounded-xl border transition-colors hover:text-[var(--accent)]"
                  style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
                >
                  <SocialIcon id={s.id} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 mx-auto lg:order-2"
        >
          <Avatar
            className="h-60 w-60 rounded-3xl sm:h-72 sm:w-72 lg:h-[26rem] lg:w-[26rem]"
            initialsClassName="text-6xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
