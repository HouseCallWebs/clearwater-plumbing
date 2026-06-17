import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://clearwaterplumbing.com'),
  title: {
    default: 'Clearwater Plumbing Co. | Plumber in Boise, ID — Fast. Clean. Done Right.',
    template: '%s | Clearwater Plumbing Co. — Boise, ID',
  },
  description:
    "Clearwater Plumbing Co. is Boise's top-rated plumber. Licensed & insured. 24/7 emergency service. Serving Boise, Meridian, Nampa, Eagle & the Treasure Valley. Call (208) 555-0187.",
  keywords: [
    'plumber Boise',
    'plumber Meridian Idaho',
    'emergency plumber Boise',
    'drain cleaning Boise',
    'water heater installation Boise',
    'leak detection Boise',
    'plumbing repair Nampa',
    'plumbing service Treasure Valley',
    'sewer line repair Boise',
    'licensed plumber Idaho',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Clearwater Plumbing Co.',
    title: "Clearwater Plumbing Co. | Boise's Top-Rated Plumber",
    description:
      '24/7 emergency plumbing, drain cleaning, water heaters, and more. Serving Boise, Meridian, Nampa & the entire Treasure Valley. Call (208) 555-0187.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clearwater Plumbing Co. | Boise, ID',
    description: 'Fast, clean, done right. 24/7 emergency plumbing in Boise and the Treasure Valley.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
