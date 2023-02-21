import React, { useState } from 'react';
import { Booking } from './types';

interface Props {
  onAddBooking: (booking: Booking) => void;
}

const BookingForm = ({ onAddBooking }: Props) => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBooking: Booking = { id: Date.now(), service, date, time };
    onAddBooking(newBooking);
    setService('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Service"
        value={service}
        onChange={(event) => setService(event.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type="time"
        placeholder="Time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <button type="submit">Add Booking</button>
    </form>
  );
};

export default BookingForm;