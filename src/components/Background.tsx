import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-[60] h-0.5 origin-left"
      style={{ scaleX, background: 'var(--accent)' }}
    />
  )
}
