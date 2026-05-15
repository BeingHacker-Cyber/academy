"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import AECSLogo from './AECSLogo';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home',            href: '/'         },
  { name: 'About AECS',      href: '/about'    },
  { name: 'Expert Faculty',  href: '/faculty'  },
  { name: 'Student Gallery', href: '/gallery'  },
  { name: 'Careers',         href: '/careers'  },
  { name: 'Enrollment',      href: '/register' },
  { name: 'Contact Us',      href: '/contact'  },
];

const SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'Computer Science', 'Business Studies', 'Economics', 'English',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1628] text-white pt-16 pb-10 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-10 mb-16">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <AECSLogo size="sm" inverted />
            </Link>
            
            <p className="font-body text-xs font-light text-white/30 leading-relaxed max-w-xs">
              Specialized coaching for Cambridge IGCSE and O-Level. Fostering excellence through conceptual clarity.
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: Facebook,  label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube,   label: 'YouTube' }
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: '#7B1C2E' }}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 transition-colors"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-accent text-[9px] font-bold tracking-[0.3em] uppercase text-[#C8960C] mb-6">Directory</h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-accent text-[10px] font-bold tracking-widest uppercase text-white/20 hover:text-white transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum */}
          <div>
            <h4 className="font-accent text-[9px] font-bold tracking-[0.3em] uppercase text-[#C8960C] mb-6">Subjects</h4>
            <ul className="space-y-3">
              {SUBJECTS.slice(0, 4).map((sub) => (
                <li key={sub} className="font-accent text-[10px] font-medium tracking-widest uppercase text-white/20">
                  {sub}
                </li>
              ))}
            </ul>
          </div>

          {/* Interaction/Contact */}
          <div className="space-y-8">
            <div className="space-y-4">
              {[
                { icon: MapPin, val: 'Al Kabir Town Phase 2, Lahore', label: 'Visit' },
                { icon: Phone,  val: '0314 4033054', label: 'Call', href: 'tel:03144033054' },
                { icon: Mail,   val: 'Hassani854@gmail.com', label: 'Write', href: 'mailto:Hassani854@gmail.com' }
              ].map(({ icon: Icon, val, label, href }) => (
                <div key={label} className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#7B1C2E] group-hover:bg-[#7B1C2E] group-hover:text-white transition-all">
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="font-accent text-[8px] font-bold tracking-widest uppercase text-white/20">{label}</p>
                    {href ? (
                      <a href={href} className="font-body text-[11px] font-light text-white/40 hover:text-white transition-colors">{val}</a>
                    ) : (
                      <p className="font-body text-[11px] font-light text-white/40">{val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/register" className="group flex items-center justify-between p-4 bg-[#7B1C2E] rounded-xl hover:bg-[#5a1221] transition-all overflow-hidden relative">
              <div className="relative z-10">
                <p className="font-accent text-[7px] font-bold tracking-widest uppercase text-white/50 mb-0.5">Admissions</p>
                <h5 className="font-display text-base font-bold text-white">Enroll Now</h5>
              </div>
              <ArrowRight size={18} className="text-white transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </div>

        {/* Legal & Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="font-body text-[9px] font-light text-white/20">
              © {year} AECS Academy. Registered Cambridge Provider.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="font-accent text-[8px] font-bold tracking-widest uppercase text-white/15 hover:text-[#C8960C] transition-colors">Privacy</Link>
              <Link href="/terms-and-conditions" className="font-accent text-[8px] font-bold tracking-widest uppercase text-white/15 hover:text-[#C8960C] transition-colors">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-accent text-[9px] font-bold tracking-[0.15em] uppercase text-white/40">
              Developed by <a href="https://www.linkedin.com/in/muhammadxahmed/" target="_blank" rel="noopener noreferrer" className="text-[#C8960C] hover:underline transition-all">Muhammad Ahmed</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
