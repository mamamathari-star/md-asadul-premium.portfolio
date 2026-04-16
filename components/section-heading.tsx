'use client'

import Reveal from '@/components/ui/reveal'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  titleClassName?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  titleClassName = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''}`}>
      <Reveal delay={0}>
        <span className="section-label">{label}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`font-display font-extrabold text-white mt-4 mb-6 leading-[1.05] ${titleClassName}`}
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
