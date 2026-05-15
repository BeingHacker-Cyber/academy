'use client';

import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
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
  User, BookOpen, Briefcase, CheckCircle2, ChevronRight, ChevronLeft,
  Plus, Trash2, Loader2, PartyPopper, Home
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { submitCareerApplicationAction } from '@/app/actions/career-application';

const formSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  guardianName: z.string().min(3, 'Guardian name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+92 \d{10}$/, 'Phone must be +92 followed by 10 digits'),
  city: z.string().min(2, 'City is required'),
  primaryAddress: z.string().min(5, 'Primary address is required'),
  secondaryAddress: z.string().optional(),
  qualifications: z.array(z.object({
    degreeType: z.enum(['Matric', 'Intermediate', 'Diploma', 'Bachelors', 'Master', 'PHD']),
    degreeName: z.string().min(2, 'Degree name is required'),
    startYear: z.string().min(4, 'Start year required'),
    endYear: z.string().min(4, 'End year or "Ongoing" required'),
    grade: z.string().min(1, 'Marks/CGPA required'),
  })).min(1, 'At least one qualification is required'),
  isFresher: z.boolean().default(false),
  experience: z.array(z.object({
    company: z.string().min(2, 'Company name is required'),
    position: z.string().min(2, 'Position is required'),
    startYear: z.string().min(4, 'Start year required'),
    endYear: z.string().min(4, 'End year or "Currently working" required'),
  })).optional(),
  consent: z.boolean().refine((v) => v === true, 'You must accept the terms'),
});

type FormValues = z.infer<typeof formSchema>;

