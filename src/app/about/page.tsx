import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, MapPin, CheckCircle2, Phone, Mail } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export default function AboutPage() {
  const libraryImage = PlaceHolderImages.find(i => i.id === 'library');

  return (
    <div className="pb-20">

      {/* Header */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            The AECS Legacy
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary mb-6">
            Shaping Cambridge Brilliance
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded with the singular vision of providing high-end, conceptual, and results-oriented
            IGCSE &amp; O-Level education in Lahore.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Image side */}
            <div className="relative animate-slide-left">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src={libraryImage?.imageUrl ?? ''}
                  alt="AECS Library"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-8 -right-8 bg-accent text-secondary p-8 rounded-full w-44 h-44 flex flex-col items-center justify-center text-center shadow-2xl">
                <span className="text-4xl font-headline font-bold">10+</span>
                <span className="text-[10px] font-accent uppercase font-bold tracking-widest leading-tight mt-1">
                  Years of<br />Excellence
                </span>
              </div>
            </div>

            {/* Text side */}
            <div className="space-y-8 animate-slide-right">
              <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold">
                Our Story &amp; Philosophy
              </span>
              <h2 className="text-4xl font-headline font-bold text-secondary">
                Built on a Mission to Educate Better
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AECS Academy (Academy for Excellence in Cambridge Studies) emerged as a response to
                  the growing need for specialised O-Level education that prioritises student
                  understanding over memorisation. Located near the heart of Lake City, Lahore, we
                  provide a haven for students striving for the highest Cambridge grades.
                </p>
                <p>
                  Our philosophy is simple: every student has the potential for excellence when
                  provided with the right environment, expert faculty, and personalised academic maps.
                  We don't just teach subjects — we build foundations for global success.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Specialised IGCSE focus from Grade 6 onwards',
                  'Small cohort sizes for individual academic growth',
                  'Expert faculty from top-tier Lahore institutions',
                  'Online and on-campus hybrid learning options',
                  'Strategic location near Raiwind Road & Lake City',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary font-bold text-sm font-accent uppercase tracking-tight">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary text-secondary-foreground rounded-[4rem] mx-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-3 block">
              What Drives Us
            </span>
            <h2 className="text-4xl font-headline font-bold text-white">Vision &amp; Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6 p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <Eye size={30} className="text-white" />
              </div>
              <h3 className="text-3xl font-headline font-bold text-white">Our Vision</h3>
              <p className="text-secondary-foreground/70 leading-relaxed text-lg">
                To be the benchmark for Cambridge excellence in Pakistan — where students are
                empowered to think critically and achieve results that open doors to the world's
                leading universities.
              </p>
            </div>
            <div className="space-y-6 p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <Target size={30} className="text-secondary" />
              </div>
              <h3 className="text-3xl font-headline font-bold text-white">Our Mission</h3>
              <p className="text-secondary-foreground/70 leading-relaxed text-lg">
                To provide rigorous, conceptual coaching tailored to the individual learner's pace,
                maintaining an environment that fosters intellectual curiosity, discipline, and
                academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-8">
              <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold">
                Visit Us
              </span>
              <h2 className="text-4xl font-headline font-bold text-secondary">
                In the Heart of<br />Modern Lahore
              </h2>

              {/* Contact details */}
              {[
                {
                  icon: MapPin,
                  title: 'Campus Address',
                  text: '100 Platinum Homes, Al Kabir Town Phase 2,\nNear Lake City Raiwind Road, Lahore',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  text: '0314 4033054',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  text: 'Hassani854@gmail.com',
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="bg-muted p-4 rounded-2xl h-fit">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-0.5">{title}</h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">{text}</p>
                  </div>
                </div>
              ))}

              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <p className="text-primary font-bold italic text-base leading-relaxed">
                  "The only IGCSE/O-Level specialised academy near Lake City — serving families from
                  Al-Kabir Town, Khayaban-e-Amin, and Bahria Town."
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="flex-[1.5] h-[500px] rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.3846665789644!2d74.24151337617417!3d31.320875174311145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fdf1273934d7%3A0x6a2c9c7336a18274!2sAl%20Kabir%20Town%20Phase%202!5e0!3m2!1sen!2s!4v1714574929837!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
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