"use client";

import React, { useState } from 'react';
import { studentSubjectRecommendation, type StudentSubjectRecommendationOutput } from '@/ai/flows/student-subject-recommendation-flow';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Sparkles, Loader2, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function CourseMatchmaker() {
  const [interests, setInterests] = useState('');
  const [careerGoals, setCareerGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<StudentSubjectRecommendationOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await studentSubjectRecommendation({ interests, careerGoals });
      setResults(response);
    } catch (error) {
      console.error("AI Recommendation Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-accent text-[10px] font-bold uppercase tracking-widest mb-4">
          <Sparkles size={14} /> Powered by AI
        </div>
        <h2 className="text-4xl font-headline font-bold text-secondary mb-4">Intelligent Subject Matchmaker</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Not sure which IGCSE or O-Level subjects to choose? Let our AI-driven academic advisor suggest the perfect combination based on your aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <Card className="md:col-span-2 border-primary/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-headline text-primary">Your Profile</CardTitle>
            <CardDescription>Tell us what moves you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-accent uppercase tracking-wider text-muted-foreground">What do you love? (Interests)</label>
              <Textarea 
                placeholder="e.g., Solving puzzles, reading about space, sketching..."
                className="min-h-[100px] bg-muted/30 border-none resize-none focus-visible:ring-primary"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Future Aspirations (Career)</label>
              <Textarea 
                placeholder="e.g., Become a data scientist, Architect, or Business owner..."
                className="min-h-[100px] bg-muted/30 border-none resize-none focus-visible:ring-primary"
                value={careerGoals}
                onChange={(e) => setCareerGoals(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 rounded-full py-6 group"
              onClick={handleSubmit}
              disabled={loading || !interests || !careerGoals}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Your Future...
                </>
              ) : (
                <>
                  Generate Recommendations
                  <Sparkles className="ml-2 h-4 w-4 text-accent transition-transform group-hover:scale-125" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-3 space-y-4">
          {!results && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/50 border border-dashed rounded-3xl">
              <div className="p-4 bg-muted rounded-full mb-4">
                <GraduationCap className="text-muted-foreground h-10 w-10" />
              </div>
              <h3 className="text-lg font-headline font-semibold text-secondary mb-2">Awaiting Your Input</h3>
              <p className="text-sm text-muted-foreground">Fill in your interests and goals to see expert-curated subject combinations tailored for you.</p>
            </div>
          )}

          {loading && (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 bg-white animate-pulse rounded-2xl border border-muted-foreground/10 space-y-3">
                  <div className="h-4 bg-muted w-3/4 rounded" />
                  <div className="h-3 bg-muted w-1/2 rounded" />
                  <div className="h-3 bg-muted w-full rounded" />
                </div>
              ))}
            </div>
          )}

          {results && (
            <div className="space-y-4">
              {results.recommendations.map((rec, index) => {
                const [title, description] = rec.split(' - ');
                return (
                  <div 
                    key={index} 
                    className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all group animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <CheckCircle2 className="text-accent h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-secondary text-lg mb-1 group-hover:text-primary transition-colors">
                          {title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="p-6 bg-primary text-primary-foreground rounded-2xl text-center space-y-3">
                <p className="text-sm font-medium">Found your ideal path?</p>
                <Button variant="secondary" asChild className="rounded-full bg-white text-primary hover:bg-accent hover:text-accent-foreground border-none">
                  <a href="/register">Proceed to Registration</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
