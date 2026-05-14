"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_CONTACT_TPL = 'YOUR_CONTACT_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const OWNER_EMAIL         = 'Hassani854@gmail.com';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent,         setSent]         = useState(false);
  const emailJSLoaded = useRef(false);

  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });

  useEffect(() => {
    if (emailJSLoaded.current) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      (window as any).emailjs?.init(EMAILJS_PUBLIC_KEY);
      emailJSLoaded.current = true;
    };
    document.head.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Missing fields', description: 'Please fill in name, email and message.', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const emailjs = (window as any).emailjs;
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TPL, {
        from_name:    form.name,
        from_email:   form.email,
        from_phone:   form.phone,
        subject:      form.subject || 'Contact Form Query',
        message:      form.message,
        to_email:     OWNER_EMAIL,
        reply_to:     form.email,
      });
      setSent(true);
      toast({ title: 'Message Sent!', description: "We'll get back to you within 24 hours." });
    } catch {
      toast({ title: 'Error', description: 'Could not send message. Please call us directly.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-muted/30 py-24 mb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Connect With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you have a query about admissions, our curriculum, or campus tours — our team is ready to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Info column */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-headline font-bold text-secondary">Academy Information</h2>

            {[
              {
                icon: MapPin,
                label: 'Campus Address',
                value: '100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City Raiwind Road, Lahore',
                href: 'https://maps.google.com',
              },
              {
                icon: Phone,
                label: 'Call Us',
                value: '0314 4033054',
                href: 'tel:03144033054',
              },
              {
                icon: Mail,
                label: 'Email Us',
                value: OWNER_EMAIL,
                href: `mailto:${OWNER_EMAIL}`,
              },
              {
                icon: Clock,
                label: 'Office Hours',
                value: 'Mon – Fri: 2:00 PM – 8:00 PM\nSaturday: By Appointment',
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4 group">
                <div className="bg-primary/10 p-4 rounded-2xl h-fit text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200 shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="font-accent font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="font-bold text-secondary hover:text-primary transition-colors whitespace-pre-line text-sm">
                      {value}
                    </a>
                  ) : (
                    <p className="font-bold text-secondary whitespace-pre-line text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="pt-6 border-t border-muted">
              <p className="font-accent font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Facebook,  label: 'Facebook'  },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-11 h-11 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-2xl rounded-[3rem] bg-white/80 backdrop-blur-sm">
              <CardContent className="p-10 md:p-12">
                {sent ? (
                  <div className="text-center py-12 space-y-4 animate-fade-up">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={40} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-headline font-bold text-secondary">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                    <Button onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }); }} variant="outline" className="rounded-full mt-4">
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-headline font-bold text-secondary mb-8">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">Full Name *</label>
                          <Input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="h-13 rounded-2xl bg-muted/20" required />
                        </div>
                        <div className="space-y-2">
                          <label className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">Email Address *</label>
                          <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className="h-13 rounded-2xl bg-muted/20" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">Phone Number</label>
                          <Input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="03XX XXXXXXX" className="h-13 rounded-2xl bg-muted/20" />
                        </div>
                        <div className="space-y-2">
                          <label className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">Subject</label>
                          <Input name="subject" value={form.subject} onChange={handleChange} placeholder="Admissions Query" className="h-13 rounded-2xl bg-muted/20" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">Message *</label>
                        <Textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" rows={5} className="rounded-2xl bg-muted/20 resize-none" required />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-14 font-accent font-bold uppercase tracking-widest shadow-md btn-shine"
                      >
                        {isSubmitting ? (
                          <><Loader2 size={18} className="mr-2 animate-spin" /> Sending…</>
                        ) : (
                          <><Send size={16} className="mr-2" /> Send Message</>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-24 h-[480px] rounded-[4rem] overflow-hidden shadow-2xl relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.3846665789644!2d74.24151337617417!3d31.320875174311145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fdf1273934d7%3A0x6a2c9c7336a18274!2sAl%20Kabir%20Town%20Phase%202!5e0!3m2!1sen!2s!4v1714574929837!5m2!1sen!2s"
            width="100%" height="100%"
            style={{ border: 0 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AECS Academy Location"
          />
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-xl max-w-[260px]">
            <h5 className="font-headline font-bold text-lg mb-1 text-secondary">Visit Our Campus</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City Raiwind Road
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}