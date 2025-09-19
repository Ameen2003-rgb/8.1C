const nodemailer = require('nodemailer');

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Jenkins secret for your email
    pass: process.env.EMAIL_PASS   // Jenkins secret for app password
  }
});

// Email options
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'mohammedameen1089@gmail.com',     
  subject: 'Test Email',
  text: 'This is a test mail from Jnekins.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error in sending email:', error);
  }
  console.log('Email was sent successfully:', info.response);
});