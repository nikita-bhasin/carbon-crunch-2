import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NFT Landing Page - Discover Rare Collections Of Art & NFTs',
  description: 'Create, Explore, & Collect Digital Art NFTs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

