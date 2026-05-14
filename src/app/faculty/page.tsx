"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, BookOpen, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const filters = ['All', 'Mathematics', 'Sciences', 'English', 'Business', 'Social Studies'];

const faculty = [
  { name: 'Sir Ahmed Hassan',   subject: 'Mathematics & Add. Maths',     cat: 'Mathematics',    qual: 'M.Phil Mathematics (UET Lahore)',   bio: '12+ years of O-Level coaching — making Additional Mathematics intuitive. 90%+ A grades consistently.', av: 'AH', img: PlaceHolderImages.find(i => i.id === 'faculty-1')?.imageUrl },
  { name: 'Ms. Sarah Khan',     subject: 'English Language & Lit.',       cat: 'English',        qual: 'MA English (PU) · CELTA Certified',  bio: 'Specialises in critical analysis and creative writing. 90% of students achieve A* in Cambridge English.', av: 'SK', img: PlaceHolderImages.find(i => i.id === 'faculty-2')?.imageUrl },
  { name: 'Sir Bilal Siddique', subject: 'Business Studies & Accounting', cat: 'Business',       qual: 'ACCA Gold Medalist · MBA Finance',    bio: 'Real-world business scenarios bridge textbook theory and professional application for O-Level commerce.', av: 'BS', img: PlaceHolderImages.find(i => i.id === 'faculty-3')?.imageUrl },
  { name: 'Ms. Fatima Zahra',  subject: 'Chemistry & Biology',           cat: 'Sciences',       qual: 'M.Sc Biochemistry (LUMS)',            bio: 'Conceptual mapping and visual aids make molecular biology accessible, memorable, and high-scoring.', av: 'FZ', img: PlaceHolderImages.find(i => i.id === 'faculty-2')?.imageUrl },
  { name: 'Sir Usman Ali',     subject: 'Pak Studies & Islamiat',        cat: 'Social Studies', qual: 'M.A History · M.A Islamic Studies (PU)', bio: 'Engaging storytelling makes history and religious studies highly relatable — consistent top-grade results.', av: 'UA', img: PlaceHolderImages.find(i => i.id === 'faculty-1')?.imageUrl },
  { name: 'Ms. Zainab Malik',  subject: 'Economics',                     cat: 'Business',       qual: 'M.Sc Economics (LUMS)',               bio: 'Bridges global economic trends with Cambridge exam techniques, analytical writing, and time management.', av: 'ZM', img: PlaceHolderImages.find(i => i.id === 'faculty-3')?.imageUrl },
  { name: 'Sir Hamza Raza',    subject: 'Physics',                       cat: 'Sciences',       qual: 'B.Sc Electrical Eng. (NUST)',         bio: 'Physics principles through demonstrations and problem-solving sessions that build confidence and exam skill.', av: 'HR', img: PlaceHolderImages.find(i => i.id === 'faculty-1')?.imageUrl },
  { name: 'Ms. Ayesha Nadeem', subject: 'Computer Science',              cat: 'Sciences',       qual: 'BS Computer Science (FAST-NUCES)',    bio: 'Cambridge Computer Science specialist — mastery of both theory and practical programming for O-Level.', av: 'AN', img: PlaceHolderImages.find(i => i.id === 'faculty-2')?.imageUrl },
];

