'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, ExternalLink } from 'lucide-react'

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
}

const SKILLS = [
  { category: 'Front-End', items: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'] },
  { category: 'Back-End', items: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Linux'] },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-44 bg-black-off overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-px h-full bg-black-border" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <div className="section-padding">
        <div className="container-tight">

          {/* Section label */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex items-center gap-4 mb-16"
          >
            <span className="number-label">002</span>
            <div className="w-12 h-px bg-black-border" />
            <span className="overline-text">About Me</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left column — text */}
            <div>
              <motion.h2
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] text-white-off mb-8"
              >
                Crafting the
                <br />
                <span className="text-gold">Extraordinary</span>
                <br />
                in Code.
              </motion.h2>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-white-dim leading-relaxed mb-6 text-base md:text-lg"
              >
                I&apos;m MD Asadul — a full-stack developer and creative technologist based in Dhaka,
                Bangladesh. I specialize in building premium web products that balance technical rigor
                with design sophistication.
              </motion.p>

              <motion.p
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="text-white-dim leading-relaxed mb-10 text-base md:text-lg"
              >
                With 6+ years of hands-on experience, I&apos;ve shipped products across e-commerce,
                fintech, healthtech, and creative industries. My approach is deliberate:{' '}
                <span className="text-white-off">
                  every interaction, animation, and architecture decision is considered
                </span>
                .
              </motion.p>

              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-wrap gap-4"
              >
                <a href="#contact" className="btn-primary text-xs px-6 py-3">
                  Start a Project
                  <ExternalLink size={14} />
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="btn-outline text-xs px-6 py-3"
                >
                  Download CV
                  <Download size={14} />
                </a>
              </motion.div>
            </div>

            {/* Right column — skills */}
            <div className="space-y-8">
              {SKILLS.map(({ category, items }, catIndex) => (
                <motion.div
                  key={category}
                  custom={catIndex + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="overline-text">{category}</span>
                    <div className="flex-1 h-px bg-black-border" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-mono border border-black-border text-white-dim hover:border-gold/50 hover:text-gold transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Personal tagline */}
              <motion.blockquote
                custom={8}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="mt-8 pt-8 border-t border-black-border"
              >
                <p
                  className="text-xl md:text-2xl font-bold text-white-off leading-tight"
                  style={{ fontFamily: 'var(--font-syne)', letterSpacing: '-0.02em' }}
                >
                  &ldquo;Good enough is the enemy of great. I build things I&apos;m proud to put my
                  name on.&rdquo;
                </p>
                <footer className="mt-4 overline-text">— MD Asadul, always</footer>
              </motion.blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
