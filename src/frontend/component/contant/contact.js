import React, { useState } from 'react';
import './contact.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoUrl = `mailto:abodh5921@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoUrl;

    // Reset form fields and show success message
    setName('');
    setEmail('');
    setMessage('');
    setSubmissionMessage('Thank you for your message! We will get back to you soon.');

    setIsSubmitting(false);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </button>
        {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
      </form>
    </div>
  );
};

export default ContactMe;
