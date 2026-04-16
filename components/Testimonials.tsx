'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (index: number, dir: number) => {
    setDirection(dir)
    setCurrent(index)
  }

  const prev = () => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, -1)
  const next = () => goTo((current + 1) % TESTIMONIALS.length, 1)

  useEffect(() => {
    timerRef.current = setTimeout(() => next(), 6000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
    }),
  }

  const testimonial = TESTIMONIALS[current]

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-32 md:py-44 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-black-border" />
        <div className="absolute inset-0 bg-gradient-radial from-white/3 via-transparent to-transparent" />
      </div>

      <div className="section-padding">
        <div className="container-tight">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-20"
          >
            <span className="number-label">005</span>
            <div className="w-12 h-px bg-black-border" />
            <span className="overline-text">Testimonials</span>
          </motion.div>

          {/* Slider */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            {/* Quote area */}
            <div className="lg:col-span-3">
              <Quote size={40} className="text-gold/30 mb-8" />

              <div className="relative min-h-[180px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <blockquote
                      className="text-xl md:text-2xl lg:text-3xl text-white-off leading-relaxed font-light mb-8"
                      style={{ fontFamily: 'var(--font-syne)', letterSpacing: '-0.02em' }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gold flex items-center justify-center flex-shrink-0">
                        <span className="text-black text-xs font-bold font-mono">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-white-off font-semibold text-sm"
                          style={{ fontFamily: 'var(--font-syne)' }}
                        >
                          {testimonial.author}
                        </div>
                        <div className="text-white-faint text-xs font-mono tracking-wider">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Controls & dots */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col gap-8 items-center lg:items-start justify-between lg:justify-start">
              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 border border-black-border flex items-center justify-center text-white-faint hover:border-gold hover:text-gold transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 border border-black-border flex items-center justify-center text-white-faint hover:border-gold hover:text-gold transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Dots */}
              <div className="flex lg:flex-col gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? 1 : -1)}
                    className={cn(
                      'transition-all duration-300',
                      i === current
                        ? 'w-8 h-1 lg:w-1 lg:h-8 bg-gold'
                        : 'w-4 h-1 lg:w-1 lg:h-4 bg-black-border hover:bg-white-faint'
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="hidden lg:flex items-center gap-2">
                <span
                  className="text-4xl font-bold text-white-off"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {String(current + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-px bg-black-border" />
                <span
                  className="text-4xl font-bold text-white-faint"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {String(TESTIMONIALS.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
