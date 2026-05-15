"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import AECSLogo from './AECSLogo';
import { motion } from 'framer-motion';

const EXPLORE_LINKS = [
  { name: 'Home',            href: '/'         },
  { name: 'Courses',         href: '/#subjects'},
  { name: 'About Us',        href: '/about'    },
  { name: 'Careers',         href: '/careers'  },
  { name: 'Faculty',         href: '/faculty'  },
  { name: 'Gallery',         href: '/gallery'  },
  { name: 'Contact Us',      href: '/contact'  },
];

const LEGAL_LINKS = [
  { name: 'FAQs',               href: '/faqs'           },
  { name: 'Privacy Policy',      href: '/privacy-policy'  },
  { name: 'Terms and Conditions',href: '/terms-and-conditions' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F1F1F4] text-[#0b1628] pt-16 pb-10 overflow-hidden relative border-t border-black/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-10 mb-16">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <AECSLogo size="sm" inverted={false} />
            </Link>
            
            <p className="font-body text-xs font-light text-black/50 leading-relaxed max-w-xs">
              Specialized coaching for Cambridge IGCSE and O-Level. Fostering excellence through conceptual clarity and personalized academic maps.
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
                  whileHover={{ scale: 1.1, backgroundColor: '#7B1C2E', color: '#fff' }}
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-black/40 transition-colors"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-accent text-[9px] font-bold tracking-[0.3em] uppercase text-[#7B1C2E] mb-6">Explore</h4>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-accent text-[10px] font-bold tracking-widest uppercase text-black/40 hover:text-[#7B1C2E] transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h4 className="font-accent text-[9px] font-bold tracking-[0.3em] uppercase text-[#7B1C2E] mb-6">Trust & Legal</h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-accent text-[10px] font-bold tracking-widest uppercase text-black/40 hover:text-[#7B1C2E] transition-all">
                    {link.name}
                  </Link>
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
                  <div className="w-8 h-8 rounded-lg bg-black/5 border border-black/5 flex items-center justify-center text-[#7B1C2E] group-hover:bg-[#7B1C2E] group-hover:text-white transition-all">
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="font-accent text-[8px] font-bold tracking-widest uppercase text-black/20">{label}</p>
                    {href ? (
                      <a href={href} className="font-body text-[11px] font-light text-black/60 hover:text-[#7B1C2E] transition-colors">{val}</a>
                    ) : (
                      <p className="font-body text-[11px] font-light text-black/60">{val}</p>
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
            </Link>
          </div>
        </div>

        {/* Legal & Bottom bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-[9px] font-light text-black/30">
            © {year} AECS Academy. Registered Cambridge Provider.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="font-accent text-[9px] font-bold tracking-[0.15em] uppercase text-black/40">
              Developed by <a href="https://www.linkedin.com/in/muhammadxahmed/" target="_blank" rel="noopener noreferrer" className="text-[#7B1C2E] font-bold hover:underline transition-all">Muhammad Ahmed</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}