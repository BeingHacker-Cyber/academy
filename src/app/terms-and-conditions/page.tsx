import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TermsAndConditionsPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-muted/30 py-24 mb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Academy Guidelines</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Please read these terms carefully before enrolling or using our services.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="border-none shadow-xl rounded-[3rem] p-8 md:p-16 bg-white overflow-hidden">
          <CardContent className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing this website and enrolling in our courses, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <Separator className="bg-muted" />

            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">2. Enrollment & Academic Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                Students are expected to maintain academic integrity and follow the academy's code of conduct. AECS Academy reserves the right to terminate enrollment for any student who violates disciplinary policies or disrupts the learning environment.
              </p>
            </section>

            <Separator className="bg-muted" />

            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">3. Fee Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                All fees must be paid on or before the specified due date. Fees are non-refundable once the session has commenced. AECS Academy reserves the right to adjust fee structures with prior notice.
              </p>
            </section>

            <Separator className="bg-muted" />

            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Course materials, notes, and curriculum designs provided by AECS Academy are the intellectual property of the academy. Students may not reproduce, distribute, or share these materials for commercial purposes without explicit permission.
              </p>
            </section>

            <Separator className="bg-muted" />

            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                AECS Academy is committed to providing high-quality education but does not guarantee specific exam results. The academy is not liable for any personal property loss or injury sustained on campus outside of academy supervision.
              </p>
            </section>

            <Separator className="bg-muted" />

            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">6. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts in Lahore.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
