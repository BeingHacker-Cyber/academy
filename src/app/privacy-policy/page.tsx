import React from 'react';

const sections = [
  { title: '1. Information We Collect', content: 'We collect personal information that you provide directly when you register for classes, contact us via our website, or sign up for updates. This includes your name, email address, phone number, home address, age, and academic background.' },
  { title: '2. How We Use Your Information', content: null, list: [
    'Process your enrollment application and maintain academic records.',
    'Communicate with you regarding schedules, assessments, and academy updates.',
    'Send confirmation and notification emails related to your registration.',
    'Improve our curriculum and educational service quality.',
    'Ensure a safe and secure learning environment on campus and online.',
  ]},
  { title: '3. Information Sharing', content: 'We do not sell, trade, rent, or otherwise transfer your personally identifiable information to third parties. Information is only shared when strictly required to provide the educational services you have requested (e.g., Cambridge registration bodies) or when required by applicable law.' },
  { title: '4. Email Communications', content: 'By submitting the enrollment or contact form on our website, you consent to receiving transactional emails from AECS Academy, including registration confirmations and session reminders. You may opt out of non-essential communications at any time by contacting us.' },
  { title: '5. Data Security', content: 'We implement appropriate technical and organisational security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no internet-based service can guarantee absolute security.' },
  { title: '6. Cookies', content: 'Our website may use session cookies to enhance your browsing experience. You may disable cookies in your browser settings; however, some features of the website may not function as expected if you do so.' },
  { title: "7. Children's Privacy", content: 'Our services are intended for students aged 10–18 and their parents or guardians. We do not knowingly collect personal information from children under the age of 13 without verified parental consent. If you believe we have inadvertently collected such information, please contact us immediately.' },
  { title: '8. Your Rights', content: 'You have the right to request access to the personal information we hold about you, request correction of inaccurate data, or request deletion of your personal data where it is no longer necessary for the purposes for which it was collected. To exercise these rights, contact us at Hassani854@gmail.com.' },
  { title: '9. Changes to This Policy', content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the revised policy.' },
];

export default function PrivacyPolicyPage() {
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
            <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Legal & Security</span>
            <div className="h-px w-12 bg-[#C8960C]/40" />
          </div>
          <h1 className="text-white mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 700, lineHeight: '1.02' }}>
            Privacy <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Policy</span>
          </h1>
          <p className="leading-relaxed mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '540px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '1.1rem' }}>
            How we collect, use, and protect your information at AECS Academy.
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
                {/* Number */}
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
                  {sec.content && (
                    <p
                      className="leading-relaxed"
                      style={{ color: 'rgba(11,22,40,0.55)', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', lineHeight: 1.8 }}
                    >
                      {sec.content}
                    </p>
                  )}
                  {sec.list && (
                    <ul className="space-y-3">
                      {sec.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                            style={{ background: '#C8960C' }}
                          />
                          <span
                            className="leading-relaxed"
                            style={{ color: 'rgba(11,22,40,0.55)', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', lineHeight: 1.8 }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact note */}
        <div
          className="mt-10 p-8 rounded-3xl text-center"
          style={{ background: 'rgba(123,28,46,0.05)', border: '1px dashed rgba(123,28,46,0.2)' }}
        >
          <p className="leading-relaxed" style={{ color: 'rgba(11,22,40,0.55)', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '14px' }}>
            Questions about this policy? Contact us at{' '}
            <a href="mailto:Hassani854@gmail.com" className="font-semibold hover:underline" style={{ color: '#7B1C2E' }}>
              Hassani854@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
