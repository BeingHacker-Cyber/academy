
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
  Plus, Trash2, Loader2, PartyPopper, Home, Target
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { submitCareerApplicationAction } from '@/app/actions/career-application';

const formSchema = z.object({
  appliedRole: z.string().min(1, 'Please select a role'),
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

const ROLES = [
  'IGCSE Mathematics Faculty',
  'English Language Specialist',
  'Computer Science Instructor',
  'Physics Specialist',
  'Chemistry / Biology Faculty',
  'Business Studies & Economics',
  'Accounting Specialist',
  'Pakistan Studies & Islamiat',
  'Administrative Staff',
  'Other'
];

export default function CareerApplicationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sameAddr, setSameAddr] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appliedRole: '',
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
    if (step === 1) fieldsToValidate = ['appliedRole', 'fullName', 'guardianName', 'email', 'phone', 'city', 'primaryAddress'];
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
        toast({ title: 'Application Submitted', description: 'Your profile has been shared with our HR desk.' });
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
      <div className="max-w-lg mx-auto text-center py-20 px-4 font-sans">
        <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
          <PartyPopper size={48} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Sent!</h2>
        <p className="text-slate-600 mb-10 text-lg leading-relaxed">
          Thank you for choosing AECS Academy, <strong>{watch('fullName')}</strong>. Your expertise for the <strong>{watch('appliedRole')}</strong> role is now with our recruitment team.
        </p>
        <Button onClick={() => window.location.href = '/'} className="rounded-full px-10 h-14 text-base font-semibold shadow-xl shadow-primary/20">
          <Home size={18} className="mr-2" /> Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 font-sans px-4">
      {/* Progress */}
      <div className="flex items-center justify-center mb-16">
        {[
          { icon: User, label: 'Profile' },
          { icon: BookOpen, label: 'Academic' },
          { icon: Briefcase, label: 'Work' },
          { icon: CheckCircle2, label: 'Review' }
        ].map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500",
                step > i + 1 ? "bg-primary border-primary text-white" : step === i + 1 ? "bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-white border-slate-200 text-slate-400"
              )}>
                {step > i + 1 ? <CheckCircle2 size={20} /> : <s.icon size={20} />}
              </div>
              <span className={cn("mt-3 text-[10px] font-bold uppercase tracking-[0.2em]", step === i + 1 ? "text-primary" : "text-slate-400")}>{s.label}</span>
            </div>
            {i < 3 && <div className={cn("flex-1 h-0.5 mx-3", step > i + 1 ? "bg-primary" : "bg-slate-100")} />}
          </React.Fragment>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {step === 1 && (
            <Card className="rounded-[2rem] shadow-xl shadow-slate-200/50 border-slate-100 overflow-hidden">
              <div className="bg-slate-50/80 p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-800 flex items-center gap-2"><User size={18} className="text-primary" /> Personal Information</h3>
              </div>
              <CardContent className="p-8 space-y-6">
                <FormField control={form.control} name="appliedRole" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Position Applied For *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl border-slate-200">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ROLES.map(role => <SelectItem key={role} value={role}>{role}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem><FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name *</FormLabel><FormControl><Input placeholder="John Doe" className="h-12 rounded-xl border-slate-200" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="guardianName" render={({ field }) => (
                    <FormItem><FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Father/Guardian Name *</FormLabel><FormControl><Input placeholder="Guardian Name" className="h-12 rounded-xl border-slate-200" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address *</FormLabel><FormControl><Input type="email" placeholder="john@example.com" className="h-12 rounded-xl border-slate-200" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number *</FormLabel>
                      <div className="relative flex items-center">
                        <span className="absolute left-4">🇵🇰</span>
                        <FormControl><Input className="h-12 rounded-xl border-slate-200 pl-12" {...field} onChange={handlePhoneChange} /></FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem className="md:col-span-2"><FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">City *</FormLabel><FormControl><Input placeholder="Lahore" className="h-12 rounded-xl border-slate-200" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                
                <FormField control={form.control} name="primaryAddress" render={({ field }) => (
                  <FormItem><FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Primary Address *</FormLabel><FormControl><Textarea rows={3} className="rounded-xl border-slate-200" {...field} /></FormControl><FormMessage /></FormItem>
                )} />

                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Checkbox id="sameAddr" checked={sameAddr} onCheckedChange={v => setSameAddr(!!v)} />
                  <label htmlFor="sameAddr" className="text-sm text-slate-600 font-medium cursor-pointer">Secondary address is the same as primary</label>
                </div>

                {!sameAddr && (
                  <FormField control={form.control} name="secondaryAddress" render={({ field }) => (
                    <FormItem><FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Secondary Address</FormLabel><FormControl><Textarea rows={3} className="rounded-xl border-slate-200" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                )}
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="rounded-[2rem] shadow-xl border-slate-100 overflow-hidden">
              <div className="bg-slate-50/80 p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 flex items-center gap-2"><BookOpen size={18} className="text-primary" /> Qualifications</h3>
                <Button type="button" variant="outline" size="sm" onClick={() => appendQual({ degreeType: 'Bachelors', degreeName: '', startYear: '', endYear: '', grade: '' })} className="rounded-full border-primary/20 text-primary">
                  <Plus size={14} className="mr-1" /> Add Degree
                </Button>
              </div>
              <CardContent className="p-8 space-y-8">
                {qualFields.map((field, index) => (
                  <div key={field.id} className="p-6 border border-slate-100 rounded-2xl space-y-5 relative bg-white shadow-sm">
                    {index > 0 && <Button type="button" variant="ghost" size="icon" className="absolute top-4 right-4 text-red-400 hover:text-red-500 hover:bg-red-50" onClick={() => removeQual(index)}><Trash2 size={16} /></Button>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField control={form.control} name={`qualifications.${index}.degreeType`} render={({ field }) => (
                        <FormItem><FormLabel className="text-[10px] font-bold uppercase text-slate-400">Type *</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Matric">Matric</SelectItem><SelectItem value="Intermediate">Intermediate</SelectItem><SelectItem value="Diploma">Diploma</SelectItem><SelectItem value="Bachelors">Bachelors</SelectItem><SelectItem value="Master">Master</SelectItem><SelectItem value="PHD">PHD</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name={`qualifications.${index}.degreeName`} render={({ field }) => (
                        <FormItem><FormLabel className="text-[10px] font-bold uppercase text-slate-400">Degree Name *</FormLabel><FormControl><Input placeholder="e.g. B.Sc Physics" className="h-11 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name={`qualifications.${index}.startYear`} render={({ field }) => (
                        <FormItem><FormLabel className="text-[10px] font-bold uppercase text-slate-400">Start Year *</FormLabel><FormControl><Input placeholder="2018" className="h-11 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name={`qualifications.${index}.endYear`} render={({ field }) => (
                        <FormItem><FormLabel className="text-[10px] font-bold uppercase text-slate-400">End Year *</FormLabel><FormControl><Input placeholder="2022 or Ongoing" className="h-11 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name={`qualifications.${index}.grade`} render={({ field }) => (
                        <FormItem className="md:col-span-2"><FormLabel className="text-[10px] font-bold uppercase text-slate-400">Marks / CGPA *</FormLabel><FormControl><Input placeholder="3.8/4.0" className="h-11 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="rounded-[2rem] shadow-xl border-slate-100 overflow-hidden">
              <div className="bg-slate-50/80 p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 flex items-center gap-2"><Briefcase size={18} className="text-primary" /> Work Experience</h3>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-100">
                  <FormField control={form.control} name="isFresher" render={({ field }) => (
                    <div className="flex items-center gap-2">
                      <Checkbox id="isFresher" checked={field.value} onCheckedChange={field.onChange} />
                      <label htmlFor="isFresher" className="text-xs font-bold text-slate-600 cursor-pointer">I am a Fresher</label>
                    </div>
                  )} />
                </div>
              </div>
              <CardContent className="p-8 space-y-6">
                {!isFresher ? (
                  <div className="space-y-6">
                    {expFields.map((field, index) => (
                      <div key={field.id} className="p-6 border border-slate-100 rounded-2xl space-y-5 relative bg-white shadow-sm">
                        <Button type="button" variant="ghost" size="icon" className="absolute top-4 right-4 text-red-400" onClick={() => removeExp(index)}><Trash2 size={16} /></Button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormField control={form.control} name={`experience.${index}.company`} render={({ field }) => (
                            <FormItem><FormLabel className="text-[10px] font-bold uppercase text-slate-400">Company Name *</FormLabel><FormControl><Input className="h-11 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField control={form.control} name={`experience.${index}.position`} render={({ field }) => (
                            <FormItem><FormLabel className="text-[10px] font-bold uppercase text-slate-400">Position *</FormLabel><FormControl><Input className="h-11 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField control={form.control} name={`experience.${index}.startYear`} render={({ field }) => (
                            <FormItem><FormLabel className="text-[10px] font-bold uppercase text-slate-400">Start Year *</FormLabel><FormControl><Input placeholder="2020" className="h-11 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField control={form.control} name={`experience.${index}.endYear`} render={({ field }) => (
                            <FormItem><FormLabel className="text-[10px] font-bold uppercase text-slate-400">End Year *</FormLabel><FormControl><Input placeholder="2023 or Present" className="h-11 rounded-xl" {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                        </div>
                      </div>
                    ))}
                    <Button type="button" variant="outline" className="w-full h-12 rounded-xl border-dashed border-2 hover:border-primary hover:text-primary transition-all" onClick={() => appendExp({ company: '', position: '', startYear: '', endYear: '' })}>
                      <Plus size={16} className="mr-2" /> Add Professional History
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-16 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
                    <Target size={32} className="mx-auto text-slate-300 mb-4" />
                    <p className="text-slate-500 font-medium">Freshers are welcome at AECS Academy.<br /><span className="text-xs">Proceed to review your profile.</span></p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card className="rounded-[2rem] shadow-xl border-slate-100 overflow-hidden">
              <div className="bg-slate-50/80 p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-800">Final Review</h3>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100">
                  <div><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Position</span><p className="font-bold text-primary">{watch('appliedRole')}</p></div>
                  <div><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Full Name</span><p className="font-bold text-slate-700">{watch('fullName')}</p></div>
                  <div><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Email</span><p className="text-slate-600">{watch('email')}</p></div>
                  <div><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Phone</span><p className="text-slate-600">{watch('phone')}</p></div>
                </div>
                
                <FormField control={form.control} name="consent" render={({ field }) => (
                  <FormItem className="flex items-start gap-3 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" /></FormControl>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      I confirm that the information provided is accurate and I agree to the <a href="/terms-and-conditions" className="text-primary font-bold hover:underline">Terms & Conditions</a> of AECS Academy recruitment.
                    </div>
                  </FormItem>
                )} />
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between mt-12 gap-4">
            {step > 1 && <Button type="button" variant="ghost" onClick={() => setStep(s => s - 1)} className="rounded-full px-8 h-12 text-slate-500 hover:text-slate-800"><ChevronLeft size={18} className="mr-2" /> Back</Button>}
            <div className="flex-1" />
            {step < 4 ? (
              <Button type="button" onClick={nextStep} className="rounded-full px-12 h-14 text-base font-semibold shadow-lg shadow-primary/20">Continue <ChevronRight size={18} className="ml-2" /></Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="rounded-full px-16 h-14 text-base font-bold shadow-xl shadow-primary/30">
                {isSubmitting ? <><Loader2 size={18} className="mr-2 animate-spin" /> Processing...</> : 'Submit Final Application'}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
