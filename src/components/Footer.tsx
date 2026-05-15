"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import AECSLogo from './AECSLogo';

const navLinks = [
  { name: 'Home',            href: '/'         },
  { name: 'About AECS',      href: '/about'    },
  { name: 'Expert Faculty',  href: '/faculty'  },
  { name: 'Student Gallery', href: '/gallery'  },
  { name: 'Enrollment',      href: '/register' },
  { name: 'Contact Us',      href: '/contact'  },
];

const subjects = [
  'Mathematics', 'English', 'Physics', 'Chemistry',
  'Biology', 'Computer Science', 'Business Studies', 'Economics',
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook,  label: 'Facebook',  href: '#' },
  { icon: Youtube,   label: 'YouTube',   href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── CTA STRIP ── */}
      <div style={{ background: '#7B1C2E' }}>
        <div className="container mx-auto px-6 max-w-7xl" style={{ padding: '4rem 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
                Admissions Open — {year}
              </p>
              <h2 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                Ready to Begin Your Cambridge Journey?
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Link
                href="/register"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', background: '#fff', color: '#7B1C2E', fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.2s' }}
              >
                Enroll Now <ArrowRight size={12} />
              </Link>
              <a
                href="tel:03144033054"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 26px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div style={{ background: '#FAF7F2', borderTop: '1px solid rgba(123,28,46,0.08)' }}>
        <div className="container mx-auto px-6 max-w-7xl" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1.6fr', gap: '3rem', marginBottom: '4rem' }}>

            {/* Brand */}
            <div>
              <AECSLogo size="md" className="mb-6" />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(26,26,26,0.45)', margin: '1.25rem 0 2rem', maxWidth: 280 }}>
                Lahore's most focused IGCSE &amp; O-Level academy — specialised Cambridge coaching from Grade 6 to O-Level with 100% personalised attention.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    style={{ width: 38, height: 38, border: '1px solid rgba(123,28,46,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(26,26,26,0.35)', textDecoration: 'none', transition: 'all 0.25s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#7B1C2E'; (e.currentTarget as HTMLElement).style.borderColor = '#7B1C2E'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,28,46,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(26,26,26,0.35)'; }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7B1C2E', marginBottom: '1.5rem' }}>
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {navLinks.map((link) => (
                  <li key={link.name} style={{ marginBottom: '10px' }}>
                    <Link
                      href={link.href}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 400, color: 'rgba(26,26,26,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#7B1C2E'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(26,26,26,0.45)'; }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subjects */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7B1C2E', marginBottom: '1.5rem' }}>
                Subjects
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {subjects.map((sub) => (
                  <li key={sub} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(26,26,26,0.4)', marginBottom: '9px' }}>
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7B1C2E', marginBottom: '1.5rem' }}>
                Contact
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    icon: MapPin,
                    label: 'Campus',
                    value: '100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City Raiwind Road, Lahore',
                    href: undefined,
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '0314 4033054',
                    href: 'tel:03144033054',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'Hassani854@gmail.com',
                    href: 'mailto:Hassani854@gmail.com',
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 32, height: 32, background: 'rgba(123,28,46,0.07)', border: '1px solid rgba(123,28,46,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon size={14} style={{ color: '#7B1C2E' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '8px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.28)', marginBottom: 4 }}>{label}</p>
                      {href ? (
                        <a href={href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(26,26,26,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#7B1C2E'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(26,26,26,0.55)'; }}>
                          {value}
                        </a>
                      ) : (
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(26,26,26,0.55)', lineHeight: 1.6 }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(123,28,46,0.08)', marginBottom: '1.75rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, width: 80, height: 1, background: '#7B1C2E', opacity: 0.5 }} />
          </div>

          {/* Bottom bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(26,26,26,0.3)' }}>
              © {year} AECS Academy — Academy for Excellence in Cambridge Studies. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {[
                { label: 'Privacy Policy',   href: '/privacy-policy'      },
                { label: 'Terms of Service', href: '/terms-and-conditions' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(26,26,26,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#7B1C2E'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(26,26,26,0.3)'; }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
