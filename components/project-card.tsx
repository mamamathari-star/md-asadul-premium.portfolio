'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  gradient: string
  accent: string
  year: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A0A0A] cursor-pointer"
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Background with gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 60% 40%, ${project.accent}18 0%, transparent 70%)`,
          }}
        />

        {/* Mock UI content */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="w-full max-w-xs">
            {/* Simulated UI mockup */}
            <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accent }} />
                <div className="h-1.5 bg-white/10 rounded-full flex-1" />
              </div>
              <div className="h-1.5 bg-white/[0.06] rounded-full w-4/5" />
              <div className="h-1.5 bg-white/[0.06] rounded-full w-3/5" />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="h-12 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
                <div className="h-12 rounded-lg" style={{ backgroundColor: `${project.accent}15`, border: `1px solid ${project.accent}30` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/70 flex items-center justify-center"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-white text-sm font-medium">View Project</span>
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </motion.div>

        {/* Year badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
          <span className="text-white/50 text-[10px] font-mono">{project.year}</span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-white/30 text-[11px] font-mono uppercase tracking-widest mb-1">{project.category}</p>
            <h3 className="font-display font-bold text-white text-xl group-hover:text-white/90 transition-colors duration-200">
              {project.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
            className="mt-1 shrink-0 ml-4"
          >
            <ArrowUpRight size={16} className="text-white/20 group-hover:text-white/50 transition-colors duration-200" />
          </motion.div>
        </div>

        <p className="text-white/40 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] font-mono text-white/30 border border-white/[0.08] bg-white/[0.02]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{ background: `linear-gradient(to right, ${project.accent}40, transparent)` }}
      />
    </motion.div>
  )
}
