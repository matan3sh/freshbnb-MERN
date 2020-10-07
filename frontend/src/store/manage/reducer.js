const initialState = {
  myRentals: null,
  myBookings: null,
  receivedBookings: null,
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
    case 'SET_MY_BOOKINGS':
      return {
        ...state,
        myBookings: action.payload,
      };
    case 'CLEAR_MY_BOOKINGS':
      return {
        ...state,
        myBookings: null,
      };
    case 'SET_RECEIVED_BOOKINGS':
      return {
        ...state,
        receivedBookings: action.payload,
      };
    case 'CLEAR_RECEIVED_BOOKINGS':
      return {
        ...state,
        receivedBookings: null,
      };
    default:
      return state;
  }
}
