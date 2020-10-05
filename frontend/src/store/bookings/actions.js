import bookingsService from 'services/bookingsService';

export const addBooking = (booking) => async (dispatch) => {
  try {
    const newBooking = await bookingsService.add(booking);
    dispatch({ type: 'ADD_BOOKING', payload: newBooking });
  } catch (error) {
    dispatch({ type: 'SET_ERRORS', payload: error });
  }
};

export const getBookings = (rentalId) => async (dispatch) => {
  try {
    const bookings = await bookingsService.getByRental(rentalId);
    dispatch({ type: 'SET_BOOKINGS', payload: bookings });
  } catch (error) {
    console.log(error);
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: 'SET_ERRORS', payload: null });
};
