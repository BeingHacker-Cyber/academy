import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

/* ═══════════════════════════════════════════════════════════════════════
   SEO METADATA - Optimized for Google Ranking
   ═══════════════════════════════════════════════════════════════════════ */

const siteUrl = 'https://aecsacademy.com'; // Replace with actual domain
const siteName = 'AECS Academy';
const siteDescription = 'Leading IGCSE & O-Level specialized academy in Lahore, Pakistan. Premium Cambridge education with personalized attention from Grade 6 to O-Level. Expert faculty, concept clarity, and proven results near Lake City.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  title: {
    default: 'AECS Academy | Excellence in Cambridge IGCSE & O-Level Education Lahore',
    template: '%s | AECS Academy',
  },
  
  description: siteDescription,
  
  keywords: [
    // Primary Keywords
    'IGCSE Lahore',
    'O Level academy Lahore',
    'Cambridge education Pakistan',
    'AECS Academy',
    
    // Location-based
    'Lake City Lahore academy',
    'Al Kabir Town Phase 2 tuition',
    'Raiwind Road O Level',
    'best IGCSE academy Lahore',
    
    // Service-based
    'IGCSE Mathematics tuition',
    'O Level English coaching',
    'Cambridge Business Studies',
    'online IGCSE classes',
    'on campus O Level',
    
    // Grade-specific
    'Grade 6 to O Level',
    'IGCSE Year 1 Year 2',
    'Cambridge lower secondary',
    
    // Quality indicators
    'experienced Cambridge teachers',
    'personalized IGCSE coaching',
    'small class sizes Lahore',
    'concept clarity O Level',
    
    // Competition keywords
    'alternative to LGS',
    'better than Beacon House',
    'specialized IGCSE only academy',
  ],
  
  authors: [{ name: 'AECS Academy' }],
  creator: 'AECS Academy',
  publisher: 'AECS Academy',
  
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    siteName: siteName,
    title: 'AECS Academy - Premium IGCSE & O-Level Education in Lahore',
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // Create this image
        width: 1200,
        height: 630,
        alt: 'AECS Academy - Excellence in Cambridge Education',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'AECS Academy - IGCSE & O-Level Excellence',
    description: siteDescription,
    images: [`${siteUrl}/twitter-image.jpg`],
    creator: '@AECSAcademy', // Create Twitter account
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
  
  alternates: {
    canonical: siteUrl,
  },
  
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add from Google Search Console
    // yandex: 'YOUR_YANDEX_CODE',
    // bing: 'YOUR_BING_CODE',
  },
  
  category: 'education',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F6F2' },
    { media: '(prefers-color-scheme: dark)', color: '#1A2B4A' },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════
   STRUCTURED DATA (JSON-LD) for Rich Snippets
   ═══════════════════════════════════════════════════════════════════════ */

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organization
    {
      '@type': 'EducationalOrganization',
      '@id': `${siteUrl}/#organization`,
      name: 'AECS Academy',
      alternateName: 'Academy for Excellence in Cambridge Studies',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
        width: 250,
        height: 60,
      },
      image: `${siteUrl}/og-image.jpg`,
      description: siteDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '100 Platinum Homes, Al Kabir Town Phase 2',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        postalCode: '54000',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '31.3718',
        longitude: '74.2357',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+92-314-4033054',
        contactType: 'Admissions',
        email: 'Hassani854@gmail.com',
        areaServed: 'PK',
        availableLanguage: ['English', 'Urdu'],
      },
      sameAs: [
        'https://facebook.com/aecsacademy', // Create these
        'https://instagram.com/aecsacademy',
        'https://linkedin.com/company/aecsacademy',
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '14:00',
          closes: '20:00',
        },
      ],
    },
    
    // Website
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    
    // Local Business
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'AECS Academy',
      image: `${siteUrl}/campus.jpg`,
      telephone: '+92-314-4033054',
      email: 'Hassani854@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City Raiwind Road',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        postalCode: '54000',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '31.3718',
        longitude: '74.2357',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '14:00',
          closes: '20:00',
        },
      ],
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
      },
    },
    
    // Breadcrumb
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════
   ROOT LAYOUT COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        
        {/* Preconnect for Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts - Optimized Loading */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@300;400;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@300;400;600;700;800&display=swap"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@300;400;600;700;800&display=swap"
          />
        </noscript>
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground">
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-full focus:shadow-xl"
        >
          Skip to main content
        </a>
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main id="main-content" className="flex-grow pt-20 animate-page-enter" role="main">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Toast Notifications */}
        <Toaster />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
        
        {/* Google Analytics - Add your GA4 ID */}
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
        
        {/* Performance Monitoring */}
        <Script id="performance-observer" strategy="afterInteractive">
          {`
            if ('PerformanceObserver' in window) {
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                  }
                }
              });
              observer.observe({ entryTypes: ['largest-contentful-paint'] });
            }
          `}
        </Script>
      </body>
    </html>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SCROLL TO TOP COMPONENT (Client-side)
   ═══════════════════════════════════════════════════════════════════════ */

function ScrollToTop() {
  return (
    <Script id="scroll-to-top" strategy="afterInteractive">
      {`
        (function() {
          'use strict';
          
          // Create button
          const btn = document.createElement('button');
          btn.innerHTML = '↑';
          btn.setAttribute('aria-label', 'Scroll to top');
          btn.className = 'no-print';
          btn.style.cssText = [
            'position:fixed',
            'bottom:24px',
            'right:24px',
            'z-index:999',
            'width:52px',
            'height:52px',
            'border-radius:50%',
            'background:linear-gradient(135deg, #7B1C2E 0%, #5A0E1F 100%)',
            'color:#fff',
            'border:none',
            'font-size:24px',
            'cursor:pointer',
            'display:none',
            'align-items:center',
            'justify-content:center',
            'box-shadow:0 8px 24px rgba(123,28,46,0.3)',
            'transition:all 0.3s cubic-bezier(0.16,1,0.3,1)',
            'opacity:0',
            'transform:scale(0.8)',
          ].join(';');
          
          document.body.appendChild(btn);
          
          // Show/hide on scroll
          let isVisible = false;
          window.addEventListener('scroll', function() {
            const shouldShow = window.scrollY > 400;
            if (shouldShow !== isVisible) {
              isVisible = shouldShow;
              btn.style.display = shouldShow ? 'flex' : 'none';
              setTimeout(() => {
                btn.style.opacity = shouldShow ? '1' : '0';
                btn.style.transform = shouldShow ? 'scale(1)' : 'scale(0.8)';
              }, 10);
            }
          }, { passive: true });
          
          // Hover effect
          btn.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #C8960C 0%, #F0C040 100%)';
            this.style.transform = 'scale(1.1) translateY(-4px)';
            this.style.boxShadow = '0 12px 32px rgba(200,150,12,0.4)';
          });
          
          btn.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #7B1C2E 0%, #5A0E1F 100%)';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 8px 24px rgba(123,28,46,0.3)';
          });
          
          // Click handler
          btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        })();
      `}
    </Script>
  );
}