
"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  ArrowRight, Users, GraduationCap,
  Award, Star, TrendingUp, Lightbulb,
  ShieldCheck, Trophy, ArrowUpRight, CheckCircle2
} from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

/* ─────────────────────── DATA ─────────────────────── */
const STATS = [
  { val: 500, suffix: "+", label: "Students Enrolled",  icon: Users         },
  { val: 15,  suffix: "+", label: "Expert Faculty",     icon: GraduationCap },
  { val: 10,  suffix: "+", label: "Years Experience",   icon: Award         },
  { val: 100, suffix: "%", label: "Cambridge Pass Rate", icon: Trophy        },
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
  { name: "Ayesha Malik", grade: "A* Mathematics", initials: "AM", text: "AECS transformed my understanding. Teachers here mentor rather than just teach." },
  { name: "Hassan Raza",  grade: "A* Physics",     initials: "HR", text: "Small batch sizes meant my teacher knew my weaknesses. Personalized attention is unmatched." },
  { name: "Sara Ahmed",   grade: "A English",      initials: "SA", text: "The structured approach to essay writing changed everything for my results." },
  { name: "Omer Farooq",  grade: "A* Chemistry",   initials: "OF", text: "The concept-based learning at AECS made even the hardest topics feel intuitive." },
  { name: "Zainab Noor",  grade: "A Business",     initials: "ZN", text: "The exam techniques I learned here were the key to my success in O-Levels." },
  { name: "Bilal Khan",   grade: "A* Economics",   initials: "BK", text: "Exceptional faculty who are always willing to go the extra mile for their students." },
];

/* ─────────────────────── COMPONENTS ─────────────────────── */

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
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
    const step = target / 30;
    const t = setInterval(() => {
      s = Math.min(s + step, target);
      setVal(Math.floor(s));
      if (s >= target) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [active, target]);
  return <>{val}{suffix}</>;
}

