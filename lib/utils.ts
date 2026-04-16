import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ease = {
  premium: [0.16, 1, 0.3, 1] as const,
  cinematic: [0.25, 0.46, 0.45, 0.94] as const,
  sharp: [0.4, 0, 0.2, 1] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
}

export const SITE = {
  name: 'MD Asadul',
  title: 'MD Asadul — Creative Developer',
  description:
    'Premium full-stack developer & creative technologist crafting immersive digital experiences that transcend the ordinary.',
  email: 'hello@mdasadul.dev',
  phone: '+880 1XXX XXX XXX',
  location: 'Dhaka, Bangladesh',
  socials: {
    github: 'https://github.com/mdasadul',
    linkedin: 'https://linkedin.com/in/mdasadul',
    twitter: 'https://twitter.com/mdasadul',
    instagram: 'https://instagram.com/mdasadul',
  },
}
