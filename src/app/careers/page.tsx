"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Globe, Users, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

const OPENINGS = [
  { 
    title: 'IGCSE Mathematics Faculty', 
    type: 'Full-time / Part-time', 
    location: 'On-Campus (Lahore)',
    desc: 'Seeking an expert educator with mastery over Additional Mathematics and O-Level syllabus.'
  },
  { 
    title: 'English Language Specialist', 
    type: 'Full-time', 
    location: 'Hybrid',
    desc: 'Passionate about literature and language. Must have experience with Cambridge marking criteria.'
  },
  { 
    title: 'Computer Science Instructor', 
    type: 'Part-time', 
    location: 'On-Campus',
    desc: 'Expertise in Python, pseudocode, and hardware theory for IGCSE Year 1 & 2.'
  },
];

export default function CareersPage() {
  return (
    <div className="pb-24" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      
      {/* ── HEADER ── */}
      <section
        className="relative overflow-hidden pt-40 pb-32"
        style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 60%, #0b1628 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#C8960C]/40" />
              <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Join the Legacy</span>
              <div className="h-px w-12 bg-[#C8960C]/40" />
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: '1.02' }}>
              Shape the <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Future</span>
            </h1>
            <p className="text-xl leading-relaxed mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              At AECS Academy, we don't just hire teachers; we empower mentors who are passionate about academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY JOIN US ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: GraduationCap, title: 'Academic Rigor', text: 'Work in an environment that prioritizes conceptual understanding over memorization.' },
              { icon: Globe, title: 'Global Standards', text: 'Align your teaching methodologies with international Cambridge (CAIE) benchmarks.' },
              { icon: Users, title: 'Peer Excellence', text: 'Collaborate with Lahore\'s leading O-Level specialists and subject experts.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-black/5 bg-[#FAF7F2]/50 hover:bg-white hover:shadow-xl transition-all duration-500 group"
              >
                <item.icon size={32} className="text-[#7B1C2E] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-[#0b1628] mb-4">{item.title}</h3>
                <p className="font-body text-sm text-black/40 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0b1628] mb-4">Current Openings</h2>
            <div className="h-1 w-20 bg-[#7B1C2E] mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {OPENINGS.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-black/5 rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#7B1C2E]/20 transition-all group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#7B1C2E]/5 text-[#7B1C2E] text-[9px] font-bold tracking-widest uppercase rounded-full">{job.type}</span>
                    <span className="text-[10px] text-black/30 font-semibold flex items-center gap-1 uppercase tracking-wider"><Briefcase size={10} /> {job.location}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-[#0b1628]">{job.title}</h4>
                  <p className="font-body text-xs text-black/50 max-w-md">{job.desc}</p>
                </div>
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-[#0b1628] text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-[#7B1C2E] transition-all flex items-center gap-2"
                >
                  Apply Now <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mt-24 container mx-auto px-6 max-w-4xl">
        <div
          className="p-16 rounded-[3rem] text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 100%)', border: '1px solid rgba(200,150,12,0.15)' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8960C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Don't See a Perfect Fit?</h2>
          <p className="text-white/40 font-body text-lg max-w-xl mx-auto mb-10 relative z-10">
            We are always looking for exceptional talent. If you believe you can add value to the AECS ecosystem, send us your resume.
          </p>
          <a 
            href="mailto:Hassani854@gmail.com"
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#C8960C] text-[#0b1628] font-bold tracking-[0.2em] uppercase rounded-full hover:scale-105 transition-all relative z-10"
            style={{ fontSize: '11px', fontFamily: "'Inter', sans-serif" }}
          >
            <Mail size={16} /> Send Resume
          </a>
        </div>
      </section>
    </div>
  );
}
