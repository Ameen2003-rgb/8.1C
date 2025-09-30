const nodemailer = require('nodemailer');
const path = require('path');

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Jenkins secret for your email
    pass: process.env.EMAIL_PASS   // Jenkins secret for app password
  }
});

// Email options with attachment
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'mohammedameen1089@gmail.com',
  subject: 'Jenkins Build Notification',
  text: 'The Jenkins build has completed. Please find the console log attached.',
  attachments: [
    {
      filename: 'console.log',
      path: path.join(__dirname, 'console.log') // Path to saved log file
    }
  ]
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error in sending email:', error);
  }
  console.log('Email was sent successfully:', info.response);
});
