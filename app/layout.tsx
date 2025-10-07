import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/shared/Navigation'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Elara Voss | Visionary Digital Artist',
  description: 'Immersive portfolio of Elara Voss - Surrealist digital artist blending AI-generated fractals, blockchain-verified NFTs, and interactive AR installations',
  keywords: ['digital art', 'NFT', 'AI art', 'surrealism', 'interactive art', 'blockchain art'],
  authors: [{ name: 'Elara Voss' }],
  creator: 'Elara Voss',
  openGraph: {
    title: 'Elara Voss | Visionary Digital Artist',
    description: 'Immersive portfolio showcasing AI-generated fractals, NFTs, and AR installations',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elara Voss | Visionary Digital Artist',
    description: 'Exploring the intersection of AI, blockchain, and surrealist art',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1A1A2E" />
      </head>
      <body className="antialiased">
        <Suspense fallback={<div className="loading-pulse">Loading...</div>}>
          <Navigation />
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
