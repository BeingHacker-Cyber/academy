
'use server';

import { Resend } from 'resend';

//const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = 'hassani854@gmail.com';

interface EnrollmentData {
  fullName: string;
  age: number;
  email: string;
  phone: string;
  primaryAddress: string;
  secondaryAddress?: string;
  classLevel: string;
  subjects: string[];
  sessionPreference: string;
}

export async function submitEnrollmentAction(data: EnrollmentData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured in .env file');
  }

  const subjectsList = data.subjects.join(', ');

  try {
    // 1. Send Branded Email to Student
    await resend.emails.send({
      from: 'AECS Academy <admissions@resend.dev>',
      to: [data.email],
      subject: 'Confirmation: Your Application to AECS Academy',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; color: #333; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="background-color: #7B1C2E; padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">AECS ACADEMY</h1>
            <p style="color: rgba(255,255,255,0.7); margin-top: 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Excellence in Cambridge Education</p>
          </div>
          <div style="padding: 40px 30px;">
            <h2 style="color: #7B1C2E; margin-top: 0;">Welcome, ${data.fullName}!</h2>
            <p>Thank you for choosing AECS Academy. We have received your enrollment application for the <strong>${data.classLevel}</strong> session.</p>
            
            <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin: 30px 0; border: 1px solid #f1f5f9;">
              <h3 style="margin-top: 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Application Summary</h3>
              <p style="margin: 10px 0; font-size: 15px;"><strong>Subjects:</strong> ${subjectsList}</p>
              <p style="margin: 10px 0; font-size: 15px;"><strong>Preference:</strong> ${data.sessionPreference}</p>
            </div>
            
            <p style="line-height: 1.6;">Our admissions team is currently reviewing your profile. We will contact you at <strong>${data.phone}</strong> within the next 24 business hours to discuss the next steps, including your assessment schedule.</p>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="font-size: 13px; color: #94a3b8;">If you have any urgent questions, please reply to this email or call us at 0314 4033054.</p>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #94a3b8;">
            © 2025 AECS Academy. 100 Platinum Homes, Al Kabir Town Phase 2, Lahore.
          </div>
        </div>
      `,
    });

    // 2. Send Detailed Alert to Owner
    await resend.emails.send({
      from: 'AECS System <system@resend.dev>',
      to: [OWNER_EMAIL],
      subject: `New Enrollment: ${data.fullName} | ${data.classLevel}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
          <h2 style="color: #7B1C2E; border-bottom: 2px solid #7B1C2E; padding-bottom: 10px;">New Student Application</h2>
          <p>A new enrollment form has been submitted via the website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb; width: 40%;"><strong>Student Name</strong></td><td style="padding: 12px; border: 1px solid #e5e7eb;">${data.fullName}</td></tr>
            <tr><td style="padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb;"><strong>Age</strong></td><td style="padding: 12px; border: 1px solid #e5e7eb;">${data.age}</td></tr>
            <tr><td style="padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb;"><strong>Email</strong></td><td style="padding: 12px; border: 1px solid #e5e7eb;">${data.email}</td></tr>
            <tr><td style="padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb;"><strong>Phone</strong></td><td style="padding: 12px; border: 1px solid #e5e7eb;">${data.phone}</td></tr>
            <tr><td style="padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb;"><strong>Grade Level</strong></td><td style="padding: 12px; border: 1px solid #e5e7eb;">${data.classLevel}</td></tr>
            <tr><td style="padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb;"><strong>Subjects</strong></td><td style="padding: 12px; border: 1px solid #e5e7eb;">${subjectsList}</td></tr>
            <tr><td style="padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb;"><strong>Preference</strong></td><td style="padding: 12px; border: 1px solid #e5e7eb;">${data.sessionPreference}</td></tr>
            <tr><td style="padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb;"><strong>Address</strong></td><td style="padding: 12px; border: 1px solid #e5e7eb;">${data.primaryAddress}</td></tr>
          </table>
          
          <p style="margin-top: 30px; font-weight: bold; color: #7B1C2E;">Action Required: Please reach out to the student within 24 hours.</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error('Resend Error:', error);
    return { success: false, error: error.message };
  }
}
