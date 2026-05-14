import React from 'react';

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing this website and enrolling in our courses, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services or enrol in our programmes.' },
  { title: '2. Enrollment & Academic Conduct', content: "Students are expected to maintain academic integrity and follow the academy's code of conduct at all times. AECS Academy reserves the right to terminate enrollment for any student who violates disciplinary policies, engages in dishonest academic practices, or disrupts the learning environment for others." },
  { title: '3. Fee Policy', content: 'All fees must be paid on or before the specified due date. Fees are non-refundable once the session has commenced. AECS Academy reserves the right to adjust fee structures with prior notice of at least 30 days. Persistent non-payment may result in suspension of academic services.' },
  { title: '4. Attendance Policy', content: 'Students are expected to maintain a minimum attendance of 75% per subject per term. Consistent absences without valid justification may result in academic warnings or restricted access to examination preparation materials.' },
  { title: '5. Intellectual Property', content: 'All course materials, notes, worksheets, past-paper compilations, and curriculum designs provided by AECS Academy are the intellectual property of the academy. Students may not reproduce, distribute, or commercially share these materials without explicit written permission from the academy management.' },
  { title: '6. Limitation of Liability', content: 'AECS Academy is committed to providing the highest quality education but does not guarantee specific exam results. The academy is not liable for any personal property loss or injury sustained on campus outside of academy-supervised activities. Students attend at their own risk outside of scheduled class hours.' },
  { title: '7. Amendments', content: 'AECS Academy reserves the right to modify these Terms and Conditions at any time. Students and parents will be notified of significant changes via the registered email address or an announcement on the academy noticeboard.' },
  { title: '8. Governing Law', content: 'These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from or related to enrollment at AECS Academy shall be subject to the exclusive jurisdiction of the courts in Lahore.' },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="pb-24" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

      {/* ── HEADER ── */}
      <section
        className="relative overflow-hidden pt-36 pb-28"
        style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 60%, #0b1628 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#C8960C]/40" />
            <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Academy Guidelines</span>
            <div className="h-px w-12 bg-[#C8960C]/40" />
          </div>
          <h1 className="text-white mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 700, lineHeight: '1.02' }}>
            Terms of <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Service</span>
          </h1>
          <p className="leading-relaxed mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '540px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '1.1rem' }}>
            Please read these terms carefully before enrolling or using our services.
          </p>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "'Inter', sans-serif" }}>Last updated: June 2025</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="container mx-auto px-6 max-w-4xl py-20">
        <div
          className="rounded-[2.5rem] overflow-hidden"
          style={{ background: 'white', boxShadow: '0 24px 80px rgba(11,22,40,0.07)', border: '1px solid rgba(123,28,46,0.06)' }}
        >
          {sections.map((sec, i) => (
            <div
              key={i}
              className="px-12 py-10"
              style={{ borderBottom: i < sections.length - 1 ? '1px solid rgba(11,22,40,0.06)' : 'none' }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-1"
                  style={{ background: 'rgba(123,28,46,0.07)', border: '1px solid rgba(123,28,46,0.12)' }}
                >
                  <span className="font-semibold text-xs" style={{ color: '#7B1C2E', fontFamily: "'Inter', sans-serif" }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1">
                  <h2
                    className="font-bold mb-4"
                    style={{ fontSize: '1.5rem', color: '#0b1628', lineHeight: 1.2 }}
                  >
                    {sec.title.replace(/^\d+\.\s/, '')}
                  </h2>
                  <p
                    className="leading-relaxed"
                    style={{ color: 'rgba(11,22,40,0.55)', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', lineHeight: 1.8 }}
                  >
                    {sec.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 p-8 rounded-3xl text-center"
          style={{ background: 'rgba(123,28,46,0.05)', border: '1px dashed rgba(123,28,46,0.2)' }}
        >
          <p className="leading-relaxed" style={{ color: 'rgba(11,22,40,0.55)', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '14px' }}>
            Questions about these terms? Reach us at{' '}
            <a href="mailto:Hassani854@gmail.com" className="font-semibold hover:underline" style={{ color: '#7B1C2E' }}>
              Hassani854@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}