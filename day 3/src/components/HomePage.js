// src/components/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Assuming you'll add some styles here later
import hall1 from '../hall1.jpg';
import hall2 from '../hall2.jpeg';
import hall4 from '../hall4.webp';

// Example list of Tamil Nadu districts
const districts = [
  'Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Tirunelveli', 'Kanyakumari', 'Erode',
  'Tiruppur', 'Vellore', 'Thanjavur', 'Karur', 'Dindigul', 'Namakkal', 'Dharmapuri', 'Krishnagiri',
  'Pudukkottai', 'Nagapattinam', 'Cuddalore', 'Ariyalur', 'Kanchipuram', 'Vellore', 'Ramanathapuram',
  'Sivaganga', 'Thoothukudi', 'Kallakurichi', 'Kanniyakumari', 'Tenkasi', 'Nilgiris','kulithalai'
];

const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1 style={{ color: 'black' }}>Hall Booking System</h1>
        </div>
        <div className="navbar-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </nav>
      
      <section className="search-section">
        <h2 style={{ color: '#a1ffce' }}>Find the perfect hall</h2>
        <form className="search-form">
          <select 
            value={selectedLocation} 
            onChange={handleLocationChange} 
            required
            style={{ padding: '10px', borderRadius: '5px' }}
          >
            <option value="" disabled>Select Location</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
          <input type="date" placeholder="Event Date" required />
          <input type="number" placeholder="Number of Guests" required />
          <button type="submit">Search</button>
        </form>
      </section>
      
      <section className="featured-halls">
        <h2 style={{ color: '#ffffff' }}>Featured Halls</h2>
        <div className="hall-list">
          <div className="hall">
            <img src={hall4} style={{ height: '114px' }} alt="Hall 3" />
            <h3>Reception Hall</h3>
            <p><b>Location: Kallakurichi</b></p>
          </div>
          <div className="hall">
            <img src={hall1} alt="Hall 1" />
            <h3>Grand Ballroom</h3>
            <p>Location: Downtown</p>
          </div>
          <div className="hall">
            <img src={hall2} style={{ height: '114px' }} alt="Hall 2" />
            <h3>Conference Hall</h3>
            <p>Location: Uptown</p>
          </div>
        </div>
      </section>
      
      <footer className="homepage-footer">
        <p>&copy; 2024 Hall Booking System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
