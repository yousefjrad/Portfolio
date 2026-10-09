import { Loader2, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { profile, socials } from '../data/content'
import { SocialIcon } from './BrandIcons'
import { useToast } from './Toast'
import { Reveal, SectionHeading } from './ui'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}
type Errors = Partial<Record<keyof FormState, string>>

const empty: FormState = { name: '', email: '', subject: '', message: '' }

function validate(v: FormState): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name (2+ characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please add a subject (3+ characters).'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

export function Contact() {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [sending, setSending] = useState(false)
  const toast = useToast()

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name as keyof FormState]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      toast('error', 'Please fix the highlighted fields.')
      return
    }
    setSending(true)
    // Opens the visitor's mail client with the message pre-filled (no backend required).
    const body = `${values.message}\n\n— ${values.name} (${values.email})`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => {
      window.location.href = href
      setSending(false)
      setValues(empty)
      toast('success', 'Thanks! Your email app should open with the message ready to send.')
    }, 600)
  }

  const field = (name: keyof FormState, label: string, type = 'text') => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={values[name]}
        onChange={onChange}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-err` : undefined}
        className="input"
        autoComplete={name === 'name' ? 'name' : name === 'email' ? 'email' : 'off'}
      />
      {errors[name] && (
        <p id={`${name}-err`} className="mt-1 text-xs text-red-600">
          {errors[name]}
        </p>
      )}
    </div>
  )

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Contact"
        subtitle="Available for freelance projects, collaborations and teaching."
      />
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {field('name', 'Name')}
              {field('email', 'Email', 'email')}
            </div>
            {field('subject', 'Subject')}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-err' : undefined}
                className="input resize-y"
              />
              {errors.message && (
                <p id="message-err" className="mt-1 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </div>
            <button type="submit" className="btn-primary" disabled={sending}>
              {sending ? (
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              ) : (
                <Send size={16} aria-hidden="true" />
              )}
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </Reveal>

        <Reveal className="space-y-5 lg:col-span-2" delay={0.06}>
          <div className="card space-y-5 p-6 sm:p-8">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4">
              <span
                className="accent flex h-11 w-11 flex-none items-center justify-center rounded-xl"
                style={{ background: 'var(--accent-soft)' }}
              >
                <Mail size={20} aria-hidden="true" />
              </span>
              <span>
                <span className="text-muted block text-xs">Email</span>
                <span className="link font-medium break-all">{profile.email}</span>
              </span>
            </a>
            <a
              href="https://wa.me/963930592537"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <span
                className="accent flex h-11 w-11 flex-none items-center justify-center rounded-xl"
                style={{ background: 'var(--accent-soft)' }}
              >
                <Phone size={20} aria-hidden="true" />
              </span>
              <span>
                <span className="text-muted block text-xs">Phone / WhatsApp</span>
                <span className="link font-medium" dir="ltr">
                  {profile.phone}
                </span>
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {socials
              .filter((s) => s.id === 'linkedin' || s.id === 'github')
              .map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center"
                >
                  <SocialIcon id={s.id} className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
