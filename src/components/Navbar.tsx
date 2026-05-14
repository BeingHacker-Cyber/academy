"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
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
  const [lastY,    setLastY]    = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 32);
        setHidden(y > lastY && y > 200);
        setLastY(y);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        hidden ? '-translate-y-full' : 'translate-y-0',
        scrolled
          ? 'glass shadow-[0_1px_24px_rgba(15,30,56,0.08)]'
          : 'bg-transparent',
      )}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className={cn(
            'flex items-center justify-between transition-all duration-300',
            scrolled ? 'h-16' : 'h-24',
          )}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <AECSLogo size={scrolled ? 'sm' : 'md'} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  className={cn(
                    'relative px-4 py-2 font-label text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-200',
                    pathname === l.href
                      ? 'text-[var(--clr-maroon)]'
                      : 'text-[var(--clr-navy)] hover:text-[var(--clr-maroon)]',
                  )}
                >
                  {l.name}
                  {/* Active bar */}
                  <span className={cn(
                    'absolute bottom-0.5 left-4 right-4 h-[1.5px] rounded-full transition-all duration-300',
                    pathname === l.href
                      ? 'bg-[var(--clr-gold)] scale-x-100'
                      : 'bg-[var(--clr-gold)] scale-x-0 group-hover:scale-x-100',
                  )} />
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:03144033054"
                className="flex items-center gap-1.5 font-label text-[10px] uppercase tracking-widest font-semibold text-[var(--clr-navy)]/60 hover:text-[var(--clr-maroon)] transition-colors"
              >
                <Phone size={12} />
                0314 4033054
              </a>
              <Link
                href="/register"
                className="btn-primary btn-gold-sweep flex items-center gap-2 px-6 h-10 rounded-full font-label text-[11px] uppercase tracking-[0.16em] font-bold text-white"
              >
                Enroll Now
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-[var(--clr-navy)] rounded-lg hover:bg-[var(--clr-maroon-mist)] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <div className={cn(
        'fixed inset-0 z-40 md:hidden transition-all duration-500',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--clr-navy)]/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div className={cn(
          'absolute top-0 right-0 bottom-0 w-[78vw] max-w-sm bg-[var(--clr-cream)] flex flex-col pt-24 pb-10 px-8 shadow-2xl transition-transform duration-500',
          open ? 'translate-x-0' : 'translate-x-full',
        )}>
          {/* Close */}
          <button
            className="absolute top-6 right-6 p-2 text-[var(--clr-navy)]"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>

          <div className="mb-10">
            <AECSLogo size="sm" />
          </div>

          <nav className="flex flex-col flex-1">
            {links.map((l, i) => (
              <Link
                key={l.name}
                href={l.href}
                className={cn(
                  'flex items-center justify-between py-4 border-b border-[var(--clr-navy)]/8 font-display text-2xl font-medium transition-colors',
                  pathname === l.href
                    ? 'text-[var(--clr-maroon)]'
                    : 'text-[var(--clr-navy)] hover:text-[var(--clr-maroon)]',
                )}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.name}
                <ArrowRight size={18} className="text-[var(--clr-gold)] opacity-60" />
              </Link>
            ))}
          </nav>

          <div className="space-y-3 pt-6">
            <a
              href="tel:03144033054"
              className="flex items-center gap-2 font-label text-[11px] uppercase tracking-widest text-[var(--clr-navy)]/50"
            >
              <Phone size={13} className="text-[var(--clr-maroon)]" />
              0314 4033054
            </a>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="btn-primary flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-label text-[11px] uppercase tracking-widest font-bold text-white"
            >
              Enroll Now <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}