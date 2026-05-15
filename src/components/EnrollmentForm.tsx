
"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
  Form, FormControl, FormField, FormItem, FormLabel,
  FormMessage, FormDescription,
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import {
  User, BookOpen, CheckCircle2, ChevronRight, ChevronLeft,
  MapPin, Phone, Mail, Loader2, PartyPopper, Home,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { submitEnrollmentAction } from '@/app/actions/enrollment';

/* ─────────────────────────────────────
   Subject lists per grade
───────────────────────────────────── */
const gradeSubjects: Record<string, string[]> = {
  'Grade 6': ['Mathematics', 'English', 'Islamiat', 'Pak Studies', 'Science', 'Computer Studies'],
  'Grade 7': ['Mathematics', 'English', 'Islamiat', 'Pak Studies', 'Science', 'Computer Studies'],
  'Grade 8': ['Mathematics', 'English', 'Islamiat', 'Pak Studies', 'Science', 'Computer Studies'],
  'Grade 9': [
    'Mathematics', 'English Language', 'English Literature',
    'Physics', 'Chemistry', 'Biology',
    'Pakistan Studies', 'Islamiat',
    'Commerce', 'Accounts', 'Economics', 'Computer Science',
  ],
  'Grade 10 (O Level)': [
    'Mathematics', 'English Language', 'English Literature',
    'Physics', 'Chemistry', 'Biology',
    'Pakistan Studies', 'Islamiat',
    'Commerce', 'Accounts', 'Economics', 'Computer Science',
  ],
};

/* ─────────────────────────────────────
   Zod schema
───────────────────────────────────── */
const formSchema = z.object({
  fullName:         z.string().min(3, 'Full name must be at least 3 characters'),
  age:              z.coerce.number().min(10, 'Minimum age is 10').max(50, 'Maximum age is 50'),
  email:            z.string().email('Please enter a valid email address (must contain @)'),
  phone:            z.string().regex(/^\+92\d{10}$/, 'Phone must start with +92 followed by 10 digits (e.g., +923144033054)'),
  primaryAddress:   z.string().min(5, 'Primary address is required'),
  secondaryAddress: z.string().optional(),
  classLevel:       z.string().min(1, 'Please select your class'),
  subjects:         z.array(z.string()).min(1, 'Please select at least one subject'),
  sessionPreference: z.enum(['Online', 'On Campus', 'Both']),
  consent:          z.boolean().refine((v) => v === true, 'You must accept the terms to proceed'),
});

type FormValues = z.infer<typeof formSchema>;

/* ─────────────────────────────────────
   Steps config
───────────────────────────────────── */
const steps = [
  { label: 'Personal',  icon: User        },
  { label: 'Academic',  icon: BookOpen    },
  { label: 'Confirm',   icon: CheckCircle2 },
];

/* ═══════════════════════════════════
   COMPONENT
═══════════════════════════════════ */
export default function EnrollmentForm() {
  const [step,        setStep]        = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess,   setIsSuccess]   = useState(false);
  const [sameAddr,    setSameAddr]    = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '', age: 13, email: '', phone: '+92',
      primaryAddress: '', secondaryAddress: '',
      classLevel: '', subjects: [],
      sessionPreference: 'Both', consent: false,
    },
  });

  const { watch, setValue } = form;
  const classLevel     = watch('classLevel');
  const primaryAddress = watch('primaryAddress');

  /* Sync secondary address when checkbox ticked */
  useEffect(() => {
    if (sameAddr) setValue('secondaryAddress', primaryAddress);
  }, [sameAddr, primaryAddress, setValue]);

  /* ── Submit handler ── */
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const result = await submitEnrollmentAction(values);

      if (result.success) {
        setIsSuccess(true);
        toast({
          title:       'Registration Successful!',
          description: 'A confirmation email has been sent to your address.',
        });
      } else {
        throw new Error(result.error || 'Failed to submit enrollment');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      toast({
        title:       'Submission Error',
        description: err.message || 'Something went wrong. Please call us at 0314 4033054.',
        variant:     'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Step validation ── */
  const nextStep = async () => {
    const fields: (keyof FormValues)[] =
      step === 1
        ? ['fullName', 'age', 'email', 'phone', 'primaryAddress']
        : ['classLevel', 'subjects', 'sessionPreference'];

    const ok = await form.trigger(fields);
    if (ok) setStep((s) => s + 1);
  };

  /* ── Success screen ── */
  if (isSuccess) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 px-4 animate-fade-up">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <PartyPopper size={48} className="text-primary" />
        </div>
        <h2 className="text-4xl font-headline font-bold text-secondary mb-4">
          Application Submitted!
        </h2>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          Thank you for choosing AECS Academy, <strong>{watch('fullName')}</strong>!
        </p>
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          A confirmation has been sent to <strong>{watch('email')}</strong>.
          Our admissions office will review your application and reach out within 24 hours.
        </p>
        <div className="bg-muted/40 rounded-3xl p-6 text-left space-y-2 mb-8 text-sm">
          <p><span className="font-bold text-secondary">Name:</span> {watch('fullName')}</p>
          <p><span className="font-bold text-secondary">Class:</span> {watch('classLevel')}</p>
          <p><span className="font-bold text-secondary">Subjects:</span> {watch('subjects').join(', ')}</p>
          <p><span className="font-bold text-secondary">Mode:</span> {watch('sessionPreference')}</p>
        </div>
        <Button
          onClick={() => (window.location.href = '/')}
          className="bg-primary text-white rounded-full px-10 h-12 font-accent uppercase tracking-widest"
        >
          <Home size={16} className="mr-2" /> Return Home
        </Button>
      </div>
    );
  }

  /* ── MAIN FORM ── */
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      {/* Progress indicator */}
      <div className="flex items-center justify-center mb-14">
        {steps.map((s, i) => {
          const num   = i + 1;
          const Icon  = s.icon;
          const done  = step > num;
          const active = step === num;
          return (
            <React.Fragment key={num}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 z-10 border-2',
                    done   ? 'bg-accent border-accent text-secondary scale-100'
                           : active ? 'bg-primary border-primary text-white scale-110 shadow-glow-primary'
                                    : 'bg-white border-muted text-muted-foreground',
                  )}
                >
                  {done ? <CheckCircle2 size={20} /> : <Icon size={18} />}
                </div>
                <span
                  className={cn(
                    'mt-2 text-[10px] uppercase font-accent tracking-widest font-bold',
                    active ? 'text-primary' : done ? 'text-accent' : 'text-muted-foreground',
                  )}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    'flex-1 h-0.5 mx-3 transition-colors duration-500',
                    step > i + 1 ? 'bg-accent' : 'bg-muted',
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

          {/* ══ STEP 1: PERSONAL ══ */}
          {step === 1 && (
            <Card className="border-none shadow-card bg-white/90 backdrop-blur-sm rounded-3xl animate-fade-up">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-muted">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <User size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-secondary">Personal Information</h3>
                    <p className="text-xs text-muted-foreground font-accent">Step 1 of 3</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Ahmad Hassan" className="h-12 rounded-xl bg-muted/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* Age */}
                  <FormField control={form.control} name="age" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                        Age *
                      </FormLabel>
                      <FormControl>
                        <Input type="number" min={10} max={50} className="h-12 rounded-xl bg-muted/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* Email */}
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                        <Mail size={11} className="inline mr-1" />Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" className="h-12 rounded-xl bg-muted/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* Phone */}
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                        <Phone size={11} className="inline mr-1" />Phone Number (Pakistan) *
                      </FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+923XXXXXXXXX" className="h-12 rounded-xl bg-muted/20" {...field} />
                      </FormControl>
                      <FormDescription className="text-[10px]">Format: +92 followed by 10 digits</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                {/* Primary Address */}
                <FormField control={form.control} name="primaryAddress" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                      <MapPin size={11} className="inline mr-1" />Primary Address *
                    </FormLabel>
                    <FormControl>
                      <Textarea rows={3} placeholder="House No., Street, Area, City" className="rounded-xl bg-muted/20 resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {/* Same address checkbox */}
                <div className="flex items-center gap-3 py-1">
                  <Checkbox
                    id="sameAddr"
                    checked={sameAddr}
                    onCheckedChange={(v) => setSameAddr(Boolean(v))}
                    className="border-primary data-[state=checked]:bg-primary"
                  />
                  <label htmlFor="sameAddr" className="text-sm text-muted-foreground cursor-pointer select-none">
                    Secondary address is the <span className="font-bold text-secondary">same as primary</span>
                  </label>
                </div>

                {/* Secondary Address */}
                <FormField control={form.control} name="secondaryAddress" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                      Secondary Address <span className="text-muted-foreground/50">(Optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder={sameAddr ? primaryAddress || 'Same as primary address' : 'House No., Street, Area, City'}
                        className="rounded-xl bg-muted/20 resize-none"
                        disabled={sameAddr}
                        {...field}
                        value={sameAddr ? (primaryAddress || '') : (field.value || '')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </CardContent>
            </Card>
          )}

          {/* ══ STEP 2: ACADEMIC ══ */}
          {step === 2 && (
            <Card className="border-none shadow-card bg-white/90 backdrop-blur-sm rounded-3xl animate-fade-up">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-muted">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-secondary">Academic Information</h3>
                    <p className="text-xs text-muted-foreground font-accent">Step 2 of 3</p>
                  </div>
                </div>

                {/* Class selector */}
                <FormField control={form.control} name="classLevel" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                      Select Your Class *
                    </FormLabel>
                    <Select onValueChange={(v) => { field.onChange(v); form.setValue('subjects', []); }} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Choose your grade…" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.keys(gradeSubjects).map((g) => (
                          <SelectItem key={g} value={g}>{g}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                {/* Dynamic subjects */}
                {classLevel && (
                  <FormField control={form.control} name="subjects" render={() => (
                    <FormItem>
                      <div className="mb-3">
                        <FormLabel className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                          Select Subjects * <span className="normal-case text-muted-foreground/60">(multiple allowed)</span>
                        </FormLabel>
                        <FormDescription className="text-xs mt-1">
                          Subjects available for {classLevel}
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {gradeSubjects[classLevel]?.map((subject) => (
                          <FormField key={subject} control={form.control} name="subjects" render={({ field }) => (
                            <FormItem className="flex items-center gap-3 p-4 border border-muted rounded-xl hover:border-primary/30 hover:bg-primary/3 transition-all cursor-pointer group">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(subject)}
                                  onCheckedChange={(checked) => {
                                    field.onChange(
                                      checked
                                        ? [...field.value, subject]
                                        : field.value.filter((v) => v !== subject),
                                    );
                                  }}
                                  className="border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-medium cursor-pointer flex-1 group-hover:text-primary transition-colors">
                                {subject}
                              </FormLabel>
                            </FormItem>
                          )} />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />
                )}

                {/* Session preference */}
                <FormField control={form.control} name="sessionPreference" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                      Session Preference *
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Choose session mode…" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Online">Online Classes Only</SelectItem>
                        <SelectItem value="On Campus">On Campus Only</SelectItem>
                        <SelectItem value="Both">Both (Hybrid Model)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </CardContent>
            </Card>
          )}

          {/* ══ STEP 3: REVIEW & CONSENT ══ */}
          {step === 3 && (
            <Card className="border-none shadow-card bg-white/90 backdrop-blur-sm rounded-3xl animate-fade-up">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-center gap-3 pb-2 border-b border-muted">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-secondary">Review & Submit</h3>
                    <p className="text-xs text-muted-foreground font-accent">Step 3 of 3 — Please verify your details</p>
                  </div>
                </div>

                {/* Summary card */}
                <div className="bg-muted/30 border border-muted rounded-2xl p-6 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Student Name',  value: watch('fullName')          },
                      { label: 'Age',           value: watch('age')               },
                      { label: 'Email',         value: watch('email')             },
                      { label: 'Phone',         value: watch('phone')             },
                      { label: 'Grade / Class', value: watch('classLevel')        },
                      { label: 'Session Mode',  value: watch('sessionPreference') },
                    ].map(({ label, value }) => (
                      <div key={label} className="space-y-0.5">
                        <p className="text-[9px] font-accent uppercase tracking-widest text-muted-foreground">{label}</p>
                        <p className="font-bold text-secondary text-sm">{String(value)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-muted space-y-1.5">
                    <p className="text-[9px] font-accent uppercase tracking-widest text-muted-foreground">Selected Subjects</p>
                    <div className="flex flex-wrap gap-2">
                      {watch('subjects').map((sub) => (
                        <span
                          key={sub}
                          className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-accent font-bold rounded-full uppercase tracking-tight"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-muted space-y-0.5">
                    <p className="text-[9px] font-accent uppercase tracking-widest text-muted-foreground">Primary Address</p>
                    <p className="text-sm text-secondary">{watch('primaryAddress')}</p>
                  </div>
                </div>

                {/* Consent */}
                <FormField control={form.control} name="consent" render={({ field }) => (
                  <FormItem className="flex items-start gap-3 border border-muted/80 rounded-2xl p-5 hover:border-primary/30 transition-colors">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-0.5 border-muted-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                    </FormControl>
                    <div className="space-y-1 flex-1">
                      <FormLabel className="text-sm leading-relaxed cursor-pointer">
                        I accept the{' '}
                        <a href="/terms-and-conditions" target="_blank" className="text-primary underline hover:text-primary/80">
                          Terms &amp; Conditions
                        </a>{' '}
                        and{' '}
                        <a href="/privacy-policy" target="_blank" className="text-primary underline hover:text-primary/80">
                          Privacy Policy
                        </a>{' '}
                        of AECS Academy. *
                      </FormLabel>
                      <p className="text-xs text-muted-foreground">
                        I confirm all information provided is accurate and I agree to follow the academy guidelines.
                      </p>
                    </div>
                  </FormItem>
                )} />

                {/* Info note */}
                <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/30 rounded-xl p-4">
                  <Mail size={14} className="text-primary mt-0.5 shrink-0" />
                  <p>
                    Upon submission, we will send confirmation to your email and notify our admissions team to review your application.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8 px-1">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep((s) => s - 1)}
                className="rounded-full px-8 h-12 font-accent text-xs uppercase tracking-widest border-secondary text-secondary"
              >
                <ChevronLeft size={16} className="mr-1" /> Back
              </Button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-12 font-accent text-xs uppercase tracking-widest shadow-md"
              >
                Next Step <ChevronRight size={16} className="ml-1" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent/90 text-secondary rounded-full px-12 h-14 font-accent font-bold text-sm uppercase tracking-widest shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  'Finalise Enrollment'
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
