
"use client";
import React from 'react';
import Image from 'next/image';
import { Target, Eye, MapPin, CheckCircle2, Phone, Mail } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const libraryImage = PlaceHolderImages.find(i => i.id === 'library');

  return (
    <div
      className="pb-20"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-44 pb-28"
        style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 60%, #0e0e1a 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none dot-grid" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#C8960C]/40" />
              <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>The AECS Legacy</span>
              <div className="h-px w-12 bg-[#C8960C]/40" />
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: '1.02' }}>
              Shaping Cambridge<br />
              <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Brilliance</span>
            </h1>
            <p className="text-xl leading-relaxed mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Founded with the singular vision of providing high-end, conceptual, and results-oriented IGCSE & O-Level education in Lahore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src={libraryImage?.imageUrl ?? ''} alt="AECS Library" fill className="object-cover" />
              </div>
              <div className="absolute -top-8 -right-8 w-44 h-44 rounded-full flex flex-col items-center justify-center text-center bg-[#7B1C2E] border-4 border-white shadow-xl">
                <span className="text-4xl font-bold text-white">10+</span>
                <span className="text-[9px] uppercase tracking-widest text-white/60">Years of<br />Excellence</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C8960C]" />
                <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Our Philosophy</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#0b1628', lineHeight: 1.08 }}>
                Built on a Mission to<br />
                <span style={{ color: '#7B1C2E', fontStyle: 'italic' }}>Educate Better</span>
              </h2>
              <div className="space-y-4 text-black/50 leading-relaxed font-body">
                <p>AECS Academy emerged as a response to the growing need for specialised O-Level education that prioritises student understanding over memorisation.</p>
                <p>Our philosophy is simple: every student has the potential for excellence when provided with the right environment and expert faculty.</p>
              </div>
              <ul className="space-y-3 pt-2">
                {['Specialised IGCSE focus', 'Small cohort sizes', 'Expert faculty', 'Strategic location'].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-[#7B1C2E]" />
                    <span className="text-sm font-semibold uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="py-28 mx-4 rounded-[4rem] bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 italic">Vision & <span className="text-[#C8960C]">Mission</span></h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10">
              <Eye size={40} className="text-[#C8960C] mb-8" />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-white/50 leading-relaxed text-lg">To be the benchmark for Cambridge excellence in Pakistan — where students are empowered to think critically and achieve results that open doors to the world's leading universities.</p>
            </div>
            <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10">
              <Target size={40} className="text-primary mb-8" />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-white/50 leading-relaxed text-lg">To provide rigorous, conceptual coaching tailored to the individual learner's pace, maintaining an environment that fosters intellectual curiosity and academic excellence.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
