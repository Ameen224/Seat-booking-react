// File: src/components/SeatMap.js
import React from 'react';
import Seat from './Seat';
import '../styles/SeatMap.css';

const SeatMap = ({ seats, onSeatClick }) => {
  return (
    <div className="seat-map-container">
      <div className="stage">Screen</div>
      <div className="seat-map">
        {seats.map((seat) => (
          <Seat key={seat.id} seat={seat} onClick={onSeatClick} />
        ))}
      </div>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-color selected"></div>
          <span>Selected</span>
        </div>
        <div className="legend-item">
          <div className="legend-color booked"></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
};

export default SeatMap;