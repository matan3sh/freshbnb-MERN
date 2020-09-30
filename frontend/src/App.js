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
  NewRental,
} from 'components/pages';
import { ScrollToTop } from 'components/shared';
import { ToastContainer, Zoom } from 'react-toastify';

const App = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService]);

  return (
    <Router>
      <ToastContainer
        draggable={false}
        transition={Zoom}
        autoClose={5000}
        position='top-center'
      />
      <Header />
      <ScrollToTop />
      <Switch>
        <ProtectedRoute exact path='/profile' component={Profile} />
        <Route exact path='/browse' component={Browse} />
        <GuestRoute exact path='/login' component={Login} />
        <GuestRoute exact path='/register' component={Register} />
        <ProtectedRoute exact path='/rentals/new' component={NewRental} />
        <Route exact path='/rentals/:id' component={RentalDetail} />
        <Route exact path='/' component={Home} />
      </Switch>
      <BottomNav />
      <Footer />
    </Router>
  );
};

export default App;
