import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mikhvision Digi Solutions LLP - Digital Services & Software Development',
  description: 'Professional digital services including web development, app development, SEO, social media marketing, and graphic design.',
  keywords: 'web development, app development, SEO, digital marketing, software development, graphic design, digital solutions',
  authors: [{ name: 'Mikhvision Digi Solutions LLP' }],
  creator: 'Mikhvision Digi Solutions LLP',
  publisher: 'Mikhvision Digi Solutions LLP',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mikhvision.com',
    title: 'Mikhvision Digi Solutions LLP - Digital Services & Software Development',
    description: 'Professional digital services including web development, app development, SEO, social media marketing, and graphic design.',
    siteName: 'Mikhvision Digi Solutions',
    images: [{
      url: 'https://mikhvision.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Mikhvision Digi Solutions LLP',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikhvision Digi Solutions LLP - Digital Services & Software Development',
    description: 'Professional digital services including web development, app development, SEO, social media marketing, and graphic design.',
    images: ['https://mikhvision.com/og-image.jpg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5' // Adjust color to match your brand
      }
    ]
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}