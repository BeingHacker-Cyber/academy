import React from 'react';
import EnrollmentForm from '@/components/EnrollmentForm';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, Clock } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-24 mb-12 rounded-b-[4rem]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Future Awaits
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6">
            Join AECS Academy
          </h1>
          <p className="text-xl text-secondary-foreground/70 leading-relaxed">
            Begin your journey towards Cambridge excellence. Complete the 3-step enrollment form below.
            A confirmation will be sent to your email instantly.
          </p>
        </div>
      </section>

      {/* EmailJS Setup Note (for developer) */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800 max-w-3xl mx-auto">
          <strong>Developer Note:</strong> Open <code>src/components/EnrollmentForm.tsx</code> and replace
          <code className="mx-1">YOUR_SERVICE_ID</code>, <code>YOUR_STUDENT_TEMPLATE_ID</code>,
          <code className="mx-1">YOUR_OWNER_TEMPLATE_ID</code>, and <code>YOUR_PUBLIC_KEY</code> with your
          EmailJS credentials. Create a free account at{' '}
          <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="underline font-bold">
            emailjs.com
          </a>
          .
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 mb-12">
          <Separator className="flex-1 bg-primary/10" />
          <span className="font-accent text-[10px] font-bold uppercase tracking-[0.4em] text-primary whitespace-nowrap">
            Official Enrollment Form
          </span>
          <Separator className="flex-1 bg-primary/10" />
        </div>

        <EnrollmentForm />
      </div>

      {/* Need Help */}
      <section className="mt-24 container mx-auto px-4">
        <div className="max-w-3xl mx-auto p-12 bg-muted/30 rounded-[3rem] border border-dashed border-primary/20 text-center">
          <h4 className="font-headline font-bold text-2xl text-secondary mb-3">
            Need Help with Registration?
          </h4>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            If you're facing any issues with the online form or have questions about fee structures,
            scholarships, or subject selection — don't hesitate to reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:03144033054"
              className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-accent text-xs uppercase tracking-widest font-bold hover:bg-primary/90 transition-colors"
            >
              <Phone size={14} /> 0314 4033054
            </a>
            <a
              href="mailto:Hassani854@gmail.com"
              className="flex items-center gap-2 bg-white border border-muted text-secondary px-8 py-4 rounded-full font-accent text-xs uppercase tracking-widest font-bold hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={14} /> Hassani854@gmail.com
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground font-accent uppercase tracking-widest">
            <Clock size={12} />
            Mon – Fri: 2:00 PM – 8:00 PM
          </div>
        </div>
      </section>
    </div>
  );
}