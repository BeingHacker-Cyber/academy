"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const categories = ['All', 'Classrooms', 'Events', 'Activities', 'Results'];

const galleryItems = [
  { id: 1, category: 'Classrooms', image: PlaceHolderImages.find(i => i.id === 'gallery-1')?.imageUrl,      label: 'Main Classroom',         span: 'md:row-span-2' },
  { id: 2, category: 'Events',     image: PlaceHolderImages.find(i => i.id === 'gallery-2')?.imageUrl,      label: 'Annual Ceremony',        span: 'md:col-span-2' },
  { id: 3, category: 'Results',    image: PlaceHolderImages.find(i => i.id === 'gallery-3')?.imageUrl,      label: 'O-Level Toppers 2024',   span: '' },
  { id: 4, category: 'Activities', image: PlaceHolderImages.find(i => i.id === 'gallery-4')?.imageUrl,      label: 'Student Workshop',       span: 'md:row-span-2' },
  { id: 5, category: 'Classrooms', image: PlaceHolderImages.find(i => i.id === 'classroom')?.imageUrl,      label: 'Science Session',        span: '' },
  { id: 6, category: 'Results',    image: PlaceHolderImages.find(i => i.id === 'student-success')?.imageUrl,label: 'Cambridge Results Day',  span: 'md:col-span-2' },
  { id: 7, category: 'Events',     image: PlaceHolderImages.find(i => i.id === 'library')?.imageUrl,        label: 'Library & Study Hall',   span: '' },
  { id: 8, category: 'Activities', image: PlaceHolderImages.find(i => i.id === 'hero-bg')?.imageUrl,        label: 'Academy Campus',         span: '' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<null | { image: string; label: string }>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="py-24 bg-muted/30 mb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            The AECS Lens
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary mb-6">Academy Life</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Capturing moments of learning, success, and brilliance at our campus.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-accent text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary border-primary text-white shadow-md'
                  : 'border-muted text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[240px]">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-[2rem] group cursor-pointer shadow-card animate-fade-up ${item.span}`}
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => setLightbox({ image: item.image ?? '', label: item.label })}
            >
              <Image
                src={item.image ?? ''}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6">
                <span className="bg-accent text-secondary px-3 py-1 rounded-full text-[9px] font-accent font-bold uppercase tracking-widest mb-2 w-fit">
                  {item.category}
                </span>
                <h3 className="text-white font-headline font-bold text-lg">{item.label}</h3>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                <ZoomIn size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.image}
              alt={lightbox.label}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 text-white text-center">
              <p className="font-headline font-bold">{lightbox.label}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}