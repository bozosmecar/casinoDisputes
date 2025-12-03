import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;

  // Debug: Check if environment variables are loaded
  console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER);
  console.log('GMAIL_PASSWORD exists:', !!process.env.GMAIL_PASSWORD);
  console.log('GMAIL_RECIPIENT_EMAIL:', process.env.GMAIL_RECIPIENT_EMAIL || 'not set');

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    console.error('Missing Gmail credentials in environment variables');
    return res.status(500).json({ message: 'Email service not configured' });
  }

  // Create transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${description}</p>
      <hr style="margin: 20px 0;" />
      <p style="color: #666; font-size: 12px;">Sent from: ${referer || 'Not specified or hidden'}</p>
    </div>
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_RECIPIENT_EMAIL || process.env.GMAIL_USER,
    subject: `${subject} - From ${name}`,
    html: htmlContent,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(204).end();
  } catch (error: any) {
    console.error('ERROR sending email:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Error response:', error.response);
    res.status(400).json({ 
      message: error.message || 'Failed to send email',
      error: error.toString() 
    });
  }
}
