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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8',
          scrolled ? 'pt-4' : 'pt-6'
        )}
      >
        <div 
          className={cn(
            "container mx-auto max-w-7xl transition-all duration-500",
            scrolled 
              ? "glass shadow-xl rounded-full px-6 py-2" 
              : "bg-transparent py-2"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
              <AECSLogo className={scrolled ? 'h-8' : 'h-10'} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-full font-accent text-[11px] uppercase tracking-[0.2em] font-bold transition-all',
                    pathname === link.href
                      ? 'text-primary bg-primary/5'
                      : 'text-secondary/70 hover:text-primary hover:bg-primary/5'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Action Group */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:03144033054"
                className="flex items-center gap-2 text-[10px] font-accent font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={14} className="text-primary" />
                </div>
                <span className="hidden lg:inline">0314 4033054</span>
              </a>

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white rounded-full font-accent text-[10px] uppercase tracking-[0.2em] px-8 h-12 shadow-glow transition-all hover:-translate-y-0.5"
              >
                <Link href="/register">Enroll Now</Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-secondary/5 text-secondary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl transition-all duration-500 md:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <AECSLogo className="h-8" />
            <button 
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/5"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'flex items-center justify-between py-4 text-3xl font-headline font-bold transition-all border-b border-muted',
                  pathname === link.href ? 'text-primary' : 'text-secondary'
                )}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
                <ChevronRight size={24} className="text-accent" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-6">
            <a
              href="tel:03144033054"
              className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/5"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-accent uppercase tracking-widest text-muted-foreground">Call Admissions</p>
                <p className="font-bold text-secondary">0314 4033054</p>
              </div>
            </a>
            <Button
              asChild
              className="w-full h-16 rounded-2xl bg-primary text-white font-accent uppercase tracking-widest text-sm font-bold"
            >
              <Link href="/register">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}