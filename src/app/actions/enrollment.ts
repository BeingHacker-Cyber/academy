
'use server';

import { Resend } from 'resend';

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
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const resend = new Resend(apiKey);
  const subjectsList = data.subjects.join(', ');

  try {
    // 1. Premium Branded Email to Student
    await resend.emails.send({
      from: 'AECS Academy <admissions@aecsacademy.com>',
      to: [data.email],
      subject: 'Application Confirmed: Welcome to AECS Academy',
      html: `
        <div style="font-family: 'Inter', sans-serif; background-color: #f8fafc; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #7B1C2E 0%, #4a0e1b 100%); padding: 50px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 2px; font-family: Georgia, serif;">AECS ACADEMY</h1>
              <p style="color: rgba(255,255,255,0.7); margin-top: 10px; font-size: 13px; text-transform: uppercase; letter-spacing: 3px;">The Benchark of Excellence</p>
            </div>
            
            <div style="padding: 40px;">
              <h2 style="color: #0b1628; margin-top: 0; font-size: 22px;">Dear ${data.fullName},</h2>
              <p style="color: #475569; line-height: 1.6; font-size: 15px;">Your enrollment application for <strong>${data.classLevel}</strong> has been successfully registered. We are excited to potentially have you join our cohort of high-achievers.</p>
              
              <div style="background-color: #f1f5f9; border-radius: 12px; padding: 25px; margin: 30px 0;">
                <h3 style="margin-top: 0; font-size: 12px; color: #7B1C2E; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 15px;">Selection Summary</h3>
                <div style="display: flex; margin-bottom: 8px;">
                  <span style="color: #64748b; font-size: 13px; width: 100px;">Subjects:</span>
                  <span style="color: #0b1628; font-size: 13px; font-weight: 600;">${subjectsList}</span>
                </div>
                <div style="display: flex;">
                  <span style="color: #64748b; font-size: 13px; width: 100px;">Session:</span>
                  <span style="color: #0b1628; font-size: 13px; font-weight: 600;">${data.sessionPreference}</span>
                </div>
              </div>

              <h3 style="color: #0b1628; font-size: 16px; margin-bottom: 10px;">What's Next?</h3>
              <ul style="padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.8;">
                <li><strong>Profile Review:</strong> Our academic coordinator will review your background.</li>
                <li><strong>Interview Call:</strong> You will receive a call at ${data.phone} for a brief assessment.</li>
                <li><strong>Campus Visit:</strong> You'll be invited to visit our Al Kabir Town campus to finalize details.</li>
              </ul>

              <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #f1f5f9; text-align: center;">
                <p style="color: #94a3b8; font-size: 12px; margin-bottom: 0;">AECS Academy Admissions Office</p>
                <p style="color: #94a3b8; font-size: 12px; margin-top: 5px;">0314 4033054 | 100 Platinum Homes, Lahore</p>
              </div>
            </div>
          </div>
        </div>
      `
    });

    // 2. Modern Alert to Owner
    await resend.emails.send({
      from: 'AECS Portal <admissions@aecsacademy.com>',
      to: [OWNER_EMAIL],
      subject: `New Student: ${data.fullName} (${data.classLevel})`,
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: auto;">
          <div style="border-left: 4px solid #7B1C2E; padding-left: 20px; margin-bottom: 30px;">
            <h2 style="color: #7B1C2E; margin: 0; font-size: 24px;">New Enrollment Alert</h2>
            <p style="margin: 5px 0 0; color: #64748b;">A student has applied through the website portal.</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #f8fafc;"><td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; width: 35%;">Name</td><td style="padding: 12px; border: 1px solid #e2e8f0;">${data.fullName}</td></tr>
            <tr><td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Age</td><td style="padding: 12px; border: 1px solid #e2e8f0;">${data.age}</td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Email</td><td style="padding: 12px; border: 1px solid #e2e8f0;">${data.email}</td></tr>
            <tr><td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Phone</td><td style="padding: 12px; border: 1px solid #e2e8f0;"><a href="tel:${data.phone}" style="color: #7B1C2E; text-decoration: none;">${data.phone}</a></td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Grade Level</td><td style="padding: 12px; border: 1px solid #e2e8f0;">${data.classLevel}</td></tr>
            <tr><td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Subjects</td><td style="padding: 12px; border: 1px solid #e2e8f0;">${subjectsList}</td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Mode</td><td style="padding: 12px; border: 1px solid #e2e8f0;">${data.sessionPreference}</td></tr>
            <tr><td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Address</td><td style="padding: 12px; border: 1px solid #e2e8f0; font-size: 12px;">${data.primaryAddress}</td></tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background: #fff1f2; border-radius: 8px; border: 1px solid #fecdd3; text-align: center;">
            <p style="margin: 0; color: #9f1239; font-weight: bold;">Action Required: Call candidate within 24 hours.</p>
          </div>
        </div>
      `
    });

    return { success: true };
  } catch (error: any) {
    console.error('Enrollment Action Error:', error);
    return { success: false, error: error.message };
  }
}
