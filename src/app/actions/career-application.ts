
'use server';

import { Resend } from 'resend';

const OWNER_EMAIL = 'hassani854@gmail.com';

interface CareerApplicationData {
  appliedRole: string;
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
    <div style="margin-bottom: 12px; padding: 15px; background: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0;">
      <div style="font-weight: bold; color: #0b1628; font-size: 14px;">${q.degreeType}: ${q.degreeName}</div>
      <div style="color: #64748b; font-size: 12px; margin-top: 4px;">Period: ${q.startYear} - ${q.endYear} | Result: ${q.grade}</div>
    </div>
  `).join('');

  const experienceHtml = data.isFresher 
    ? '<p style="color: #94a3b8; font-style: italic;">Fresher candidate (No prior professional experience)</p>'
    : data.experience?.map(e => `
        <div style="margin-bottom: 12px; padding: 15px; background: #fffbeb; border-radius: 10px; border: 1px solid #fef3c7;">
          <div style="font-weight: bold; color: #0b1628; font-size: 14px;">${e.position}</div>
          <div style="color: #b45309; font-size: 12px; margin-top: 2px;">${e.company}</div>
          <div style="color: #64748b; font-size: 11px; margin-top: 4px;">Duration: ${e.startYear} - ${e.endYear}</div>
        </div>
      `).join('');

  try {
    // 1. Interactive Email to Candidate
    await resend.emails.send({
      from: 'AECS Academy Careers <admissions@aecsacademy.com>',
      to: [data.email],
      subject: `Application Received: ${data.appliedRole}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; padding: 50px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.04);">
            <div style="background-color: #0b1628; padding: 40px; text-align: center;">
              <div style="color: #C8960C; font-size: 10px; letter-spacing: 4px; font-weight: bold; margin-bottom: 10px;">FACULTY RECRUITMENT</div>
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-family: Georgia, serif;">AECS ACADEMY</h1>
            </div>
            
            <div style="padding: 40px;">
              <h2 style="color: #0b1628; margin-top: 0; font-size: 20px;">Hello ${data.fullName},</h2>
              <p style="color: #475569; line-height: 1.6;">Thank you for your interest in joining the AECS Academy faculty. We have received your application for the position of <strong>${data.appliedRole}</strong>.</p>
              
              <div style="margin: 30px 0; padding: 20px; border: 1px dashed #cbd5e1; border-radius: 12px;">
                <p style="margin: 0; color: #64748b; font-size: 14px;">Our recruitment desk is currently reviewing your credentials. If your expertise aligns with our academic standards, we will reach out to you at <strong>${data.phone}</strong> for a technical interview.</p>
              </div>

              <p style="color: #475569; font-size: 14px; margin-bottom: 5px;"><strong>Application Summary:</strong></p>
              <table style="width: 100%; font-size: 13px; color: #64748b;">
                <tr><td style="padding: 4px 0;">Role:</td><td style="color: #0b1628; font-weight: 600;">${data.appliedRole}</td></tr>
                <tr><td style="padding: 4px 0;">ID:</td><td style="color: #0b1628; font-weight: 600;">#${Math.floor(1000 + Math.random() * 9000)}</td></tr>
              </table>

              <div style="margin-top: 40px; text-align: center;">
                <p style="color: #94a3b8; font-size: 11px;">This is an automated acknowledgment. No reply is needed.</p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    // 2. Modern Candidate Profile to Owner
    await resend.emails.send({
      from: 'AECS HR System <admissions@aecsacademy.com>',
      to: [OWNER_EMAIL],
      subject: `New Career Lead: ${data.fullName} [${data.appliedRole}]`,
      html: `
        <div style="font-family: 'Inter', sans-serif; color: #1e293b; max-width: 650px; margin: auto; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #7B1C2E; padding-bottom: 15px; margin-bottom: 30px;">
            <div>
              <h2 style="color: #7B1C2E; margin: 0; font-size: 22px;">Candidate Profile</h2>
              <p style="margin: 5px 0 0; color: #64748b; font-size: 14px;">Role: <strong>${data.appliedRole}</strong></p>
            </div>
          </div>
          
          <div style="display: grid; grid-template-cols: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px;">
              <h4 style="margin: 0 0 10px; font-size: 11px; text-transform: uppercase; color: #94a3b8;">Basic Information</h4>
              <p style="margin: 3px 0; font-size: 14px;"><strong>Name:</strong> ${data.fullName}</p>
              <p style="margin: 3px 0; font-size: 14px;"><strong>Father:</strong> ${data.guardianName}</p>
              <p style="margin: 3px 0; font-size: 14px;"><strong>City:</strong> ${data.city}</p>
            </div>
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px;">
              <h4 style="margin: 0 0 10px; font-size: 11px; text-transform: uppercase; color: #94a3b8;">Contact Details</h4>
              <p style="margin: 3px 0; font-size: 14px;"><strong>Email:</strong> ${data.email}</p>
              <p style="margin: 3px 0; font-size: 14px;"><strong>Phone:</strong> ${data.phone}</p>
              <p style="margin: 3px 0; font-size: 14px;"><strong>Address:</strong> ${data.primaryAddress}</p>
            </div>
          </div>

          <h3 style="color: #7B1C2E; font-size: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px;">Academic Qualifications</h3>
          ${qualificationsHtml}

          <h3 style="color: #7B1C2E; font-size: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 15px; margin-top: 30px;">Professional Experience</h3>
          ${experienceHtml}
          
          <div style="margin-top: 40px; padding: 20px; background: #0f172a; border-radius: 12px; color: #fff; text-align: center;">
            <p style="margin: 0; font-size: 13px; font-weight: bold;">HR Action: Review credentials and schedule screening call.</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error('Career Application Action Error:', error);
    return { success: false, error: error.message };
  }
}
