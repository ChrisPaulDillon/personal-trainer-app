import "./globals.css";
import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chrisdillonfitness.com"),
  title: {
    default: "Chris Dillon Fitness | Glasgow Personal Trainer",
    template: "%s | Chris Dillon Fitness",
  },
  description:
    "Transform your body and mind with Glasgow's premier personal trainer. Customized workout plans, nutrition advice, and one-on-one coaching to help you reach your fitness goals.",
  keywords: [
    "personal trainer glasgow",
    "fitness coach glasgow",
    "chris dillon fitness",
    "strength training",
    "weight loss glasgow",
    "personal training",
    "gym glasgow",
    "fitness trainer",
    "body transformation",
  ],
  authors: [{ name: "Chris Dillon Fitness" }],
  creator: "Chris Dillon Fitness",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://chrisdillonfitness.com",
    siteName: "Chris Dillon Fitness",
    title: "Chris Dillon Fitness | Glasgow Personal Trainer",
    description:
      "Transform your body and mind with Glasgow's premier personal trainer. Customized workout plans, nutrition advice, and one-on-one coaching.",
    images: [
      {
        url: "https://chrisdillonfitness.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chris Dillon Fitness - Personal Training in Glasgow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Dillon Fitness | Glasgow Personal Trainer",
    description:
      "Transform your body and mind with Glasgow's premier personal trainer.",
    creator: "@chrisdillonfitness",
    images: ["https://chrisdillonfitness.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://chrisdillonfitness.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#FF4400"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://chrisdillonfitness.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#FF4400" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${oswald.variable} ${inter.variable} font-sans`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background"
        >
          Skip to main content
        </a>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}