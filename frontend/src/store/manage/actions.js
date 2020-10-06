import manageService from 'services/manageService';

export const loadMyRentals = () => async (dispatch) => {
  try {
    const myRentals = await manageService.query();
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
