import React from 'react';
import Image from 'next/image';
import { Target, Eye, MapPin, CheckCircle2, Phone, Mail } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export default function AboutPage() {
  const libraryImage = PlaceHolderImages.find(i => i.id === 'library');

  return (
    <div
      className="pb-20"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-36 pb-28"
        style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 60%, #0e0e1a 100%)' }}
      >
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />

        <div className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] rounded-full border border-[#C8960C]/8 pointer-events-none" />
        <div className="absolute right-[5%] top-[15%] w-[400px] h-[400px] rounded-full border border-[#C8960C]/10 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#C8960C]/40" />
            <span
              className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The AECS Legacy
            </span>
            <div className="h-px w-12 bg-[#C8960C]/40" />
          </div>
          <h1
            className="text-white mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: '1.02' }}
          >
            Shaping Cambridge<br />
            <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Brilliance</span>
          </h1>
          <p
            className="text-xl leading-relaxed mx-auto"
            style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Founded with the singular vision of providing high-end, conceptual, and
            results-oriented IGCSE & O-Level education in Lahore.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-28" style={{ background: '#fff' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Image */}
            <div className="relative">
              <div
                className="aspect-[4/5] rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.15)', border: '1px solid rgba(123,28,46,0.1)' }}
              >
                <Image src={libraryImage?.imageUrl ?? ''} alt="AECS Library" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,22,40,0.4) 0%, transparent 60%)' }} />
              </div>
              {/* Badge */}
              <div
                className="absolute -top-8 -right-8 w-44 h-44 rounded-full flex flex-col items-center justify-center text-center"
                style={{ background: '#7B1C2E', border: '3px solid rgba(200,150,12,0.35)', boxShadow: '0 20px 60px rgba(123,28,46,0.4)' }}
              >
                <span style={{ fontSize: '2.6rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>10+</span>
                <span
                  className="mt-1 leading-tight"
                  style={{ fontSize: '9px', fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.2em' }}
                >
                  Years of<br />Excellence
                </span>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 opacity-15 pointer-events-none">
                <svg viewBox="0 0 112 112" fill="none">
                  <path d="M0 112 L0 0 L112 0" stroke="#C8960C" strokeWidth="1.5" fill="none" />
                  <path d="M16 112 L16 16 L112 16" stroke="#C8960C" strokeWidth="0.7" fill="none" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C8960C]" />
                <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Our Story & Philosophy
                </span>
              </div>
              <h2
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#0b1628', lineHeight: 1.08 }}
              >
                Built on a Mission to<br />
                <span style={{ color: '#7B1C2E', fontStyle: 'italic' }}>Educate Better</span>
              </h2>
              <div className="space-y-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(11,22,40,0.55)', lineHeight: 1.8 }}>
                <p>
                  AECS Academy (Academy for Excellence in Cambridge Studies) emerged as a
                  response to the growing need for specialised O-Level education that
                  prioritises student understanding over memorisation. Located near the heart
                  of Lake City, Lahore, we provide a haven for students striving for the
                  highest Cambridge grades.
                </p>
                <p>
                  Our philosophy is simple: every student has the potential for excellence
                  when provided with the right environment, expert faculty, and personalised
                  academic maps. We don't just teach subjects — we build foundations for
                  global success.
                </p>
              </div>
              <ul className="space-y-3 pt-2">
                {[
                  'Specialised IGCSE focus from Grade 6 onwards',
                  'Small cohort sizes for individual academic growth',
                  'Expert faculty from top-tier Lahore institutions',
                  'Online and on-campus hybrid learning options',
                  'Strategic location near Raiwind Road & Lake City',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(123,28,46,0.07)', border: '1px solid rgba(123,28,46,0.15)' }}
                    >
                      <CheckCircle2 size={14} style={{ color: '#7B1C2E' }} />
                    </div>
                    <span
                      className="text-sm font-semibold tracking-wide uppercase"
                      style={{ fontFamily: "'Inter', sans-serif", color: '#0b1628', letterSpacing: '0.04em' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section
        className="py-28 mx-4 rounded-[3rem] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 100%)' }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C8960C]/40" />
              <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                What Drives Us
              </span>
              <div className="h-px w-12 bg-[#C8960C]/40" />
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, color: 'white' }}>
              Vision &amp; <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Mission</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                text: 'To be the benchmark for Cambridge excellence in Pakistan — where students are empowered to think critically and achieve results that open doors to the world\'s leading universities.',
                accent: '#7B1C2E',
              },
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To provide rigorous, conceptual coaching tailored to the individual learner\'s pace, maintaining an environment that fosters intellectual curiosity, discipline, and academic excellence.',
                accent: '#C8960C',
              },
            ].map(({ icon: Icon, title, text, accent }) => (
              <div
                key={title}
                className="p-10 rounded-3xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7"
                  style={{ background: accent }}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3
                  className="text-white mb-5"
                  style={{ fontSize: '2rem', fontWeight: 700 }}
                >
                  {title}
                </h3>
                <p
                  className="leading-relaxed text-lg"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-28" style={{ background: '#faf8f4' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C8960C]" />
                <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Visit Us
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#0b1628', lineHeight: 1.08 }}>
                In the Heart of<br />
                <span style={{ color: '#7B1C2E', fontStyle: 'italic' }}>Modern Lahore</span>
              </h2>

              {[
                {
                  icon: MapPin,
                  title: 'Campus Address',
                  text: '100 Platinum Homes, Al Kabir Town Phase 2,\nNear Lake City Raiwind Road, Lahore',
                },
                { icon: Phone, title: 'Phone', text: '0314 4033054' },
                { icon: Mail,  title: 'Email', text: 'Hassani854@gmail.com' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: 'rgba(123,28,46,0.07)', border: '1px solid rgba(123,28,46,0.12)' }}
                  >
                    <Icon size={20} style={{ color: '#7B1C2E' }} />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-lg mb-1"
                      style={{ color: '#0b1628' }}
                    >
                      {title}
                    </h4>
                    <p
                      className="leading-relaxed whitespace-pre-line text-sm"
                      style={{ color: 'rgba(11,22,40,0.5)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              ))}

              <blockquote
                className="p-8 rounded-3xl"
                style={{ background: 'rgba(123,28,46,0.05)', borderLeft: '4px solid #7B1C2E' }}
              >
                <p
                  className="italic leading-relaxed"
                  style={{ color: '#7B1C2E', fontStyle: 'italic', fontSize: '1.05rem' }}
                >
                  "The only IGCSE/O-Level specialised academy near Lake City — serving families
                  from Al-Kabir Town, Khayaban-e-Amin, and Bahria Town."
                </p>
              </blockquote>
            </div>

            {/* Map */}
            <div
              className="flex-[1.5] h-[500px] rounded-3xl overflow-hidden transition-all duration-700 hover:rounded-2xl"
              style={{ boxShadow: '0 24px 80px rgba(11,22,40,0.12)', filter: 'grayscale(0.3)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.3846665789644!2d74.24151337617417!3d31.320875174311145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fdf1273934d7%3A0x6a2c9c7336a18274!2sAl%20Kabir%20Town%20Phase%202!5e0!3m2!1sen!2s!4v1714574929837!5m2!1sen!2s"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AECS Academy Map"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}