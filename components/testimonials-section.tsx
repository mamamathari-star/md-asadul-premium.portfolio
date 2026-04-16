'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '@/components/ui/reveal'
import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying])

  const handleManualChange = (index: number) => {
    setActiveIndex(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  return (
    <section id="testimonials" className="py-32 md:py-40 bg-[#030303] relative overflow-hidden">
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }}
      />

      {/* Background atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(212,175,55,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Label */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label">{'// Testimonials'}</span>
          </div>
        </Reveal>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Quote mark */}
              <div className="text-accent-gold/20 text-[80px] font-display font-black leading-none mb-2">&ldquo;</div>

              {/* Quote text */}
              <blockquote
                className="font-display font-semibold text-white/80 leading-[1.4] mb-10"
                style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}
              >
                {testimonials[activeIndex].quote}
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-px bg-accent-gold/30 mb-2" />
                <p className="text-white font-semibold text-base">{testimonials[activeIndex].name}</p>
                <p className="text-white/40 text-sm font-mono">
                  {testimonials[activeIndex].role} · {testimonials[activeIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualChange(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? 'w-8 h-1.5 bg-accent-gold'
                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Client logos strip */}
          <Reveal delay={0.4}>
            <div className="mt-20 pt-12 border-t border-white/[0.06]">
              <p className="text-center text-white/20 text-xs font-mono uppercase tracking-widest mb-8">
                Trusted by professionals at
              </p>
              <div className="flex items-center justify-center flex-wrap gap-8 md:gap-16">
                {['Apex Capital', 'Solus Agency', 'Lumière', 'Noir Studio', 'Meridian'].map((brand) => (
                  <span
                    key={brand}
                    className="text-white/20 font-display font-semibold text-sm hover:text-white/40 transition-colors duration-200 cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
