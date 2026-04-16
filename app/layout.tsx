import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MD Asadul — Premium Creative-Tech Portfolio',
  description: 'Premium dark cinematic portfolio of MD Asadul — Brand Identity, UI/UX Design, Frontend Development, and Creative Direction.',
  keywords: ['portfolio', 'UI/UX design', 'frontend development', 'brand identity', 'creative director'],
  authors: [{ name: 'MD Asadul' }],
  openGraph: {
    title: 'MD Asadul — Premium Creative-Tech Portfolio',
    description: 'Premium dark cinematic portfolio of MD Asadul.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
