import { About } from './components/About'
import { ScrollProgress } from './components/Background'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { ToastProvider } from './components/Toast'
import { navLinks } from './data/content'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'

const ids = navLinks.map((l) => l.id)

export default function App() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(ids)

  return (
    <ToastProvider>
      <ScrollProgress />
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ToastProvider>
  )
}
