import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const galleryItems = [
  { id: 1, category: "Classrooms", image: PlaceHolderImages.find(img => img.id === 'gallery-1')?.imageUrl, span: "row-span-2" },
  { id: 2, category: "Activities", image: PlaceHolderImages.find(img => img.id === 'gallery-2')?.imageUrl, span: "col-span-2" },
  { id: 3, category: "Results", image: PlaceHolderImages.find(img => img.id === 'gallery-3')?.imageUrl, span: "row-span-1" },
  { id: 4, category: "Events", image: PlaceHolderImages.find(img => img.id === 'gallery-4')?.imageUrl, span: "row-span-2" },
  { id: 5, category: "Classrooms", image: PlaceHolderImages.find(img => img.id === 'classroom')?.imageUrl, span: "col-span-1" },
  { id: 6, category: "Results", image: PlaceHolderImages.find(img => img.id === 'student-success')?.imageUrl, span: "col-span-2" },
  { id: 7, category: "Events", image: PlaceHolderImages.find(img => img.id === 'gallery-2')?.imageUrl, span: "row-span-1" },
];

export default function GalleryPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="py-24 bg-muted/30 mb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">The AECS Lens</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary mb-6">Academy Life</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Capturing moments of learning, success, and extracurricular brilliance at our campus.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-muted pb-8">
          {["All", "Classrooms", "Events", "Activities", "Results"].map((cat) => (
            <button key={cat} className="font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all relative group">
              {cat}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {galleryItems.map((item, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-[2rem] group cursor-pointer shadow-lg animate-fade-up ${item.span}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Image 
                src={item.image || ""} 
                alt={item.category} 
                fill 
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" 
                data-ai-hint="campus life"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <div>
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-[8px] font-accent font-bold uppercase tracking-widest mb-2 block w-fit">
                    {item.category}
                  </span>
                  <h3 className="text-white font-headline font-bold text-xl">Academic Session 2024</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
