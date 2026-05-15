"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const categories = ['All', 'Classrooms', 'Events', 'Activities', 'Results'];

const galleryItems = [
  { id: 1, category: 'Classrooms', image: PlaceHolderImages.find(i => i.id === 'gallery-1')?.imageUrl,       label: 'Main Classroom',        span: 'md:row-span-2' },
  { id: 2, category: 'Events',     image: PlaceHolderImages.find(i => i.id === 'gallery-2')?.imageUrl,       label: 'Annual Ceremony',       span: 'md:col-span-2' },
  { id: 3, category: 'Results',    image: PlaceHolderImages.find(i => i.id === 'gallery-3')?.imageUrl,       label: 'O-Level Toppers 2024',  span: '' },
  { id: 4, category: 'Activities', image: PlaceHolderImages.find(i => i.id === 'gallery-4')?.imageUrl,       label: 'Student Workshop',      span: 'md:row-span-2' },
  { id: 5, category: 'Classrooms', image: PlaceHolderImages.find(i => i.id === 'classroom')?.imageUrl,       label: 'Science Session',       span: '' },
  { id: 6, category: 'Results',    image: PlaceHolderImages.find(i => i.id === 'student-success')?.imageUrl, label: 'Cambridge Results Day', span: 'md:col-span-2' },
  { id: 7, category: 'Events',     image: PlaceHolderImages.find(i => i.id === 'library')?.imageUrl,         label: 'Library & Study Hall',  span: '' },
  { id: 8, category: 'Activities', image: PlaceHolderImages.find(i => i.id === 'hero-bg')?.imageUrl,         label: 'Academy Campus',        span: '' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<null | { image: string; label: string }>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory);

  return (
    <div className="pb-24" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

      {/* ── HEADER ── */}
      <section
        className="relative overflow-hidden pt-36 pb-28"
        style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 60%, #0b1628 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />
        <div className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] rounded-full border border-[#C8960C]/8 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#C8960C]/40" />
            <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>The AECS Lens</span>
            <div className="h-px w-12 bg-[#C8960C]/40" />
          </div>
          <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: '1.02' }}>
            Academy <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Life</span>
          </h1>
          <p className="text-xl leading-relaxed mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Capturing moments of learning, success, and brilliance at our campus.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl">

        {/* ── FILTERS ── */}
        <div className="flex flex-wrap justify-center gap-3 my-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-semibold uppercase transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.2em',
                padding: '10px 24px',
                borderRadius: '100px',
                border: activeCategory === cat ? 'none' : '1px solid rgba(11,22,40,0.15)',
                background: activeCategory === cat ? '#7B1C2E' : 'transparent',
                color: activeCategory === cat ? 'white' : 'rgba(11,22,40,0.45)',
                boxShadow: activeCategory === cat ? '0 8px 24px rgba(123,28,46,0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── MASONRY GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[240px]">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`relative overflow-hidden group cursor-pointer rounded-3xl ${item.span}`}
              style={{
                boxShadow: '0 4px 24px rgba(11,22,40,0.08)',
                border: '1px solid rgba(123,28,46,0.06)',
                animationDelay: `${i * 80}ms`,
              }}
              onClick={() => setLightbox({ image: item.image ?? '', label: item.label })}
            >
              <Image
                src={item.image ?? ''}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{ background: 'linear-gradient(to top, rgba(11,22,40,0.85) 0%, transparent 100%)' }}
              >
                <span
                  className="inline-block mb-2 px-3 py-1 rounded-full text-[9px] font-semibold uppercase tracking-widest w-fit"
                  style={{ background: '#C8960C', color: '#0b1628', fontFamily: "'Inter', sans-serif" }}
                >
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg">{item.label}</h3>
              </div>
              {/* Zoom button */}
              <div
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
              >
                <ZoomIn size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors z-10"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden"
            style={{ borderRadius: '2rem', boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={lightbox.image}
              alt={lightbox.label}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-5 text-white text-center"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
            >
              <p className="font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{lightbox.label}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
