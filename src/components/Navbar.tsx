"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import AECSLogo from "./AECSLogo";

const NAV_LINKS = [
  { name: "Home",    href: "/"        },
  { name: "About",   href: "/about"   },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

/* ── Magnetic CTA ── */
function MagneticCTA({ href }: { href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 18 });
  const sy = useSpring(my, { stiffness: 180, damping: 18 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left - r.width / 2) * 0.4);
        my.set((e.clientY - r.top - r.height / 2) * 0.4);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-3 px-6 py-3 bg-[#7B1C2E] text-white font-accent text-[9px] font-bold tracking-widest uppercase relative overflow-hidden"
    >
      <span className="relative z-10">Enroll Now</span>
      <motion.span
        initial={false}
        animate={{ x: 0 }}
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10"
      >
        <ArrowRight size={13} />
      </motion.span>
    </motion.a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setScrolled(y > 32);
      if (y > lastY.current + 6 && y > 200) setHidden(true);
      else if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{ transform: hidden ? "translateY(-110%)" : "translateY(0)", transition: "transform .5s cubic-bezier(.77,0,.18,1)" }}
      >
        <div className={`transition-all duration-500 ${scrolled ? 'mt-4 mx-4 px-4' : 'px-8 lg:px-24'}`}>
          <div className={`transition-all duration-500 ${scrolled ? 'glass rounded-full px-8 py-3 shadow-lg' : 'py-8 border-b border-black/5 bg-transparent'}`}>
            <div className="max-w-[1440px] mx-auto flex items-center justify-between">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/" aria-label="AECS home">
                  <AECSLogo size={scrolled ? "sm" : "md"} />
                </Link>
              </motion.div>

              <nav className="hidden md:flex items-center gap-10">
                {NAV_LINKS.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link 
                      key={l.name} 
                      href={l.href} 
                      className={`font-accent text-[9px] font-bold tracking-[0.2em] uppercase transition-all hover:text-[#7B1C2E] ${active ? 'text-[#7B1C2E]' : 'text-black/40'}`}
                    >
                      {l.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-6">
                <a href="tel:03144033054" className={`hidden lg:flex items-center gap-2 font-accent text-[9px] font-bold tracking-widest uppercase transition-colors ${scrolled ? 'text-black/60' : 'text-black/40'} hover:text-[#7B1C2E]`}>
                  <Phone size={12} /> 0314 4033054
                </a>
                <div className="hidden md:block">
                   <MagneticCTA href="/register" />
                </div>
                <button 
                  className="md:hidden p-3 border border-black/5 bg-white/10 backdrop-blur rounded-full text-black/60 hover:text-[#7B1C2E] transition-colors" 
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div 
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-md" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setOpen(false)} 
            />
            <motion.aside
              className="fixed top-0 right-0 bottom-0 z-[120] w-[min(88vw,400px)] bg-[#0E0D0B] shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                <AECSLogo size="sm" inverted />
                <button className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#7B1C2E] transition-all" onClick={() => setOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 px-8 py-12 flex flex-col justify-center">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                  >
                    <Link href={l.href} className={`flex items-center justify-between py-6 border-b border-white/5 group ${pathname === l.href ? 'text-white' : 'text-white/20'}`}>
                      <span className="font-display text-5xl font-bold group-hover:text-white transition-colors">{l.name}</span>
                      <span className="font-accent text-[9px] font-bold text-[#7B1C2E] opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-8 border-t border-white/5">
                <Link href="/register" className="w-full flex items-center justify-center gap-3 py-5 bg-[#7B1C2E] text-white font-accent text-[10px] font-bold tracking-[0.2em] uppercase">
                  Enroll Now <ArrowRight size={14} />
                </Link>
                <a href="tel:03144033054" className="mt-4 flex items-center justify-center gap-3 py-4 border border-white/10 text-white/40 font-accent text-[9px] font-bold tracking-widest uppercase hover:text-white hover:border-white/30 transition-all">
                  <Phone size={12} /> 0314 4033054
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
