import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import '@/styles/tailwindcss.scss';
import { AppBar } from '@/components/main/AppBar';
import { ThemeProvider } from '@/components/ThemeProvider';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { BackgroundBeam } from '@/components/BackgroundBeam';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mehdi Vaezi',
  description: 'Mehdi Vaezi personal website. Javascript Engineer | Vue/Nuxt | React/Next | React-Native',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  metadataBase: new URL('https://mvaezi.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'fa-IR': '/fa'
    }
  },
  openGraph: {
    images: '/icon.png',
    title: 'mvaezi.com',
    description: 'Mehdi Vaezi personal website. Javascript Engineer | Vue/Nuxt | React/Next | React-Native',
    url: 'https://mvaezi.com',
    siteName: 'mvaezi.com',
    type: 'website'
  },
  icons: {
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-[var(--background)] ${inter.className}`}>
        <ThemeProvider>
          <AppBar />
          <main>{children}</main>
          <SpeedInsights />
          <Analytics />
          <BackgroundBeam />
        </ThemeProvider>
      </body>
    </html>
  );
}
