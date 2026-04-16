'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Reveal from '@/components/ui/reveal'
import SectionHeading from '@/components/section-heading'
import { services } from '@/lib/data'

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-32 md:py-40 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] opacity-[0.015] -translate-y-1/2"
        style={{
          background: 'radial-gradient(ellipse at 0% 50%, #00BFFF 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              label="// Services"
              title="What I Build & Deliver"
              subtitle="Premium end-to-end services across the full creative-tech spectrum."
            />
            <Reveal delay={0.3}>
              <div className="mt-8 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-3">Total Services</p>
                <p className="font-display font-black text-white" style={{ fontSize: '3rem' }}>
                  0{services.length}
                </p>
                <p className="text-white/40 text-sm mt-1">disciplines mastered</p>
              </div>
            </Reveal>
          </div>

          {/* Right: Service List */}
          <div className="flex flex-col">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={i * 0.05}>
                <div
                  className="relative py-6 border-b border-white/[0.06] group cursor-default"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Hover background */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 -mx-4 rounded-xl bg-white/[0.02]"
                  />

                  <div className="relative flex gap-6 items-start px-4">
                    <span className="text-white/20 font-mono text-xs shrink-0 mt-1.5 group-hover:text-accent-gold/60 transition-colors duration-300">
                      {service.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-white text-xl group-hover:text-white transition-colors duration-200">
                          {service.title}
                        </h3>
                        <motion.div
                          animate={{
                            x: hoveredIndex === i ? 0 : -8,
                            opacity: hoveredIndex === i ? 1 : 0,
                          }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="text-accent-gold/60 shrink-0 ml-4"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed max-w-lg">{service.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
