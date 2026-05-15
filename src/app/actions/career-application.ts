'use server';

import { Resend } from 'resend';

const OWNER_EMAIL = 'hassani854@gmail.com';

interface CareerApplicationData {
  fullName: string;
  guardianName: string;
  email: string;
  phone: string;
  city: string;
  primaryAddress: string;
  secondaryAddress?: string;
  qualifications: {
    degreeType: string;
    degreeName: string;
    startYear: string;
    endYear: string;
    grade: string;
  }[];
  isFresher: boolean;
  experience?: {
    company: string;
    position: string;
    startYear: string;
    endYear: string;
  }[];
}

export async function submitCareerApplicationAction(data: CareerApplicationData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const resend = new Resend(apiKey);

  const qualificationsHtml = data.qualifications.map(q => `
    <div style="margin-bottom: 10px; padding: 10px; background: #f8fafc; border-radius: 8px;">
      <strong>${q.degreeType}: ${q.degreeName}</strong><br/>
      Duration: ${q.startYear} - ${q.endYear}<br/>
      Result: ${q.grade}
    </div>
  `).join('');

  const experienceHtml = data.isFresher 
    ? '<p><em>Fresher (No prior experience)</em></p>'
    : data.experience?.map(e => `
        <div style="margin-bottom: 10px; padding: 10px; background: #f8fafc; border-radius: 8px;">
          <strong>${e.position} at ${e.company}</strong><br/>
          Duration: ${e.startYear} - ${e.endYear}
        </div>
      `).join('');

  try {
    // 1. To Applicant
    await resend.emails.send({
      from: 'AECS Academy Careers <admissions@aecsacademy.com>',
      to: [data.email],
      subject: 'Application Received: AECS Academy Faculty Position',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; color: #333; border: 1px solid #eee; border-radius: 12px; overflow: hidden;">
          <div style="background: #7B1C2E; padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0;">AECS ACADEMY</h1>
            <p style="margin: 5px 0 0; opacity: 0.8;">Career Application Confirmation</p>
          </div>
          <div style="padding: 30px;">
            <h2 style="color: #7B1C2E;">Dear ${data.fullName},</h2>
            <p>Thank you for applying to AECS Academy. We have received your application for a faculty position and our recruitment team will review your profile shortly.</p>
            <p>If your qualifications align with our current requirements, we will contact you at <strong>${data.phone}</strong> for an interview.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;"/>
            <p style="font-size: 12px; color: #666; text-align: center;">This is an automated confirmation. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    // 2. To Owner
    await resend.emails.send({
      from: 'AECS Career System <admissions@aecsacademy.com>',
      to: [OWNER_EMAIL],
      subject: `New Career Application: ${data.fullName}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #7B1C2E; border-bottom: 2px solid #7B1C2E; padding-bottom: 10px;">Candidate Profile: ${data.fullName}</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px; border: 1px solid #eee; width: 30%; background: #f9fafb;"><strong>Father/Guardian</strong></td><td style="padding: 8px; border: 1px solid #eee;">${data.guardianName}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; background: #f9fafb;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #eee;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; background: #f9fafb;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #eee;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; background: #f9fafb;"><strong>City</strong></td><td style="padding: 8px; border: 1px solid #eee;">${data.city}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; background: #f9fafb;"><strong>Address</strong></td><td style="padding: 8px; border: 1px solid #eee;">${data.primaryAddress}</td></tr>
          </table>

          <h3 style="color: #7B1C2E;">Qualifications</h3>
          ${qualificationsHtml}

          <h3 style="color: #7B1C2E;">Work Experience</h3>
          ${experienceHtml}
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error('Career Application Error:', error);
    return { success: false, error: error.message };
  }
}
