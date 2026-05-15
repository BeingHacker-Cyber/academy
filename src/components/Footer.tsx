"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight, BookOpen } from 'lucide-react';
import AECSLogo from './AECSLogo';

const navLinks = [
  { name: 'Home',            href: '/'         },
  { name: 'About AECS',      href: '/about'    },
  { name: 'Expert Faculty',  href: '/faculty'  },
  { name: 'Student Gallery', href: '/gallery'  },
  { name: 'Careers',         href: '/careers'  },
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
    <footer className="bg-[#FAF7F2] pt-24 border-t border-black/5">
      <div className="wrap pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-16 mb-24">
          
          {/* Brand */}
          <div className="space-y-8">
            <AECSLogo size="md" />
            <div className="bg-[#7B1C2E]/5 border border-[#7B1C2E]/10 p-4 inline-flex items-center gap-3">
              <BookOpen size={14} className="text-[#7B1C2E]" />
              <p className="font-display italic text-sm text-black/50">Cambridge Certified coaching since 2014</p>
            </div>
            <p className="font-body text-xs font-light text-black/40 leading-relaxed max-w-xs">
              Lahore's most focused IGCSE & O-Level academy — specialised Cambridge coaching from Grade 6 to O-Level with 100% personalised attention.
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="w-10 h-10 border border-black/10 flex items-center justify-center text-black/30 hover:bg-[#7B1C2E] hover:border-[#7B1C2E] hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-accent text-[9px] font-bold tracking-[0.3em] uppercase text-[#7B1C2E] mb-8 flex items-center gap-4 after:flex-1 after:h-px after:bg-black/5">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-accent text-[10px] font-bold tracking-widest uppercase text-black/30 hover:text-[#7B1C2E] transition-all hover:pl-2">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-accent text-[9px] font-bold tracking-[0.3em] uppercase text-[#7B1C2E] mb-8 flex items-center gap-4 after:flex-1 after:h-px after:bg-black/5">Subjects</h4>
            <ul className="space-y-4">
              {subjects.map((sub) => (
                <li key={sub} className="font-accent text-[10px] font-bold tracking-widest uppercase text-black/20 flex items-center gap-3">
                  <span className="w-1 h-1 bg-[#7B1C2E]/20" /> {sub}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent text-[9px] font-bold tracking-[0.3em] uppercase text-[#7B1C2E] mb-8 flex items-center gap-4 after:flex-1 after:h-px after:bg-black/5">Contact</h4>
            <div className="space-y-8">
              {[
                { icon: MapPin, lbl: 'Campus', val: '100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City, Lahore' },
                { icon: Phone,  lbl: 'Phone',  val: '0314 4033054', href: 'tel:03144033054' },
                { icon: Mail,   lbl: 'Email',  val: 'Hassani854@gmail.com', href: 'mailto:Hassani854@gmail.com' },
              ].map(({ icon: Icon, lbl, val, href }) => (
                <div key={lbl} className="flex gap-4 group">
                  <div className="w-8 h-8 bg-white border border-black/5 flex items-center justify-center text-[#7B1C2E] group-hover:bg-[#7B1C2E] group-hover:text-white transition-all">
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="font-accent text-[8px] font-bold tracking-widest uppercase text-black/20 mb-1">{lbl}</p>
                    {href ? (
                      <a href={href} className="font-body text-xs font-light text-black/50 hover:text-[#7B1C2E] transition-colors">{val}</a>
                    ) : (
                      <p className="font-body text-xs font-light text-black/50">{val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-body text-[10px] font-light text-black/30">
            © {year} AECS Academy — Academy for Excellence in Cambridge Studies.
          </p>
          <div className="flex gap-8">
             <Link href="/privacy-policy" className="font-accent text-[9px] font-bold tracking-widest uppercase text-black/20 hover:text-[#7B1C2E] transition-colors">Privacy</Link>
             <Link href="/terms-and-conditions" className="font-accent text-[9px] font-bold tracking-widest uppercase text-black/20 hover:text-[#7B1C2E] transition-colors">Terms</Link>
             <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-accent text-[9px] font-bold tracking-widest uppercase text-[#7B1C2E] flex items-center gap-2">
               Top <ArrowRight size={12} className="-rotate-90" />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
