import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ_DATA = [
  {
    category: "Admissions",
    items: [
      { q: "What is the age criteria for enrollment?", a: "We primarily cater to students from Grade 6 (approx. 11-12 years) up to O-Level (16-17 years). Specific age requirements depend on the level of entry." },
      { q: "When does the academic session begin?", a: "Our primary intake occurs in August/September, aligning with the Cambridge academic cycle. However, we accept mid-session enrollments for certain subjects depending on seat availability." },
      { q: "What is the process for registration?", a: "The process involves submitting an online enrollment form, followed by a brief academic assessment/interview to determine the student's current conceptual standing." }
    ]
  },
  {
    category: "Academics",
    items: [
      { q: "Do you offer both IGCSE and O-Level streams?", a: "Yes, we specialize in the Cambridge curriculum, offering both IGCSE and standard O-Level pathways tailored to the student's long-term academic goals." },
      { q: "What are the academy timings?", a: "Our sessions typically run from 2:00 PM to 8:00 PM, Monday through Friday. Individual subject timings vary." },
      { q: "Are the teachers certified Cambridge educators?", a: "Absolutely. Our faculty consists of Lahore's most qualified educators, many of whom have over a decade of experience in Cambridge coaching and marking." }
    ]
  },
  {
    category: "Fees & Scholarships",
    items: [
      { q: "What is the fee structure?", a: "Fees are calculated on a per-subject basis. We offer competitive rates for Lake City and surrounding areas. For a detailed breakdown, please contact our admissions office." },
      { q: "Are there any merit-based scholarships?", a: "Yes, AECS Academy rewards excellence. Students with exceptional previous academic records or high performance in our internal assessments may qualify for merit-based fee concessions." }
    ]
  }
];

export default function FAQsPage() {
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
            <span className="text-[#C8960C] tracking-[0.35em] text-[10px] font-semibold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Information Hub</span>
            <div className="h-px w-12 bg-[#C8960C]/40" />
          </div>
          <h1 className="text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: '1.02' }}>
            Common <span style={{ color: '#C8960C', fontStyle: 'italic' }}>Questions</span>
          </h1>
          <p className="text-xl leading-relaxed mx-auto" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Everything you need to know about admissions, academics, and our academy culture.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="container mx-auto px-6 max-w-4xl py-20">
        <div className="space-y-16">
          {FAQ_DATA.map((section, idx) => (
            <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#7B1C2E]/5 border border-[#7B1C2E]/10 flex items-center justify-center">
                  <HelpCircle size={18} className="text-[#7B1C2E]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0b1628] tracking-tight">{section.category}</h2>
              </div>

              <div className="bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-sm">
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, i) => (
                    <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-b last:border-b-0 px-8">
                      <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-[#7B1C2E] transition-colors">
                        <span className="font-semibold text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>{item.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-8 pt-0">
                        <p className="text-[#0b1628]/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                          {item.a}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div 
          className="mt-24 p-12 rounded-[3rem] text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0b1628 0%, #1a0a0e 100%)', border: '1px solid rgba(200,150,12,0.15)' }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-white/40 mb-10 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Our admissions team is available to provide detailed guidance and counseling for your academic path.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="flex items-center gap-2 px-8 py-4 bg-[#C8960C] text-[#0b1628] rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MessageCircle size={14} /> Contact Support
              </a>
              <a 
                href="tel:03144033054" 
                className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Phone size={14} /> Call Admissions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}