"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_CONTACT_TPL = 'YOUR_CONTACT_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const OWNER_EMAIL         = 'Hassani854@gmail.com';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const emailJSLoaded = useRef(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  useEffect(() => {
    if (emailJSLoaded.current) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => { (window as any).emailjs?.init(EMAILJS_PUBLIC_KEY); emailJSLoaded.current = true; };
    document.head.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Missing fields', description: 'Please fill in name, email and message.', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      await (window as any).emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TPL, {
        from_name: form.name, from_email: form.email, from_phone: form.phone,
        subject: form.subject || 'Contact Form Query', message: form.message,
        to_email: OWNER_EMAIL, reply_to: form.email,
      });
      setSent(true);
      toast({ title: 'Message Sent!', description: "We'll get back to you within 24 hours." });
    } catch {
      toast({ title: 'Error', description: 'Could not send message. Please call us directly.', variant: 'destructive' });
    } finally { setIsSubmitting(false); }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px', borderRadius: '14px',
    border: '1px solid rgba(11,22,40,0.12)', background: 'rgba(11,22,40,0.02)',
    fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 300,
    color: '#0b1628', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <div className="pb-24" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

      {/* ── HEADER ── */}
      <section
        className="relative overflow-hidden pt-36 pb-28"
        style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 60%, #0b1628 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />
        <div className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] rounded-full border border-[#C8960C]/8 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#C8960C]/40" />
            <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Connect With Us</span>
            <div className="h-px w-12 bg-[#C8960C]/40" />
          </div>
          <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: '1.02' }}>
            Get In <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Touch</span>
          </h1>
          <p className="text-xl leading-relaxed mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Whether you have a query about admissions, curriculum, or campus tours — our team is ready to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* ── INFO ── */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C8960C]" />
              <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Academy Information</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0b1628', lineHeight: 1.1 }}>
              We're Here to<br />
              <span style={{ color: '#7B1C2E', fontStyle: 'italic' }}>Help You</span>
            </h2>

            {[
              { icon: MapPin, label: 'Campus Address', value: '100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City Raiwind Road, Lahore', href: 'https://maps.google.com' },
              { icon: Phone,  label: 'Call Us',        value: '0314 4033054',    href: 'tel:03144033054' },
              { icon: Mail,   label: 'Email Us',       value: OWNER_EMAIL,       href: `mailto:${OWNER_EMAIL}` },
              { icon: Clock,  label: 'Office Hours',   value: 'Mon – Fri: 2:00 PM – 8:00 PM\nSaturday: By Appointment', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-5 group">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(123,28,46,0.07)', border: '1px solid rgba(123,28,46,0.12)' }}
                >
                  <Icon size={18} style={{ color: '#7B1C2E' }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] mb-1.5 font-semibold" style={{ color: 'rgba(11,22,40,0.4)', fontFamily: "'Inter', sans-serif" }}>{label}</p>
                  {href ? (
                    <a href={href} className="font-bold text-sm leading-relaxed whitespace-pre-line transition-colors hover:underline" style={{ color: '#0b1628', fontFamily: "'Inter', sans-serif" }}>{value}</a>
                  ) : (
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#0b1628', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="pt-6" style={{ borderTop: '1px solid rgba(11,22,40,0.07)' }}>
              <p className="text-[10px] uppercase tracking-[0.25em] mb-4 font-semibold" style={{ color: 'rgba(11,22,40,0.4)', fontFamily: "'Inter', sans-serif" }}>Follow Us</p>
              <div className="flex gap-3">
                {[{ icon: Instagram, label: 'Instagram' }, { icon: Facebook, label: 'Facebook' }].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ border: '1px solid rgba(11,22,40,0.12)', color: 'rgba(11,22,40,0.4)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#7B1C2E'; (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.borderColor = '#7B1C2E'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'rgba(11,22,40,0.4)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(11,22,40,0.12)'; }}
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="lg:col-span-3">
            <div
              className="p-10 md:p-12 rounded-[2.5rem]"
              style={{ background: 'white', boxShadow: '0 24px 80px rgba(11,22,40,0.08)', border: '1px solid rgba(123,28,46,0.07)' }}
            >
              {sent ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ background: 'rgba(123,28,46,0.08)' }}>
                    <CheckCircle2 size={40} style={{ color: '#7B1C2E' }} />
                  </div>
                  <h3 className="text-3xl font-bold" style={{ color: '#0b1628' }}>Message Sent!</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(11,22,40,0.5)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="mt-4 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                    style={{ border: '1px solid rgba(123,28,46,0.2)', color: '#7B1C2E', fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-8 bg-[#C8960C]" />
                    <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Send a Message</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-8" style={{ color: '#0b1628' }}>How Can We Help You?</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold" style={{ color: 'rgba(11,22,40,0.4)', fontFamily: "'Inter', sans-serif" }}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = '#7B1C2E'; e.target.style.boxShadow = '0 0 0 3px rgba(123,28,46,0.07)'; }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(11,22,40,0.12)'; e.target.style.boxShadow = 'none'; }} />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold" style={{ color: 'rgba(11,22,40,0.4)', fontFamily: "'Inter', sans-serif" }}>Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = '#7B1C2E'; e.target.style.boxShadow = '0 0 0 3px rgba(123,28,46,0.07)'; }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(11,22,40,0.12)'; e.target.style.boxShadow = 'none'; }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold" style={{ color: 'rgba(11,22,40,0.4)', fontFamily: "'Inter', sans-serif" }}>Phone Number</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="03XX XXXXXXX" style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = '#7B1C2E'; e.target.style.boxShadow = '0 0 0 3px rgba(123,28,46,0.07)'; }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(11,22,40,0.12)'; e.target.style.boxShadow = 'none'; }} />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold" style={{ color: 'rgba(11,22,40,0.4)', fontFamily: "'Inter', sans-serif" }}>Subject</label>
                        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Admissions Query" style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = '#7B1C2E'; e.target.style.boxShadow = '0 0 0 3px rgba(123,28,46,0.07)'; }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(11,22,40,0.12)'; e.target.style.boxShadow = 'none'; }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold" style={{ color: 'rgba(11,22,40,0.4)', fontFamily: "'Inter', sans-serif" }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" rows={5} required
                        style={{ ...inputStyle, resize: 'none' }}
                        onFocus={e => { e.target.style.borderColor = '#7B1C2E'; e.target.style.boxShadow = '0 0 0 3px rgba(123,28,46,0.07)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(11,22,40,0.12)'; e.target.style.boxShadow = 'none'; }} />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-90 disabled:opacity-60"
                      style={{ background: '#7B1C2E', color: 'white', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.12em', boxShadow: '0 8px 32px rgba(123,28,46,0.3)' }}
                    >
                      {isSubmitting ? (<><Loader2 size={16} className="animate-spin" /> Sending…</>) : (<><Send size={14} /> Send Message</>)}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── MAP ── */}
        <div
          className="mt-20 h-[480px] overflow-hidden relative"
          style={{ borderRadius: '2.5rem', boxShadow: '0 24px 80px rgba(11,22,40,0.1)' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.3846665789644!2d74.24151337617417!3d31.320875174311145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fdf1273934d7%3A0x6a2c9c7336a18274!2sAl%20Kabir%20Town%20Phase%202!5e0!3m2!1sen!2s!4v1714574929837!5m2!1sen!2s"
            width="100%" height="100%"
            style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AECS Academy Location"
          />
          <div
            className="absolute top-6 left-6 p-5 max-w-[260px]"
            style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderRadius: '1.2rem', boxShadow: '0 8px 32px rgba(11,22,40,0.12)' }}
          >
            <h5 className="font-bold text-lg mb-1" style={{ color: '#0b1628' }}>Visit Our Campus</h5>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(11,22,40,0.5)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City Raiwind Road
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}