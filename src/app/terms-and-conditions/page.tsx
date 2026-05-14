import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By accessing this website and enrolling in our courses, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services or enrol in our programmes.',
  },
  {
    title: '2. Enrollment & Academic Conduct',
    content:
      'Students are expected to maintain academic integrity and follow the academy\'s code of conduct at all times. AECS Academy reserves the right to terminate enrollment for any student who violates disciplinary policies, engages in dishonest academic practices, or disrupts the learning environment for others.',
  },
  {
    title: '3. Fee Policy',
    content:
      'All fees must be paid on or before the specified due date. Fees are non-refundable once the session has commenced. AECS Academy reserves the right to adjust fee structures with prior notice of at least 30 days. Persistent non-payment may result in suspension of academic services.',
  },
  {
    title: '4. Attendance Policy',
    content:
      'Students are expected to maintain a minimum attendance of 75% per subject per term. Consistent absences without valid justification may result in academic warnings or restricted access to examination preparation materials.',
  },
  {
    title: '5. Intellectual Property',
    content:
      'All course materials, notes, worksheets, past-paper compilations, and curriculum designs provided by AECS Academy are the intellectual property of the academy. Students may not reproduce, distribute, or commercially share these materials without explicit written permission from the academy management.',
  },
  {
    title: '6. Limitation of Liability',
    content:
      'AECS Academy is committed to providing the highest quality education but does not guarantee specific exam results. The academy is not liable for any personal property loss or injury sustained on campus outside of academy-supervised activities. Students attend at their own risk outside of scheduled class hours.',
  },
  {
    title: '7. Amendments',
    content:
      'AECS Academy reserves the right to modify these Terms and Conditions at any time. Students and parents will be notified of significant changes via the registered email address or an announcement on the academy noticeboard.',
  },
  {
    title: '8. Governing Law',
    content:
      'These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from or related to enrollment at AECS Academy shall be subject to the exclusive jurisdiction of the courts in Lahore.',
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="pb-24">
      <section className="bg-muted/30 py-24 mb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Academy Guidelines
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Please read these terms carefully before enrolling or using our services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: June 2025</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="border-none shadow-xl rounded-[3rem] p-8 md:p-16 bg-white overflow-hidden">
          <CardContent className="space-y-10 p-0">
            {sections.map((sec, i) => (
              <React.Fragment key={i}>
                <section className="space-y-3">
                  <h2 className="text-2xl font-headline font-bold text-secondary">{sec.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{sec.content}</p>
                </section>
                {i < sections.length - 1 && <Separator className="bg-muted" />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}