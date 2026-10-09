import { useEffect, useState } from 'react'

export function useTyping(words: string[], typeMs = 70, deleteMs = 35, pauseMs = 1600) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? deleteMs : typeMs

    if (!deleting && text === word) delay = pauseMs
    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeMs, deleteMs, pauseMs])

  return text
}
