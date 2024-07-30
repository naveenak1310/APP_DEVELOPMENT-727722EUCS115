// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import GrandBallroom from './components/GrandBallroom';
import ConferenceHall from './components/ConferenceHall';
import ReceptionHall from './components/ReceptionHall';
import WeddingHall from './components/WeddingHall';
import ExhibitionHall from './components/ExhibitionHall';
import CommunityHall from './components/CommunityHall';
import Profile from './components/Profile';  // Import the Profile component
import About from './About';
import Contact from './Contact';
import PrivacyPolicy from './components/PrivacyPolicy';  // Import PrivacyPolicy component
import TermsOfService from './components/TermsOfService';
import SuccessPage from './components/SuccessPage';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/grandballroom" element={<GrandBallroom />} />
        <Route path="/conferencehall" element={<ConferenceHall />} />
        <Route path="/receptionhall" element={<ReceptionHall />} />
        <Route path="/weddinghall" element={<WeddingHall />} />
        <Route path="/exhibitionhall" element={<ExhibitionHall />} />
        <Route path="/communityhall" element={<CommunityHall />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />  {/* Add PrivacyPolicy route */}
        <Route path="/terms" element={<TermsOfService />} /> 
        <Route path="/AdminLogin" element={<AdminLogin />} /> 
        <Route path="/AdminPage" element={<AdminPage />} /> 
        
        
        
          {/* Add Profile route */}
      </Routes>
    </Router>
  );
};

export default App;
