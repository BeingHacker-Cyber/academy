"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2, Users, GraduationCap, Award,
  ArrowRight, BookOpen, TrendingUp, Lightbulb,
  Star, ShieldCheck, Monitor, Building2, MapPin,
  ChevronRight, Sparkles, Trophy, Clock,
} from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const stats = [
  { label: 'Enrolled Students', value: '500+',         icon: Users         },
  { label: 'Expert Faculty',    value: '15+',           icon: GraduationCap },
  { label: 'Grade Range',       value: '6 – O Level',  icon: BookOpen      },
  { label: 'Success Rate',      value: '100%',          icon: Award         },
];

const values = [
  { title: 'Expert Mentorship',  desc: 'Cambridge-certified educators with decades of O-Level exam experience.',      icon: Star,       num: '01' },
  { title: 'Personalised Focus', desc: 'Small batches ensure every student receives dedicated conceptual guidance.',   icon: Lightbulb,  num: '02' },
  { title: 'Proven Results',     desc: 'A legacy of A* and A grades in IGCSE/O-Level examinations year after year.',  icon: TrendingUp, num: '03' },
  { title: 'Curriculum Mastery', desc: 'Deep subject expertise aligned precisely with the Cambridge IGCSE syllabus.', icon: ShieldCheck, num: '04' },
];

const subjects = [
  'Mathematics','English','Physics','Chemistry','Biology',
  'Pak Studies','Islamiat','Business Studies','Accounting',
  'Economics','Computer Science',
];

const tickerItems = [
  'IGCSE Specialists','O-Level Experts','Grade 6–11 Coverage','Online & On-Campus',
  'Lahore Lake City','100% Success Rate','Cambridge Certified','Small Batch Sizes',
];

