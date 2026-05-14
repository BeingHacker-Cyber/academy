import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle2, Star, Users, GraduationCap, Award,
  ArrowRight, BookOpen, ShieldCheck,
  TrendingUp, Lightbulb
} from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const stats = [
  { label: 'Enrolled Students', value: '500+', icon: Users },
  { label: 'Expert Faculty', value: '15+', icon: GraduationCap },
  { label: 'Grade Range', value: '6–11', icon: BookOpen },
  { label: 'Success Rate', value: '100%', icon: Award },
];

const values = [
  {
    title: 'Expert Mentorship',
    description: 'Learn from Lahore\'s top Cambridge-certified educators who bring decades of exam experience.',
    icon: Star,
  },
  {
    title: 'Personalized Focus',
    description: 'Small batch sizes allow our teachers to focus on each student\'s individual learning curve.',
    icon: Brain,
  },
  {
    title: 'Proven Results',
    description: 'A legacy of A* and A grades in IGCSE/O-Level examinations year after year.',
    icon: TrendingUp,
  },
  {
    title: 'Conceptual Clarity',
    description: 'We move beyond rote memorization, building foundations that last into University and beyond.',
    icon: Lightbulb,
  },
];

const Brain = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
  </svg>
);

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bg');
  const classroomImage = PlaceHolderImages.find((img) => img.id === 'classroom');

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[11px] uppercase tracking-wider">
                <ShieldCheck size={14} /> Official AECS Academy Lahore
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary leading-[1.1]">
                Excellence in <br />
                <span className="text-primary">Cambridge Education</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Providing specialized IGCSE and O-Level coaching near Lake City, Lahore. We shape brilliant minds through conceptual learning and dedicated mentorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-8 h-14 bg-primary hover:bg-primary/90 text-white font-bold">
                  <Link href="/register">Apply for Admission</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 border-secondary text-secondary hover:bg-secondary/5 font-bold">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src={heroImage?.imageUrl ?? ''}
                  alt="AECS Academy Campus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-muted hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    <Star size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">A* Grade</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Average Performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/2 -z-10" />
      </section>

      {/* ── STATS SECTION ── */}
      <section className="bg-white border-y border-muted py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-secondary">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary">Why AECS Academy?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We provide a structured and supportive environment designed specifically for the rigorous Cambridge curriculum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <val.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS PREVIEW ── */}
      <section className="py-24 bg-secondary text-white rounded-[3rem] mx-4 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
                Modern Learning <br /> Facilities
              </h2>
              <p className="text-secondary-foreground/80 text-lg leading-relaxed">
                Our campus provides a quiet, distraction-free environment near Lake City Raiwind Road. Equipped with modern classrooms and resources to help students excel.
              </p>
              <ul className="space-y-4">
                {[
                  'Grade 6 to O-Level Specialized Focus',
                  'Online & Hybrid Learning Options',
                  'Strategic Location near Raiwind Road',
                  'Monthly Progress Reports for Parents'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="rounded-full px-8 h-12 bg-accent hover:bg-accent/90 text-secondary font-bold">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={classroomImage?.imageUrl ?? ''}
                alt="AECS Classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-8 bg-muted/50 p-12 md:p-24 rounded-[3rem] border border-muted-foreground/10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-secondary">Ready to Start Your Academic Journey?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Admissions are currently open for Session 2025. Secure your seat today and join Lahore's premier specialized Cambridge academy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-12 h-16 bg-primary font-bold">
              <Link href="/register">Enroll Now <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 border-secondary text-secondary font-bold">
              <Link href="/contact">Speak with Admissions</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground italic">
            "Limited seats per grade to maintain high standards of individual attention."
          </p>
        </div>
      </section>

    </div>
  );
}