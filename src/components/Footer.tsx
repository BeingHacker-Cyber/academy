import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight, GraduationCap } from 'lucide-react';
import AECSLogo from './AECSLogo';

const footerLinks = [
  { name: 'Home',       href: '/'          },
  { name: 'About AECS', href: '/about'     },
  { name: 'Faculty',    href: '/faculty'   },
  { name: 'Gallery',    href: '/gallery'   },
  { name: 'Enrollment', href: '/register'  },
  { name: 'Contact Us', href: '/contact'   },
];

const legalLinks = [
  { name: 'Privacy Policy',       href: '/privacy-policy'       },
  { name: 'Terms & Conditions',   href: '/terms-and-conditions' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden">
      {/* Visual Separator */}
      <div className="h-24 bg-gradient-to-t from-secondary to-background" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-8">
            <AECSLogo inverted className="h-12" />
            <p className="text-secondary-foreground/60 text-lg leading-relaxed max-w-md font-body">
              Pioneering excellence in Cambridge education. We empower students near Lake City, Lahore, 
              to achieve world-class results through conceptual clarity and focused mentorship.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook,  label: 'Facebook'  },
                { icon: Linkedin,  label: 'LinkedIn'  },
              ].map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-10">
              Site Navigation
            </h4>
            <nav className="grid grid-cols-1 gap-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center justify-between text-secondary-foreground/70 hover:text-white transition-all"
                >
                  <span className="text-sm font-medium">{link.name}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-10">
              Academy Contacts
            </h4>
            <div className="space-y-6">
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-accent uppercase tracking-widest text-muted-foreground mb-1">Campus Location</p>
                  <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                    100 Platinum Homes, Al Kabir Town Phase 2,<br />Near Lake City Raiwind Road, Lahore
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-accent uppercase tracking-widest text-muted-foreground mb-1">Direct Line</p>
                  <a href="tel:03144033054" className="text-lg font-bold hover:text-accent transition-colors">
                    0314 4033054
                  </a>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-accent uppercase tracking-widest text-muted-foreground mb-1">Official Email</p>
                  <a href="mailto:Hassani854@gmail.com" className="text-sm font-medium hover:text-accent transition-colors">
                    Hassani854@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-secondary-foreground/40 text-xs font-accent uppercase tracking-widest">
            &copy; {new Date().getFullYear()} AECS Academy. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {legalLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="text-[10px] font-accent uppercase tracking-widest text-secondary-foreground/40 hover:text-white transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}