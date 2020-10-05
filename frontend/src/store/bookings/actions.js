import bookingsService from 'services/bookingsService';

export const addBooking = async (booking) => {
  await bookingsService.add(booking);
};

export const getBookings = (rentalId) => async (dispatch) => {
  try {
    const bookings = await bookingsService.getByRental(rentalId);
    dispatch({ type: 'SET_BOOKINGS', payload: bookings });
  } catch (error) {
    console.log(error);
  }
};
