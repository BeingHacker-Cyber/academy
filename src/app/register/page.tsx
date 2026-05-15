
import React from 'react';
import EnrollmentForm from '@/components/EnrollmentForm';
import { Phone, Mail, Clock } from 'lucide-react';

export default function RegisterPage() {
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
            <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Future Awaits</span>
            <div className="h-px w-12 bg-[#C8960C]/40" />
          </div>
          <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: '1.02' }}>
            Join AECS <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Academy</span>
          </h1>
          <p className="leading-relaxed mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '1.1rem' }}>
            Begin your journey towards Cambridge excellence. Complete the official enrollment form below to start your application process.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            {['Personal Details', 'Academic Info', 'Confirmation'].map((step, i) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{ background: '#C8960C', color: '#0b1628', fontFamily: "'Inter', sans-serif" }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest hidden sm:block" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif" }}>{step}</span>
                </div>
                {i < 2 && <div className="h-px w-8 sm:w-16" style={{ background: 'rgba(200,150,12,0.3)' }} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <div className="container mx-auto px-6 max-w-4xl mt-16">
        <div className="flex items-center gap-6 mb-10">
          <div className="flex-1 h-px" style={{ background: 'rgba(123,28,46,0.1)' }} />
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold whitespace-nowrap" style={{ color: '#7B1C2E', fontFamily: "'Inter', sans-serif" }}>
            Official Enrollment Form
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(123,28,46,0.1)' }} />
        </div>
        
        <EnrollmentForm />
      </div>

      {/* ── CONTACT SUPPORT ── */}
      <section className="mt-24 container mx-auto px-6 max-w-4xl">
        <div className="p-12 rounded-[2.5rem] text-center bg-[#FAF7F2] border border-black/5">
          <h4 className="font-bold mb-4 text-[#0b1628]" style={{ fontSize: '1.8rem' }}>Questions about Registration?</h4>
          <p className="mb-8 text-black/50 max-w-md mx-auto text-sm">Our admissions office is here to help you with subject selection or fee queries.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:03144033054" className="flex items-center gap-2 px-6 py-3 bg-[#7B1C2E] text-white rounded-full text-[10px] uppercase tracking-widest font-bold">
              <Phone size={12} /> Call Admissions
            </a>
            <a href="mailto:hassani854@gmail.com" className="flex items-center gap-2 px-6 py-3 border border-black/10 text-black/60 rounded-full text-[10px] uppercase tracking-widest font-bold">
              <Mail size={12} /> Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
