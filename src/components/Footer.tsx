import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'

export function Footer() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-muted inline-flex min-h-11 items-center px-2 transition-colors hover:text-[var(--accent)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="btn-primary fixed right-5 bottom-5 z-50 !h-11 !w-11 justify-center !rounded-full !p-0 shadow-lg"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