export default function Home() {
  const heroImg      = PlaceHolderImages.find(i => i.id === 'hero-bg');
  const classroomImg = PlaceHolderImages.find(i => i.id === 'classroom');

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center pt-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 50%, #0e0e1a 100%)' }}
      >
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />

        {/* Large decorative gold circle */}
        <div className="absolute right-[-10%] top-[10%] w-[700px] h-[700px] rounded-full border border-[#C8960C]/8 pointer-events-none" />
        <div className="absolute right-[2%] top-[18%] w-[500px] h-[500px] rounded-full border border-[#C8960C]/12 pointer-events-none" />

        {/* Corner ornament */}
        <div className="absolute top-28 left-8 w-24 h-24 opacity-20 pointer-events-none">
          <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 96 L0 0 L96 0" stroke="#C8960C" strokeWidth="1" fill="none" />
            <path d="M16 96 L16 16 L96 16" stroke="#C8960C" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-16 right-8 w-24 h-24 opacity-20 rotate-180 pointer-events-none">
          <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 96 L0 0 L96 0" stroke="#C8960C" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C8960C]" />
                <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-sans font-semibold uppercase">
                  Lake City · Lahore · Est. 2014
                </span>
              </div>

              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3.2rem, 7vw, 5.8rem)', lineHeight: '1.02', fontWeight: 700 }}
                className="text-white">
                Excellence<br />
                <span style={{ color: '#C8960C', fontStyle: 'italic' }}>in Cambridge</span><br />
                Education
              </h1>

              <p className="text-white/50 text-lg leading-relaxed max-w-lg font-sans" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontWeight: 300 }}>
                Lahore's most focused IGCSE & O-Level academy — specialised coaching
                from Grade 6 to O-Level with 100% personalised attention.
              </p>

              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: Monitor,   label: 'Online Classes' },
                  { icon: Building2, label: 'On Campus'      },
                ].map(({ icon: Icon, label }) => (
                  <span key={label}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-white/70 font-sans text-xs tracking-widest uppercase"
                    style={{ borderColor: 'rgba(200,150,12,0.3)', background: 'rgba(200,150,12,0.06)', fontFamily: "'Inter', sans-serif" }}>
                    <Icon size={12} className="text-[#C8960C]" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <Link href="/register"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:gap-4"
                  style={{ background: '#C8960C', color: '#0b1628', fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>
                  Apply Now
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/about"
                  className="flex items-center gap-2 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white/5"
                  style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>
                  Learn More
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex gap-10 pt-4 border-t border-white/8">
                {[
                  { val: '500+', lbl: 'Students' },
                  { val: '15+',  lbl: 'Faculty'  },
                  { val: 'A*',   lbl: 'Avg Grade' },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.2rem', fontWeight: 700, color: '#C8960C', lineHeight: 1 }}>{val}</p>
                    <p className="text-white/35 text-[9px] tracking-[0.3em] uppercase font-sans mt-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="relative">
              <div className="relative aspect-[4/4.5] rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,150,12,0.15)' }}>
                <Image src={heroImg?.imageUrl ?? ''} alt="AECS Academy" fill className="object-cover" priority />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,22,40,0.7) 0%, transparent 60%)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(123,28,46,0.15) 0%, transparent 60%)' }} />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl p-5 hidden md:flex items-center gap-4"
                style={{ background: 'rgba(11,22,40,0.95)', border: '1px solid rgba(200,150,12,0.25)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(200,150,12,0.15)', border: '1px solid rgba(200,150,12,0.3)' }}>
                  <Trophy size={22} style={{ color: '#C8960C' }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>A* Grade</p>
                  <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-sans mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Avg Performance</p>
                </div>
              </div>

              {/* Years badge */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full hidden md:flex flex-col items-center justify-center text-center"
                style={{ background: '#7B1C2E', border: '2px solid rgba(200,150,12,0.4)', boxShadow: '0 8px 32px rgba(123,28,46,0.5)' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>10+</span>
                <span className="text-[7px] tracking-widest uppercase font-sans text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>Yrs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TICKER
      ══════════════════════════════════ */}
      <div className="overflow-hidden py-4" style={{ background: '#7B1C2E', borderTop: '1px solid rgba(200,150,12,0.2)', borderBottom: '1px solid rgba(200,150,12,0.2)' }}>
        <div className="flex gap-0 animate-marquee whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold text-white/80 px-8 whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
              <span style={{ color: '#C8960C', margin: '0 4px' }}>✦</span>
            </React.Fragment>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
      </div>

      {/* ══════════════════════════════════
          STATS BAR
      ══════════════════════════════════ */}
      <section className="py-16" style={{ background: '#faf8f4', borderBottom: '1px solid rgba(123,28,46,0.08)' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <div key={i} className={`text-center py-6 px-8 ${i < 3 ? 'border-r border-[rgba(123,28,46,0.08)]' : ''}`}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(123,28,46,0.07)' }}>
                  <s.icon size={22} style={{ color: '#7B1C2E' }} />
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.8rem', fontWeight: 700, color: '#0b1628', lineHeight: 1 }}>{s.value}</p>
                <p className="font-sans text-[9px] uppercase tracking-[0.3em] mt-2" style={{ color: 'rgba(11,22,40,0.4)', fontFamily: "'Inter', sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY AECS
      ══════════════════════════════════ */}
      <section className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#C8960C]" />
                <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-sans font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Foundation for Brilliance</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#0b1628', lineHeight: 1.05 }}>
                Why Choose<br />
                <span style={{ color: '#7B1C2E', fontStyle: 'italic' }}>AECS Academy?</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-lg leading-relaxed font-sans" style={{ color: 'rgba(11,22,40,0.55)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              A structured, supportive environment designed specifically for the rigorous Cambridge
              curriculum — where every student's potential is fully realised.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2"
                style={{ background: '#faf8f4', border: '1px solid rgba(123,28,46,0.07)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 60px rgba(123,28,46,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,150,12,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,28,46,0.07)'; }}>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(123,28,46,0.08)' }}>
                    <v.icon size={24} style={{ color: '#7B1C2E' }} />
                  </div>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3.5rem', fontWeight: 700, color: 'rgba(11,22,40,0.05)', lineHeight: 1 }}>{v.num}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: '#0b1628', marginBottom: '0.75rem' }}>{v.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(11,22,40,0.5)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{v.desc}</p>
                <div className="absolute bottom-0 left-8 right-8 h-[2px] w-0 group-hover:w-[calc(100%-4rem)] rounded-full transition-all duration-500" style={{ background: 'linear-gradient(90deg, #7B1C2E, #C8960C)', bottom: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SUBJECTS
      ══════════════════════════════════ */}
      <section className="py-28" style={{ background: '#0b1628' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C8960C]" />
                <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-sans font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Full Cambridge Curriculum</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 700, color: 'white', lineHeight: 1.05 }}>
                Specialised<br />
                <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Subjects</span><br />
                We Offer
              </h2>
              <p className="text-white/45 text-lg leading-relaxed font-sans" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                From core sciences to business studies — the complete spectrum of the Cambridge IGCSE & O-Level curriculum, taught by subject experts.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {subjects.map((sub) => (
                  <span key={sub}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full font-sans text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-default hover:-translate-y-0.5"
                    style={{ background: 'rgba(200,150,12,0.08)', border: '1px solid rgba(200,150,12,0.2)', color: 'rgba(255,255,255,0.75)', fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C8960C'; (e.currentTarget as HTMLElement).style.color = '#0b1628'; (e.currentTarget as HTMLElement).style.borderColor = '#C8960C'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(200,150,12,0.08)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,150,12,0.2)'; }}>
                    <CheckCircle2 size={10} style={{ color: '#C8960C' }} />
                    {sub}
                  </span>
                ))}
              </div>
              <Link href="/register"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                style={{ background: '#C8960C', color: '#0b1628', fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>
                Explore & Enroll
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.5)', border: '1px solid rgba(200,150,12,0.15)' }}>
                <Image src={classroomImg?.imageUrl ?? ''} alt="AECS Classroom" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,22,40,0.6) 0%, transparent 60%)' }} />
              </div>
              {/* Grade badge */}
              <div className="absolute -bottom-8 -right-6 p-8 rounded-3xl text-center hidden md:block"
                style={{ background: '#7B1C2E', border: '1px solid rgba(200,150,12,0.3)', boxShadow: '0 20px 60px rgba(123,28,46,0.4)' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>Grade 6</p>
                <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase my-2" style={{ fontFamily: "'Inter', sans-serif" }}>through</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: '#C8960C', lineHeight: 1 }}>O Level</p>
                <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Complete Pathway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CAMPUS
      ══════════════════════════════════ */}
      <section className="py-28" style={{ background: '#faf8f4' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C8960C]" />
                <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-sans font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Modern Learning Facilities</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 700, color: '#0b1628', lineHeight: 1.05 }}>
                A Campus Built for<br />
                <span style={{ color: '#7B1C2E', fontStyle: 'italic' }}>Academic Excellence</span>
              </h2>
              <p className="text-lg leading-relaxed font-sans" style={{ color: 'rgba(11,22,40,0.5)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Our campus near Lake City Raiwind Road provides a quiet, distraction-free environment
                equipped with modern classrooms and resources.
              </p>
              <ul className="space-y-4">
                {[
                  'Grade 6 to O-Level Specialised Focus',
                  'Online & Hybrid Learning Options',
                  'Strategic Location near Raiwind Road',
                  'Monthly Progress Reports for Parents',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(123,28,46,0.08)', border: '1px solid rgba(123,28,46,0.15)' }}>
                      <CheckCircle2 size={14} style={{ color: '#7B1C2E' }} />
                    </div>
                    <span className="font-sans text-sm" style={{ color: 'rgba(11,22,40,0.7)', fontFamily: "'Inter', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#7B1C2E', color: 'white', fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em', boxShadow: '0 8px 32px rgba(123,28,46,0.3)' }}>
                About Our Academy
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: '100%', lbl: 'Pass Rate',         sub: 'Every session'       },
                { val: '10+',  lbl: 'Years Experience',  sub: 'Cambridge focus'     },
                { val: '15+',  lbl: 'Expert Teachers',   sub: 'Certified educators' },
                { val: '500+', lbl: 'Students Enrolled', sub: '& counting'          },
              ].map(({ val, lbl, sub }, i) => (
                <div key={lbl}
                  className="p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: i % 2 === 0 ? '#0b1628' : '#7B1C2E', border: '1px solid rgba(200,150,12,0.15)', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.8rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>{val}</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] mt-2 mb-1" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif" }}>{lbl}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Inter', sans-serif" }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SUMMER PROMO
      ══════════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: '#fff' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="relative rounded-[2.5rem] overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 100%)', border: '1px solid rgba(200,150,12,0.2)' }}>
            {/* Decorative lines */}
            <div className="absolute top-0 left-0 bottom-0 w-1.5 rounded-l-[2.5rem]"
              style={{ background: 'linear-gradient(to bottom, #7B1C2E, #C8960C)' }} />

            <div className="px-12 md:px-20 py-16 md:py-20">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-[#C8960C]" />
                    <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-sans font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Starting June 2025</span>
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 700, color: 'white', lineHeight: 1.05 }}>
                    Summer Foundation<br />
                    <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Courses</span>
                  </h2>
                  <p className="text-white/50 text-lg leading-relaxed font-sans" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    Bridge the gap in <strong className="text-white/80">Mathematics</strong> and <strong className="text-white/80">English</strong> this summer.
                    Build a strong foundation before the term begins.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {['Mathematics', 'English Language'].map((sub) => (
                      <span key={sub}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-[10px] uppercase tracking-wider font-semibold"
                        style={{ background: 'rgba(200,150,12,0.12)', border: '1px solid rgba(200,150,12,0.25)', color: '#C8960C', fontFamily: "'Inter', sans-serif" }}>
                        <BookOpen size={10} />
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 text-center space-y-5">
                  <div className="w-36 h-36 rounded-full flex flex-col items-center justify-center mx-auto"
                    style={{ background: '#7B1C2E', border: '2px solid rgba(200,150,12,0.35)', boxShadow: '0 0 0 8px rgba(123,28,46,0.15)' }}>
                    <span className="text-white/60 text-[9px] tracking-widest uppercase font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>Starts</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700, color: 'white', lineHeight: 1.1 }}>June</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#C8960C', lineHeight: 1.1 }}>2025</span>
                  </div>
                  <Link href="/register"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                    style={{ background: '#C8960C', color: '#0b1628', fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>
                    Reserve Seat <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA BAND
      ══════════════════════════════════ */}
      <section className="py-20" style={{ background: '#7B1C2E' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/40 text-[10px] tracking-[0.35em] uppercase font-sans mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Admissions Open — 2025</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: 'white' }}>
                Ready to Start Your Journey?
              </h2>
            </div>
            <div className="flex gap-4">
              <Link href="/register"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                style={{ background: '#C8960C', color: '#0b1628', fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>
                Enroll Now <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a href="tel:03144033054"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
