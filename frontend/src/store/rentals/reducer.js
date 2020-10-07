const initialState = {
  rentals: null,
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
    case 'CLEAR_RENTALS':
      return {
        ...state,
        rentals: null,
      };
    case 'ADD_RENTAL':
      return {
        ...state,
        rentals: [...state.rentals, action.payload],
      };
    default:
      return state;
  }
}
