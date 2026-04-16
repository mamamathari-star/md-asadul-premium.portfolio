'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '@/components/ui/button'
import MagneticButton from '@/components/ui/magnetic-button'
import { ArrowDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        {/* Radial spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% -5%, rgba(212,175,55,0.06) 0%, rgba(0,0,0,0) 65%)',
          }}
        />
        {/* Side ambient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 50% at 10% 50%, rgba(0,191,255,0.03) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 50% at 90% 50%, rgba(255,0,0,0.02) 0%, transparent 70%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to top, #000000, transparent)',
          }}
        />
      </div>

      {/* Floating decorative lines */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
              Available for new projects · 2024
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="overflow-hidden">
            <motion.div variants={itemVariants}>
              <h1
                className="font-display font-black text-white leading-[0.92] tracking-tight"
                style={{ fontSize: 'clamp(52px, 8vw, 130px)' }}
              >
                <span className="block">Digital</span>
                <span className="block text-gradient-gold">Craft &amp;</span>
                <span className="block">Creative</span>
                <span className="block">Power.</span>
              </h1>
            </motion.div>
          </div>

          {/* Sub row */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12"
          >
            <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-sm font-light">
              Brand Identity. UI/UX Design. Frontend Engineering. Premium Digital Experiences built for the elite.
            </p>
            <div className="hidden md:block w-px h-16 bg-white/10" />
            <div className="flex flex-col gap-1">
              <span className="text-white/30 text-xs font-mono uppercase tracking-widest">Based in</span>
              <span className="text-white font-medium">Dhaka, Bangladesh</span>
              <span className="text-white/40 text-sm">Open to global projects</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Button variant="primary" size="lg" href="#work">
                View Selected Work
                <ArrowRight size={16} />
              </Button>
            </MagneticButton>
            <Button variant="ghost" size="lg" href="#contact">
              Start a Project
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '5+', label: 'Years Experience' },
              { value: '12+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="font-display font-black text-white"
                  style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
                >
                  {stat.value}
                </span>
                <span className="text-white/40 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
        <span className="text-white/20 text-[10px] font-mono uppercase tracking-widest rotate-90 origin-center translate-y-3">
          scroll
        </span>
      </motion.div>
    </section>
  )
}
