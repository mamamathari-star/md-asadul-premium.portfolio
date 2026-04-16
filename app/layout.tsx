import type { Metadata } from 'next'
import './globals.css'
import { SITE } from '@/lib/utils'

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Creative Technologist',
    'Portfolio',
    'Bangladesh',
    'MD Asadul',
  ],
  authors: [{ name: 'MD Asadul' }],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white-off antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}

