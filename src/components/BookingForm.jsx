// File: src/components/BookingForm.js
import React from 'react';
import '../styles/BookingForm.css';

const BookingForm = ({ bookingInfo, onInputChange, onBooking, selectedSeatsCount }) => {
  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-form-container">
      <h3>Booking Details</h3>
      <form className="booking-form" onSubmit={onBooking}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={bookingInfo.name}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={bookingInfo.email}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Seminar Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={bookingInfo.date}
            onChange={onInputChange}
            min={today}
            required
          />
        </div>

        <div className="selected-info">
          <p>Selected Seats: {selectedSeatsCount}</p>
        </div>

        <button 
          type="submit" 
          className="book-button"
          disabled={selectedSeatsCount === 0}
        >
          Book {selectedSeatsCount} Seat(s)
        </button>
      </form>
    </div>
  );
};

export default BookingForm;