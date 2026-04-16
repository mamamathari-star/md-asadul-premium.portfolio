'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '@/components/ui/reveal'
import SectionHeading from '@/components/section-heading'
import { faqs } from '@/lib/data'
import { Plus } from 'lucide-react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-32 md:py-40 bg-black relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.02]"
        style={{
          background: 'radial-gradient(ellipse at 100% 0%, #00BFFF 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              label="// FAQ"
              title="Common Questions"
              subtitle="Everything you need to know before we begin building together."
            />
          </div>

          {/* Right: FAQ items */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <Reveal key={faq.number} delay={i * 0.05}>
                <div className="border-b border-white/[0.06]">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full py-6 flex items-center gap-5 text-left group focus:outline-none focus-visible:outline-none"
                    aria-expanded={openIndex === i}
                  >
                    <span className="text-white/20 font-mono text-xs shrink-0 group-hover:text-accent-gold/50 transition-colors duration-200">
                      {faq.number}
                    </span>
                    <span className="flex-1 font-display font-semibold text-white/80 text-base md:text-lg group-hover:text-white transition-colors duration-200">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`shrink-0 transition-colors duration-200 ${
                        openIndex === i ? 'text-accent-gold' : 'text-white/20 group-hover:text-white/50'
                      }`}
                    >
                      <Plus size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/45 text-sm leading-relaxed pb-6 pl-[52px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
