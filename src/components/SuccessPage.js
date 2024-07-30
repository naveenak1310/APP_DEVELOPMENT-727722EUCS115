// src/components/SuccessPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './SuccessPage.css';

const SuccessPage = () => {
  const location = useLocation();
  const { numGuests, eventDate, location: hallLocation, paymentMethod } = location.state || {};

  return (
    <div className="success-page">
      <h2>Booking Successful!</h2>
      <p>Your booking was successful. Here are the details:</p>
      <ul>
        <li><strong>Number of Guests:</strong> {numGuests}</li>
        <li><strong>Event Date:</strong> {eventDate}</li>
        <li><strong>Location:</strong> {hallLocation}</li>
        <li><strong>Payment Method:</strong> {paymentMethod}</li>
      </ul>
      <p>We will inform you through e-mail. Thank you for booking with us. We look forward to hosting your event!</p>
    </div>
  );
};

export default SuccessPage;