export default function CareerApplicationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sameAddr, setSameAddr] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '', guardianName: '', email: '', phone: '+92 ',
      city: '', primaryAddress: '', secondaryAddress: '',
      qualifications: [{ degreeType: 'Bachelors', degreeName: '', startYear: '', endYear: '', grade: '' }],
      isFresher: false,
      experience: [],
      consent: false,
    },
  });

  const { fields: qualFields, append: appendQual, remove: removeQual } = useFieldArray({
    control: form.control,
    name: 'qualifications',
  });

  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({
    control: form.control,
    name: 'experience',
  });

  const { watch, setValue, trigger } = form;
  const isFresher = watch('isFresher');
  const primaryAddress = watch('primaryAddress');

  useEffect(() => {
    if (sameAddr) setValue('secondaryAddress', primaryAddress);
  }, [sameAddr, primaryAddress, setValue]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+92')) val = '+92 ';
    if (val.length === 3 && val === '+92') val = '+92 ';
    const prefix = '+92 ';
    const rest = val.slice(4).replace(/\D/g, '').slice(0, 10);
    setValue('phone', prefix + rest);
  };

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ['fullName', 'guardianName', 'email', 'phone', 'city', 'primaryAddress'];
    if (step === 2) fieldsToValidate = ['qualifications'];
    if (step === 3) fieldsToValidate = ['isFresher', 'experience'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(s => s + 1);
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const result = await submitCareerApplicationAction(values);
      if (result.success) {
        setIsSuccess(true);
        toast({ title: 'Application Submitted', description: 'We have received your career profile.' });
      } else {
        throw new Error(result.error);
      }
    } catch (err: any) {
      toast({ title: 'Error', description: err.message, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 animate-fade-up">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <PartyPopper size={40} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Successful!</h2>
        <p className="text-slate-600 mb-8">Thank you for your interest in AECS Academy. We will review your application and get back to you shortly.</p>
        <Button onClick={() => window.location.href = '/'} className="rounded-full px-8">
          <Home size={16} className="mr-2" /> Return Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-12">
        {[
          { icon: User, label: 'Personal' },
          { icon: BookOpen, label: 'Education' },
          { icon: Briefcase, label: 'Experience' },
          { icon: CheckCircle2, label: 'Review' }
        ].map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",
                step > i + 1 ? "bg-primary border-primary text-white" : step === i + 1 ? "bg-primary border-primary text-white scale-110 shadow-lg" : "bg-white border-slate-200 text-slate-400"
              )}>
                {step > i + 1 ? <CheckCircle2 size={18} /> : <s.icon size={16} />}
              </div>
              <span className={cn("mt-2 text-[10px] font-bold uppercase tracking-wider", step === i + 1 ? "text-primary" : "text-slate-400")}>{s.label}</span>
            </div>
            {i < 3 && <div className={cn("flex-1 h-0.5 mx-2", step > i + 1 ? "bg-primary" : "bg-slate-100")} />}
          </React.Fragment>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <Card className="rounded-2xl shadow-sm border-slate-100">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem><FormLabel className="text-xs font-bold uppercase">Full Name *</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="guardianName" render={({ field }) => (
                    <FormItem><FormLabel className="text-xs font-bold uppercase">Father/Guardian Name *</FormLabel><FormControl><Input placeholder="Guardian Name" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel className="text-xs font-bold uppercase">Email Address *</FormLabel><FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase">Phone Number *</FormLabel>
                      <div className="relative flex items-center">
                        <span className="absolute left-3">🇵🇰</span>
                        <FormControl><Input className="pl-11" {...field} onChange={handlePhoneChange} /></FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem><FormLabel className="text-xs font-bold uppercase">City *</FormLabel><FormControl><Input placeholder="Lahore" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="primaryAddress" render={({ field }) => (
                  <FormItem><FormLabel className="text-xs font-bold uppercase">Primary Address *</FormLabel><FormControl><Textarea rows={3} {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <div className="flex items-center gap-2">
                  <Checkbox id="sameAddr" checked={sameAddr} onCheckedChange={v => setSameAddr(!!v)} />
                  <label htmlFor="sameAddr" className="text-sm text-slate-600">Secondary address is the same as primary</label>
                </div>
                {!sameAddr && (
                  <FormField control={form.control} name="secondaryAddress" render={({ field }) => (
                    <FormItem><FormLabel className="text-xs font-bold uppercase">Secondary Address</FormLabel><FormControl><Textarea rows={3} {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                )}
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="rounded-2xl shadow-sm border-slate-100">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <h3 className="font-bold text-lg">Qualifications</h3>
                  <Button type="button" variant="outline" size="sm" onClick={() => appendQual({ degreeType: 'Bachelors', degreeName: '', startYear: '', endYear: '', grade: '' })}>
                    <Plus size={14} className="mr-1" /> Add Degree
                  </Button>
                </div>
                {qualFields.map((field, index) => (
                  <div key={field.id} className="p-4 border rounded-xl space-y-4 relative bg-slate-50/50">
                    {index > 0 && <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2 text-red-500" onClick={() => removeQual(index)}><Trash2 size={16} /></Button>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField control={form.control} name={`qualifications.${index}.degreeType`} render={({ field }) => (
                        <FormItem><FormLabel className="text-xs font-bold uppercase">Degree *</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Matric">Matric</SelectItem><SelectItem value="Intermediate">Intermediate</SelectItem><SelectItem value="Diploma">Diploma</SelectItem><SelectItem value="Bachelors">Bachelors</SelectItem><SelectItem value="Master">Master</SelectItem><SelectItem value="PHD">PHD</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name={`qualifications.${index}.degreeName`} render={({ field }) => (
                        <FormItem><FormLabel className="text-xs font-bold uppercase">Degree Name *</FormLabel><FormControl><Input placeholder="B.Sc Computer Science" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name={`qualifications.${index}.startYear`} render={({ field }) => (
                        <FormItem><FormLabel className="text-xs font-bold uppercase">Started *</FormLabel><FormControl><Input placeholder="2018" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name={`qualifications.${index}.endYear`} render={({ field }) => (
                        <FormItem><FormLabel className="text-xs font-bold uppercase">Ended *</FormLabel><FormControl><Input placeholder="2022 or Ongoing" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name={`qualifications.${index}.grade`} render={({ field }) => (
                        <FormItem className="md:col-span-2"><FormLabel className="text-xs font-bold uppercase">Marks/CGPA *</FormLabel><FormControl><Input placeholder="3.8/4.0" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="rounded-2xl shadow-sm border-slate-100">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <h3 className="font-bold text-lg">Experience</h3>
                  <div className="flex items-center gap-2">
                    <FormField control={form.control} name="isFresher" render={({ field }) => (
                      <div className="flex items-center gap-2">
                        <Checkbox id="isFresher" checked={field.value} onCheckedChange={field.onChange} />
                        <label htmlFor="isFresher" className="text-sm font-medium">I am a Fresher</label>
                      </div>
                    )} />
                  </div>
                </div>
                {!isFresher && (
                  <div className="space-y-4">
                    {expFields.map((field, index) => (
                      <div key={field.id} className="p-4 border rounded-xl space-y-4 relative bg-slate-50/50">
                        <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2 text-red-500" onClick={() => removeExp(index)}><Trash2 size={16} /></Button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField control={form.control} name={`experience.${index}.company`} render={({ field }) => (
                            <FormItem><FormLabel className="text-xs font-bold uppercase">Company Name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField control={form.control} name={`experience.${index}.position`} render={({ field }) => (
                            <FormItem><FormLabel className="text-xs font-bold uppercase">Position *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField control={form.control} name={`experience.${index}.startYear`} render={({ field }) => (
                            <FormItem><FormLabel className="text-xs font-bold uppercase">Started *</FormLabel><FormControl><Input placeholder="2020" {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField control={form.control} name={`experience.${index}.endYear`} render={({ field }) => (
                            <FormItem><FormLabel className="text-xs font-bold uppercase">Ended *</FormLabel><FormControl><Input placeholder="2023 or Currently working" {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                        </div>
                      </div>
                    ))}
                    <Button type="button" variant="outline" className="w-full" onClick={() => appendExp({ company: '', position: '', startYear: '', endYear: '' })}>
                      <Plus size={14} className="mr-1" /> Add Experience
                    </Button>
                  </div>
                )}
                {isFresher && <div className="text-center py-8 text-slate-500">No experience required for Freshers. Proceed to next.</div>}
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card className="rounded-2xl shadow-sm border-slate-100">
              <CardContent className="p-8 space-y-6">
                <h3 className="font-bold text-xl mb-4">Review Your Application</h3>
                <div className="space-y-4 bg-slate-50 p-6 rounded-xl text-sm">
                  <div><span className="text-slate-400 uppercase text-[10px] font-bold block">Name</span>{watch('fullName')}</div>
                  <div><span className="text-slate-400 uppercase text-[10px] font-bold block">Guardian</span>{watch('guardianName')}</div>
                  <div><span className="text-slate-400 uppercase text-[10px] font-bold block">Email</span>{watch('email')}</div>
                  <div><span className="text-slate-400 uppercase text-[10px] font-bold block">Phone</span>{watch('phone')}</div>
                </div>
                <FormField control={form.control} name="consent" render={({ field }) => (
                  <FormItem className="flex items-start gap-3 p-4 bg-slate-50/50 rounded-xl border">
                    <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" /></FormControl>
                    <div className="text-xs text-slate-600">I agree to the <a href="/terms-and-conditions" className="text-primary font-bold">Terms</a> and <a href="/privacy-policy" className="text-primary font-bold">Privacy Policy</a>.</div>
                  </FormItem>
                )} />
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && <Button type="button" variant="outline" onClick={() => setStep(s => s - 1)} className="rounded-full px-8"><ChevronLeft size={16} className="mr-2" /> Back</Button>}
            <div className="flex-1" />
            {step < 4 ? (
              <Button type="button" onClick={nextStep} className="rounded-full px-10">Next <ChevronRight size={16} className="ml-2" /></Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="rounded-full px-12 h-12">
                {isSubmitting ? <><Loader2 size={16} className="mr-2 animate-spin" /> Submitting...</> : 'Submit Application'}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
