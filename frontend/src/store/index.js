import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rentalsReducer from './rentals/reducer';
import authReducer from './auth/reducer';
import bookingsReducer from './bookings/reducer';

const rootReducer = combineReducers({
  mainApp: rentalsReducer,
  authApp: authReducer,
  bookingsApp: bookingsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
