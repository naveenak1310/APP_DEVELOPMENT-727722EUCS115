// src/components/HomePage.js
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import hall1 from '../hall1.jpg';
import hall2 from '../hall2.jpeg';
import hall3 from '../download.jpeg';
import hall4 from '../hall4.webp';
import hall7 from '../hall7.webp';
import hall8 from '../hall8.jpeg';
import f1 from '../f.webp';
import t1 from '../t.webp';
import i1 from '../i.webp';
import b3 from '../b3.webp';
const districts = [
  'Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Tirunelveli', 'Kanyakumari', 'Erode',
  'Tiruppur', 'Vellore', 'Thanjavur', 'Karur', 'Dindigul', 'Namakkal', 'Dharmapuri', 'Krishnagiri',
  'Pudukkottai', 'Nagapattinam', 'Cuddalore', 'Ariyalur', 'Kanchipuram', 'Vellore', 'Ramanathapuram',
  'Sivaganga', 'Thoothukudi', 'Kallakurichi', 'Kanniyakumari', 'Tenkasi', 'Nilgiris', 'Kulithalai'
];

const HomePage = ({ user, setUser }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showSearchPrompt, setShowSearchPrompt] = useState(false);
  const navigate = useNavigate();
  const featuredHallsRef = useRef(null);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleGuestsChange = (event) => {
    if (event.target.value >= 0) setNumGuests(event.target.value);
  };

  const openLogoutModal = () => {
    setIsModalOpen(true);
    setPendingAction('logout');
  };

  const openLoginPrompt = () => {
    setShowLoginPrompt(true);
    setPendingAction('book');
  };

  const openSearchPrompt = () => {
    setShowSearchPrompt(true);
    setPendingAction('search');
  };

  const confirmLogout = () => {
    setUser(null);
    navigate('/');
    setIsModalOpen(false);
  };

  const redirectToLogin = () => {
    navigate('/login');
    setShowLoginPrompt(false);
  };

  const cancelLogout = () => {
    setIsModalOpen(false);
  };

  const cancelLoginPrompt = () => {
    setShowLoginPrompt(false);
  };

  const cancelSearchPrompt = () => {
    setShowSearchPrompt(false);
  };

  const handleHallClick = (path) => {
    if (user) {
      navigate(`${path}?location=${selectedLocation}&date=${selectedDate}&guests=${numGuests}`);
    } else {
      openLoginPrompt();
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (featuredHallsRef.current) {
      featuredHallsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (user) {
      openSearchPrompt();
    } else {
      openLoginPrompt();
    }
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar-brand">
         
          <h1 style={{ color: '#0077BE'  }}>Ocean Halls</h1>
        </div>
        <div className="navbar-links">
          {user ? (
            <>
              <Link to="/profile" style={{color:'black'}}>Profile</Link>
              <button className="logout-button" onClick={openLogoutModal} style={{color:'black'}}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login"style={{color:'black'}} >Login</Link>
              <Link to="/register" style={{color:'black'}}>Register</Link>
            </>
          )}
          <Link to="/about" style={{color:'black'}}>About</Link>
          <Link to="/contact" style={{color:'black'}}>Contact us</Link>
        </div>
      </nav>
      
      <section className="search-section">
        <h2 style={{ color: 'black' }}>Find the perfect hall</h2>
        <form className="search-form" onSubmit={handleSearch}>
          <select 
            value={selectedLocation} 
            onChange={handleLocationChange} 
            required
            style={{ padding: '10px', borderRadius: '5px', fontSize: '16px' }}
          >
            <option value="" disabled>Select Location</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={handleDateChange}
            placeholder="Event Date" 
            required 
            style={{ borderRadius: '5px' }}
          />
          <input 
            type="number" 
            value={numGuests} 
            onChange={handleGuestsChange}
            placeholder="Number of Guests" 
            required 
            style={{ borderRadius: '5px' }}
          />
          <button type="submit">Search</button>
        </form>
      </section>
      
      <section className="featured-halls" ref={featuredHallsRef}>
      <h2 className="featured-halls-header" style={{ color: 'black' }}>Featured Halls</h2>
        <div className="hall-list">
          <div className="hall" onClick={() => handleHallClick('/grandballroom')}>
            <img src={hall1} alt="Grand Ballroom" />
            <div style={{ color: 'black' }}>
              <h3>Codissia Hall</h3>
              <p>Location: 12, Anna Salai, Chennai - 600002</p>
            </div>
          </div>
          <div className="hall" onClick={() => handleHallClick('/conferencehall')}>
            <img src={hall2} alt="Conference Hall" />
            <div style={{ color: 'black' }}>
              <h3>Aurora Conference Hall</h3>
              <p>Location: 45, Dr. Nanjappa Road, Coimbatore - 641018</p>
            </div>
          </div>
          <div className="hall" onClick={() => handleHallClick('/receptionhall')}>
            <img src={hall8} alt="Reception Hall" />
            <div style={{ color: 'black' }}>
              <h3>Krishna Mandapam</h3>
              <p>Location: 78, Madurai Road, KK Nagar, Madurai - 625020</p>
            </div>
          </div>
          <div className="hall" onClick={() => handleHallClick('/weddinghall')}>
            <img src={hall4} alt="Wedding Hall" />
            <div style={{ color: 'black' }}>
              <h3>Exquisite Venue</h3>
              <p>Location: 23, Trichy Road, Vannarapettai, Trichy - 620001</p>
            </div>
          </div>
          <div className="hall" onClick={() => handleHallClick('/exhibitionhall')}>
            <img src={hall7} alt="Exhibition Hall" />
            <div style={{ color: 'black' }}>
              <h3>Exhibition Hall</h3>
              <p>Location: 56, Salem Bypass Road, Fairlands, Salem - 636016</p>
            </div>
          </div>
          <div className="hall" onClick={() => handleHallClick('/communityhall')}>
            <img src={hall3} alt="Community Hall" />
            <div style={{ color: 'black' }}>
              <h3>Community Hall</h3>
              <p>Location: 89, Palayamkottai Road, Tirunelveli - 627002</p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to logout?</h3>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={confirmLogout}>Yes</button>
              <button className="cancel-button" onClick={cancelLogout}>No</button>
            </div>
          </div>
        </div>
      )}

      {showLoginPrompt && pendingAction === 'book' && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Please log in to book the hall.</h3>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={redirectToLogin}>Login</button>
              <button className="cancel-button" onClick={cancelLoginPrompt}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showSearchPrompt && pendingAction === 'search' && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{user ? 'Please choose your hall here.' : 'Please log in to book a hall.'}</h3>
            <div className="modal-buttons">
              {user ? (
                <button className="confirm-button" onClick={() => setShowSearchPrompt(false)}>OK</button>
              ) : (
                <button className="confirm-button" onClick={redirectToLogin}>Login</button>,
              <button className="cancel-button" onClick={cancelSearchPrompt}>Cancel</button>
              )}
            </div>
          </div>
        </div>
      )}

<footer className="homepage-footer">
  <div className="footer-content">
    <div className="footer-section">
      <h4>Contact Us</h4>
      <p>Email: support@oeanhalls.com</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Address: 123 Main Street, Suite 100,Kallakurichi,Tamil Nadu</p>
    </div>
    <div className="footer-section">
      <h4>Follow Us</h4>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={f1} alt="Facebook" style={{height:'30px',padding:'5px'}}/>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src={t1} alt="Facebook" style={{height:'30px',padding:'5px'}}/>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src={i1} alt="Facebook" style={{height:'30px',padding:'5px'}}/>
      </a>
    </div>
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Hall Booking System. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default HomePage;
