import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AdminBookingsPage.css';

export default function AdminBookingsPage() {
    const { hallId } = useParams();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = hallId ? `/api/bookings/${hallId}` : '/api/bookings';
        fetch(url)
            .then(response => response.json())
            .then(data => setBookings(data))
            .catch(error => console.error('Error fetching bookings:', error));
    }, [hallId]);

    return (
        <div className="admin-bookings-container">
            <h1>{hallId ? `${hallId.replace('-', ' ')} Bookings` : 'All Hall Bookings'}</h1>
            <div className="bookings-list">
                {bookings.length === 0 ? (
                    <p>No bookings found.</p>
                ) : (
                    bookings.map((booking, index) => (
                        <div key={index} className="booking-card">
                            <p><span>Hall:</span> {booking.hallName}</p>
                            <p><span>Date:</span> {booking.date}</p>
                            <p><span>Time:</span> {booking.time}</p>
                            <p><span>Type:</span> {booking.type}</p>
                            <p><span>Customer:</span> {booking.customerName}</p>
                            <p><span>Number of Guests:</span> {booking.numberOfGuests}</p>
                            <p><span>Payment Method:</span> {booking.paymentMethod}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
