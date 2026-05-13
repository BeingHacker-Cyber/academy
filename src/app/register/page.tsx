import React from 'react';
import EnrollmentForm from '@/components/EnrollmentForm';
import CourseMatchmaker from '@/components/CourseMatchmaker';
import { Separator } from '@/components/ui/separator';

export default function RegisterPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-24 mb-12 rounded-b-[4rem]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Future Awaits</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6">Join AECS Academy</h1>
          <p className="text-xl text-secondary-foreground/70 leading-relaxed">
            Begin your journey towards Cambridge excellence. Complete the enrollment below or use our AI advisor for subject recommendations.
          </p>
        </div>
      </section>

      {/* Course Matchmaker Section */}
      <section className="container mx-auto px-4 mb-24">
        <CourseMatchmaker />
      </section>

      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 mb-16">
          <Separator className="flex-1 bg-primary/10" />
          <span className="font-accent text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Official Enrollment Form</span>
          <Separator className="flex-1 bg-primary/10" />
        </div>
        
        <EnrollmentForm />
      </div>

      {/* Footer Note */}
      <section className="mt-24 container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto p-12 bg-muted/30 rounded-[3rem] border border-dashed border-primary/20">
          <h4 className="font-headline font-bold text-2xl text-secondary mb-4">Need Help with Registration?</h4>
          <p className="text-muted-foreground mb-6">
            If you're facing any issues with the online form or have specific queries regarding fee structures and scholarships, feel free to contact us.
          </p>
          <p className="font-accent font-bold text-primary text-xl">0314 4033054</p>
        </div>
      </section>
    </div>
  );
}
