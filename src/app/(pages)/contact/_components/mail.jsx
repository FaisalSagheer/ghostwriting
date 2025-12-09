'use server'
import ContactForm from './ContactForm'

// Server Action — runs only on the server
export async function sendMail(formData) {

  // Dynamic import so it only loads on server
  const nodemailer = (await import('nodemailer')).default

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,           // your@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD,  // 16-char App Password
      },
    })

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // e.g. hello@yourdomain.com
      replyTo: formData.Email,
      subject: `New message from ${formData.fName} ${formData.lName}`,
      text: `
Name: ${formData.fName} ${formData.lName}
Email: ${formData.Email}
Phone: ${formData.Num}
Region: ${formData.region || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}
Type: ${formData.describe || 'Not specified'}

Message:
${formData.comment || 'No message provided'}
      `.trim(),

      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.fName} ${formData.lName}</p>
        <p><strong>Email:</strong> ${formData.Email}</p>
        <p><strong>Phone:</strong> ${formData.Num}</p>
        <p><strong>Region:</strong> ${formData.region || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${formData.budget || 'Not specified'}</p>
        <p><strong>Type:</strong> ${formData.describe || 'Not specified'}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${(formData.comment || 'No message provided').replace(/\n/g, '<br>')}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

const ContactMail = () => {
  return <ContactForm sendMail={sendMail} />
}

export default ContactMail
