"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { User, BookOpen, CheckCircle2, ChevronRight, ChevronLeft, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const gradeSubjects = {
  "Grade 6": ["Mathematics", "English", "Islamiat", "Pak Studies", "Science", "Computer Studies"],
  "Grade 7": ["Mathematics", "English", "Islamiat", "Pak Studies", "Science", "Computer Studies"],
  "Grade 8": ["Mathematics", "English", "Islamiat", "Pak Studies", "Science", "Computer Studies"],
  "Grade 9": ["Mathematics", "English Language", "English Literature", "Physics", "Chemistry", "Biology", "Pakistan Studies", "Islamiat", "Commerce", "Accounts", "Economics", "Computer Science"],
  "Grade 10": ["Mathematics", "English Language", "English Literature", "Physics", "Chemistry", "Biology", "Pakistan Studies", "Islamiat", "Commerce", "Accounts", "Economics", "Computer Science"],
};

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  age: z.coerce.number().min(10).max(20),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be valid"),
  primaryAddress: z.string().min(5, "Address is required"),
  secondaryAddress: z.string().optional(),
  classLevel: z.string().min(1, "Please select your class"),
  subjects: z.array(z.string()).min(1, "Select at least one subject"),
  sessionPreference: z.enum(["Online", "On Campus", "Both"]),
  consent: z.boolean().refine(val => val === true, "You must accept terms"),
});

type FormValues = z.infer<typeof formSchema>;

