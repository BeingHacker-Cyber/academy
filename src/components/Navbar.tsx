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
import { ArrowRight, Menu, X } from "lucide-react";
import AECSLogo from "./AECSLogo";

const NAV_LINKS = [
  { name: "Home",    href: "/"        },
  { name: "About",   href: "/about"   },
  { name: "Faculty", href: "/faculty" },
  { name: "Gallery", href: "/gallery" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

/* ── Enhanced Magnetic CTA ── */
function MagneticCTA({ href }: { href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 20 });
  const sy = useSpring(my, { stiffness: 200, damping: 20 });

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
      whileTap={{ scale: 0.96 }}
      className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#7B1C2E] text-white font-accent text-[10px] font-bold tracking-[0.15em] uppercase rounded-full shadow-lg hover:shadow-[#7B1C2E]/40 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10">Enroll Now</span>
      <motion.span
        initial={false}
        animate={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="relative z-10"
      >
        <ArrowRight size={14} strokeWidth={2.5} />
      </motion.span>
    </motion.a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      if (y > lastY.current + 10 && y > 200) setHidden(true);
      else if (y < lastY.current - 5) setHidden(false);
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
        className="fixed top-6 left-0 right-0 z-[100] px-4 sm:px-6 pointer-events-none"
        style={{ 
          transform: hidden ? "translateY(-150%)" : "translateY(0)", 
          transition: "transform .6s cubic-bezier(.77,0,.18,1)" 
        }}
      >
        <div className="max-w-[1200px] mx-auto pointer-events-auto">
          <div className="glass rounded-full px-4 sm:px-8 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/" aria-label="AECS home">
                  <AECSLogo size="sm" />
                </Link>
              </motion.div>

              <nav className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link 
                      key={l.name} 
                      href={l.href} 
                      className={`relative px-5 py-2 font-accent text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 group`}
                    >
                      <span className={`${active ? 'text-[#7B1C2E]' : 'text-black/50 group-hover:text-[#7B1C2E]'}`}>
                        {l.name}
                      </span>
                      {active && (
                        <motion.div 
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-[#7B1C2E]/5 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                      {!active && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#7B1C2E] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-4">
                <div className="hidden md:block">
                   <MagneticCTA href="/register" />
                </div>
                <button 
                  className="md:hidden p-3 bg-[#7B1C2E]/5 rounded-full text-[#7B1C2E] hover:bg-[#7B1C2E] hover:text-white transition-all duration-300" 
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
              className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-lg" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setOpen(false)} 
            />
            <motion.aside
              className="fixed top-4 right-4 bottom-4 z-[120] w-[min(90vw,380px)] bg-[#0E0D0B] shadow-2xl flex flex-col rounded-[2.5rem] overflow-hidden"
              initial={{ x: "110%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "110%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                <AECSLogo size="sm" inverted />
                <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-[#7B1C2E] transition-all duration-300" onClick={() => setOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 px-8 py-12 flex flex-col justify-center gap-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                  >
                    <Link href={l.href} className={`flex items-center justify-between py-5 group ${pathname === l.href ? 'text-white' : 'text-white/20'}`}>
                      <span className="font-display text-4xl font-bold group-hover:text-white transition-colors">{l.name}</span>
                      <span className="font-accent text-[8px] font-bold bg-[#7B1C2E] text-white w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">0{i+1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-8 space-y-4">
                <Link href="/register" className="w-full flex items-center justify-center gap-3 py-5 bg-[#7B1C2E] text-white font-accent text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:shadow-lg hover:shadow-[#7B1C2E]/20 transition-all duration-300">
                  Enroll Now <ArrowRight size={14} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
