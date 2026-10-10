import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'
import type { Theme } from '../hooks/useTheme'

interface Props {
  active: string
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ active, theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    if (open) {
      // On mobile, starting a smooth scroll in the same frame that the menu collapses
      // gets cancelled by the browser. Close the menu first, then scroll.
      setOpen(false)
      window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 60)
    } else {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || open ? 'color-mix(in srgb, var(--bg) 88%, transparent)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(12px)' : undefined,
        borderBottom: `1px solid ${scrolled || open ? 'var(--border)' : 'transparent'}`,
      }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <button
          onClick={() => go('home')}
          className="min-h-11 text-lg font-bold tracking-tight"
          style={{ color: 'var(--heading)' }}
          aria-label={`${profile.name} – back to top`}
        >
          Yousef Jrad
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                aria-current={active === l.id ? 'page' : undefined}
                className="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                style={{ color: active === l.id ? 'var(--accent)' : 'var(--muted)' }}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute right-3 bottom-0.5 left-3 h-0.5 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border transition-colors hover:text-[var(--accent)]"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border md:hidden"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden px-5 pb-4 md:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="w-full rounded-lg px-3 py-3 text-left font-medium"
                  style={{ color: active === l.id ? 'var(--accent)' : 'var(--text)' }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
