import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;

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
    res.status(204).end();
  } catch (error) {
    console.log('ERROR sending email:', error);
    res.status(400).send({ message: error });
  }
}
