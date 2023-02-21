// BookingList.tsx
import React from 'react';
import { Booking } from './types';

interface Props {
  bookings: Booking[];
}

const BookingList = ({ bookings }: Props) => (
  <ul>
    {bookings.map((booking) => (
      <li key={booking.id}>
        <h3>{booking.service}</h3>
        <p>Date: {booking.date}</p>
        <p>Time: {booking.time}</p>
      </li>
    ))}
  </ul>
);

export default BookingList;
