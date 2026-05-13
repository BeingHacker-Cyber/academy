import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-muted/30 py-24 mb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Legal & Security</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            How we collect, use, and protect your information at AECS Academy.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="border-none shadow-xl rounded-[3rem] p-8 md:p-16 bg-white overflow-hidden">
          <CardContent className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">1. Information Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect personal information that you provide directly to us when you register for classes, contact us via our website, or sign up for newsletters. This may include your name, email address, phone number, and academic background.
              </p>
            </section>

            <Separator className="bg-muted" />

            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">2. Use of Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Process your enrollment applications and academic records.</li>
                <li>Communicate with you regarding schedules, assessments, and academy updates.</li>
                <li>Improve our curriculum and educational services.</li>
                <li>Ensure a safe and secure learning environment on campus.</li>
              </ul>
            </section>

            <Separator className="bg-muted" />

            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide products or services you have requested.
              </p>
            </section>

            <Separator className="bg-muted" />

            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">4. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use "cookies" to enhance the user experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. Note that some parts of the site may not function properly if you do so.
              </p>
            </section>

            <Separator className="bg-muted" />

            <section className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-secondary">5. Consent</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using our site, you consent to our website's privacy policy. Any changes to our privacy policy will be posted on this page.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
