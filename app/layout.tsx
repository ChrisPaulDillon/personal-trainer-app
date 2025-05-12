import './globals.css';
import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeToggle } from '@/components/theme-toggle';

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '700']
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://athleticmonster.com'),
  title: {
    default: 'Chris Dillon Fitness | Glasgow Personal Trainer',
    template: '%s | The Athletic Monster'
  },
  description: 'Transform your body and mind with Glasgow\'s premier personal trainer. Customized workout plans, nutrition advice, and one-on-one coaching to help you reach your fitness goals.',
  keywords: ['personal trainer glasgow', 'fitness coach glasgow', 'chris dillon fitness', 'strength training', 'weight loss glasgow', 'personal training', 'gym glasgow', 'fitness trainer', 'body transformation'],
  authors: [{ name: 'Chris Dillon Fitness' }],
  creator: 'Chris Dillon Fitness',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://athleticmonster.com',
    siteName: 'Chris Dillon Fitness',
    title: 'Chris Dillon Fitness | Glasgow Personal Trainer',
    description: 'Transform your body and mind with Glasgow\'s premier personal trainer. Customized workout plans, nutrition advice, and one-on-one coaching.',
    images: [
      {
        url: 'https://athleticmonster.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chris Dillon Fitness - Personal Training in Glasgow'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Dillon Fitness | Glasgow Personal Trainer',
    description: 'Transform your body and mind with Glasgow\'s premier personal trainer.',
    creator: '@chrisdillonfitness',
    images: ['https://athleticmonster.com/twitter-image.jpg']
  },
  alternates: {
    canonical: 'https://athleticmonster.com'
  },
  verification: {
    google: 'your-google-verification-code'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://athleticmonster.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#FF4400" />
      </head>
      <body className={`${oswald.variable} ${inter.variable} font-sans`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background">
          Skip to main content
        </a>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}