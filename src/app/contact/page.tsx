import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-muted/30 py-24 mb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-accent font-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Connect with us</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you have a query about admissions, our curriculum, or campus tours, our team is here to assist you.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-headline font-bold text-secondary">Academy Information</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="bg-primary/10 p-4 rounded-2xl h-fit text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-accent font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Campus Address</h4>
                  <p className="text-secondary font-bold">100 Platinum Homes, Al Kabir Town Phase 2, Near Lake City Raiwind Road, Lahore</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-primary/10 p-4 rounded-2xl h-fit text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-accent font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Call Us</h4>
                  <p className="text-secondary font-bold">0314 4033054</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-primary/10 p-4 rounded-2xl h-fit text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-accent font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Email Us</h4>
                  <p className="text-secondary font-bold">Hassani854@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-primary/10 p-4 rounded-2xl h-fit text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-accent font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Office Hours</h4>
                  <p className="text-secondary font-bold">Mon - Fri: 2:00 PM - 8:00 PM</p>
                  <p className="text-muted-foreground text-sm">Saturday: By Appointment only</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-muted">
              <h4 className="font-accent font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-6">Social Presence</h4>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Instagram size={20} />
                </button>
                <button className="w-12 h-12 rounded-full border border-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Facebook size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-2xl rounded-[3rem] p-12 bg-white/80 backdrop-blur-sm">
              <h3 className="text-3xl font-headline font-bold text-secondary mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-accent font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                    <Input placeholder="John Doe" className="h-14 rounded-2xl border-muted bg-muted/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-accent font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                    <Input placeholder="john@example.com" className="h-14 rounded-2xl border-muted bg-muted/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-accent font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                  <Input placeholder="Admissions Query" className="h-14 rounded-2xl border-muted bg-muted/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-accent font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[150px] rounded-2xl border-muted bg-muted/20 resize-none" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-full h-16 font-accent font-bold uppercase tracking-widest shadow-xl">
                  Send Message <Send size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-24 h-[500px] rounded-[4rem] overflow-hidden shadow-2xl relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.3846665789644!2d74.24151337617417!3d31.320875174311145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fdf1273934d7%3A0x6a2c9c7336a18274!2sAl%20Kabir%20Town%20Phase%202!5e0!3m2!1sen!2s!4v1714574929837!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          />
          <div className="absolute top-8 left-8 bg-white p-6 rounded-3xl shadow-2xl max-w-xs">
            <h5 className="font-headline font-bold text-xl mb-2">Visit Our Campus</h5>
            <p className="text-xs text-muted-foreground">Our administrative staff is available for in-person consultations during office hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