/* ─────────────────────── MAIN ─────────────────────── */
export default function HomePage() {
  const heroImg      = PlaceHolderImages.find((i) => i.id === "hero-bg");
  const classroomImg = PlaceHolderImages.find((i) => i.id === "classroom");

  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 500], [0, 80]);

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <div className="relative bg-[#FAF7F2]">
      
      {/* ══════ HERO SECTION ══════ */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full pointer-events-none opacity-20">
           <div className="absolute inset-0 dot-grid" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl z-10 relative">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            
            <div className="space-y-6">
              <FadeUp>
                <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                  <span className="font-accent text-[9px] font-bold tracking-[0.2em] uppercase text-primary">
                    Leading IGCSE Specialists
                  </span>
                </div>
              </FadeUp>

              <div className="space-y-2">
                <FadeUp delay={0.1}>
                  <h1 className="font-display text-5xl md:text-7xl font-bold text-[#0E0D0B] leading-[1.1]">
                    Exceptional Education for <span className="italic text-primary">Cambridge Success</span>
                  </h1>
                </FadeUp>
              </div>

              <FadeUp delay={0.2} className="max-w-xl">
                <p className="font-body text-base font-light text-black/50 leading-relaxed">
                  AECS Academy provides specialized IGCSE & O-Level coaching in Lahore. 
                  We focus on conceptual clarity and small-batch attention to help every student achieve their highest potential.
                </p>
              </FadeUp>

              <FadeUp delay={0.3} className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="/register" 
                  className="px-8 py-4 bg-primary text-white font-accent text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-[#5a1221] transition-all shadow-md"
                >
                  Apply for Admission
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-4 border border-black/10 text-secondary font-accent text-[10px] font-bold tracking-widest uppercase rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  About the Academy
                </Link>
              </FadeUp>
            </div>

            <FadeUp delay={0.2} className="relative hidden lg:block">
              <motion.div 
                style={{ y: heroImgY }}
                className="aspect-[5/4] relative rounded-3xl overflow-hidden shadow-xl border border-white"
              >
                <Image 
                  src={heroImg?.imageUrl ?? ""} 
                  alt="AECS Campus" 
                  fill 
                  className="object-cover"
                  priority 
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-lg border border-black/5 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Star size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary">A* Focus</p>
                    <p className="text-[10px] text-black/40 uppercase tracking-widest">Marking Excellence</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Tight Stat Bar */}
        <div className="mt-20 border-y border-black/5 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4" ref={statsRef}>
              {STATS.map((s, i) => (
                <div key={i} className={`py-8 flex flex-col items-center text-center ${i < STATS.length - 1 ? 'md:border-r border-black/5' : ''}`}>
                  <div className="font-display text-3xl font-bold text-primary mb-0.5">
                    <CountUp target={s.val} suffix={s.suffix} active={statsInView} />
                  </div>
                  <span className="font-accent text-[8px] font-bold tracking-widest uppercase text-black/30">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PILLARS SECTION ══════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <FadeUp>
              <span className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-3 block">
                The Foundation
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary">
                Our Academic <span className="italic text-primary">Philosophy</span>
              </h2>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.1} className="p-8 bg-[#FAF7F2] rounded-2xl border border-black/5 hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                  <p.icon size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary mb-2">{p.title}</h3>
                <p className="font-body text-sm font-light text-black/50 leading-relaxed">
                  {p.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SUBJECTS SECTION ══════ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp className="order-2 lg:order-1">
              <div className="aspect-video relative rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src={classroomImg?.imageUrl ?? ""} 
                  alt="Modern Classroom" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </FadeUp>

            <div className="order-1 lg:order-2 space-y-8">
              <FadeUp>
                <span className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-3 block">
                  Comprehensive Curriculum
                </span>
                <h2 className="font-display text-4xl font-bold text-secondary">
                  Specialised <span className="text-primary italic">IGCSE & O-Level</span> Streams
                </h2>
                <p className="font-body text-sm text-black/50 mt-4 max-w-lg leading-relaxed">
                  We offer a wide range of subjects designed to provide students with a strong academic foundation for their future careers.
                </p>
              </FadeUp>

              <div className="flex flex-wrap gap-2">
                {SUBJECTS.map((sub, i) => (
                  <FadeUp key={sub} delay={i * 0.05} className="px-4 py-2 bg-white rounded-lg border border-black/5 font-accent text-[9px] font-bold tracking-widest uppercase text-black/40 hover:text-primary transition-all">
                    {sub}
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.4}>
                <Link 
                  href="/register" 
                  className="inline-flex items-center gap-2 text-primary font-accent text-[10px] font-bold tracking-widest uppercase hover:gap-4 transition-all"
                >
                  Enroll Today <ArrowRight size={14} />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ COMPACT TESTIMONIALS SECTION ══════ */}
      <section className="py-24 bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <FadeUp>
              <span className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-3 block">
                Student Success
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                Voices of <span className="text-primary italic">Excellence</span>
              </h2>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={i} delay={i * 0.1} className="p-8 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-display font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-lg">{t.name}</p>
                    <p className="font-accent text-[9px] font-bold tracking-widest uppercase text-primary">{t.grade}</p>
                  </div>
                </div>
                <p className="font-body text-sm font-light text-white/60 leading-relaxed italic">
                  "{t.text}"
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA SECTION ══════ */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeUp className="bg-primary p-12 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden shadow-lg">
            <div className="relative z-10 space-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                Secure Your <span className="italic">Future Today</span>
              </h2>
              <p className="font-body text-sm text-white/70 max-w-md mx-auto">
                Admissions for the 2025 academic session are now open. Start your 
                journey with Lahore's finest IGCSE educators.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/register" 
                  className="px-8 py-4 bg-white text-primary font-accent text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-accent hover:text-white transition-all"
                >
                  Enroll Now
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 border border-white/20 text-white font-accent text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
