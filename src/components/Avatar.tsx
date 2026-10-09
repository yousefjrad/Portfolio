import { useState } from 'react'
import photo from '../assets/profile.jpg'

interface Props {
  /** Replace by passing another path/URL, or swap src/assets/profile.jpg. */
  src?: string
  alt?: string
  className?: string
  initialsClassName?: string
}

/** Photo with a graceful "YJ" fallback while loading or if the image is missing. */
export function Avatar({
  src = photo,
  alt = 'Yousef Jrad - Full-Stack Engineer',
  className = '',
  initialsClassName = 'text-5xl',
}: Props) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden border bg-gradient-to-br from-blue-950 to-blue-900 shadow-xl transition-transform duration-300 hover:scale-[1.02] ${className}`}
      style={{ borderColor: 'var(--border)' }}
    >
      {(!loaded || failed) && (
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center font-semibold tracking-wide text-white ${initialsClassName}`}
        >
          YJ
        </span>
      )}
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover object-top transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}
