import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

/* ═══════════════════════════════════════════════════════════════════════
   FONTS — next/font/google (no onLoad string issue)
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
   STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════════════ */

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${siteUrl}/#organization`,
      name: 'AECS Academy',
      alternateName: 'Academy for Excellence in Cambridge Studies',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png`, width: 250, height: 60 },
      image: `${siteUrl}/og-image.jpg`,
      description: siteDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '100 Platinum Homes, Al Kabir Town Phase 2',
        addressLocality: 'Lahore', addressRegion: 'Punjab',
        postalCode: '54000', addressCountry: 'PK',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '31.3718', longitude: '74.2357' },
      contactPoint: {
        '@type': 'ContactPoint', telephone: '+92-314-4033054',
        contactType: 'Admissions', email: 'Hassani854@gmail.com',
        areaServed: 'PK', availableLanguage: ['English', 'Urdu'],
      },
      sameAs: [
        'https://facebook.com/aecsacademy',
        'https://instagram.com/aecsacademy',
        'https://linkedin.com/company/aecsacademy',
      ],
      priceRange: '$$',
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        opens: '14:00', closes: '20:00',
      }],
    },
    {
      '@type': 'WebSite', '@id': `${siteUrl}/#website`,
      url: siteUrl, name: siteName,
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'LocalBusiness', '@id': `${siteUrl}/#localbusiness`,
      name: 'AECS Academy', image: `${siteUrl}/campus.jpg`,
      telephone: '+92-314-4033054', email: 'Hassani854@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City Raiwind Road',
        addressLocality: 'Lahore', addressRegion: 'Punjab',
        postalCode: '54000', addressCountry: 'PK',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '31.3718', longitude: '74.2357' },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        opens: '14:00', closes: '20:00',
      }],
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating', ratingValue: '4.9',
        reviewCount: '127', bestRating: '5', worstRating: '1',
      },
    },
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

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body
        className="antialiased min-h-screen flex flex-col bg-background text-foreground"
        style={{ fontFamily: "var(--font-inter), 'Helvetica Neue', sans-serif" }}
      >
        {/* Accessibility skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-full focus:shadow-xl"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-grow pt-20" role="main">
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
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
          `}
        </Script>
      </body>
    </html>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SCROLL TO TOP
   ═══════════════════════════════════════════════════════════════════════ */

function ScrollToTop() {
  return (
    <Script id="scroll-to-top" strategy="afterInteractive">
      {`
        (function() {
          const btn = document.createElement('button');
          btn.innerHTML = '↑';
          btn.setAttribute('aria-label', 'Scroll to top');
          btn.style.cssText = [
            'position:fixed','bottom:24px','right:24px','z-index:999',
            'width:52px','height:52px','border-radius:50%',
            'background:linear-gradient(135deg,#7B1C2E 0%,#5A0E1F 100%)',
            'color:#fff','border:none','font-size:24px','cursor:pointer',
            'display:none','align-items:center','justify-content:center',
            'box-shadow:0 8px 24px rgba(123,28,46,0.3)',
            'transition:all 0.3s cubic-bezier(0.16,1,0.3,1)',
            'opacity:0','transform:scale(0.8)',
          ].join(';');
          document.body.appendChild(btn);

          let visible = false;
          window.addEventListener('scroll', function() {
            const show = window.scrollY > 400;
            if (show !== visible) {
              visible = show;
              btn.style.display = show ? 'flex' : 'none';
              setTimeout(() => {
                btn.style.opacity = show ? '1' : '0';
                btn.style.transform = show ? 'scale(1)' : 'scale(0.8)';
              }, 10);
            }
          }, { passive: true });

          btn.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg,#C8960C 0%,#F0C040 100%)';
            this.style.transform = 'scale(1.1) translateY(-4px)';
            this.style.boxShadow = '0 12px 32px rgba(200,150,12,0.4)';
          });
          btn.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg,#7B1C2E 0%,#5A0E1F 100%)';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 8px 24px rgba(123,28,46,0.3)';
          });
          btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        })();
      `}
    </Script>
  );
}