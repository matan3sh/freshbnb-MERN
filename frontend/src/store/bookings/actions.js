import bookingsService from 'services/bookingsService';

export const addBooking = async (booking) => {
  await bookingsService.add(booking);
};
