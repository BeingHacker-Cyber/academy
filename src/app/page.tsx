"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight, CheckCircle2, Users, GraduationCap,
  Award, BookOpen, Star, TrendingUp, Lightbulb,
  ShieldCheck, Monitor, Building2, Phone, Trophy,
} from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

/* ─────────────────────── DATA ─────────────────────── */
const STATS = [
  { val: 500, suffix: "+", label: "Students Enrolled",  icon: Users         },
  { val: 15,  suffix: "+", label: "Expert Faculty",     icon: GraduationCap },
  { val: 10,  suffix: "+", label: "Years Excellence",   icon: Award         },
  { val: 100, suffix: "%", label: "Success Rate",       icon: Trophy        },
];

const PILLARS = [
  { n: "01", title: "Expert Mentorship",   desc: "Cambridge-certified educators with decades of O-Level exam experience.", icon: Star      },
  { n: "02", title: "Personalised Focus",  desc: "Small batches ensure every student gets dedicated conceptual guidance.", icon: Lightbulb },
  { n: "03", title: "Proven Results",      desc: "Legacy of A* and A grades in IGCSE & O-Level year after year.",        icon: TrendingUp},
  { n: "04", title: "Curriculum Mastery",  desc: "Deep subject expertise aligned precisely with the Cambridge syllabus.", icon: ShieldCheck},
];

const SUBJECTS = [
  "Mathematics","English","Physics","Chemistry","Biology",
  "Computer Science","Business Studies","Economics",
  "Accounting","Pak Studies","Islamiat",
];

const TESTIMONIALS = [
  { name: "Ayesha Malik", grade: "A* Mathematics · 2024", initials: "AM", text: "AECS transformed my understanding completely. Teachers here don't just teach — they mentor. I went from a C to an A* in one term." },
  { name: "Hassan Raza",  grade: "A* Physics · 2024",     initials: "HR", text: "Small batch sizes meant my teacher actually knew my weaknesses. The personalised attention here is unlike any tuition center I've been to." },
  { name: "Sara Ahmed",   grade: "A English · 2023",      initials: "SA", text: "The structured approach to essay writing changed everything. AECS prepared me better than my school ever could." },
];

