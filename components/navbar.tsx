'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '@/lib/data'
import MobileMenu from '@/components/mobile-menu'
import Button from '@/components/ui/button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-80px 0px -40% 0px' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleLinkClick = (href: string) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-[16px] border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleLinkClick('#home')}
            >
              <div className="w-8 h-8 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center">
                <span className="text-accent-gold text-xs font-bold font-mono">MA</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                MD <span className="text-accent-gold">ASADUL</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="relative text-sm font-medium group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      activeLink === link.href
                        ? 'text-white'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-accent-gold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
                  <span className="text-white/40 text-xs font-mono">Available</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  href="#contact"
                >
                  Let&apos;s Talk
                </Button>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block w-6 h-0.5 bg-white origin-center"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 10 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-5 h-0.5 bg-white"
                />
                <motion.span
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block w-6 h-0.5 bg-white origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
      />
    </>
  )
}
