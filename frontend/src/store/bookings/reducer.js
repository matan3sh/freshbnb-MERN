const initialState = {
  bookings: [],
  errors: null,
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
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
