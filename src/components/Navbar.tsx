"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import AECSLogo from './AECSLogo';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home',    href: '/'        },
  { name: 'About',   href: '/about'   },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-muted' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
            <AECSLogo className="h-9" />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-secondary/70 hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:03144033054"
              className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={14} className="text-primary" />
              0314 4033054
            </a>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-[11px] uppercase tracking-widest px-8 h-11"
            >
              <Link href="/register">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-secondary/5 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-20 z-40 bg-white md:hidden transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'flex items-center justify-between py-4 text-xl font-bold border-b border-muted',
                pathname === link.href ? 'text-primary' : 'text-secondary'
              )}
            >
              {link.name}
              <ChevronRight size={20} className="text-accent" />
            </Link>
          ))}
          <div className="pt-6 space-y-4">
            <a
              href="tel:03144033054"
              className="flex items-center gap-4 p-4 rounded-xl bg-muted"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Call Admissions</p>
                <p className="font-bold text-secondary">0314 4033054</p>
              </div>
            </a>
            <Button
              asChild
              className="w-full h-14 rounded-xl bg-primary text-white font-bold uppercase tracking-widest text-sm"
            >
              <Link href="/register">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
