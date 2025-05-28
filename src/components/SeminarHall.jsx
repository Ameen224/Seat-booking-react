// File: src/components/SeminarHall.js
import React, { useState } from 'react';
import SeatMap from './SeatMap';
import BookingForm from './BookingForm';
import { initialSeats } from '../utils/SeatData';
import '../styles/SeminarHall.css';

const SeminarHall = () => {
  // State to store all seats
  const [seats, setSeats] = useState(initialSeats);
  
  // State to store selected seat IDs
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  // State to store booking information
  const [bookingInfo, setBookingInfo] = useState({ 
    name: '', 
    email: '', 
    date: '' 
  });

  // Function to handle seat click
  const handleSeatClick = (seatId) => {
    // Don't allow clicking on booked seats
    const seat = seats.find(s => s.id === seatId);
    if (seat.booked) return;

    // Update seats to toggle selected status
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    );

    // Update selected seats array
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatId)
        ? prevSelected.filter((id) => id !== seatId)
        : [...prevSelected, seatId]
    );
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // Function to handle booking submission
  const handleBooking = (e) => {
    e.preventDefault();
    
    // Check if any seats are selected
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat!');
      return;
    }

    // Check if all form fields are filled
    if (!bookingInfo.name || !bookingInfo.email || !bookingInfo.date) {
      alert('Please fill all fields!');
      return;
    }

    // Check if date is not in the past
    const selectedDate = new Date(bookingInfo.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      alert('Please select a future date!');
      return;
    }

    // Book the selected seats
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        selectedSeats.includes(seat.id)
          ? { ...seat, booked: true, selected: false, bookedBy: bookingInfo }
          : seat
      )
    );

    // Clear selections and form
    setSelectedSeats([]);
    setBookingInfo({ name: '', email: '', date: '' });
    
    alert(`Booking successful! ${selectedSeats.length} seat(s) booked for ${bookingInfo.name}`);
  };

  return (
    <div className="seminar-hall">
      <div className="booking-info">
        <h2>Available Seats: {seats.filter(seat => !seat.booked).length}/50</h2>
        <h3>Selected Seats: {selectedSeats.length}</h3>
      </div>
      
      <SeatMap seats={seats} onSeatClick={handleSeatClick} />
      
      <BookingForm
        bookingInfo={bookingInfo}
        onInputChange={handleInputChange}
        onBooking={handleBooking}
        selectedSeatsCount={selectedSeats.length}
      />
    </div>
  );
};

export default SeminarHall;