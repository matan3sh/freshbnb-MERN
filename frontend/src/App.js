import React, { useEffect } from 'react';
import { ProtectedRoute, GuestRoute } from 'routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useAuth } from 'providers/AuthProvider';
import { Header, BottomNav, Footer } from 'components/layout';
import {
  Home,
  Browse,
  Login,
  Register,
  RentalDetail,
  Profile,
  AddRental,
  Manage,
  MyRentals,
  MyBookings,
  ReceivedBookings,
} from 'components/pages';
import { Error } from 'components/app';

const App = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService]);

  return (
    <Router>
      <Header />
      <Error />
      <Switch>
        <Route exact path='/:location/browse' component={Browse} />
        <ProtectedRoute exact path='/profile' component={Profile} />
        <ProtectedRoute exact path='/manage' component={Manage} />
        <ProtectedRoute exact path='/manage/rentals' component={MyRentals} />
        <ProtectedRoute exact path='/manage/bookings' component={MyBookings} />
        <ProtectedRoute
          exact
          path='/manage/received'
          component={ReceivedBookings}
        />
        <ProtectedRoute exact path='/manage/add' component={AddRental} />
        <GuestRoute exact path='/login' component={Login} />
        <GuestRoute exact path='/register' component={Register} />
        <Route exact path='/rentals/:id' component={RentalDetail} />
        <Route exact path='/' component={Home} />
      </Switch>
      <BottomNav />
      <Footer />
    </Router>
  );
};

export default App;
