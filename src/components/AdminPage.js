// src/components/AdminPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';
import hallIcon from '../b4.jpg'; // Add an icon or image for the halls

const AdminPage = () => {
  return (
    <div className="admin-page">
      <nav className="admin-navbar">
        <h1>Admin Dashboard</h1>
        <div className="admin-links">
          <Link to="/manage-users">Manage Users</Link>
          <Link to="/manage-halls">Manage Halls</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </nav>

      <section className="admin-content">
        <h2>Welcome, Admin!</h2>
        <div className="admin-cards">
          <div className="admin-card">
            <img src={hallIcon} alt="Manage Halls" />
            <h3>Manage Halls</h3>
            <p>Add, edit, or remove hall details.</p>
            <Link to="/manage-halls" className="admin-card-button">Go to Manage Halls</Link>
          </div>
          <div className="admin-card">
            <img src={hallIcon} alt="Manage Users" />
            <h3>Manage Users</h3>
            <p>View and manage user accounts.</p>
            <Link to="/manage-users" className="admin-card-button">Go to Manage Users</Link>
          </div>
          <div className="admin-card">
            <img src={hallIcon} alt="Reports" />
            <h3>Reports</h3>
            <p>View booking and user reports.</p>
            <Link to="/reports" className="admin-card-button">Go to Reports</Link>
          </div>
          <div className="admin-card">
            <img src={hallIcon} alt="Settings" />
            <h3>Settings</h3>
            <p>Configure system settings.</p>
            <Link to="/settings" className="admin-card-button">Go to Settings</Link>
          </div>
        </div>
      </section>

      <footer className="admin-footer">
        <p>&copy; 2024 Hall Booking System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminPage;
