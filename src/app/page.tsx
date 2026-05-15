
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
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight, Users, GraduationCap,
  Award, BookOpen, Star, TrendingUp, Lightbulb,
  ShieldCheck, Trophy, ArrowUpRight, Play
} from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

/* ─────────────────────── DATA ─────────────────────── */
const STATS = [
  { val: 500, suffix: "+", label: "Students",  icon: Users         },
  { val: 15,  suffix: "+", label: "Faculty",     icon: GraduationCap },
  { val: 10,  suffix: "+", label: "Years",   icon: Award         },
  { val: 100, suffix: "%", label: "Pass Rate",       icon: Trophy        },
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

/* ─────────────────────── COMPONENTS ─────────────────────── */

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
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
    const step = target / 50;
    const t = setInterval(() => {
      s = Math.min(s + step, target);
      setVal(Math.floor(s));
      if (s >= target) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [active, target]);
  return <>{val}{suffix}</>;
}

/* ─────────────────────── MAIN ─────────────────────── */
export default function HomePage() {
  const heroImg      = PlaceHolderImages.find((i) => i.id === "hero-bg");
  const classroomImg = PlaceHolderImages.find((i) => i.id === "classroom");

  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 800], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const [activeT, setActiveT] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveT((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative bg-[#FAF7F2]">
      
      {/* ══════ HERO SECTION ══════ */}
      <section className="relative min-h-[100vh] flex flex-col pt-44 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none opacity-40">
           <div className="absolute inset-0 dot-grid" />
        </div>
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 max-w-7xl z-10 relative flex-1 flex flex-col">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
            
            {/* Left Content */}
            <div className="space-y-10">
              <FadeUp>
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-px w-10 bg-primary" />
                  <span className="font-accent text-[10px] font-bold tracking-[0.4em] uppercase text-primary">
                    Specialised Cambridge Coaching
                  </span>
                </div>
              </FadeUp>

              <div className="space-y-4">
                {["Redefining", "Academic", "Brilliance"].map((word, i) => (
                  <FadeUp key={word} delay={i * 0.1}>
                    <h1 className={`font-display text-[clamp(4rem,9vw,8.5rem)] font-bold leading-[0.85] tracking-tight ${i === 1 ? 'italic text-primary pl-4 lg:pl-12' : 'text-[#0E0D0B]'}`}>
                      {word}
                    </h1>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.4} className="max-w-md">
                <p className="font-body text-lg font-light text-black/50 leading-relaxed">
                  The only specialized IGCSE & O-Level academy in Lahore providing a 
                  bespoke academic journey from Grade 6 to success.
                </p>
              </FadeUp>

              <FadeUp delay={0.5} className="flex flex-wrap gap-5">
                <Link 
                  href="/register" 
                  className="px-10 py-5 bg-primary text-white font-accent text-[11px] font-bold tracking-widest uppercase rounded-full shadow-glow-primary hover:bg-[#5a1221] transition-all flex items-center gap-3"
                >
                  Join the Legacy <ArrowRight size={16} />
                </Link>
                <Link 
                  href="/about" 
                  className="px-10 py-5 border border-black/10 font-accent text-[11px] font-bold tracking-widest uppercase rounded-full hover:border-primary hover:text-primary transition-all flex items-center gap-3"
                >
                  Explore AECS <ArrowUpRight size={16} />
                </Link>
              </FadeUp>
            </div>

            {/* Right Interactive Image */}
            <FadeUp delay={0.3} className="relative hidden lg:block">
              <motion.div 
                style={{ y: heroImgY }}
                className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl border border-white"
              >
                <Image 
                  src={heroImg?.imageUrl ?? ""} 
                  alt="AECS Campus" 
                  fill 
                  className="object-cover"
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-10 left-[-40px] glass p-8 rounded-3xl shadow-xl border border-white/20">
                  <p className="font-display text-5xl font-bold text-primary">10+</p>
                  <p className="font-accent text-[9px] font-bold tracking-widest uppercase text-black/40 mt-1">Years of Legacy</p>
                </div>
              </motion.div>

              {/* Decorative Circle */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-30px] right-[-30px] w-32 h-32 border-2 border-dashed border-primary/20 rounded-full flex items-center justify-center"
              >
                <Star size={20} className="text-primary/20" />
              </motion.div>
            </FadeUp>
          </div>
        </div>

        {/* Bottom Stat Bar */}
        <div className="mt-20 border-y border-black/5 bg-white/40 backdrop-blur-md">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4" ref={statsRef}>
              {STATS.map((s, i) => (
                <div key={i} className={`py-12 flex flex-col items-center text-center ${i < STATS.length - 1 ? 'md:border-r border-black/5' : ''}`}>
                  <div className="font-display text-4xl font-bold text-primary mb-1">
                    <CountUp target={s.val} suffix={s.suffix} active={statsInView} />
                  </div>
                  <span className="font-accent text-[9px] font-bold tracking-widest uppercase text-black/30">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PILLARS SECTION ══════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-24">
            <div className="max-w-2xl">
              <FadeUp>
                <span className="font-accent text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-6 block">
                  The Foundation
                </span>
                <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight text-secondary">
                  Built on Pillars of <br /><span className="italic text-primary">Academic Excellence</span>
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.2} className="flex-1 lg:pb-4">
              <p className="font-body text-lg font-light text-black/50 leading-relaxed max-w-md">
                We believe that premium education is about more than just exams. It's about
                conceptual clarity and personalized academic maps.
              </p>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.1} className="group p-10 bg-white rounded-[2.5rem] shadow-sm border border-black/5 hover:border-primary/20 transition-all duration-500">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all">
                  <p.icon size={22} />
                </div>
                <p className="font-accent text-[10px] font-bold text-primary/30 uppercase tracking-widest mb-4">
                  Feature {p.n}
                </p>
                <h3 className="font-display text-2xl font-bold text-secondary mb-4">{p.title}</h3>
                <p className="font-body text-sm font-light text-black/50 leading-relaxed">
                  {p.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SUBJECTS SECTION ══════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeUp className="order-2 lg:order-1">
              <div className="aspect-[4/3] relative rounded-[3rem] overflow-hidden group">
                <Image 
                  src={classroomImg?.imageUrl ?? ""} 
                  alt="Modern Classroom" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20" />
                <button className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-xl hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" />
                </button>
              </div>
            </FadeUp>

            <div className="order-1 lg:order-2 space-y-10">
              <FadeUp>
                <span className="font-accent text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 block">
                  Curriculum Depth
                </span>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-secondary">
                  Specialised <br /><span className="text-primary italic">IGCSE & O-Level</span> Streams
                </h2>
              </FadeUp>

              <div className="flex flex-wrap gap-3">
                {SUBJECTS.map((sub, i) => (
                  <FadeUp key={sub} delay={i * 0.05} className="px-6 py-3 bg-[#FAF7F2] rounded-full border border-black/5 font-accent text-[10px] font-bold tracking-widest uppercase text-black/50 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default">
                    {sub}
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.4}>
                <Link 
                  href="/register" 
                  className="inline-flex items-center gap-4 text-primary font-accent text-[11px] font-bold tracking-widest uppercase border-b-2 border-primary/20 pb-2 hover:gap-6 transition-all"
                >
                  View Subject Combinations <ArrowRight size={16} />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS SECTION ══════ */}
      <section className="py-32 relative bg-secondary overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none diagonal-lines" />
        
        <div className="container mx-auto px-6 max-w-7xl z-10 relative">
          <div className="text-center mb-24">
            <FadeUp>
              <span className="font-accent text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-6 block">
                The Result
              </span>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white italic">
                Voices of <span className="text-primary">Excellence</span>
              </h2>
            </FadeUp>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              {TESTIMONIALS.map((t, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <button 
                    onClick={() => setActiveT(i)}
                    className={`w-full text-left p-10 rounded-[2.5rem] border transition-all duration-500 ${
                      activeT === i 
                      ? 'bg-white/10 border-primary shadow-2xl scale-[1.02]' 
                      : 'bg-white/5 border-white/5 opacity-40 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center font-display text-2xl font-bold text-white">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-display text-2xl font-bold text-white">{t.name}</p>
                        <p className="font-accent text-[10px] font-bold tracking-widest uppercase text-primary">{t.grade}</p>
                      </div>
                    </div>
                    <p className="font-body text-lg font-light text-white/60 leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </button>
                </FadeUp>
              ))}
            </div>

            <FadeUp className="hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeT}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="aspect-square relative flex items-center justify-center p-20 border border-white/10 rounded-full"
                >
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-dashed border-primary/20 rounded-full" 
                   />
                   <div className="text-center relative">
                      <span className="font-display text-[14rem] text-primary/10 absolute top-[-100px] left-1/2 -translate-x-1/2 leading-none">“</span>
                      <p className="font-display text-4xl md:text-5xl font-light text-white leading-tight italic relative z-10">
                        {TESTIMONIALS[activeT].text}
                      </p>
                   </div>
                </motion.div>
              </AnimatePresence>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════ CTA SECTION ══════ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeUp className="bg-primary p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-glow-primary">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 space-y-10">
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
                Secure Your <br /><span className="italic">Future Today</span>
              </h2>
              <p className="font-body text-lg text-white/70 max-w-md mx-auto">
                Admissions for the 2025 academic session are now open. Start your 
                journey with Lahore's finest IGCSE educators.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  href="/register" 
                  className="px-12 py-5 bg-white text-primary font-accent text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-[#FAF7F2] transition-colors"
                >
                  Enroll Now
                </Link>
                <Link 
                  href="/contact" 
                  className="px-12 py-5 border border-white/20 text-white font-accent text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-white/10 transition-colors"
                >
                  Contact Admissions
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
