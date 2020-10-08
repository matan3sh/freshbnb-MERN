const initialState = {
  reviews: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_REVIEWS':
      return {
        ...state,
        reviews: action.payload,
      };
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...state.errors, action.payload],
      };
    default:
      return state;
  }
}
