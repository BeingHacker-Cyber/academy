"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle2, Users, GraduationCap,
  Award, BookOpen, Star, TrendingUp, Lightbulb,
  ShieldCheck, Monitor, Building2, MapPin, Phone, Trophy,
} from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Students Enrolled',  icon: Users         },
  { value: '15+',  label: 'Expert Faculty',      icon: GraduationCap },
  { value: '10+',  label: 'Years of Excellence', icon: Award         },
  { value: '100%', label: 'Success Rate',        icon: Trophy        },
];

const pillars = [
  {
    num: '01',
    title: 'Expert Mentorship',
    desc: 'Cambridge-certified educators with decades of O-Level exam experience.',
    icon: Star,
  },
  {
    num: '02',
    title: 'Personalised Focus',
    desc: 'Small batches ensure every student gets dedicated conceptual guidance.',
    icon: Lightbulb,
  },
  {
    num: '03',
    title: 'Proven Results',
    desc: 'A legacy of A* and A grades in IGCSE & O-Level year after year.',
    icon: TrendingUp,
  },
  {
    num: '04',
    title: 'Curriculum Mastery',
    desc: 'Deep subject expertise aligned precisely with the Cambridge syllabus.',
    icon: ShieldCheck,
  },
];

const subjects = [
  'Mathematics', 'English', 'Physics', 'Chemistry', 'Biology',
  'Computer Science', 'Business Studies', 'Economics',
  'Accounting', 'Pak Studies', 'Islamiat',
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Home() {
  const heroImg      = PlaceHolderImages.find(i => i.id === 'hero-bg');
  const classroomImg = PlaceHolderImages.find(i => i.id === 'classroom');

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#fff', color: '#1a1a1a' }}>

      {/* ══════════════════════════════════════
          1. HERO  — split layout, cream left panel
      ══════════════════════════════════════ */}
      <section style={{ background: '#FAF7F2', minHeight: '92vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(123,28,46,0.08)' }}>
        <div className="container mx-auto max-w-7xl" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, minHeight: '92vh' }}>

          {/* LEFT — text */}
          <div style={{ padding: '6rem 4rem 4rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(123,28,46,0.08)' }}>

            {/* Year tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '2.5rem' }}>
              <div style={{ width: 32, height: 32, background: '#7B1C2E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={15} color="#fff" />
              </div>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7B1C2E' }}>
                Est. 2014 · Lake City, Lahore
              </span>
            </div>

            <h1 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(3rem, 5.5vw, 5.2rem)', fontWeight: 700, lineHeight: 1.0, color: '#1a1a1a', marginBottom: '1.5rem' }}>
              Cambridge<br />
              <span style={{ color: '#7B1C2E' }}>Excellence,</span><br />
              Delivered.
            </h1>

            {/* Thick rule */}
            <div style={{ width: 48, height: 3, background: '#7B1C2E', marginBottom: '1.75rem' }} />

            <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.9, color: 'rgba(26,26,26,0.55)', marginBottom: '2.5rem', maxWidth: 400 }}>
              Lahore's most focused IGCSE &amp; O-Level academy — specialised coaching from Grade 6 through O-Level with 100% personalised attention and proven results.
            </p>

            {/* Mode pills */}
            <div style={{ display: 'flex', gap: 10, marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { icon: Monitor,   label: 'Online Classes' },
                { icon: Building2, label: 'On Campus'      },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', border: '1px solid rgba(123,28,46,0.2)', background: '#fff', fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.6)' }}
                >
                  <Icon size={12} style={{ color: '#7B1C2E' }} />
                  {label}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <Link
                href="/register"
                className="group"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 30px', background: '#7B1C2E', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.25s' }}
              >
                Apply Now <ArrowRight size={14} />
              </Link>
              <Link
                href="/about"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 30px', border: '1px solid rgba(26,26,26,0.2)', color: 'rgba(26,26,26,0.6)', fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s' }}
              >
                Learn More
              </Link>
            </div>

            {/* Mini stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, marginTop: '4rem', borderTop: '1px solid rgba(123,28,46,0.1)', paddingTop: '2rem' }}>
              {[
                { val: '500+', lbl: 'Students'  },
                { val: 'A*',   lbl: 'Avg Grade'  },
                { val: '10+',  lbl: 'Years'      },
              ].map(({ val, lbl }, i) => (
                <div key={lbl} style={{ paddingRight: i < 2 ? '1.5rem' : 0, borderRight: i < 2 ? '1px solid rgba(123,28,46,0.1)' : 'none', paddingLeft: i > 0 ? '1.5rem' : 0 }}>
                  <div style={{ fontFamily: "'Georgia', serif", fontSize: '2.4rem', fontWeight: 700, color: '#7B1C2E', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '8px', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.35)', marginTop: 6 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image with overlays */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              <Image
                src={heroImg?.imageUrl ?? ''}
                alt="AECS Academy students"
                fill
                className="object-cover"
                priority
              />
              {/* Light warm overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(250,247,242,0.15)' }} />
            </div>

            {/* Corner badge — top left */}
            <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', background: '#7B1C2E', padding: '1.25rem 1.5rem', zIndex: 10 }}>
              <div style={{ fontFamily: "'Georgia', serif", fontSize: '1.8rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>10+</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '8px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 5 }}>Yrs</div>
            </div>

            {/* Bottom strip */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(250,247,242,0.96)', borderTop: '1px solid rgba(123,28,46,0.08)', padding: '1.25rem 2rem', display: 'flex', alignItems: 'center', gap: 14, zIndex: 10 }}>
              <Trophy size={18} style={{ color: '#7B1C2E', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: '1rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1 }}>A* Average Grade</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', color: 'rgba(26,26,26,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4 }}>Every Academic Session</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          2. TICKER STRIP
      ══════════════════════════════════════ */}
      <div style={{ background: '#7B1C2E', padding: '11px 0', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap', animation: 'ticker 28s linear infinite' }}
        >
          {['IGCSE Specialists', 'O-Level Experts', 'Grade 6–11', 'Online & On-Campus', 'Lake City Lahore', '100% Success Rate', 'Cambridge Certified', 'Small Batch Sizes'].flatMap((t, i, a) => [
            <span key={`t${i}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', padding: '0 28px', display: 'inline-block' }}>{t}</span>,
            <span key={`s${i}`} style={{ color: 'rgba(255,255,255,0.3)', display: 'inline-block' }}>✦</span>,
          ])}
          {['IGCSE Specialists', 'O-Level Experts', 'Grade 6–11', 'Online & On-Campus', 'Lake City Lahore', '100% Success Rate', 'Cambridge Certified', 'Small Batch Sizes'].flatMap((t, i) => [
            <span key={`t2${i}`} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', padding: '0 28px', display: 'inline-block' }}>{t}</span>,
            <span key={`s2${i}`} style={{ color: 'rgba(255,255,255,0.3)', display: 'inline-block' }}>✦</span>,
          ])}
        </div>
        <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>


      {/* ══════════════════════════════════════
          3. STATS — horizontal rule style
      ══════════════════════════════════════ */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(123,28,46,0.07)' }}>
        <div className="container mx-auto max-w-7xl">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '3rem 2rem',
                  borderRight: i < 3 ? '1px solid rgba(123,28,46,0.07)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1rem',
                }}
              >
                <s.icon size={20} style={{ color: '#7B1C2E' }} />
                <div style={{ fontFamily: "'Georgia', serif", fontSize: '2.8rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.35)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          4. WHY AECS — editorial numbered list
      ══════════════════════════════════════ */}
      <section style={{ background: '#FAF7F2', padding: '6rem 0', borderBottom: '1px solid rgba(123,28,46,0.07)' }}>
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem', alignItems: 'end' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <div style={{ width: 24, height: 2, background: '#7B1C2E' }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7B1C2E' }}>
                  Foundation for Brilliance
                </span>
              </div>
              <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.05 }}>
                Why Choose<br /><span style={{ color: '#7B1C2E' }}>AECS Academy?</span>
              </h2>
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 300, lineHeight: 1.9, color: 'rgba(26,26,26,0.5)', paddingTop: '1rem' }}>
              A structured, supportive environment designed specifically for the rigorous Cambridge curriculum — where every student's potential is fully realised.
            </p>
          </div>

          {/* 4 pillars — large number + card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(123,28,46,0.08)' }}>
            {pillars.map((p) => (
              <div
                key={p.num}
                style={{ background: '#fff', padding: '2.5rem 2rem', position: 'relative', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#7B1C2E'; (e.currentTarget as HTMLElement).querySelectorAll('[data-flip]').forEach(el => { (el as HTMLElement).style.color = '#fff'; }); (e.currentTarget as HTMLElement).querySelector('[data-icon]')!.querySelector('*')!.setAttribute('stroke', '#fff'); }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).querySelectorAll('[data-flip]').forEach((el, i) => { (el as HTMLElement).style.color = i === 0 ? 'rgba(26,26,26,0.05)' : i === 1 ? '#7B1C2E' : i === 2 ? '#1a1a1a' : 'rgba(26,26,26,0.5)'; }); }}
              >
                <p data-flip="num" style={{ fontFamily: "'Georgia', serif", fontSize: '4rem', fontWeight: 700, color: 'rgba(26,26,26,0.05)', lineHeight: 1, marginBottom: '1.5rem', transition: 'color 0.3s' }}>{p.num}</p>
                <div data-icon style={{ marginBottom: '1rem' }}>
                  <p.icon size={22} color="#7B1C2E" style={{ transition: 'stroke 0.3s' }} />
                </div>
                <p data-flip="title" style={{ fontFamily: "'Georgia', serif", fontSize: '1.2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem', transition: 'color 0.3s' }}>{p.title}</p>
                <p data-flip="desc" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(26,26,26,0.5)', transition: 'color 0.3s' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          5. SUBJECTS — light, grid of tags
      ══════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '6rem 0', borderBottom: '1px solid rgba(123,28,46,0.07)' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '5rem', alignItems: 'center' }}>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <div style={{ width: 24, height: 2, background: '#7B1C2E' }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7B1C2E' }}>Full Cambridge Curriculum</span>
              </div>
              <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.06, marginBottom: '1.5rem' }}>
                Specialised<br /><span style={{ color: '#7B1C2E' }}>Subjects</span> We Offer
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 300, lineHeight: 1.9, color: 'rgba(26,26,26,0.5)', marginBottom: '2rem' }}>
                From core sciences to business studies — the complete Cambridge IGCSE &amp; O-Level curriculum, taught by subject experts.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
                {subjects.map((sub) => (
                  <span
                    key={sub}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 14px', border: '1px solid rgba(123,28,46,0.18)', background: '#FAF7F2', fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.65)', transition: 'all 0.2s', cursor: 'default' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#7B1C2E'; (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = '#7B1C2E'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#FAF7F2'; (e.currentTarget as HTMLElement).style.color = 'rgba(26,26,26,0.65)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,28,46,0.18)'; }}
                  >
                    <CheckCircle2 size={11} style={{ color: '#7B1C2E', flexShrink: 0 }} />
                    {sub}
                  </span>
                ))}
              </div>
              <Link
                href="/register"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 28px', background: '#7B1C2E', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                Explore &amp; Enroll <ArrowRight size={13} />
              </Link>
            </div>

            {/* Classroom image */}
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', border: '1px solid rgba(123,28,46,0.09)' }}>
                <Image src={classroomImg?.imageUrl ?? ''} alt="AECS Classroom" fill className="object-cover" />
              </div>
              {/* Grade badge */}
              <div style={{ position: 'absolute', bottom: '-24px', right: '-18px', background: '#7B1C2E', border: '1px solid rgba(200,150,12,0.3)', padding: '1.5rem 2rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>Grade 6</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '8px', fontWeight: 600, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', margin: '6px 0' }}>through</div>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: '1.5rem', fontWeight: 700, color: '#C8960C', lineHeight: 1 }}>O Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          6. CAMPUS — light feature section
      ══════════════════════════════════════ */}
      <section style={{ background: '#FAF7F2', padding: '6rem 0', borderBottom: '1px solid rgba(123,28,46,0.07)' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(123,28,46,0.08)' }}>
              {[
                { val: '100%', lbl: 'Pass Rate',         sub: 'Every session',       dark: true  },
                { val: '10+',  lbl: 'Years Experience',  sub: 'Cambridge focus',      dark: false },
                { val: '15+',  lbl: 'Expert Teachers',   sub: 'Certified educators',  dark: false },
                { val: '500+', lbl: 'Students Enrolled', sub: '& counting',           dark: true  },
              ].map(({ val, lbl, sub, dark }) => (
                <div key={lbl} style={{ background: dark ? '#7B1C2E' : '#fff', padding: '2.5rem 2rem' }}>
                  <div style={{ fontFamily: "'Georgia', serif", fontSize: '2.6rem', fontWeight: 700, color: dark ? '#fff' : '#1a1a1a', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,0.6)' : 'rgba(26,26,26,0.5)', marginTop: 10, marginBottom: 4 }}>{lbl}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: dark ? 'rgba(255,255,255,0.35)' : 'rgba(26,26,26,0.35)', fontWeight: 300 }}>{sub}</div>
                </div>
              ))}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                <div style={{ width: 24, height: 2, background: '#7B1C2E' }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7B1C2E' }}>Modern Learning Facilities</span>
              </div>
              <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.06, marginBottom: '1.5rem' }}>
                A Campus Built for<br /><span style={{ color: '#7B1C2E' }}>Academic Excellence</span>
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 300, lineHeight: 1.9, color: 'rgba(26,26,26,0.5)', marginBottom: '2rem' }}>
                Our campus near Lake City Raiwind Road provides a quiet, distraction-free environment equipped with modern classrooms and resources.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Grade 6 to O-Level Specialised Focus',
                  'Online &amp; Hybrid Learning Options',
                  'Strategic Location near Raiwind Road',
                  'Monthly Progress Reports for Parents',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 6, height: 6, background: '#7B1C2E', flexShrink: 0 }} />
                    <span
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: 'rgba(26,26,26,0.65)' }}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 28px', background: '#7B1C2E', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                About Our Academy <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          7. SUMMER PROMO — white, bordered box
      ══════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '5rem 0', borderBottom: '1px solid rgba(123,28,46,0.07)' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center', border: '1px solid rgba(123,28,46,0.15)', padding: '3.5rem 3.5rem', position: 'relative', overflow: 'hidden' }}>
            {/* Left accent bar */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#7B1C2E' }} />

            <div style={{ paddingLeft: '1rem' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7B1C2E', marginBottom: '1rem' }}>
                Starting June 2025
              </div>
              <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.06, marginBottom: '1rem' }}>
                Summer Foundation <span style={{ color: '#7B1C2E' }}>Courses</span>
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 300, lineHeight: 1.9, color: 'rgba(26,26,26,0.5)', marginBottom: '1.5rem', maxWidth: 480 }}>
                Bridge the gap in <strong style={{ fontWeight: 600, color: '#1a1a1a' }}>Mathematics</strong> and <strong style={{ fontWeight: 600, color: '#1a1a1a' }}>English Language</strong> this summer. Build a strong foundation before the term begins.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: '2rem' }}>
                {['Mathematics', 'English Language'].map((s) => (
                  <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 14px', border: '1px solid rgba(123,28,46,0.2)', background: '#FAF7F2', fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7B1C2E' }}>
                    <BookOpen size={11} />
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href="/register"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 28px', background: '#7B1C2E', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                Reserve Your Seat <ArrowRight size={13} />
              </Link>
            </div>

            {/* Circle */}
            <div style={{ width: 150, height: 150, border: '1px solid rgba(123,28,46,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '8px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.35)' }}>Starts</div>
              <div style={{ fontFamily: "'Georgia', serif", fontSize: '2.2rem', fontWeight: 700, color: '#7B1C2E', lineHeight: 1.1 }}>June</div>
              <div style={{ fontFamily: "'Georgia', serif", fontSize: '1.2rem', fontWeight: 700, color: 'rgba(26,26,26,0.3)', lineHeight: 1 }}>2025</div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          8. CTA BAND — maroon full width
      ══════════════════════════════════════ */}
      <section style={{ background: '#7B1C2E', padding: '5rem 0' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.75rem' }}>
                Admissions Open — 2025
              </div>
              <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#fff' }}>
                Ready to Start Your Journey?
              </h2>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link
                href="/register"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', background: '#fff', color: '#7B1C2E', fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.2s' }}
              >
                Enroll Now <ArrowRight size={13} />
              </Link>
              <a
                href="tel:03144033054"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                <Phone size={13} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}