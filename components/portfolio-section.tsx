'use client'

import Reveal from '@/components/ui/reveal'
import SectionHeading from '@/components/section-heading'
import ProjectCard from '@/components/project-card'
import { projects } from '@/lib/data'
import Button from '@/components/ui/button'

export default function PortfolioSection() {
  return (
    <section id="work" className="py-32 md:py-40 bg-[#050505] relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.015]"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, #D4AF37 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            label="// Work"
            title="Selected Projects"
            subtitle="A curated collection of premium projects spanning brand, design, and engineering."
          />
          <Reveal delay={0.3}>
            <Button variant="ghost" size="md" href="#contact">
              Start a Project
            </Button>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex items-center justify-center">
            <div className="flex items-center gap-4 text-white/30">
              <div className="h-px w-16 bg-white/10" />
              <p className="text-xs font-mono uppercase tracking-widest">More work available on request</p>
              <div className="h-px w-16 bg-white/10" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
