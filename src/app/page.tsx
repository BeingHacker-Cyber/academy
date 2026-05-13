import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Star, Users, GraduationCap, Award, ArrowRight, BookOpen, Clock, Brain } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const stats = [
  { label: 'Enrolled Students', value: '500+', icon: Users },
  { label: 'Expert Faculty', value: '10+', icon: GraduationCap },
  { label: 'Grade Coverage', value: '6th - O Level', icon: BookOpen },
  { label: 'Success Rate', value: '100%', icon: Award },
];

const features = [
  { title: 'Experienced Teachers', description: 'Certified Cambridge educators with years of successful O-Level track records.', icon: GraduationCap },
  { title: 'Focused Attention', description: 'Small class sizes ensuring every student gets personalized conceptual guidance.', icon: Brain },
  { title: 'Concept Clarity', description: 'Beyond rote learning—we focus on deep understanding and analytical skills.', icon: Star },
  { title: 'Regular Assessments', description: 'Fortnightly tests and feedback loops to track academic growth consistently.', icon: Clock },
];

const subjects = ["Mathematics", "Pak Studies", "Islamiat", "English", "Business Studies", "Accounting", "Economics", "Sciences"];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const classroomImage = PlaceHolderImages.find(img => img.id === 'classroom');

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImage?.imageUrl || ""} 
            alt="AECS Academy" 
            fill 
            className="object-cover opacity-15 grayscale-[0.5]" 
            priority
            data-ai-hint="luxury academic building"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-full hero-pattern opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-accent text-[10px] font-bold uppercase tracking-[0.2em] animate-fade-up">
              Lahore's Leading IGCSE Specialist
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-secondary leading-[1.1] animate-fade-up animate-delay-100">
              Excellence in <br />
              <span className="text-primary italic">Cambridge</span> Education
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-up animate-delay-200">
              A specialized academy near Lake City, Lahore, offering premium IGCSE & O-Level coaching with a focus on concept clarity and 100% personalized attention.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 font-accent text-sm font-bold uppercase tracking-widest shadow-xl">
                <Link href="/register">Enroll Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-8 h-14 font-accent text-sm font-bold uppercase tracking-widest">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Particles Simulation (Visual Only) */}
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-accent/20 rounded-full animate-[pulse_10s_infinite]" />
        <div className="absolute top-40 right-40 w-32 h-32 border-2 border-primary/10 rounded-full animate-[bounce_15s_infinite]" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary text-secondary-foreground relative z-10 -mt-10 mx-4 rounded-3xl overflow-hidden shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2 border-r last:border-0 border-white/10">
                <stat.icon className="mx-auto text-accent mb-4" size={32} />
                <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">{stat.value}</h3>
                <p className="text-[10px] font-accent uppercase tracking-widest text-secondary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold">Foundation for Brilliance</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary">Why Choose AECS Academy?</h2>
            <p className="text-muted-foreground">We bridge the gap between academic pressure and conceptual success through our unique teaching methodology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 rounded-3xl group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-secondary">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary">Specialized Subjects We Offer</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From core sciences to specialized business studies, we cover the complete spectrum of the Cambridge IGCSE & O-Level curriculum with expert-led instruction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {subjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-3 font-accent font-bold text-xs uppercase tracking-widest text-secondary group">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent transition-all">
                      <CheckCircle2 size={14} className="text-accent group-hover:text-white" />
                    </div>
                    {sub}
                  </div>
                ))}
              </div>
              <Button asChild className="bg-secondary text-white rounded-full px-8 py-6 h-auto">
                <Link href="/register">Explore All Subjects <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </div>
            <div className="flex-1 relative">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src={classroomImage?.imageUrl || ""} 
                  alt="AECS Classroom" 
                  fill 
                  className="object-cover" 
                  data-ai-hint="modern classroom"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-xl border border-primary/10 max-w-[280px]">
                <p className="text-primary font-headline font-bold text-3xl mb-1">Grade 6 – O Level</p>
                <p className="text-muted-foreground text-xs font-accent uppercase tracking-widest">Complete Academic Pathway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Foundation Promo */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="p-12 md:p-20 bg-white/50 border border-primary/20 rounded-[4rem] backdrop-blur-md">
            <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full font-accent font-bold text-[10px] uppercase tracking-widest mb-6 inline-block">Starting June 2024</span>
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-secondary mb-6">Summer Foundation Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Bridge the gap in Mathematics and English. Specialized foundation sessions for Grade 6 to O-Level students during the summer break.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 h-auto font-accent text-lg font-bold uppercase tracking-widest shadow-2xl">
              <Link href="/register">Reserve Your Seat</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">Admissions are Open for the 2024 Session</h2>
          <p className="text-secondary-foreground/70 text-lg mb-8">Secure your future with Lahore's most focused IGCSE academy.</p>
          <div className="flex justify-center gap-6">
            <Button asChild variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-white rounded-full px-10 h-14 font-accent">
              <Link href="/register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