/* ─────────────────────── HELPERS ─────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let s = 0;
    const step = target / 60;
    const t = setInterval(() => {
      s = Math.min(s + step, target);
      setVal(Math.floor(s));
      if (s >= target) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [active, target]);
  return <>{val}{suffix}</>;
}

/* ─────────────────────── CURSOR ─────────────────────── */
function CustomCursor() {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const sx = useSpring(cx, { stiffness: 120, damping: 18, mass: 0.5 });
  const sy = useSpring(cy, { stiffness: 120, damping: 18, mass: 0.5 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { cx.set(e.clientX); cy.set(e.clientY); };
    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,[data-cursor]")) setHovered(true);
      else setHovered(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [cx, cy]);

  return (
    <>
      <motion.div
        style={{ left: sx, top: sy, x: "-50%", y: "-50%", position: "fixed", pointerEvents: "none", zIndex: 9999 }}
        animate={{ width: hovered ? 44 : 10, height: hovered ? 44 : 10, backgroundColor: hovered ? "rgba(123,28,46,0.15)" : "#7B1C2E", borderRadius: "50%", border: hovered ? "1px solid #7B1C2E" : "none" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.div
        style={{ left: cx, top: cy, x: "-50%", y: "-50%", position: "fixed", pointerEvents: "none", zIndex: 9998, width: 4, height: 4, borderRadius: "50%", background: "#7B1C2E" }}
      />
    </>
  );
}

/* ─────────────────────── MAIN ─────────────────────── */
export default function HomePage() {
  const heroImg      = PlaceHolderImages.find((i) => i.id === "hero-bg");
  const classroomImg = PlaceHolderImages.find((i) => i.id === "classroom");

  /* Parallax */
  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroTextY = useTransform(scrollY, [0, 600], [0, -30]);

  /* Stats in-view */
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  /* Testimonial */
  const [activeT, setActiveT] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveT((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  /* Mouse tilt on hero image */
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const sTiltX = useSpring(tiltX, { stiffness: 80, damping: 20 });
  const sTiltY = useSpring(tiltY, { stiffness: 80, damping: 20 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    tiltX.set(ny * 6);
    tiltY.set(-nx * 6);
  };
  const handleHeroMouseLeave = () => { tiltX.set(0); tiltY.set(0); };

  return (
    <div className="relative">
      <CustomCursor />

      {/* Global CSS Overrides for this page */}
      <style jsx global>{`
        * { cursor: none !important; }
        .stag { display: flex; align-items: center; gap: 10px; margin-bottom: 1.2rem; }
        .stag-line { width: 28px; height: 1.5px; background: #7B1C2E; }
        .stag-txt { font-family: 'DM Sans', sans-serif; font-size: 9px; font-weight: 600; letter-spacing: .32em; text-transform: uppercase; color: #7B1C2E; }
        .h2s { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.2rem, 4vw, 3.6rem); font-weight: 600; color: #0E0D0B; line-height: 1.02; }
        .h2s em { font-style: italic; color: #7B1C2E; }
        .btn-pr {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 30px; background: #7B1C2E; color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600;
          letter-spacing: .2em; text-transform: uppercase;
          position: relative; overflow: hidden; transition: 0.3s;
        }
        .btn-pr:hover { background: #5a1221; }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section className="min-h-[95vh] grid grid-cols-1 lg:grid-cols-[55%_45%] bg-[#FAF7F2] overflow-hidden relative">
        <motion.div className="px-8 lg:px-24 py-24 flex flex-col justify-center relative z-10" style={{ y: heroTextY }}>
          {/* Eyebrow */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-10">
              <motion.div className="w-8 h-8 bg-[#7B1C2E] flex items-center justify-center" whileHover={{ rotate: 15 }}>
                <BookOpen size={14} color="#fff" />
              </motion.div>
              <span className="font-accent text-[9px] font-bold tracking-[0.3em] uppercase color-[#7B1C2E]">
                Est. 2014 · Lake City, Lahore
              </span>
            </div>
          </FadeUp>

          {/* Headline */}
          <div className="mb-8">
            {["Cambridge", "Excellence,", "Delivered."].map((word, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <h1 className={`font-display text-[clamp(3.6rem,6.5vw,6.2rem)] font-bold leading-[0.92] ${i === 1 ? 'italic text-[#7B1C2E]' : 'text-[#0E0D0B]'}`}>
                  {i === 2 ? <span className="text-outline">{word}</span> : word}
                </h1>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <p className="font-body text-sm font-light leading-relaxed text-[#0E0D0B]/50 max-w-[400px] mb-12">
              Lahore's most focused IGCSE & O-Level academy — specialised coaching from Grade 6 through O-Level with 100% personalised attention.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/register" className="btn-pr" data-cursor>
                Apply Now <ArrowRight size={14} />
              </Link>
              <Link href="/about" className="inline-flex items-center px-8 py-3.5 border border-black/10 font-accent text-[10px] font-bold tracking-widest uppercase hover:border-[#7B1C2E] hover:text-[#7B1C2E] transition-colors" data-cursor>
                Our Legacy
              </Link>
            </div>
          </FadeUp>

          {/* Mini stats */}
          <FadeUp delay={0.6}>
            <div className="grid grid-cols-3 pt-12 border-t border-black/10 max-w-sm gap-8">
              {[
                { val: "500+", lbl: "Students" },
                { val: "A*", lbl: "Avg Grade" },
                { val: "10+", lbl: "Years" }
              ].map(({ val, lbl }) => (
                <div key={lbl}>
                  <div className="font-display text-4xl font-bold text-[#7B1C2E] leading-none">{val}</div>
                  <div className="font-accent text-[8px] font-bold tracking-widest uppercase text-black/30 mt-2">{lbl}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </motion.div>

        {/* Hero image panel */}
        <motion.div
          className="relative overflow-hidden hidden lg:block"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div style={{ position: "absolute", inset: 0, rotateX: sTiltX, rotateY: sTiltY }}>
            <motion.div style={{ position: "absolute", inset: -20, y: heroImgY }}>
              <Image src={heroImg?.imageUrl ?? ""} alt="AECS Campus" fill className="object-cover" priority />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
          </motion.div>

          <div className="absolute top-10 left-10 bg-[#7B1C2E] p-5">
            <div className="font-display text-3xl font-bold text-white leading-none">10+</div>
            <div className="font-accent text-[8px] font-bold tracking-widest uppercase text-white/40 mt-1">Years Excellence</div>
          </div>

          <motion.div 
            className="absolute bottom-0 left-0 right-0 glass px-8 py-6 flex items-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Trophy size={20} className="text-[#7B1C2E]" />
            <div>
              <p className="font-display font-bold text-lg text-[#0E0D0B] leading-none">A* Average Grade</p>
              <p className="font-accent text-[8px] font-bold tracking-widest uppercase text-black/40 mt-1">Every academic session</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ TICKER ══════ */}
      <div className="bg-[#7B1C2E] py-4 overflow-hidden border-y border-white/5">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {["IGCSE Specialists", "O-Level Experts", "Grade 6–11", "Online & On-Campus", "Lake City Lahore", "Cambridge Certified"].map(t => (
                <div key={t} className="flex items-center gap-4">
                  <span className="font-accent text-[10px] font-bold tracking-[0.25em] uppercase text-white/70">{t}</span>
                  <span className="text-white/20 text-xs">✦</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ══════ STATS ══════ */}
      <section className="bg-white border-b border-black/5" ref={statsRef}>
        <div className="wrap py-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5">
          {STATS.map((s, i) => (
            <div key={i} className="bg-white p-12 flex flex-col items-center text-center group">
              <s.icon size={22} className="text-[#7B1C2E] mb-6 transition-transform group-hover:scale-110" />
              <div className="font-display text-5xl font-bold text-[#0E0D0B] mb-2 leading-none">
                <CountUp target={s.val} suffix={s.suffix} active={statsInView} />
              </div>
              <div className="font-accent text-[9px] font-bold tracking-widest uppercase text-black/30">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ PILLARS ══════ */}
      <section className="section bg-[#FAF7F2]">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-20 mb-20 items-end">
            <FadeUp>
              <div className="stag"><div className="stag-line" /><span className="stag-txt">The Advantage</span></div>
              <h2 className="h2s">Why Choose<br /><em>AECS Academy?</em></h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-body text-sm font-light text-black/50 leading-relaxed max-w-md">
                A structured, supportive environment designed for the rigorous Cambridge curriculum — where every student's potential is fully realised.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.1} className="bg-white p-10 relative group overflow-hidden">
                <span className="font-display text-6xl font-bold text-black/[0.03] absolute top-6 right-6 leading-none transition-colors group-hover:text-[#7B1C2E]/5">{p.n}</span>
                <p.icon size={24} className="text-[#7B1C2E] mb-8" />
                <h3 className="font-display text-2xl font-bold text-[#0E0D0B] mb-4">{p.title}</h3>
                <p className="font-body text-xs font-light text-black/50 leading-relaxed">{p.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#7B1C2E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SUBJECTS ══════ */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="grid lg:grid-cols-[45%_55%] gap-24 items-center">
            <div>
              <FadeUp>
                <div className="stag"><div className="stag-line" /><span className="stag-txt">Curriculum</span></div>
                <h2 className="h2s mb-8">Specialised<br /><span className="text-[#7B1C2E]">Subjects</span> We Offer</h2>
              </FadeUp>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {SUBJECTS.map((sub, i) => (
                  <FadeUp key={sub} delay={i * 0.05} className="px-4 py-2 border border-black/10 font-accent text-[9px] font-bold tracking-widest uppercase text-black/40 hover:bg-[#7B1C2E] hover:text-white hover:border-[#7B1C2E] transition-all cursor-default">
                    {sub}
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.5}>
                <Link href="/register" className="btn-pr" data-cursor>
                  Explore & Enroll <ArrowRight size={14} />
                </Link>
              </FadeUp>
            </div>

            <FadeUp className="relative" delay={0.3}>
              <div className="aspect-[4/3] relative overflow-hidden border border-black/10">
                <Image src={classroomImg?.imageUrl ?? ""} alt="Modern Classroom" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-display text-3xl font-bold">Grade 6 to O-Level</p>
                  <p className="font-accent text-[10px] font-bold tracking-widest uppercase opacity-70">Cambridge Specialised Focus</p>
                </div>
              </div>
              {/* Overlapping decorative element */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FAF7F2] border border-black/5 p-8 flex flex-col items-center justify-center text-center hidden md:flex">
                <div className="font-display text-4xl font-bold text-[#7B1C2E]">15+</div>
                <div className="font-accent text-[8px] font-bold tracking-widest uppercase text-black/30 mt-2">Expert Teachers</div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="section bg-[#0E0D0B] text-white">
        <div className="wrap grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <FadeUp>
              <div className="stag"><div className="stag-line" /><span className="stag-txt text-white/40">Success Stories</span></div>
              <h2 className="h2s text-white mb-12 italic">Results That Speak<br /><span className="text-[#C8960C]">Volumes</span></h2>
            </FadeUp>

            <div className="space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  className={`p-8 border border-white/5 cursor-pointer transition-all ${activeT === i ? 'bg-white/5 border-white/20' : 'opacity-40 hover:opacity-100'}`}
                  onClick={() => setActiveT(i)}
                  data-cursor
                >
                  <p className="font-body text-xs font-light text-white/60 mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-accent text-[10px] font-bold tracking-widest uppercase text-white">{t.name}</p>
                    <p className="font-accent text-[9px] font-bold tracking-widest uppercase text-[#C8960C] mt-1">{t.grade}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeT}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.5, ease }}
                 className="p-16 border border-white/10 relative"
               >
                 <span className="font-display text-[12rem] text-[#C8960C]/10 absolute -top-16 -left-4 leading-none">“</span>
                 <p className="font-display text-4xl font-light leading-snug text-white/90 relative z-10">
                   {TESTIMONIALS[activeT].text}
                 </p>
                 <div className="mt-12 flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#7B1C2E] flex items-center justify-center font-display text-2xl font-bold">{TESTIMONIALS[activeT].initials}</div>
                    <div>
                      <p className="font-display text-2xl font-bold">{TESTIMONIALS[activeT].name}</p>
                      <p className="font-accent text-[10px] font-bold tracking-widest uppercase text-[#C8960C]">{TESTIMONIALS[activeT].grade}</p>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="bg-[#7B1C2E] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 line-grid" />
        </div>
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <FadeUp>
            <p className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-4">Admissions Open — 2025</p>
            <h2 className="font-display text-5xl font-bold text-white italic">Ready to Start Your Journey?</h2>
          </FadeUp>
          <FadeUp delay={0.2} className="flex gap-4">
             <Link href="/register" className="inline-flex items-center px-12 py-5 bg-white text-[#7B1C2E] font-accent text-[11px] font-bold tracking-widest uppercase hover:bg-[#FAF7F2] transition-colors" data-cursor>
               Enroll Now <ArrowRight size={14} className="ml-2" />
             </Link>
             <a href="tel:03144033054" className="inline-flex items-center px-10 py-5 border border-white/30 text-white font-accent text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" data-cursor>
               <Phone size={14} className="mr-2" /> Call Us
             </a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
