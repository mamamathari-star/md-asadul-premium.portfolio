'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { cn } from '@/lib/utils'

const CATEGORIES = ['All', 'Full-Stack', 'Creative', 'FinTech', 'Open Source']

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = PROJECTS.filter(
    (p) => activeFilter === 'All' || p.category.includes(activeFilter)
  )

  return (
    <section id="work" ref={ref} className="relative py-32 md:py-44 bg-black-off overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-black-border" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-white/2 blur-[100px]" />
      </div>

      <div className="section-padding">
        <div className="container-tight">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="number-label">004</span>
                <div className="w-12 h-px bg-black-border" />
                <span className="overline-text">Selected Work</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[0.9] text-white-off"
              >
                Recent
                <br />
                Projects
              </motion.h2>
            </div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    'px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300',
                    activeFilter === cat
                      ? 'bg-gold text-black'
                      : 'border border-black-border text-white-faint hover:border-white-faint hover:text-white-dim'
                  )}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-black-border">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-white-faint text-sm font-mono mb-6 tracking-wider">
              More projects available on request
            </p>
            <a href="#contact" className="btn-outline text-xs">
              Let&apos;s Discuss Your Project
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-black-card overflow-hidden cursor-pointer"
    >
      {/* Image with zoom */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 brightness-75 group-hover:brightness-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Color overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ backgroundColor: project.color }}
        />
        {/* ID label */}
        <div className="absolute top-4 left-4 number-label opacity-60">{project.id}</div>
        {/* Arrow */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={14} className="text-white" />
        </div>
        {/* Year tag */}
        <div className="absolute bottom-4 right-4 text-xs font-mono text-white/60 bg-black/40 backdrop-blur-sm px-2 py-1">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="overline-text mb-2">{project.category}</p>
            <h3
              className="text-lg md:text-xl font-bold text-white-off group-hover:text-gold transition-colors duration-300"
              style={{ fontFamily: 'var(--font-syne)', letterSpacing: '-0.02em' }}
            >
              {project.title}
            </h3>
          </div>
          <div
            className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
            style={{ backgroundColor: project.color }}
          />
        </div>
        <p className="text-white-faint text-sm leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-white-faint/60 border border-black-border px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ backgroundColor: project.color }}
      />
    </motion.div>
  )
}
