// src/components/PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <header className="page-header">
        <h1>Privacy Policy</h1>
      </header>
      <section className="content">
        <h2>Introduction</h2>
        <p>Welcome to Ocean Halls. We are dedicated to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>

        <h2>Information We Collect</h2>
        <p>We gather personal details that you provide when registering, making a booking, or contacting us. This may include your name, email address, phone number, and other relevant details.</p>

        <h2>How We Use Your Information</h2>
        <p>Your information is used to process bookings, communicate with you, and enhance our services. With your consent, we may also use it to send promotional materials.</p>

        <h2>Data Security</h2>
        <p>We use industry-standard security measures to protect your personal data from unauthorized access and misuse. However, no online transmission is entirely secure.</p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>We employ cookies and tracking technologies to improve your site experience and analyze usage patterns. You can manage cookies through your browser settings.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. You may also opt out of promotional communications at any time.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. Changes will be posted on this page, and we encourage you to review it regularly.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@oceanhalls.com">support@oceanhalls.com</a>.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
