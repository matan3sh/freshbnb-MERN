import rentalsServices from 'services/rentalsService';

export const loadRentals = () => async (dispatch) => {
  try {
    const rentals = await rentalsServices.query();
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
    dispatch({ type: 'ADD_RENTAL', payload: rental });
  } catch (err) {
    console.log(err);
  }
};
