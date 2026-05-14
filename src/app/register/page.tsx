import React from 'react';
import EnrollmentForm from '@/components/EnrollmentForm';
import { Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

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
        <div className="absolute top-16 left-8 w-24 h-24 opacity-15 pointer-events-none">
          <svg viewBox="0 0 96 96" fill="none"><path d="M0 96 L0 0 L96 0" stroke="#C8960C" strokeWidth="1" fill="none" /><path d="M16 96 L16 16 L96 16" stroke="#C8960C" strokeWidth="0.5" fill="none" /></svg>
        </div>

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
            Begin your journey towards Cambridge excellence. Complete the enrollment form below.
            A confirmation will be sent to your email instantly.
          </p>

          {/* 3-step indicator */}
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

      {/* ── DEV NOTE ── */}
      <div className="container mx-auto px-6 max-w-4xl mt-10">
        <div
          className="p-5 rounded-2xl text-sm"
          style={{ background: 'rgba(200,150,12,0.06)', border: '1px solid rgba(200,150,12,0.2)', fontFamily: "'Inter', sans-serif", color: 'rgba(11,22,40,0.6)' }}
        >
          <strong style={{ color: '#0b1628' }}>Developer Note:</strong> Open <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'rgba(11,22,40,0.06)' }}>src/components/EnrollmentForm.tsx</code> and replace{' '}
          <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'rgba(11,22,40,0.06)' }}>YOUR_SERVICE_ID</code>,{' '}
          <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'rgba(11,22,40,0.06)' }}>YOUR_STUDENT_TEMPLATE_ID</code>,{' '}
          <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'rgba(11,22,40,0.06)' }}>YOUR_OWNER_TEMPLATE_ID</code>, and{' '}
          <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'rgba(11,22,40,0.06)' }}>YOUR_PUBLIC_KEY</code>{' '}
          with your EmailJS credentials at{' '}
          <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#C8960C' }}>emailjs.com</a>.
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="container mx-auto px-6 max-w-4xl mt-12 mb-10">
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px" style={{ background: 'rgba(123,28,46,0.1)' }} />
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold whitespace-nowrap" style={{ color: '#7B1C2E', fontFamily: "'Inter', sans-serif" }}>
            Official Enrollment Form
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(123,28,46,0.1)' }} />
        </div>
      </div>

      {/* ── FORM ── */}
      <div className="container mx-auto px-6 max-w-4xl">
        <EnrollmentForm />
      </div>

      {/* ── HELP SECTION ── */}
      <section className="mt-24 container mx-auto px-6 max-w-4xl">
        <div
          className="p-12 rounded-[2.5rem] text-center"
          style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 100%)', border: '1px solid rgba(200,150,12,0.15)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C8960C]/40" />
            <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Need Assistance?</span>
            <div className="h-px w-8 bg-[#C8960C]/40" />
          </div>
          <h4
            className="font-bold mb-4 text-white"
            style={{ fontSize: '2rem' }}
          >
            Need Help with Registration?
          </h4>
          <p
            className="mb-8 leading-relaxed mx-auto"
            style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '500px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px' }}
          >
            If you're facing issues with the form or have questions about fee structures,
            scholarships, or subject selection — don't hesitate to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="tel:03144033054"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{ background: '#C8960C', color: '#0b1628', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.1em' }}
            >
              <Phone size={13} /> 0314 4033054
            </a>
            <a
              href="mailto:Hassani854@gmail.com"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.1em' }}
            >
              <Mail size={13} /> Hassani854@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Inter', sans-serif" }}>
            <Clock size={12} />
            Mon – Fri: 2:00 PM – 8:00 PM
          </div>
        </div>
      </section>
    </div>
  );
}