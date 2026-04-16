'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/reveal'
import SectionHeading from '@/components/section-heading'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

interface FormData {
  name: string
  email: string
  budget: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const inputClasses = 'w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-accent-gold/50 transition-colors duration-300'

  return (
    <section id="contact" className="py-32 md:py-40 bg-[#050505] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <SectionHeading
              label="// Contact"
              title="Let's Build Something Exceptional"
              subtitle="Ready to transform your digital presence? Let's talk about what you're envisioning."
            />

            <Reveal delay={0.3}>
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                    <Mail size={16} className="text-white/40" />
                  </div>
                  <div>
                    <p className="text-white/25 text-xs font-mono uppercase tracking-wider mb-0.5">Email</p>
                    <a
                      href="mailto:hello@mdasadul.com"
                      className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                    >
                      hello@mdasadul.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                    <MapPin size={16} className="text-white/40" />
                  </div>
                  <div>
                    <p className="text-white/25 text-xs font-mono uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-white/70 text-sm">Dhaka, Bangladesh · Remote Globally</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                  </div>
                  <div>
                    <p className="text-white/25 text-xs font-mono uppercase tracking-wider mb-0.5">Availability</p>
                    <p className="text-white/70 text-sm">Currently accepting new projects</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 pt-8 border-t border-white/[0.06]">
                <p className="text-white/25 text-xs font-mono uppercase tracking-wider mb-4">Response Time</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  I typically respond within <span className="text-white">24 hours</span> on business days. For urgent inquiries, feel free to mention it in your message.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={0.2} y={20}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-3">Message Sent</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. I&apos;ll review your message and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white/30 text-xs font-mono uppercase tracking-wider mb-3">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClasses}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-accent-red text-xs font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/30 text-xs font-mono uppercase tracking-wider mb-3">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClasses}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-accent-red text-xs font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-white/30 text-xs font-mono uppercase tracking-wider mb-3">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClasses} cursor-pointer bg-[#050505]`}
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-[#0a0a0a] text-white/40">Select a range...</option>
                    <option value="2500-5000" className="bg-[#0a0a0a] text-white">$2,500 – $5,000</option>
                    <option value="5000-10000" className="bg-[#0a0a0a] text-white">$5,000 – $10,000</option>
                    <option value="10000-20000" className="bg-[#0a0a0a] text-white">$10,000 – $20,000</option>
                    <option value="20000+" className="bg-[#0a0a0a] text-white">$20,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white/30 text-xs font-mono uppercase tracking-wider mb-3">
                    Project Brief *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and what you're looking to achieve..."
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-accent-red text-xs font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={16} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
