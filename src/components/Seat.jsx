// File: src/components/Seat.js
import React from 'react';
import '../styles/SeatMap.css';

const Seat = ({ seat, onClick }) => {
  // Function to determine the CSS class for the seat
  const getClassName = () => {
    if (seat.booked) return 'seat booked';
    if (seat.selected) return 'seat selected';
    return 'seat available';
  };

  // Function to handle seat click
  const handleClick = () => {
    if (!seat.booked) {
      onClick(seat.id);
    }
  };

  return (
    <button 
      className={getClassName()} 
      onClick={handleClick}
      disabled={seat.booked}
      title={seat.booked ? 'This seat is already booked' : `Click to select seat ${seat.label}`}
    >
      {seat.id}
    </button>
  );
};

export default Seat;