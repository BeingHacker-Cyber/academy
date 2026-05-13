import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const faculty = [
  {
    name: "Sir Ahmed Hassan",
    subject: "Mathematics & Physics",
    qualification: "M.Phil Physics (UET)",
    bio: "With over 12 years of experience in O-Level coaching, Sir Ahmed specializes in making complex concepts in Additional Mathematics simple and intuitive.",
    avatar: "AH",
    image: PlaceHolderImages.find(img => img.id === 'faculty-1')?.imageUrl
  },
  {
    name: "Ms. Sarah Khan",
    subject: "English Language & Lit",
    qualification: "MA English (PU), CELTA Certified",
    bio: "Focusing on vocabulary enrichment and creative writing skills, Ms. Sarah has helped 90% of her students achieve A* in English Language exams.",
    avatar: "SK",
    image: PlaceHolderImages.find(img => img.id === 'faculty-2')?.imageUrl
  },
  {
    name: "Sir Bilal Siddique",
    subject: "Business Studies & Accounting",
    qualification: "ACCA (Gold Medalist), MBA Finance",
    bio: "A practical approach to commerce. Sir Bilal uses real-world business scenarios to prepare students for both exams and professional life.",
    avatar: "BS",
    image: PlaceHolderImages.find(img => img.id === 'faculty-3')?.imageUrl
  },
  {
    name: "Ms. Fatima Zahra",
    subject: "Chemistry & Biology",
    qualification: "M.Sc Biochemistry",
    bio: "Passionate about lab sciences, Ms. Fatima ensures students grasp the molecular basis of biology with extensive conceptual mapping.",
    avatar: "FZ",
    image: PlaceHolderImages.find(img => img.id === 'faculty-2')?.imageUrl
  },
  {
    name: "Sir Usman Ali",
    subject: "Pak Studies & Islamiat",
    qualification: "M.A History, M.A Islamic Studies",
    bio: "Known for his engaging storytelling method, Sir Usman makes history and religious studies highly relatable and easy to remember.",
    avatar: "UA",
    image: PlaceHolderImages.find(img => img.id === 'faculty-1')?.imageUrl
  },
  {
    name: "Ms. Zainab Malik",
    subject: "Economics",
    qualification: "M.Sc Economics (LUMS)",
    bio: "Bridging the gap between theory and global economic trends. Expert in Cambridge exam techniques and time management.",
    avatar: "ZM",
    image: PlaceHolderImages.find(img => img.id === 'faculty-3')?.imageUrl
  }
];

export default function FacultyPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-24 mb-20 rounded-b-[4rem]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Our Mentors</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6">Expert Educators</h1>
          <p className="text-xl text-secondary-foreground/70 leading-relaxed">
            Led by some of the most qualified and experienced Cambridge educators in Lahore, we ensure excellence in every subject.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Filter (Visual Only for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All", "Sciences", "Mathematics", "Business", "English", "Social Studies"].map((cat) => (
            <button key={cat} className="px-6 py-2 rounded-full border border-primary/20 font-accent text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
              {cat}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {faculty.map((member, i) => (
            <div key={i} className="group h-[500px] [perspective:1000px] animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="relative h-full w-full rounded-[2rem] shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <Card className="h-full border-none overflow-hidden rounded-[2rem]">
                    <div className="relative h-[65%] w-full">
                      <Image 
                        src={member.image || ""} 
                        alt={member.name} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                        data-ai-hint="professional headshot"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <Badge className="bg-accent text-accent-foreground font-accent text-[10px] uppercase tracking-widest mb-2 border-none">
                          {member.subject}
                        </Badge>
                        <h3 className="text-2xl font-headline font-bold text-white leading-tight">{member.name}</h3>
                      </div>
                    </div>
                    <CardContent className="h-[35%] bg-white p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-primary mb-3">
                        <GraduationCap size={18} />
                        <span className="text-xs font-accent font-bold uppercase tracking-wider">{member.qualification}</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {member.bio}
                      </p>
                      <div className="mt-4 pt-4 border-t border-muted flex justify-between items-center">
                        <span className="text-[10px] font-accent font-bold uppercase text-accent tracking-widest">Flip for more</span>
                        <BookOpen size={14} className="text-accent" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-primary p-12 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center space-y-6 shadow-2xl">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-headline font-bold mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-3xl font-headline font-bold">{member.name}</h3>
                  <div className="w-12 h-1 bg-accent rounded-full" />
                  <p className="text-sm leading-relaxed opacity-90 italic">
                    "{member.bio}"
                  </p>
                  <Badge variant="outline" className="border-white/30 text-white rounded-full font-accent px-6 py-2">
                    Cambridge Specialist
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
