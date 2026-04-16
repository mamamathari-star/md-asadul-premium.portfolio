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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
