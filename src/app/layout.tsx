
import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

/* ═══════════════════════════════════════════════════════════════════════
   FONTS
   ═══════════════════════════════════════════════════════════════════════ */

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

/* ═══════════════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════════════ */

const siteUrl = 'https://aecsacademy.com';
const siteName = 'AECS Academy';
const siteDescription =
  'Leading IGCSE & O-Level specialized academy in Lahore, Pakistan. Premium Cambridge education with personalized attention from Grade 6 to O-Level. Expert faculty, concept clarity, and proven results near Lake City.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AECS Academy | Excellence in Cambridge IGCSE & O-Level Education Lahore',
    template: '%s | AECS Academy',
  },
  description: siteDescription,
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    'IGCSE Lahore', 'O Level academy Lahore', 'Cambridge education Pakistan', 'AECS Academy',
    'Lake City Lahore academy', 'Al Kabir Town Phase 2 tuition', 'Raiwind Road O Level',
    'best IGCSE academy Lahore', 'IGCSE Mathematics tuition', 'O Level English coaching',
    'Cambridge Business Studies', 'online IGCSE classes', 'on campus O Level',
    'Grade 6 to O Level', 'IGCSE Year 1 Year 2', 'Cambridge lower secondary',
    'experienced Cambridge teachers', 'personalized IGCSE coaching', 'small class sizes Lahore',
    'concept clarity O Level', 'specialized IGCSE only academy',
  ],
  authors: [{ name: 'AECS Academy' }],
  creator: 'AECS Academy',
  publisher: 'AECS Academy',
  formatDetection: { email: true, address: true, telephone: true },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    siteName,
    title: 'AECS Academy - Premium IGCSE & O-Level Education in Lahore',
    description: siteDescription,
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: 'AECS Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AECS Academy - IGCSE & O-Level Excellence',
    description: siteDescription,
    images: [`${siteUrl}/twitter-image.jpg`],
    creator: '@AECSAcademy',
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: siteUrl },
  verification: { google: 'YOUR_GOOGLE_VERIFICATION_CODE' },
  category: 'education',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f4' },
    { media: '(prefers-color-scheme: dark)',  color: '#0b1628' },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════
   ROOT LAYOUT
   ═══════════════════════════════════════════════════════════════════════ */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>

      <body
        className="antialiased min-h-screen flex flex-col bg-background text-foreground"
        style={{ fontFamily: "var(--font-inter), 'Helvetica Neue', sans-serif" }}
      >
        <Navbar />

        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>

        <Footer />
        <Toaster />
        <ScrollToTop />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}

function ScrollToTop() {
  return (
    <Script id="scroll-to-top" strategy="afterInteractive">
      {`
        (function() {
          const btn = document.createElement('button');
          btn.innerHTML = '↑';
          btn.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:999;width:52px;height:52px;border-radius:50%;background:#7B1C2E;color:#fff;border:none;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(123,28,46,0.3);';
          document.body.appendChild(btn);
          window.addEventListener('scroll', () => {
            btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
          });
          btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        })();
      `}
    </Script>
  );
}