export default function EnrollmentForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      age: 12,
      email: "",
      phone: "",
      primaryAddress: "",
      secondaryAddress: "",
      classLevel: "",
      subjects: [],
      sessionPreference: "Both",
      consent: false,
    },
  });

  const { watch, setValue } = form;
  const classLevel = watch("classLevel");
  const primaryAddress = watch("primaryAddress");

  const handleSameAddress = (checked: boolean) => {
    if (checked) {
      setValue("secondaryAddress", primaryAddress);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    // Simulation of EmailJS sending
    // Normally: emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
    setTimeout(() => {
      console.log("Form Values:", values);
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Registration Received!",
        description: "Check your email for confirmation. Our admissions team will contact you shortly.",
      });
    }, 2000);
  };

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) {
      fieldsToValidate = ['fullName', 'age', 'email', 'phone', 'primaryAddress'];
    } else if (step === 2) {
      fieldsToValidate = ['classLevel', 'subjects', 'sessionPreference'];
    }
    
    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  if (isSuccess) {
    return (
      <Card className="max-w-xl mx-auto border-none shadow-2xl bg-white overflow-hidden text-center p-12 animate-fade-up">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-6 rounded-full">
            <CheckCircle2 size={64} className="text-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-headline font-bold text-secondary mb-4">Application Submitted!</h2>
        <p className="text-muted-foreground mb-8">
          Thank you for choosing AECS Academy, {watch("fullName")}. A confirmation email has been sent to {watch("email")}. 
          Our administrative office will review your application and get back to you within 24 hours.
        </p>
        <Button onClick={() => window.location.href = '/'} className="bg-primary rounded-full px-8 py-6">
          Return Home
        </Button>
      </Card>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-12 px-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-col items-center flex-1 relative">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all z-10",
              step === s ? "bg-primary text-white scale-110 shadow-lg" : 
              step > s ? "bg-accent text-white" : "bg-muted text-muted-foreground"
            )}>
              {step > s ? <CheckCircle2 size={20} /> : s}
            </div>
            <span className={cn(
              "mt-3 text-[10px] uppercase font-accent tracking-widest font-bold",
              step === s ? "text-primary" : "text-muted-foreground"
            )}>
              {s === 1 ? "Personal" : s === 2 ? "Academic" : "Review"}
            </span>
            {s < 3 && (
              <div className={cn(
                "absolute top-6 left-1/2 w-full h-[2px] -z-0",
                step > s ? "bg-accent" : "bg-muted"
              )} />
            )}
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm p-8 space-y-6 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-primary" />
                <h3 className="text-2xl font-headline font-bold text-secondary">Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-accent uppercase text-[10px] tracking-widest">Full Name</FormLabel>
                      <FormControl><Input placeholder="John Doe" className="rounded-xl border-muted h-12" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-accent uppercase text-[10px] tracking-widest">Age</FormLabel>
                      <FormControl><Input type="number" className="rounded-xl border-muted h-12" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-accent uppercase text-[10px] tracking-widest">Email Address</FormLabel>
                      <FormControl><Input type="email" placeholder="john@example.com" className="rounded-xl border-muted h-12" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-accent uppercase text-[10px] tracking-widest">Phone Number</FormLabel>
                      <FormControl><Input placeholder="03XX XXXXXXX" className="rounded-xl border-muted h-12" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="primaryAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-accent uppercase text-[10px] tracking-widest">Primary Address</FormLabel>
                    <FormControl><Textarea className="rounded-xl border-muted min-h-[80px]" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2 py-2">
                <Checkbox id="sameAddress" onCheckedChange={handleSameAddress} />
                <label htmlFor="sameAddress" className="text-xs font-medium text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Secondary address is the same as primary
                </label>
              </div>

              <FormField
                control={form.control}
                name="secondaryAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-accent uppercase text-[10px] tracking-widest">Secondary Address</FormLabel>
                    <FormControl><Textarea className="rounded-xl border-muted min-h-[80px]" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Card>
          )}

          {/* Step 2: Academic Info */}
          {step === 2 && (
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm p-8 space-y-6 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-primary" />
                <h3 className="text-2xl font-headline font-bold text-secondary">Academic Information</h3>
              </div>

              <FormField
                control={form.control}
                name="classLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-accent uppercase text-[10px] tracking-widest">Select Your Class</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Choose grade..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.keys(gradeSubjects).map((grade) => (
                          <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {classLevel && (
                <FormField
                  control={form.control}
                  name="subjects"
                  render={() => (
                    <FormItem className="space-y-4">
                      <div className="mb-4">
                        <FormLabel className="font-accent uppercase text-[10px] tracking-widest">Select Subjects</FormLabel>
                        <FormDescription>Choose all subjects you intend to study.</FormDescription>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {gradeSubjects[classLevel as keyof typeof gradeSubjects]?.map((subject) => (
                          <FormField
                            key={subject}
                            control={form.control}
                            name="subjects"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={subject}
                                  className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-xl hover:bg-muted/30 transition-colors"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(subject)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, subject])
                                          : field.onChange(field.value?.filter((value) => value !== subject));
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-medium cursor-pointer flex-1">
                                    {subject}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="sessionPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-accent uppercase text-[10px] tracking-widest">Session Preference</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Choose session mode..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Online">Online Classes Only</SelectItem>
                        <SelectItem value="On Campus">On Campus Classes Only</SelectItem>
                        <SelectItem value="Both">Both (Hybrid Model)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Card>
          )}

          {/* Step 3: Review & Consent */}
          {step === 3 && (
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm p-8 space-y-8 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-primary" />
                <h3 className="text-2xl font-headline font-bold text-secondary">Review & Submit</h3>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="space-y-1">
                    <p className="text-[10px] font-accent uppercase tracking-widest text-muted-foreground">Student Name</p>
                    <p className="font-bold text-secondary">{watch("fullName")}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-accent uppercase tracking-widest text-muted-foreground">Grade Level</p>
                    <p className="font-bold text-secondary">{watch("classLevel")}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-accent uppercase tracking-widest text-muted-foreground">Email</p>
                    <p className="font-medium text-secondary">{watch("email")}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-accent uppercase tracking-widest text-muted-foreground">Phone</p>
                    <p className="font-medium text-secondary">{watch("phone")}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] font-accent uppercase tracking-widest text-muted-foreground">Selected Subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {watch("subjects").map((sub) => (
                      <span key={sub} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-tighter">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">
                        I accept the <a href="#" className="text-primary underline">Terms & Conditions</a> and <a href="#" className="text-primary underline">Privacy Policy</a>.
                      </FormLabel>
                      <p className="text-xs text-muted-foreground">
                        I confirm that the information provided is accurate and I agree to follow the academy guidelines.
                      </p>
                    </div>
                  </FormItem>
                )}
              />
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center px-4">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep} className="rounded-full px-8 h-12">
                <ChevronLeft className="mr-2" size={18} /> Back
              </Button>
            ) : (
              <div /> // Spacer
            )}

            {step < 3 ? (
              <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
                Next Step <ChevronRight className="ml-2" size={18} />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-12 h-14 font-bold text-lg">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Finalize Enrollment"
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
