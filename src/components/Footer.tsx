"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight, GraduationCap } from 'lucide-react';
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
    <footer className="bg-[#0E0D0B] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Background Text */}
      <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.02] transform translate-x-1/4 -translate-y-1/4">
        <h2 className="font-display text-[25vw] font-bold leading-none">AECS</h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="space-y-10">
            <Link href="/" className="inline-block">
              <AECSLogo size="md" inverted />
            </Link>
            
            <div className="space-y-6">
              <p className="font-body text-sm font-light text-white/40 leading-relaxed max-w-sm">
                Shaping the future of Cambridge education in Lahore. Specialized coaching with a focus on conceptual mastery and high-tier CAIE results.
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
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 transition-colors"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full">
              <GraduationCap size={16} className="text-[#C8960C]" />
              <span className="font-accent text-[9px] font-bold tracking-[0.2em] uppercase text-white/60">Established 2014</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase text-[#C8960C] mb-10">Directory</h4>
            <ul className="space-y-5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 font-accent text-[11px] font-bold tracking-widest uppercase text-white/30 hover:text-white transition-all">
                    <span className="w-1 h-1 bg-[#7B1C2E] rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Paths */}
          <div>
            <h4 className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase text-[#C8960C] mb-10">Curriculum</h4>
            <ul className="space-y-5">
              {SUBJECTS.map((sub) => (
                <li key={sub} className="font-accent text-[11px] font-medium tracking-widest uppercase text-white/20">
                  {sub}
                </li>
              ))}
            </ul>
          </div>

          {/* Interaction/Contact */}
          <div className="space-y-12">
            <div>
              <h4 className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase text-[#C8960C] mb-10">Connect</h4>
              <div className="space-y-8">
                {[
                  { icon: MapPin, val: 'Al Kabir Town Phase 2, Lahore', label: 'Visit' },
                  { icon: Phone,  val: '0314 4033054', label: 'Call', href: 'tel:03144033054' },
                  { icon: Mail,   val: 'Hassani854@gmail.com', label: 'Write', href: 'mailto:Hassani854@gmail.com' }
                ].map(({ icon: Icon, val, label, href }) => (
                  <div key={label} className="flex gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7B1C2E] group-hover:bg-[#7B1C2E] group-hover:text-white transition-all">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-accent text-[8px] font-bold tracking-widest uppercase text-white/20 mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="font-body text-xs font-light text-white/50 hover:text-white transition-colors">{val}</a>
                      ) : (
                        <p className="font-body text-xs font-light text-white/50">{val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/register" className="group flex items-center justify-between p-6 bg-[#7B1C2E] rounded-2xl hover:bg-[#5a1221] transition-all overflow-hidden relative">
              <div className="relative z-10">
                <p className="font-accent text-[8px] font-bold tracking-widest uppercase text-white/50 mb-1">Admissions</p>
                <h5 className="font-display text-xl font-bold text-white">Enroll Now</h5>
              </div>
              <ArrowRight size={24} className="text-white transition-transform group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </div>

        {/* Legal & Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="font-body text-[10px] font-light text-white/20">
              © {year} AECS Academy. Registered Cambridge Coaching Provider.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="font-accent text-[9px] font-bold tracking-widest uppercase text-white/20 hover:text-[#C8960C] transition-colors">Privacy</Link>
              <Link href="/terms-and-conditions" className="font-accent text-[9px] font-bold tracking-widest uppercase text-white/20 hover:text-[#C8960C] transition-colors">Terms</Link>
            </div>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-[#C8960C]/50 transition-all"
          >
            <span className="font-accent text-[10px] font-bold tracking-widest uppercase text-white/40 group-hover:text-white">Back to Top</span>
            <ArrowRight size={14} className="-rotate-90 text-[#C8960C]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
