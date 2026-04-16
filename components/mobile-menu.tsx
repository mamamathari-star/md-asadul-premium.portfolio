'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, socialLinks } from '@/lib/data'
import Button from '@/components/ui/button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeLink: string
  onLinkClick: (href: string) => void
}

export default function MobileMenu({ isOpen, onClose, activeLink, onLinkClick }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-black/97 backdrop-blur-[20px] flex flex-col lg:hidden"
        >
          <div className="flex flex-col justify-center items-center h-full gap-8 px-8">
            {/* Nav Links */}
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onLinkClick(link.href)}
                  className={`text-3xl font-display font-bold transition-colors duration-200 ${
                    activeLink === link.href ? 'text-accent-gold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button variant="outline" size="lg" href="#contact" onClick={onClose}>
                Let&apos;s Talk
              </Button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex items-center gap-6 mt-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/70 text-xs font-mono uppercase tracking-widest transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Bottom info */}
          <div className="pb-8 flex justify-center">
            <p className="text-white/20 text-xs font-mono">© 2024 MD Asadul</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
