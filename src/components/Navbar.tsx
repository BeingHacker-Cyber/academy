"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import AECSLogo from './AECSLogo';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home',    href: '/'        },
  { name: 'About',   href: '/about'   },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden,   setHidden]   = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        setHidden(y > lastY.current + 8 && y > 250);
        if (y < lastY.current) setHidden(false);
        lastY.current = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          hidden ? '-translate-y-full' : 'translate-y-0',
          scrolled
            ? 'bg-white/98 shadow-[0_1px_0_rgba(123,28,46,0.08),0_2px_16px_rgba(0,0,0,0.04)]'
            : 'bg-[#FAF7F2]',
        )}
        style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        {/* Top micro-bar: contact info */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-400',
            scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100',
          )}
          style={{ background: '#7B1C2E' }}
        >
          <div className="container mx-auto px-6 max-w-7xl h-full flex items-center justify-between">
            <p
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, textTransform: 'uppercase' }}
            >
              Academy for Excellence in Cambridge Studies — Lahore
            </p>
            <a
              href="tel:03144033054"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
            >
              <Phone size={10} />
              0314 4033054
            </a>
          </div>
        </div>

        {/* Main nav row */}
        <div className="container mx-auto px-6 max-w-7xl">
          <div className={cn(
            'flex items-center justify-between border-b transition-all duration-400',
            scrolled ? 'h-16 border-[rgba(123,28,46,0.06)]' : 'h-[72px] border-[rgba(123,28,46,0.1)]',
          )}>

            <Link href="/" aria-label="AECS home">
              <AECSLogo size={scrolled ? 'sm' : 'md'} />
            </Link>

            {/* Desktop nav — vertical divider style */}
            <nav className="hidden md:flex items-center h-full" aria-label="Main navigation">
              {links.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.name}
                    href={l.href}
                    className={cn(
                      'relative h-full flex items-center px-6 transition-colors duration-200 group',
                      'border-l border-[rgba(123,28,46,0.08)]',
                      i === links.length - 1 ? 'border-r' : '',
                    )}
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: active ? '#7B1C2E' : 'rgba(26,26,26,0.45)',
                        transition: 'color 0.2s',
                      }}
                      className="group-hover:!text-[#7B1C2E]"
                    >
                      {l.name}
                    </span>
                    {/* Active / hover bottom fill */}
                    <span
                      className={cn(
                        'absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left',
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                      style={{ background: '#7B1C2E' }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-none font-semibold transition-all duration-300 hover:gap-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  background: '#7B1C2E',
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                Enroll Now
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#1a1a1a]"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden bg-black/30 transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 md:hidden w-[80vw] max-w-[340px] bg-[#FAF7F2] flex flex-col transition-transform duration-500',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between px-6 h-[88px] border-b border-[rgba(123,28,46,0.1)]">
          <AECSLogo size="sm" />
          <button
            className="w-9 h-9 flex items-center justify-center text-[#7B1C2E]"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 px-6 py-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.name}
                href={l.href}
                className="flex items-center justify-between py-4 border-b border-[rgba(123,28,46,0.07)] group"
              >
                <span
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: active ? '#7B1C2E' : 'rgba(26,26,26,0.65)',
                  }}
                  className="group-hover:text-[#7B1C2E] transition-colors"
                >
                  {l.name}
                </span>
                <ArrowRight size={16} className="text-[#7B1C2E] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}
        </nav>
        <div className="px-6 pb-8 pt-4 border-t border-[rgba(123,28,46,0.07)]">
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 font-bold"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: '#7B1C2E',
              color: '#fff',
            }}
          >
            Enroll Now <ArrowRight size={13} />
          </Link>
        </div>
      </aside>
    </>
  );
}