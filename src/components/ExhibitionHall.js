import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Hall.css';
import hallImage from '../hall7.webp'; // Adjust the path as needed
import p from '../people.webp'
import a from '../Imagelogo/air.webp'
import c from '../Imagelogo/car.webp'
import cu from '../Imagelogo/cutlery.webp'
import d from '../Imagelogo/dining.webp'
import do1 from '../Imagelogo/door.webp'
import e from '../Imagelogo/elevator.webp'
import a1 from '../Imagelogo/float.webp'

const Exhibitionhall = () => {
  const [searchParams] = useSearchParams();
  const [numGuests, setNumGuests] = useState(searchParams.get('guests') || '');
  const [eventDate, setEventDate] = useState(searchParams.get('date') || '');
  const [location, setLocation] = useState(searchParams.get('location') || 'Chennai');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();
    navigate('/success', { state: { numGuests, eventDate, location, paymentMethod } });
  };

  const handleGuestsChange = (event) => {
    if (event.target.value >= 0) setNumGuests(event.target.value);
  };

  const districts = [
    'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul',
    'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai',
    'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram',
    'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli',
    'Tirunelveli', 'Tirupattur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore',
    'Viluppuram', 'Virudhunagar'
  ];

  return (
    <div className="conference-hall">
      <div className="booking-section">
        <h2>Book the Exhibition Hall</h2>
        <form onSubmit={handleBooking} className="booking-form">
          <label>
            Number of Guests:
            <input
              type="number"
              value={numGuests}
              onChange={handleGuestsChange}
              placeholder="Number of Guests"
              required
              className="input-field"
            />
          </label>
          <label>
            Event Date:
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
              className="input-field"
            />
          </label>
          <label>
            Location:
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="select-field"
            >
              {districts.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </label>
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
              className="select-field"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Net Banking">Net Banking</option>
              <option value="UPI">UPI</option>
            </select>
          </label>
          <button type="submit" className="submit-button">Book Now</button>
        </form>
      </div>
      <div className="features-section">
        <div className="image-and-details">
          <div className="hall-image-container">
            <img src={hallImage} alt="Hall" className="hall-image" />
          </div>
          <div className="hall-details">
            <h3>Lion Exhibition Hall</h3>
            
            <p style={{color:'black'}}>Call us for price: +91 8922912212</p>
          </div>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <img src={p} alt="Hall Capacity" className="feature-icon" />
            <div><strong>Hall Capacity</strong></div>
            <div>upto 1500</div>
          </div>

          <div className="feature-item">
            <img src={a1} alt="Floating Capacity" className="feature-icon" />
            <div><strong>Floating Capacity</strong></div>
            <div>upto 2000</div>
          </div>
          <div className="feature-item">
            <img src={a} alt="Air Conditioning" className="feature-icon" />
            <div><strong>Air Conditioning</strong></div>
            <div>Yes</div>
          </div>
          <div className="feature-item">
            <img src={d} alt="Dining Capacity" className="feature-icon" />
            <div><strong>Dining Capacity</strong></div>
            <div>upto 1500</div>
          </div>
          <div className="feature-item">
            <img src={e} alt="Lift Access to Hall" className="feature-icon" />
            <div><strong>Lift Access to Hall</strong></div>
            <div>No</div>
          </div>
          <div className="feature-item">
            <img src={do1} alt="Rooms" className="feature-icon" />
            <div><strong>Rooms</strong></div>
            <div>80</div>
          </div>
          <div className="feature-item">
            <img src={cu} alt="Food Type" className="feature-icon" />
            <div><strong>Food Type</strong></div>
            <div>Veg & Non-veg</div>
          </div>
          <div className="feature-item">
            <img src={c} alt="Car Parking" className="feature-icon" />
            <div><strong>Car Parking</strong></div>
            <div>upto 50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibitionhall;
