"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const filterCategories = ['All', 'Mathematics', 'Sciences', 'English', 'Business', 'Social Studies'];

const faculty = [
  {
    name: 'Sir Ahmed Hassan',
    subject: 'Mathematics & Additional Maths',
    category: 'Mathematics',
    qualification: 'M.Phil Mathematics (UET Lahore)',
    bio: 'With over 12 years of O-Level coaching, Sir Ahmed makes Additional Mathematics intuitive and approachable, achieving 90%+ A grades consistently.',
    avatar: 'AH',
    image: PlaceHolderImages.find(i => i.id === 'faculty-1')?.imageUrl,
  },
  {
    name: 'Ms. Sarah Khan',
    subject: 'English Language & Literature',
    category: 'English',
    qualification: 'MA English (PU), CELTA Certified',
    bio: 'Focusing on creative writing and critical analysis, Ms. Sarah has helped 90% of her students achieve A* in Cambridge English examinations.',
    avatar: 'SK',
    image: PlaceHolderImages.find(i => i.id === 'faculty-2')?.imageUrl,
  },
  {
    name: 'Sir Bilal Siddique',
    subject: 'Business Studies & Accounting',
    category: 'Business',
    qualification: 'ACCA (Gold Medalist), MBA Finance',
    bio: 'Using real-world business scenarios, Sir Bilal bridges the gap between textbook theory and professional application in commerce subjects.',
    avatar: 'BS',
    image: PlaceHolderImages.find(i => i.id === 'faculty-3')?.imageUrl,
  },
  {
    name: 'Ms. Fatima Zahra',
    subject: 'Chemistry & Biology',
    category: 'Sciences',
    qualification: 'M.Sc Biochemistry (LUMS)',
    bio: 'Passionate about lab sciences, Ms. Fatima uses conceptual mapping and visual aids to make molecular biology accessible and memorable.',
    avatar: 'FZ',
    image: PlaceHolderImages.find(i => i.id === 'faculty-2')?.imageUrl,
  },
  {
    name: 'Sir Usman Ali',
    subject: 'Pak Studies & Islamiat',
    category: 'Social Studies',
    qualification: 'M.A History, M.A Islamic Studies (PU)',
    bio: 'Known for engaging storytelling, Sir Usman makes history and religious studies highly relatable — students consistently achieve top grades.',
    avatar: 'UA',
    image: PlaceHolderImages.find(i => i.id === 'faculty-1')?.imageUrl,
  },
  {
    name: 'Ms. Zainab Malik',
    subject: 'Economics',
    category: 'Business',
    qualification: 'M.Sc Economics (LUMS)',
    bio: 'Bridging theory and global trends, Ms. Zainab is expert in Cambridge exam techniques, time management, and analytical writing skills.',
    avatar: 'ZM',
    image: PlaceHolderImages.find(i => i.id === 'faculty-3')?.imageUrl,
  },
  {
    name: 'Sir Hamza Raza',
    subject: 'Physics',
    category: 'Sciences',
    qualification: 'B.Sc Electrical Engineering (NUST)',
    bio: 'Sir Hamza breaks down complex physics principles through demonstrations and problem-solving sessions that build both confidence and skill.',
    avatar: 'HR',
    image: PlaceHolderImages.find(i => i.id === 'faculty-1')?.imageUrl,
  },
  {
    name: 'Ms. Ayesha Nadeem',
    subject: 'Computer Science',
    category: 'Sciences',
    qualification: 'BS Computer Science (FAST-NUCES)',
    bio: 'Specialising in Cambridge Computer Science, Ms. Ayesha ensures students master both theory and practical programming for O-Level exams.',
    avatar: 'AN',
    image: PlaceHolderImages.find(i => i.id === 'faculty-2')?.imageUrl,
  },
];

export default function FacultyPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? faculty
    : faculty.filter((f) => f.category === activeFilter);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-24 mb-20 rounded-b-[4rem]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Our Mentors
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6">Expert Educators</h1>
          <p className="text-xl text-secondary-foreground/70 leading-relaxed">
            Led by some of the most qualified Cambridge educators in Lahore — excellence in every subject, every session.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-accent text-[11px] font-bold uppercase tracking-widest transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-primary border-primary text-white shadow-md'
                  : 'border-muted text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Faculty Grid — 3D Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((member, i) => (
            <div
              key={member.name}
              className="group h-[480px] [perspective:1000px] animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative h-full w-full rounded-[2rem] shadow-card transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">

                {/* ─ FRONT ─ */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <Card className="h-full border-none overflow-hidden rounded-[2rem]">
                    <div className="relative h-[62%] w-full">
                      <Image
                        src={member.image ?? ''}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-75" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <Badge className="bg-accent text-secondary font-accent text-[9px] uppercase tracking-widest mb-2 border-none">
                          {member.subject}
                        </Badge>
                        <h3 className="text-xl font-headline font-bold text-white leading-tight">{member.name}</h3>
                      </div>
                    </div>
                    <CardContent className="h-[38%] bg-white p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <GraduationCap size={15} />
                        <span className="text-[10px] font-accent font-bold uppercase tracking-wider">{member.qualification}</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{member.bio}</p>
                      <div className="mt-3 pt-3 border-t border-muted flex justify-between items-center">
                        <span className="text-[9px] font-accent font-bold uppercase text-accent tracking-widest">Hover to read more</span>
                        <BookOpen size={13} className="text-accent" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* ─ BACK ─ */}
                <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-10 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center space-y-5 shadow-2xl">
                  {/* Avatar initials */}
                  <div className="w-20 h-20 bg-white/15 border-2 border-white/30 rounded-full flex items-center justify-center text-xl font-headline font-bold">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold">{member.name}</h3>
                    <p className="text-accent text-xs font-accent uppercase tracking-widest mt-1">{member.subject}</p>
                  </div>
                  <div className="w-10 h-0.5 bg-accent/60 rounded-full" />
                  <p className="text-sm leading-relaxed opacity-85 italic">
                    "{member.bio}"
                  </p>
                  <Badge variant="outline" className="border-white/30 text-white rounded-full font-accent px-5 py-1.5 text-[10px] tracking-widest uppercase">
                    Cambridge Specialist
                  </Badge>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-headline text-2xl mb-2">No faculty in this category yet.</p>
            <p className="text-sm">Check back soon as we expand our team!</p>
          </div>
        )}
      </div>
    </div>
  );
}