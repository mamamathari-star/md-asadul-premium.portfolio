'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { SITE } from '@/lib/utils'

const SOCIAL_LINKS = [
  { icon: Github, label: 'GitHub', href: SITE.socials.github },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.socials.linkedin },
  { icon: Twitter, label: 'Twitter', href: SITE.socials.twitter },
  { icon: Instagram, label: 'Instagram', href: SITE.socials.instagram },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-black-off border-t border-black-border overflow-hidden">
      {/* Top section */}
      <div className="section-padding pt-24 pb-16">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-20">
            {/* Brand */}
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold flex items-center justify-center">
                  <span className="text-black font-bold text-sm font-mono">MA</span>
                </div>
                <span
                  className="font-bold text-base tracking-widest text-white-off uppercase"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  MD Asadul
                </span>
              </div>
              <p className="text-white-faint text-sm leading-relaxed mb-6">
                Full-stack developer & creative technologist crafting premium digital experiences
                that move at the speed of imagination.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 border border-black-border flex items-center justify-center text-white-faint hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <p className="overline-text mb-6">Navigation</p>
                <ul className="space-y-3">
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-white-faint hover:text-gold transition-colors duration-300 font-mono tracking-wide"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="overline-text mb-6">Services</p>
                <ul className="space-y-3">
                  {[
                    'Full-Stack Dev',
                    'UI/UX Design',
                    'Performance',
                    'API & Integrations',
                    'Tech Consulting',
                  ].map((s) => (
                    <li key={s}>
                      <span className="text-sm text-white-faint font-mono tracking-wide cursor-default hover:text-gold transition-colors duration-300">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="overline-text mb-6">Contact</p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-white-faint hover:text-gold transition-colors duration-300 font-mono tracking-wide"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <span className="text-sm text-white-faint font-mono tracking-wide">
                      {SITE.location}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA banner */}
          <div className="border border-black-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-black-card hover:border-gold/30 transition-colors duration-500">
            <div>
              <p className="overline-text mb-3">Start a Project</p>
              <h3
                className="text-2xl md:text-4xl font-bold text-white-off"
                style={{ fontFamily: 'var(--font-syne)', letterSpacing: '-0.03em' }}
              >
                Ready to build something{' '}
                <span className="text-gold">extraordinary?</span>
              </h3>
            </div>
            <Link
              href="#contact"
              className="btn-primary whitespace-nowrap flex-shrink-0"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black-border">
        <div className="section-padding py-6">
          <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-white-faint tracking-wider">
              © {year} MD Asadul. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs font-mono text-white-faint tracking-wider">
                Designed & built with care in Dhaka 🇧🇩
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-bold text-white-off/[0.02] pointer-events-none select-none leading-none"
        style={{ fontFamily: 'var(--font-syne)' }}
        aria-hidden="true"
      >
        ASADUL
      </div>
    </footer>
  )
}
