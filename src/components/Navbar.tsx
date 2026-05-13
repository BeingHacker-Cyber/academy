"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import AECSLogo from './AECSLogo';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass h-20 shadow-md py-2" : "bg-transparent h-24 py-4"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <AECSLogo className={scrolled ? "h-10" : "h-12"} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "font-accent text-xs uppercase tracking-widest font-bold transition-all relative group",
                pathname === link.href ? "text-primary" : "text-secondary hover:text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                pathname === link.href ? "w-full" : ""
              )} />
            </Link>
          ))}
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 rounded-full font-accent text-xs uppercase tracking-widest px-6">
            <Link href="/register">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-20 bg-background z-40 transition-transform duration-300 transform md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-headline font-semibold flex justify-between items-center",
                pathname === link.href ? "text-primary" : "text-secondary"
              )}
            >
              {link.name}
              <ChevronRight size={20} className="text-accent" />
            </Link>
          ))}
          <Button asChild size="lg" className="w-full rounded-xl bg-primary mt-4 font-accent">
            <Link href="/register" onClick={() => setIsOpen(false)}>Enroll Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
