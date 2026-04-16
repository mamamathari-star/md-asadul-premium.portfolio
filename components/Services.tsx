'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="relative py-32 md:py-44 bg-black overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-black-border" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[600px] bg-gold/3 blur-[100px] pointer-events-none" />

      <div className="section-padding">
        <div className="container-tight">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex items-center gap-4 mb-6"
              >
                <span className="number-label">003</span>
                <div className="w-12 h-px bg-black-border" />
                <span className="overline-text">Services</span>
              </motion.div>
              <motion.h2
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[0.9] text-white-off"
              >
                What I Do
                <br />
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>
                  Exceptionally Well
                </span>
              </motion.h2>
            </div>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-white-dim max-w-sm leading-relaxed"
            >
              Precision-engineered services for companies that refuse to settle for ordinary.
            </motion.p>
          </div>

          {/* Services list */}
          <div className="space-y-0">
            {SERVICES.map((service, index) => (
              <ServiceRow key={service.number} service={service} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceRow({
  service,
  index,
  inView,
}: {
  service: (typeof SERVICES)[0]
  index: number
  inView: boolean
}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const itemInView = useInView(itemRef, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      animate={itemInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group border-t border-black-border last:border-b hover:bg-black-hover transition-colors duration-500 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6 py-8 md:py-10">
        {/* Number */}
        <div className="flex-shrink-0 w-16">
          <span
            className="text-5xl font-bold text-black-border group-hover:text-gold/30 transition-colors duration-500"
            style={{ fontFamily: 'var(--font-syne)', letterSpacing: '-0.05em' }}
          >
            {service.number}
          </span>
        </div>

        {/* Title */}
        <div className="flex-shrink-0 md:w-64">
          <h3
            className="text-xl md:text-2xl font-bold text-white-off group-hover:text-gold transition-colors duration-500"
            style={{ fontFamily: 'var(--font-syne)', letterSpacing: '-0.02em' }}
          >
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-white-faint text-sm leading-relaxed group-hover:text-white-dim transition-colors duration-500">
            {service.description}
          </p>
        </div>

        {/* Tags + Arrow */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-white-faint border border-black-border px-2 py-1 group-hover:border-gold/30 group-hover:text-gold/70 transition-colors duration-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="w-10 h-10 border border-black-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500 flex-shrink-0 ml-auto md:ml-0">
            <ArrowUpRight
              size={16}
              className="text-white-faint group-hover:text-gold transition-colors duration-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
