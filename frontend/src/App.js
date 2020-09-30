import React, { useEffect } from 'react';
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
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/browse' component={Browse} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/rentals/:id' component={RentalDetail} />
        <Route exact path='/' component={Home} />
      </Switch>
      <BottomNav />
      <Footer />
    </Router>
  );
};

export default App;
