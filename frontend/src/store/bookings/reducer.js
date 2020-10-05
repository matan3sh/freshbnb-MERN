const initialState = {
  bookings: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_BOOKINGS':
      return {
        ...state,
        bookings: action.payload,
      };
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    default:
      return state;
  }
}
