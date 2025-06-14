// File: src/pages/Home.js
import SeminarHall from '../components/SeminarHall';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Theater Seat Booking</h1>
      <p>Select your seats and book them for your desired date</p>
      <SeminarHall />
    </div>
  );
};

export default Home;
