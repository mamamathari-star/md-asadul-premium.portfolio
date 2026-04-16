'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )

    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-4 bg-black/70 backdrop-blur-xl border-b border-white/5'
            : 'py-6 bg-transparent'
        )}
      >
        <div className="section-padding">
          <nav className="flex items-center justify-between container-tight">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <span className="text-black font-bold text-xs font-mono">MA</span>
              </div>
              <span
                className="font-display font-bold text-sm tracking-widest text-white-off uppercase"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                MD Asadul
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'relative text-xs tracking-widest uppercase transition-colors duration-300',
                      'font-mono',
                      activeSection === href.replace('#', '')
                        ? 'text-gold'
                        : 'text-white-dim hover:text-white-off'
                    )}
                  >
                    {label}
                    {activeSection === href.replace('#', '') && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 w-full h-px bg-gold"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="#contact" className="btn-primary text-xs px-6 py-3">
                Let&apos;s Talk
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-white-dim hover:text-white-off transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu onClose={() => setMobileOpen(false)} activeSection={activeSection} />
        )}
      </AnimatePresence>
    </>
  )
}
