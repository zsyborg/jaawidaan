// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Create a nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: 'your-smtp-host',
        port: 587,
        secure: false,
        auth: {
          user: 'your-email@example.com',
          pass: 'your-email-password',
        },
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: 'your-email@example.com',
        to: 'your-receiving-email@example.com',
        subject: 'New Contact Form Submission',
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        `,
      });

      console.log('Email sent:', info);

      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
