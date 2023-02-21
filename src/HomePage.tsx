// HomePage.tsx
import React, { useState } from 'react';
import { Booking } from './types';
import BookingForm from './BookingForm';
import BookingList from './BookingList';

const HomePage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const handleAddBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <>
      <h1>Reservation App</h1>
      <BookingForm onAddBooking={handleAddBooking} />
      <BookingList bookings={bookings} />
    </>
  );
};

export default HomePage;
