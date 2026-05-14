import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const sections = [
  {
    title: '1. Information We Collect',
    content:
      'We collect personal information that you provide directly when you register for classes, contact us via our website, or sign up for updates. This includes your name, email address, phone number, home address, age, and academic background.',
  },
  {
    title: '2. How We Use Your Information',
    content: null,
    list: [
      'Process your enrollment application and maintain academic records.',
      'Communicate with you regarding schedules, assessments, and academy updates.',
      'Send confirmation and notification emails related to your registration.',
      'Improve our curriculum and educational service quality.',
      'Ensure a safe and secure learning environment on campus and online.',
    ],
  },
  {
    title: '3. Information Sharing',
    content:
      'We do not sell, trade, rent, or otherwise transfer your personally identifiable information to third parties. Information is only shared when strictly required to provide the educational services you have requested (e.g., Cambridge registration bodies) or when required by applicable law.',
  },
  {
    title: '4. Email Communications',
    content:
      'By submitting the enrollment or contact form on our website, you consent to receiving transactional emails from AECS Academy, including registration confirmations and session reminders. You may opt out of non-essential communications at any time by contacting us.',
  },
  {
    title: '5. Data Security',
    content:
      'We implement appropriate technical and organisational security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no internet-based service can guarantee absolute security.',
  },
  {
    title: '6. Cookies',
    content:
      'Our website may use session cookies to enhance your browsing experience. You may disable cookies in your browser settings; however, some features of the website may not function as expected if you do so.',
  },
  {
    title: '7. Children\'s Privacy',
    content:
      'Our services are intended for students aged 10–18 and their parents or guardians. We do not knowingly collect personal information from children under the age of 13 without verified parental consent. If you believe we have inadvertently collected such information, please contact us immediately.',
  },
  {
    title: '8. Your Rights',
    content:
      'You have the right to request access to the personal information we hold about you, request correction of inaccurate data, or request deletion of your personal data where it is no longer necessary for the purposes for which it was collected. To exercise these rights, contact us at Hassani854@gmail.com.',
  },
  {
    title: '9. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the revised policy.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-24">
      <section className="bg-muted/30 py-24 mb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Legal &amp; Security
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            How we collect, use, and protect your information at AECS Academy.
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
                  {sec.content && (
                    <p className="text-muted-foreground leading-relaxed">{sec.content}</p>
                  )}
                  {sec.list && (
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {sec.list.map((item, j) => (
                        <li key={j} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  )}
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