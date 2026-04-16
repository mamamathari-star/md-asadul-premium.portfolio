'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const lineVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const MARQUEE_ITEMS = [
  'React',
  '✦',
  'Next.js',
  '✦',
  'Node.js',
  '✦',
  'TypeScript',
  '✦',
  'AWS',
  '✦',
  'Figma',
  '✦',
  'PostgreSQL',
  '✦',
  'GraphQL',
  '✦',
]

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-black"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-white/3 blur-[100px]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="flex-1 flex flex-col justify-center section-padding pt-36 pb-24"
      >
        <div className="container-tight">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px bg-gold" />
            <span className="overline-text">Available for new projects · 2024</span>
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse-glow" />
          </motion.div>

          {/* Giant headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
          >
            <div className="overflow-hidden mb-2 md:mb-0">
              <motion.h1
                variants={lineVariants}
                className="text-display text-[clamp(3.5rem,10vw,11rem)] leading-[0.88] text-white-off"
              >
                Creative
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2 md:mb-0">
              <motion.div variants={lineVariants} className="flex items-end gap-4 md:gap-6">
                <h1 className="text-display text-[clamp(3.5rem,10vw,11rem)] leading-[0.88] text-transparent bg-clip-text bg-gradient-to-r from-white-off via-white-dim to-white-off/60">
                  Developer
                </h1>
                <div className="hidden md:flex items-center gap-2 mb-4 pb-1">
                  <Sparkles size={16} className="text-gold" />
                  <span className="text-xs font-mono text-gold tracking-widest uppercase">Premium</span>
                </div>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                className="text-display text-[clamp(3.5rem,10vw,11rem)] leading-[0.88]"
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                  color: 'transparent',
                }}
              >
                & Designer
              </motion.h1>
            </div>
          </motion.div>

          {/* Subheadline row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between mt-12 md:mt-16 gap-8"
          >
            <p className="text-white-dim text-base md:text-lg leading-relaxed max-w-lg font-light">
              I craft immersive digital experiences that live at the intersection of{' '}
              <span className="text-white-off">code, design & storytelling</span>. Premium work for
              ambitious teams.
            </p>

            <div className="flex items-center gap-4">
              <Link href="#work" className="btn-primary">
                View Work
                <ArrowDownRight size={16} />
              </Link>
              <Link href="#contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-12 mt-16 md:mt-20 pt-8 border-t border-black-border"
          >
            {[
              { value: '50+', label: 'Projects Shipped' },
              { value: '6+', label: 'Years Experience' },
              { value: '30+', label: 'Happy Clients' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map(({ value, label }) => (
              <div key={label} className="hidden sm:block">
                <div
                  className="text-2xl md:text-3xl font-bold text-white-off mb-1"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {value}
                </div>
                <div className="text-xs text-white-faint font-mono tracking-wider uppercase">
                  {label}
                </div>
              </div>
            ))}

            <div className="flex sm:hidden flex-wrap gap-8">
              {[
                { value: '50+', label: 'Projects' },
                { value: '6+', label: 'Years' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div
                    className="text-2xl font-bold text-white-off mb-1"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-white-faint font-mono tracking-wider uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="border-t border-black-border py-4 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={
                item === '✦'
                  ? 'text-gold text-xs'
                  : 'text-xs font-mono text-white-faint tracking-widest uppercase'
              }
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
