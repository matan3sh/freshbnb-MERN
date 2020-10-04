import bookingsService from 'services/bookingsService';

export const addBooking = async (booking) => {
  console.log(booking);
  try {
    await bookingsService.add(booking);
    alert('Success');
  } catch (error) {
    alert('Error!', error);
  }
};
