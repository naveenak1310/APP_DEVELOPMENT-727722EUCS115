import React from 'react';
import { useLocation } from 'react-router-dom';
import './HallDetails.css';

const HallDetails = ({ hallName, hallImage }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const numGuests = queryParams.get('guests');
  const eventDate = queryParams.get('date');
  const eventLocation = queryParams.get('location');

  return (
    <div className="hall-details">
      <h2>{hallName}</h2>
      <img src={hallImage} alt={hallName} />
      <p><strong>Event Date:</strong> {eventDate}</p>
      <p><strong>Number of Guests:</strong> {numGuests}</p>
      <p><strong>Location:</strong> {eventLocation}</p>
    </div>
  );
};

export default HallDetails;
