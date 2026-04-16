'use client'

import Reveal from '@/components/ui/reveal'
import { navLinks, socialLinks } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#030303] border-t border-white/[0.06] relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, #D4AF37 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center">
                  <span className="text-accent-gold text-xs font-bold font-mono">MA</span>
                </div>
                <span className="font-display font-bold text-white text-lg tracking-tight">
                  MD <span className="text-accent-gold">ASADUL</span>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mt-4">
                Premium creative-tech professional specializing in brand identity, UI/UX design, and high-end frontend development for ambitious digital projects.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-2 mt-6">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
                <span className="text-white/30 text-xs font-mono">Available for new projects</span>
              </div>
            </Reveal>
          </div>

          {/* Navigation */}
          <div>
            <Reveal>
              <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-5">Navigation</p>
            </Reveal>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <Reveal key={link.href} delay={i * 0.05}>
                  <li>
                    <a
                      href={link.href}
                      className="text-white/45 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-50 transition-opacity duration-200"
                      />
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <Reveal>
              <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-5">Connect</p>
            </Reveal>
            <ul className="space-y-3">
              {socialLinks.map((link, i) => (
                <Reveal key={link.label} delay={i * 0.05}>
                  <li>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/45 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-50 transition-opacity duration-200"
                      />
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <div className="mt-6">
                <a
                  href="mailto:hello@mdasadul.com"
                  className="text-white/30 text-xs font-mono hover:text-white/60 transition-colors duration-200"
                >
                  hello@mdasadul.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <Reveal>
            <p className="text-white/20 text-xs font-mono">
              © {currentYear} MD Asadul. All rights reserved.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-6">
              <span className="text-white/15 text-xs font-mono">Designed & Built with precision</span>
              <div className="flex items-center gap-1.5">
                <span className="text-white/15 text-xs font-mono">Next.js</span>
                <span className="text-white/10 text-xs">·</span>
                <span className="text-white/15 text-xs font-mono">Tailwind</span>
                <span className="text-white/10 text-xs">·</span>
                <span className="text-white/15 text-xs font-mono">Framer Motion</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  )
}
