
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
  MapPin, Phone as PhoneIcon, Mail, Loader2, PartyPopper, Home,
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
  email:            z.string().email('Please enter a valid email address'),
  phone:            z.string().regex(/^\+92 \d{10}$/, 'Phone must be +92 followed by 10 digits'),
  primaryAddress:   z.string().min(5, 'Primary address is required'),
  secondaryAddress: z.string().optional(),
  classLevel:       z.string().min(1, 'Please select your class'),
  subjects:         z.array(z.string()).min(1, 'Please select at least one subject'),
  sessionPreference: z.enum(['Online', 'On Campus', 'Both']),
  consent:          z.boolean().refine((v) => v === true, 'You must accept the terms to proceed'),
});

type FormValues = z.infer<typeof formSchema>;

const steps = [
  { label: 'Personal',  icon: User        },
  { label: 'Academic',  icon: BookOpen    },
  { label: 'Confirm',   icon: CheckCircle2 },
];

export default function EnrollmentForm() {
  const [step,        setStep]        = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess,   setIsSuccess]   = useState(false);
  const [sameAddr,    setSameAddr]    = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '', age: 13, email: '', phone: '+92 ',
      primaryAddress: '', secondaryAddress: '',
      classLevel: '', subjects: [],
      sessionPreference: 'Both', consent: false,
    },
  });

  const { watch, setValue } = form;
  const classLevel     = watch('classLevel');
  const primaryAddress = watch('primaryAddress');

  useEffect(() => {
    if (sameAddr) setValue('secondaryAddress', primaryAddress);
  }, [sameAddr, primaryAddress, setValue]);

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const result = await submitEnrollmentAction(values);
      if (result.success) {
        setIsSuccess(true);
        toast({
          title: 'Registration Successful!',
          description: 'A confirmation email has been sent to your address.',
        });
      } else {
        throw new Error(result.error || 'Failed to submit enrollment');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      toast({
        title: 'Submission Error',
        description: err.message || 'Something went wrong. Please call us at 0314 4033054.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fields: (keyof FormValues)[] =
      step === 1
        ? ['fullName', 'age', 'email', 'phone', 'primaryAddress']
        : ['classLevel', 'subjects', 'sessionPreference'];

    const ok = await form.trigger(fields);
    if (ok) setStep((s) => s + 1);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    
    // Ensure it always starts with +92
    if (!val.startsWith('+92')) {
      val = '+92 ';
    }
    
    // Ensure space after +92
    if (val.length === 3 && val === '+92') {
      val = '+92 ';
    }

    // Strip non-digits after prefix
    const prefix = '+92 ';
    const rest = val.slice(4).replace(/\D/g, '').slice(0, 10);
    
    setValue('phone', prefix + rest);
  };

  if (isSuccess) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 px-4 animate-fade-up font-sans">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <PartyPopper size={40} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Application Submitted!
        </h2>
        <p className="text-slate-600 mb-2">
          Thank you for choosing AECS Academy, <strong>{watch('fullName')}</strong>!
        </p>
        <p className="text-slate-500 mb-8 text-sm">
          A confirmation has been sent to <strong>{watch('email')}</strong>.
          Our admissions office will reach out within 24 hours.
        </p>
        <div className="bg-slate-50 rounded-2xl p-6 text-left space-y-2 mb-8 text-sm border border-slate-100">
          <p><span className="font-semibold text-slate-900">Name:</span> {watch('fullName')}</p>
          <p><span className="font-semibold text-slate-900">Class:</span> {watch('classLevel')}</p>
          <p><span className="font-semibold text-slate-900">Subjects:</span> {watch('subjects').join(', ')}</p>
          <p><span className="font-semibold text-slate-900">Mode:</span> {watch('sessionPreference')}</p>
        </div>
        <Button
          onClick={() => (window.location.href = '/')}
          className="bg-primary text-white rounded-full px-8 h-12 font-medium"
        >
          <Home size={16} className="mr-2" /> Return Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
      {/* Progress */}
      <div className="flex items-center justify-center mb-12">
        {steps.map((s, i) => {
          const num = i + 1;
          const Icon = s.icon;
          const done = step > num;
          const active = step === num;
          return (
            <React.Fragment key={num}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 z-10 border-2',
                    done   ? 'bg-primary border-primary text-white'
                           : active ? 'bg-primary border-primary text-white scale-110 shadow-lg'
                                    : 'bg-white border-slate-200 text-slate-400',
                  )}
                >
                  {done ? <CheckCircle2 size={18} /> : <Icon size={16} />}
                </div>
                <span className={cn('mt-2 text-[10px] font-bold uppercase tracking-wider', active ? 'text-primary' : 'text-slate-400')}>
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={cn('flex-1 h-0.5 mx-2', step > i + 1 ? 'bg-primary' : 'bg-slate-100')} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {step === 1 && (
            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl animate-fade-up">
              <CardContent className="p-8 space-y-6">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Personal Information</h3>
                  <p className="text-xs text-slate-500">Please provide the student's details.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter student name" className="h-11 rounded-lg border-slate-200" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="age" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Age *</FormLabel>
                      <FormControl>
                        <Input type="number" className="h-11 rounded-lg border-slate-200" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" className="h-11 rounded-lg border-slate-200" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Phone Number *</FormLabel>
                      <div className="relative flex items-center">
                        <div className="absolute left-3 flex items-center pointer-events-none text-sm font-medium text-slate-500">
                          <span className="mr-1.5" role="img" aria-label="Pakistan Flag">🇵🇰</span>
                        </div>
                        <FormControl>
                          <Input 
                            type="tel" 
                            className="h-11 rounded-lg border-slate-200 pl-11" 
                            {...field}
                            onChange={handlePhoneChange}
                          />
                        </FormControl>
                      </div>
                      <FormDescription className="text-[10px]">Format: +92 3XXXXXXXXX</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="primaryAddress" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Primary Address *</FormLabel>
                    <FormControl>
                      <Textarea rows={3} placeholder="Full home address" className="rounded-lg border-slate-200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="flex items-center gap-2 py-1">
                  <Checkbox
                    id="sameAddr"
                    checked={sameAddr}
                    onCheckedChange={(v) => setSameAddr(Boolean(v))}
                    className="rounded border-slate-300 data-[state=checked]:bg-primary"
                  />
                  <label htmlFor="sameAddr" className="text-sm text-slate-600 cursor-pointer">
                    Secondary address is the same as primary
                  </label>
                </div>

                {!sameAddr && (
                  <FormField control={form.control} name="secondaryAddress" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Secondary Address (Optional)</FormLabel>
                      <FormControl>
                        <Textarea rows={3} placeholder="Alternate address" className="rounded-lg border-slate-200" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                )}
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl animate-fade-up">
              <CardContent className="p-8 space-y-6">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Academic Selection</h3>
                  <p className="text-xs text-slate-500">Choose your level and desired subjects.</p>
                </div>

                <FormField control={form.control} name="classLevel" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Select Class *</FormLabel>
                    <Select onValueChange={(v) => { field.onChange(v); form.setValue('subjects', []); }} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-lg">
                          <SelectValue placeholder="Select Grade" />
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

                {classLevel && (
                  <FormField control={form.control} name="subjects" render={() => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Select Subjects *</FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {gradeSubjects[classLevel]?.map((subject) => (
                          <FormField key={subject} control={form.control} name="subjects" render={({ field }) => (
                            <div className="flex items-center gap-2 p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
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
                                  className="rounded border-slate-300 data-[state=checked]:bg-primary"
                                />
                              </FormControl>
                              <span className="text-sm text-slate-700">{subject}</span>
                            </div>
                          )} />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />
                )}

                <FormField control={form.control} name="sessionPreference" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Mode of Study *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 rounded-lg">
                          <SelectValue placeholder="Select Preference" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Online">Online</SelectItem>
                        <SelectItem value="On Campus">On Campus</SelectItem>
                        <SelectItem value="Both">Hybrid (Both)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="border border-slate-100 shadow-sm bg-white rounded-2xl animate-fade-up">
              <CardContent className="p-8 space-y-6">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Review & Submit</h3>
                  <p className="text-xs text-slate-500">Please confirm your application details.</p>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Name</p>
                      <p className="text-slate-900 font-medium">{watch('fullName')}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Phone</p>
                      <p className="text-slate-900 font-medium">{watch('phone')}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Grade</p>
                      <p className="text-slate-900 font-medium">{watch('classLevel')}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Mode</p>
                      <p className="text-slate-900 font-medium">{watch('sessionPreference')}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-200">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Subjects</p>
                    <p className="text-slate-900 text-sm mt-1">{watch('subjects').join(', ')}</p>
                  </div>
                </div>

                <FormField control={form.control} name="consent" render={({ field }) => (
                  <FormItem className="flex items-start gap-3 p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 rounded border-slate-300"
                      />
                    </FormControl>
                    <div className="text-xs leading-relaxed text-slate-600">
                      I agree to the <a href="/terms-and-conditions" className="text-primary hover:underline font-semibold">Terms</a> and <a href="/privacy-policy" className="text-primary hover:underline font-semibold">Privacy Policy</a> of AECS Academy.
                    </div>
                  </FormItem>
                )} />
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between items-center mt-8">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={() => setStep((s) => s - 1)} className="rounded-full px-8 border-slate-200">
                <ChevronLeft className="mr-2" size={16} /> Previous
              </Button>
            ) : <div />}

            {step < 3 ? (
              <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90 rounded-full px-10">
                Next <ChevronRight className="ml-2" size={16} />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90 rounded-full px-12 h-12">
                {isSubmitting ? <><Loader2 className="mr-2 animate-spin" /> Submitting...</> : 'Apply Now'}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
