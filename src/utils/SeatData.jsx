// File: src/utils/SeatData.js
export const initialSeats = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  label: `Seat ${index + 1}`,
  booked: false, 
  selected: false,
  bookedBy: null
}));