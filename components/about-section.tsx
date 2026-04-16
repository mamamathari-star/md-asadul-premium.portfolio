'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from '@/components/ui/reveal'
import SectionHeading from '@/components/section-heading'
import { milestones } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 md:py-40 bg-[#050505] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.015]"
        style={{
          background: 'radial-gradient(ellipse at 100% 0%, #D4AF37 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Visual */}
          <Reveal delay={0} y={40}>
            <div className="relative">
              {/* Abstract visual representation */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/[0.06]">
                {/* Layered atmosphere */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse 70% 60% at 60% 30%, rgba(212,175,55,0.08) 0%, transparent 70%)',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(0,191,255,0.04) 0%, transparent 70%)',
                  }}
                />

                {/* Identity card mockup */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                  <div className="w-full max-w-xs">
                    {/* Avatar placeholder */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-gold/20 to-transparent border border-accent-gold/30 mx-auto mb-6 flex items-center justify-center">
                      <span className="font-display font-bold text-accent-gold text-2xl">A</span>
                    </div>

                    <div className="space-y-3 text-center mb-8">
                      <p className="text-white font-display font-bold text-2xl">MD Asadul</p>
                      <p className="text-white/40 text-sm font-mono">Creative-Tech Professional</p>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      {['Brand Identity', 'UI/UX Design', 'Frontend Dev', 'Motion Design'].map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                        >
                          <span className="text-white/60 text-xs font-mono">{skill}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }, (_, j) => (
                              <div
                                key={j}
                                className={`w-1.5 h-1.5 rounded-full ${j < 4 ? 'bg-accent-gold/60' : 'bg-white/10'}`}
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-accent-gold/20 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-accent-gold/20 rounded-br-lg" />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 w-40"
              >
                <p className="text-2xl font-display font-black text-white">5+</p>
                <p className="text-white/40 text-xs mt-1">Years of premium creative work</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-6 -left-6 glass-card rounded-xl p-4 w-44"
              >
                <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Currently</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
                  <p className="text-white text-sm font-medium">Available</p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <div ref={ref} className="flex flex-col justify-center">
            <SectionHeading
              label="// About"
              title="The Mind Behind the Work"
              subtitle="I operate at the intersection of design intelligence and technical precision — creating digital experiences that carry weight, intention, and lasting visual authority."
            />

            <Reveal delay={0.3}>
              <p className="text-white/50 text-base leading-relaxed mt-6 mb-10">
                With over five years building premium digital products for brands across multiple industries, I&apos;ve developed a rare dual fluency in creative direction and frontend architecture. Every project begins with strategy and ends with craft — no shortcuts, no templates.
              </p>
            </Reveal>

            {/* Milestones */}
            <Reveal delay={0.4}>
              <div className="space-y-0">
                <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Timeline</p>
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-6 py-3 border-b border-white/[0.06] group cursor-default"
                  >
                    <span className="text-accent-gold/70 font-mono text-xs shrink-0 mt-0.5 group-hover:text-accent-gold transition-colors duration-200">
                      {milestone.year}
                    </span>
                    <span className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-200">
                      {milestone.achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-gold/80 hover:text-accent-gold transition-colors duration-200 group"
              >
                Work with me
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
