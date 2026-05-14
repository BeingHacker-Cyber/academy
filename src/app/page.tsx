import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle2, Star, Users, GraduationCap, Award,
  ArrowRight, BookOpen, Clock, Brain, MapPin, Monitor, Building2,
  Sparkles, ShieldCheck
} from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const stats = [
  { label: 'Students',  value: '500+', icon: Users },
  { label: 'Faculty',   value: '10+',  icon: GraduationCap },
  { label: 'Grades',    value: '6–11', icon: BookOpen },
  { label: 'Success',   value: '100%', icon: Award },
];

const features = [
  {
    title: 'Elite Educators',
    description: 'Cambridge-certified masters with proven track records in delivering world-class O-Level results.',
    icon: GraduationCap,
  },
  {
    title: 'Adaptive Learning',
    description: 'Small, focused cohorts ensuring every student receives precision guidance and conceptual depth.',
    icon: Brain,
  },
  {
    title: 'Modern Pedagogy',
    description: 'Moving beyond rote learning into the realm of critical thinking and advanced exam strategy.',
    icon: Star,
  },
  {
    title: 'Performance Tracking',
    description: 'Data-driven assessments and real-time feedback loops to optimize student academic growth.',
    icon: Clock,
  },
];

const subjects = [
  'Mathematics', 'Pak Studies', 'Islamiat', 'English',
  'Business Studies', 'Accounting', 'Economics', 'Physics', 'Chemistry', 'Biology'
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bg');
  const classroomImage = PlaceHolderImages.find((img) => img.id === 'classroom');

  return (
    <div className="relative">

      {/* ── FUTURISTIC HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 hero-pattern opacity-60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div className="space-y-10 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary font-accent text-[10px] font-bold uppercase tracking-[0.3em]">
                <Sparkles size={12} /> Excellence in IGCSE & O-Level
              </div>

              <h1 className="text-6xl md:text-8xl font-headline font-bold text-secondary leading-[1.1] tracking-tight">
                Shaping the <br />
                <span className="text-primary italic relative">
                  Architects
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span> <br />
                of Tomorrow.
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                The most specialized Cambridge academy near Lake City, Lahore. 
                Where conceptual brilliance meets world-class academic standards.
              </p>

              <div className="flex flex-wrap gap-6">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 font-accent text-xs font-bold uppercase tracking-[0.2em] shadow-glow hover:-translate-y-1 transition-all"
                >
                  <Link href="/register">Start Your Journey</Link>
                </Button>
                
                <div className="flex -space-x-3 items-center">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <Image 
                        src={`https://picsum.photos/seed/stu${i}/100/100`} 
                        alt="Student" 
                        width={40} 
                        height={40} 
                      />
                    </div>
                  ))}
                  <div className="pl-6 text-[10px] font-accent font-bold uppercase tracking-widest text-muted-foreground">
                    Joined by <span className="text-secondary">500+ Brilliant Minds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative hidden lg:block animate-float">
              <div className="relative w-[500px] h-[600px] mx-auto">
                {/* Main Image with futuristic border */}
                <div className="absolute inset-0 rounded-[4rem] overflow-hidden border-8 border-white/50 shadow-2xl z-20">
                  <Image
                    src={heroImage?.imageUrl ?? ''}
                    alt="AECS Academy"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 glass rounded-[3rem] p-6 flex flex-col justify-center items-center text-center shadow-xl z-30">
                  <span className="text-3xl font-headline font-bold text-primary">A*</span>
                  <span className="text-[8px] font-accent font-bold uppercase tracking-widest leading-tight">Average Cambridge Performance</span>
                </div>

                <div className="absolute -bottom-10 -left-10 glass rounded-[3rem] p-8 shadow-xl z-30 border-l-4 border-primary">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="font-headline font-bold text-lg text-secondary">Verified Faculty</p>
                      <p className="text-[9px] font-accent font-bold uppercase tracking-widest text-muted-foreground">Specialized O-Level Staff</p>
                    </div>
                  </div>
                </div>

                {/* Background Decor */}
                <div className="absolute -inset-10 border-2 border-primary/10 rounded-[5rem] animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="glass rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-3 relative">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-4xl md:text-5xl font-headline font-bold text-secondary animate-count-up">
                  {stat.value}
                </h3>
                <p className="text-[10px] font-accent uppercase tracking-[0.2em] font-bold text-muted-foreground">
                  {stat.label}
                </p>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-px h-12 bg-muted -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-accent font-accent uppercase tracking-[0.4em] text-[10px] font-bold">The AECS Advantage</span>
              <h2 className="text-5xl md:text-6xl font-headline font-bold text-secondary">Why We Stand Out</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-sm">
              Tailoring the academic experience to the modern learner's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <Card 
                key={i} 
                className="group border-none bg-white shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 rounded-[3rem] p-4"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-20 h-20 bg-muted rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <feature.icon size={36} />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-secondary">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS & CURRICULUM ── */}
      <section className="py-32 bg-secondary rounded-[4rem] mx-4 md:mx-8 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full hero-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <span className="text-accent font-accent uppercase tracking-[0.4em] text-[10px] font-bold">Comprehensive Curriculum</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold text-white leading-tight">
                Specialized Cambridge <br /> 
                <span className="text-accent">Subject Pathways</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                From theoretical physics to advanced business analytics, we offer a high-performance 
                environment for students from Grade 6 to O-Level.
              </p>
              
              <div className="grid grid-cols-2 gap-y-6">
                {subjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                      <CheckCircle2 size={14} className="text-accent group-hover:text-white" />
                    </div>
                    <span className="text-xs font-accent font-bold uppercase tracking-widest text-white/80">{sub}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="bg-accent hover:bg-gold-light text-secondary rounded-full px-12 h-16 font-accent text-xs font-bold uppercase tracking-[0.2em]"
              >
                <Link href="/faculty">Meet the Faculty <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>

            <div className="flex-1 relative">
              <div className="aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl group">
                <Image
                  src={classroomImage?.imageUrl ?? ''}
                  alt="AECS Campus"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-primary/5">
                <p className="text-primary font-headline font-bold text-4xl mb-1">98%</p>
                <p className="text-[10px] font-accent font-bold uppercase tracking-widest text-muted-foreground">Distinction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-32 container mx-auto px-4">
        <div className="glass rounded-[4rem] p-12 md:p-24 text-center space-y-12 relative overflow-hidden shadow-glow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-accent font-bold text-[10px] uppercase tracking-widest mb-4">
              Enrollment for Session 2025
            </span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-secondary leading-tight">
              The Future of <br /> Excellence is Here.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Limited seats available for the upcoming session. Join the academy that 
              prioritizes your child's academic legacy.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-16 h-18 font-accent text-sm font-bold uppercase tracking-[0.3em] shadow-xl hover:-translate-y-1 transition-all"
            >
              <Link href="/register">Enroll Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-16 h-18 font-accent text-sm font-bold uppercase tracking-[0.3em]"
            >
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}