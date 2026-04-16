'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function FAQ() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="relative py-32 md:py-44 bg-black-off overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-black-border" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/4 blur-[120px]" />
      </div>

      <div className="section-padding">
        <div className="container-tight">

          {/* Section header */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="number-label">006</span>
                <div className="w-12 h-px bg-black-border" />
                <span className="overline-text">FAQ</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-display text-[clamp(2rem,4vw,4rem)] leading-[0.9] text-white-off mb-6"
              >
                Questions
                <br />
                <span className="text-gold">Answered</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white-dim text-sm leading-relaxed"
              >
                Everything you need to know before we start building together. Still have questions?{' '}
                <a href="#contact" className="text-gold hover:underline">
                  Drop me a message.
                </a>
              </motion.p>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-3">
              <div className="space-y-0">
                {FAQS.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
  inView,
}: {
  faq: (typeof FAQS)[0]
  index: number
  isOpen: boolean
  onToggle: () => void
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-black-border last:border-b"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="number-label flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className={cn(
              'text-sm md:text-base font-semibold transition-colors duration-300',
              isOpen ? 'text-gold' : 'text-white-off group-hover:text-gold'
            )}
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            {faq.question}
          </span>
        </div>
        <div
          className={cn(
            'w-8 h-8 border flex items-center justify-center flex-shrink-0 transition-all duration-300',
            isOpen
              ? 'border-gold bg-gold/10 text-gold'
              : 'border-black-border text-white-faint group-hover:border-gold/50'
          )}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-12 text-white-dim text-sm leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
