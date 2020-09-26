const initialState = {
  rentals: [],
  rental: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_RENTALS':
      return {
        ...state,
        rentals: action.payload,
      };
    case 'SET_RENTAL':
      return {
        ...state,
        rental: action.payload,
      };
    case 'CLEAR_RENTAL':
      return {
        ...state,
        rental: null,
      };
    case 'ADD_RENTAL':
      return {
        ...state,
        rentals: [action.payload, ...state.rentals],
      };
    default:
      return state;
  }
}
