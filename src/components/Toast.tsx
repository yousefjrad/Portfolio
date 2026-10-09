import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { createContext, useCallback, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type ToastKind = 'success' | 'error'
interface ToastItem {
  id: number
  kind: ToastKind
  message: string
}

const ToastContext = createContext<(kind: ToastKind, message: string) => void>(() => {})
export const useToast = () => useContext(ToastContext)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([])

  const push = useCallback((kind: ToastKind, message: string) => {
    const id = Date.now() + Math.random()
    setItems((prev) => [...prev, { id, kind, message }])
    setTimeout(() => setItems((prev) => prev.filter((t) => t.id !== id)), 4500)
  }, [])

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div
        className="pointer-events-none fixed right-4 bottom-4 z-[70] flex flex-col gap-3"
        role="status"
        aria-live="polite"
      >
        <AnimatePresence>
          {items.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="panel pointer-events-auto flex max-w-sm items-start gap-3 rounded-xl px-4 py-3"
              style={{ borderColor: t.kind === 'success' ? 'var(--accent)' : '#dc2626' }}
            >
              {t.kind === 'success' ? (
                <CheckCircle2 size={20} className="accent flex-none" aria-hidden="true" />
              ) : (
                <AlertCircle size={20} className="flex-none text-red-600" aria-hidden="true" />
              )}
              <p className="text-sm">{t.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
