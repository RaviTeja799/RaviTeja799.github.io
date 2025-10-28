# EmailJS Setup Guide

This guide will help you configure EmailJS for the contact form.

## Steps to Set Up EmailJS

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add an Email Service
1. Go to the "Email Services" section
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. Note down the **Service ID**

### 3. Create an Email Template
1. Go to the "Email Templates" section
2. Click "Create New Template"
3. Use the following template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template and note down the **Template ID**

### 4. Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called API Key)
3. Copy this key

### 5. Configure Environment Variables
1. Create a `.env` file in the root directory (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

### 6. Test the Contact Form
1. Start the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email inbox for the test message

## Template Variables

The contact form sends the following variables to EmailJS:

- `from_name`: The sender's name
- `from_email`: The sender's email address
- `subject`: The message subject
- `message`: The message content
- `to_email`: Your email (bhraviteja799@gmail.com)

## Troubleshooting

### Email Not Sending
- Verify all environment variables are set correctly
- Check the browser console for error messages
- Ensure your EmailJS service is active
- Check your EmailJS dashboard for usage limits

### Rate Limiting
- The form has client-side rate limiting (1 message per 60 seconds)
- EmailJS free tier has monthly limits (check your dashboard)

### Email Not Received
- Check your spam folder
- Verify the template is configured correctly
- Ensure the email service is connected properly

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- EmailJS public key is safe to use in client-side code
- Consider adding server-side validation for production use
