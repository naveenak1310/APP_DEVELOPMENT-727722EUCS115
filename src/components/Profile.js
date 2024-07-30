// src/components/Profile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Import the CSS file

const Profile = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data
        setUser(null);
        // Navigate to home page
        navigate('/');
    };
    const handleback = () => {
        // Clear user data
        
        // Navigate to home page
        navigate('/');
    };

    return (
        <div className="profile-page"> {/* Apply the main container class */}
            <div className="profile-header">
                {/* Adjust if user has a profile picture */}
                <div>
                    <h1>{user?.username || 'Guest'}</h1>
                    <p>{user?.email || 'No email available'}</p>
                </div>
            </div>
            <div className="profile-details">
                <div className="detail">
                    <h2>Profile Information</h2>
                    <p><strong>Username:</strong> {user?.username || 'No username available'}</p>
                    <p><strong>Email:</strong> {user?.email || 'No email available'}</p>
                </div>
            </div>
            <div className="profile-actions">
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="profile-actions">
                <button onClick={handleback}>Back</button>
            </div>
            <footer className="profile-footer">
                <p>&copy; 2024 Hall Booking System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Profile;
