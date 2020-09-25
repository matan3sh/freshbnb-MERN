import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Footer } from 'components/layout';
import { Home, Browse, Login, Register, RentalDetail } from 'components/pages';
import { ScrollToTop } from 'components/shared';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path='/browse' component={Browse} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/rentals/:id' component={RentalDetail} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
