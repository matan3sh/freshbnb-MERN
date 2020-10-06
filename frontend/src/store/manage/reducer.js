const initialState = {
  myRentals: null,
  myBookings: [],
  receivedBookings: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MY_RENTALS':
      return {
        ...state,
        myRentals: action.payload,
      };
    case 'CLEAR_MY_RENTALS':
      return {
        ...state,
        myRentals: null,
      };
    default:
      return state;
  }
}