export default function FacultyPage() {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? faculty : faculty.filter(f => f.cat === active);

  return (
    <div
      className="pb-24 min-h-screen"
      style={{ background: '#faf8f4', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >

      {/* ── HEADER ── */}
      <section
        className="relative overflow-hidden pt-36 pb-28"
        style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 60%, #0b1628 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />
        <div className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] rounded-full border border-[#C8960C]/8 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#C8960C]/40" />
            <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Our Mentors</span>
            <div className="h-px w-12 bg-[#C8960C]/40" />
          </div>
          <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: '1.02' }}>
            Expert <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Educators</span>
          </h1>
          <p className="text-xl leading-relaxed mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Lahore's most qualified Cambridge educators — excellence in every subject, every session.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl">

        {/* ── FILTERS ── */}
        <div className="flex flex-wrap justify-center gap-3 my-16">
          {filters.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="font-semibold uppercase transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.2em',
                padding: '10px 24px',
                borderRadius: '100px',
                border: active === cat ? 'none' : '1px solid rgba(11,22,40,0.15)',
                background: active === cat ? '#7B1C2E' : 'transparent',
                color: active === cat ? 'white' : 'rgba(11,22,40,0.45)',
                boxShadow: active === cat ? '0 8px 24px rgba(123,28,46,0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {shown.map((m, i) => (
            <div
              key={m.name}
              className="group h-[490px]"
              style={{ perspective: '1100px' }}
            >
              <div
                className="relative h-full w-full transition-all duration-700 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  borderRadius: '2rem',
                  transform: undefined,
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'rotateY(180deg)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'rotateY(0deg)'}
              >

                {/* ── FRONT ── */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    borderRadius: '2rem',
                    background: 'white',
                    border: '1px solid rgba(123,28,46,0.08)',
                    boxShadow: '0 4px 24px rgba(11,22,40,0.06)',
                  }}
                >
                  <div className="relative h-[62%] w-full overflow-hidden">
                    <Image src={m.img ?? ''} alt={m.name} fill className="object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0b1628 0%, rgba(11,22,40,0.1) 60%, transparent 100%)' }} />
                    <div className="absolute bottom-5 left-6 right-6">
                      <span
                        className="inline-block mb-2 px-3 py-1 rounded-full text-[8.5px] font-semibold uppercase tracking-widest"
                        style={{ background: '#C8960C', color: '#0b1628', fontFamily: "'Inter', sans-serif" }}
                      >
                        {m.subject}
                      </span>
                      <h3 className="text-white text-xl font-bold leading-tight">{m.name}</h3>
                    </div>
                  </div>
                  <div className="h-[38%] p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2" style={{ color: '#7B1C2E' }}>
                        <GraduationCap size={14} />
                        <span className="text-[9px] uppercase tracking-wider font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{m.qual}</span>
                      </div>
                      <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'rgba(11,22,40,0.45)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{m.bio}</p>
                    </div>
                    <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid rgba(11,22,40,0.07)' }}>
                      <span className="text-[8.5px] uppercase tracking-widest font-semibold" style={{ color: '#C8960C', fontFamily: "'Inter', sans-serif" }}>Hover for bio</span>
                      <BookOpen size={12} style={{ color: '#C8960C' }} />
                    </div>
                  </div>
                </div>

                {/* ── BACK ── */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center px-10 py-12"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    borderRadius: '2rem',
                    background: 'linear-gradient(145deg, #7B1C2E 0%, #4a0e1b 100%)',
                    boxShadow: '0 20px 60px rgba(123,28,46,0.4)',
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-5"
                    style={{ fontFamily: "'Cormorant Garamond', serif", background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)' }}
                  >
                    {m.av}
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-1">{m.name}</h3>
                  <p className="text-[9px] uppercase tracking-widest mb-4" style={{ color: '#C8960C', fontFamily: "'Inter', sans-serif" }}>{m.subject}</p>
                  <div className="w-10 h-[1.5px] rounded-full mb-5 mx-auto" style={{ background: 'rgba(200,150,12,0.5)' }} />
                  <p className="text-sm leading-relaxed italic" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    "{m.bio}"
                  </p>
                  <div
                    className="mt-6 px-5 py-2 rounded-full text-[9px] uppercase tracking-widest text-white font-semibold"
                    style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', fontFamily: "'Inter', sans-serif" }}
                  >
                    Cambridge Specialist
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {shown.length === 0 && (
          <div className="text-center py-24" style={{ color: 'rgba(11,22,40,0.3)' }}>
            <p className="text-3xl mb-2">No faculty in this category yet.</p>
            <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Check back soon as we grow our team!</p>
          </div>
        )}

        {/* ── CTA ── */}
        <div
          className="mt-20 rounded-[2.5rem] p-14 text-center"
          style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 100%)', border: '1px solid rgba(200,150,12,0.15)' }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] mb-3" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif" }}>Join Our Academy</p>
          <h3 className="text-white text-4xl font-bold mb-6">Learn from the Best</h3>
          <Link
            href="/register"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
            style={{ background: '#C8960C', color: '#0b1628', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.1em' }}
          >
            Enroll Now
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}