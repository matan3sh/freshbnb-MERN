const initialState = {
  user: null,
  isAuth: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_AUTHENTICATED':
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
}
