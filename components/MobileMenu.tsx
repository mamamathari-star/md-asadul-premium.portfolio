'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  onClose: () => void
  activeSection: string
}

const menuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
  },
}

const itemVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function MobileMenu({ onClose, activeSection }: MobileMenuProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-sm bg-black-off border-l border-black-border flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gold flex items-center justify-center">
              <span className="text-black font-bold text-xs font-mono">MA</span>
            </div>
            <span className="font-display font-bold text-sm tracking-widest uppercase text-white-off">
              MD Asadul
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white-dim hover:text-white-off transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
          {NAV_LINKS.map(({ label, href }, i) => (
            <motion.div key={href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
              <Link
                href={href}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-4 py-4 group transition-colors duration-300',
                  activeSection === href.replace('#', '')
                    ? 'text-white-off'
                    : 'text-white-faint hover:text-white-off'
                )}
              >
                <span className="number-label w-6">0{i + 1}</span>
                <span
                  className="text-3xl font-bold"
                  style={{ fontFamily: 'var(--font-syne)', letterSpacing: '-0.03em' }}
                >
                  {label}
                </span>
                {activeSection === href.replace('#', '') && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-gold" />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-8 border-t border-black-border">
          <motion.div
            custom={NAV_LINKS.length}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="#contact"
              onClick={onClose}
              className="btn-primary w-full justify-center text-xs"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
