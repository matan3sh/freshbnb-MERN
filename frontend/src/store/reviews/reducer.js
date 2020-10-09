const initialState = {
  reviews: null,
  rate: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_REVIEWS':
      const rates = action.payload.map((review) => review.rate);
      return {
        ...state,
        reviews: action.payload,
        rate: rates.reduce((prev, curr) => prev + curr, 0) / rates.length,
      };
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
      };
    case 'UPDATE_RATE':
      return {
        ...state,
        rate: state.rate + action.payload / state.reviews.length + 1,
      };
    default:
      return state;
  }
}
