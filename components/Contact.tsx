'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { SITE } from '@/lib/utils'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  subject: string
  budget: string
  message: string
}

const BUDGETS = ['< $3,000', '$3,000 – $8,000', '$8,000 – $20,000', '$20,000+', 'Let\'s Discuss']

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email address'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('loading')
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 2000))
    setFormState('success')
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-44 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-black-border" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/4 blur-[120px]" />
      </div>

      <div className="section-padding">
        <div className="container-tight">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="number-label">007</span>
            <div className="w-12 h-px bg-black-border" />
            <span className="overline-text">Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.88] text-white-off mb-4"
          >
            Let&apos;s Build
            <br />
            <span
              style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}
            >
              Something
            </span>
            <br />
            <span className="text-gold">Extraordinary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white-dim max-w-xl text-base leading-relaxed mb-16"
          >
            Ready to start something exceptional? Tell me about your project and let&apos;s explore
            what we can build together.
          </motion.p>

          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3"
            >
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-24 border border-black-border text-center gap-6"
                >
                  <CheckCircle size={40} className="text-gold" />
                  <div>
                    <h3
                      className="text-2xl font-bold text-white-off mb-2"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-white-dim text-sm">
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormState('idle')
                      setFormData({ name: '', email: '', subject: '', budget: '', message: '' })
                    }}
                    className="btn-outline text-xs"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>

                  {/* Subject */}
                  <FormField
                    label="Project Title"
                    name="subject"
                    type="text"
                    placeholder="e.g. New e-commerce platform"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                  {/* Budget */}
                  <div>
                    <label className="block overline-text mb-3">Budget Range</label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                          className={cn(
                            'px-4 py-2 text-xs font-mono tracking-wider border transition-all duration-200',
                            formData.budget === b
                              ? 'bg-gold/10 border-gold text-gold'
                              : 'border-black-border text-white-faint hover:border-white-faint'
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block overline-text mb-3">
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      className={cn(
                        'w-full bg-black-card border px-5 py-4 text-sm text-white-off placeholder:text-white-faint resize-none focus:outline-none transition-colors duration-300',
                        errors.message
                          ? 'border-red-500/50 focus:border-red-500'
                          : 'border-black-border focus:border-gold'
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className={cn(
                      'btn-primary w-full sm:w-auto justify-center text-xs',
                      formState === 'loading' && 'opacity-70 cursor-not-allowed'
                    )}
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 space-y-8"
            >
              {[
                { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                { label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
                { label: 'Location', value: SITE.location, href: '#' },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="overline-text mb-2">{label}</p>
                  <a
                    href={href}
                    className="text-white-off text-sm hover:text-gold transition-colors duration-300 font-mono"
                  >
                    {value}
                  </a>
                </div>
              ))}

              <div className="pt-4 border-t border-black-border">
                <p className="overline-text mb-4">Response Time</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white-dim text-sm font-mono">
                    Usually within 24 hours
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-black-border">
                <p className="overline-text mb-4">Availability</p>
                <p className="text-white-dim text-sm font-mono">
                  Open to new projects from{' '}
                  <span className="text-gold">Q1 2025</span>
                </p>
              </div>

              <div className="pt-4 border-t border-black-border">
                <p className="overline-text mb-4">Follow</p>
                <div className="flex gap-4">
                  {Object.entries(SITE.socials).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-white-faint hover:text-gold transition-colors duration-300 uppercase tracking-wider"
                    >
                      {key}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block overline-text mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          'w-full bg-black-card border px-5 py-4 text-sm text-white-off placeholder:text-white-faint focus:outline-none transition-colors duration-300',
          error
            ? 'border-red-500/50 focus:border-red-500'
            : 'border-black-border focus:border-gold'
        )}
        autoComplete="off"
      />
      {error && (
        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  )
}
