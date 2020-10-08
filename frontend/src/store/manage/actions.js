import manageService from 'services/manageService';

export const loadMyRentals = () => async (dispatch) => {
  try {
    const myRentals = await manageService.queryRentals();
    dispatch({ type: 'SET_MY_RENTALS', payload: myRentals });
  } catch (err) {
    console.log(err);
  }
};

export const clearMyRentals = () => async (dispatch) => {
  try {
    dispatch({ type: 'CLEAR_MY_RENTALS' });
  } catch (err) {
    console.log(err);
  }
};

export const loadMyBookings = () => async (dispatch) => {
  try {
    const myBookings = await manageService.queryBookings();
    dispatch({ type: 'SET_MY_BOOKINGS', payload: myBookings });
  } catch (err) {
    console.log(err);
  }
};

export const clearMyBookings = () => async (dispatch) => {
  try {
    dispatch({ type: 'CLEAR_MY_BOOKINGS' });
  } catch (err) {
    console.log(err);
  }
};

export const loadReceivedBookings = () => async (dispatch) => {
  try {
    const receivedBookings = await manageService.queryRecievedBookings();
    dispatch({ type: 'SET_RECEIVED_BOOKINGS', payload: receivedBookings });
  } catch (err) {
    console.log(err);
  }
};

export const clearReceivedBookings = () => async (dispatch) => {
  try {
    dispatch({ type: 'CLEAR_RECEIVED_BOOKINGS' });
  } catch (err) {
    console.log(err);
  }
};

export const deleteMyRental = (rentalId) => async (dispatch) => {
  try {
    await manageService.deleteRental(rentalId);
    dispatch({ type: 'DELETE_MY_RENTAL', payload: rentalId });
  } catch (error) {
    dispatch({ type: 'SET_ERRORS', payload: error });
  }
};

export const deleteMyBooking = (bookingId) => async (dispatch) => {
  try {
    await manageService.deleteBooking(bookingId);
    dispatch({ type: 'DELETE_MY_BOOKING', payload: bookingId });
  } catch (error) {
    dispatch({ type: 'SET_ERRORS', payload: error });
  }
};

export const updateMyRental = (rental, rentalId) => async (dispatch) => {
  try {
    const updatedRental = await manageService.updateRental(rental, rentalId);
    dispatch({ type: 'UPDATE_MY_RENTAL', payload: updatedRental });
  } catch (error) {
    dispatch({ type: 'SET_ERRORS', payload: error });
  }
};
