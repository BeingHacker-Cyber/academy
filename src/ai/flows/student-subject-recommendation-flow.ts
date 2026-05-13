'use server';
/**
 * @fileOverview An AI-driven assistant that recommends ideal IGCSE/O-Level subject combinations based on a student's interests and career goals.
 *
 * - studentSubjectRecommendation - A function that handles the subject recommendation process.
 * - StudentSubjectRecommendationInput - The input type for the studentSubjectRecommendation function.
 * - StudentSubjectRecommendationOutput - The return type for the studentSubjectRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StudentSubjectRecommendationInputSchema = z.object({
  interests: z.string().describe("The student's interests, hobbies, and favorite subjects. Examples: Science experiments, reading history books, playing sports."),
  careerGoals: z.string().describe("The student's future career aspirations or desired fields of study. Examples: Becoming a doctor, an engineer, a graphic designer, or studying business."),
});
export type StudentSubjectRecommendationInput = z.infer<typeof StudentSubjectRecommendationInputSchema>;

const StudentSubjectRecommendationOutputSchema = z.object({
  recommendations: z.array(z.string()).describe("A list of 3-5 recommended IGCSE/O-Level subject combinations, along with a brief explanation for each recommendation. Each recommendation should be a string describing the combination and its rationale."),
});
export type StudentSubjectRecommendationOutput = z.infer<typeof StudentSubjectRecommendationOutputSchema>;

export async function studentSubjectRecommendation(input: StudentSubjectRecommendationInput): Promise<StudentSubjectRecommendationOutput> {
  return studentSubjectRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'studentSubjectRecommendationPrompt',
  input: {schema: StudentSubjectRecommendationInputSchema},
  output: {schema: StudentSubjectRecommendationOutputSchema},
  prompt: `You are an expert academic advisor for IGCSE/O-Level students at AECS Academy, specializing in helping them choose the best subject combinations based on their aspirations and the curriculum offered.

Your task is to recommend suitable IGCSE/O-Level subject combinations for a prospective student. Consider their interests and future career goals to provide well-reasoned and practical recommendations that align with typical IGCSE/O-Level pathways.

Student's Interests: {{{interests}}}
Student's Career Goals: {{{careerGoals}}}

Based on this information, provide 3-5 distinct subject combination recommendations. For each recommendation, briefly explain why it's a good fit given the student's input.

Example Output Format:
{
  "recommendations": [
    "Combination 1: Physics, Chemistry, Biology, Additional Mathematics, English Language, Pakistan Studies, Islamiyat - This combination is ideal for students aiming for medical or engineering careers, providing a strong foundation in sciences and core subjects.",
    "Combination 2: Business Studies, Economics, Accounting, English Language, Mathematics, Pakistan Studies, Islamiyat - Recommended for aspiring business professionals, entrepreneurs, or those interested in finance, as it covers fundamental business concepts and analytical skills."
  ]
}

Provide your recommendations in the specified JSON format. Ensure explanations are concise and directly link to the student's input.`,
});

const studentSubjectRecommendationFlow = ai.defineFlow(
  {
    name: 'studentSubjectRecommendationFlow',
    inputSchema: StudentSubjectRecommendationInputSchema,
    outputSchema: StudentSubjectRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
