// src/components/TermsOfService.js
import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-of-service">
      <header className="page-header">
        <h1>Terms of Service</h1>
      </header>
      <section className="content">
        <h2>Acceptance of Terms</h2>
        <p>By using Ocean Halls, you agree to these Terms of Service. If you do not agree, please do not use our services.</p>

        <h2>Services Provided</h2>
        <p>We provide a platform for users to search and book event halls. We do not guarantee the availability of specific halls or the accuracy of the information provided by third parties.</p>

        <h2>User Responsibilities</h2>
        <p>You are responsible for providing accurate information when making a booking and ensuring that your use of our services complies with all applicable laws and regulations.</p>

        <h2>Limitation of Liability</h2>
        <p>Ocean Halls is not liable for any indirect, incidental, or consequential damages arising from the use of our services or the inability to use them.</p>

        <h2>Changes to Terms</h2>
        <p>We may update these Terms of Service from time to time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated terms.</p>

        <h2>Governing Law</h2>
        <p>These Terms of Service are governed by and construed in accordance with the laws of [Your Country].</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us at support@oceanhalls.com.</p>
      </section>
    </div>
  );
};

export default TermsOfService;
