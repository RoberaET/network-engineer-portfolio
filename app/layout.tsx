import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Robera Mekonnen - Network Engineer & Security Specialist',
    template: '%s | Robera Mekonnen'
  },
  description: 'Expert Network Engineer specializing in network security, firewall configuration, penetration testing, and Cisco technologies. View portfolio, skills, and contact information.',
  keywords: [
    'Network Engineer',
    'Network Security',
    'Penetration Testing',
    'Firewall Configuration',
    'Cisco Technologies',
    'Fortinet Solutions',
    'Network Infrastructure',
    'Security Specialist',
    'VPN Implementation',
    'Incident Response',
    'Network Design',
    'Cybersecurity'
  ],
  authors: [{ name: 'Robera Mekonnen' }],
  creator: 'Robera Mekonnen',
  publisher: 'Robera Mekonnen',
  generator: 'Next.js',
  applicationName: 'Robera Mekonnen Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://robera.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robera.vercel.app',
    title: 'Robera Mekonnen - Network Engineer & Security Specialist',
    description: 'Expert Network Engineer specializing in network security, firewall configuration, penetration testing, and Cisco technologies. View portfolio, skills, and contact information.',
    siteName: 'Robera Mekonnen Portfolio',
    images: [
      {
        url: 'https://robera.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Robera Mekonnen - Network Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robera Mekonnen - Network Engineer & Security Specialist',
    description: 'Expert Network Engineer specializing in network security, firewall configuration, penetration testing, and Cisco technologies.',
    images: ['https://robera.vercel.app/og-image.png'],
    creator: '@robera_mekonnen',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="application-name" content="Robera Mekonnen Portfolio" />
        <meta name="apple-mobile-web-app-title" content="Robera Portfolio" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <StructuredData />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
