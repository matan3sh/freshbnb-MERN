import rentalsServices from 'services/rentalsService';

export const loadRentals = (location) => async (dispatch) => {
  try {
    const rentals = await rentalsServices.query(location);
    dispatch({ type: 'SET_RENTALS', payload: rentals });
  } catch (err) {
    console.log(err);
  }
};

export const loadRental = (rentalId) => async (dispatch) => {
  try {
    const rental = await rentalsServices.getById(rentalId);
    dispatch({ type: 'SET_RENTAL', payload: rental });
  } catch (error) {
    console.log(error);
  }
};

export const clearRental = () => async (dispatch) => {
  try {
    dispatch({ type: 'CLEAR_RENTAL' });
  } catch (error) {
    console.log(error);
  }
};

export const addRental = (rental) => async (dispatch) => {
  try {
    const newRental = rentalsServices.add(rental);
    dispatch({ type: 'ADD_RENTAL', payload: newRental });
  } catch (error) {
    console.log(error);
  }
};
