'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  type = 'button',
  disabled,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

  const variants = {
    primary: 'bg-white text-black hover:bg-white/90 active:scale-[0.98]',
    ghost: 'bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]',
    outline: 'bg-transparent text-white border border-accent-gold/50 hover:border-accent-gold hover:bg-accent-gold/10 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = cn(baseClasses, variants[variant], sizes[size], className)

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} className="inline-flex">
        {buttonContent}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className="inline-flex">
      {buttonContent}
    </button>
  )
}
