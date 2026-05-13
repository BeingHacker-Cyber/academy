import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import AECSLogo from './AECSLogo';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About AECS', href: '/about' },
  { name: 'Expert Faculty', href: '/faculty' },
  { name: 'Student Gallery', href: '/gallery' },
  { name: 'Enrollment', href: '/register' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <AECSLogo className="mb-6 h-10 invert brightness-200" />
            <p className="text-secondary-foreground/70 leading-relaxed mb-6 font-body">
              A specialized academy for Cambridge IGCSE and O-Level studies, fostering excellence through conceptual clarity and personalized attention.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-accent uppercase tracking-widest text-sm font-bold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary-foreground/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-accent font-accent uppercase tracking-widest text-sm font-bold mb-8">Get In Touch</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-primary/20 p-3 rounded-lg h-fit">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Campus Location</h5>
                  <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                    100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City Raiwind Road, Lahore
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/20 p-3 rounded-lg h-fit">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Phone Enquiries</h5>
                  <p className="text-secondary-foreground/70 text-sm">0314 4033054</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/20 p-3 rounded-lg h-fit">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Email Support</h5>
                  <p className="text-secondary-foreground/70 text-sm">Hassani854@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-xs">
            &copy; {new Date().getFullYear()} AECS Academy (Academy for Excellence in Cambridge Studies). All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-secondary-foreground/50">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
