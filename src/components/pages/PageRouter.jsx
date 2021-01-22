// react
import React from 'react';
import {Switch, Route} from 'react-router-dom';
// components
import OfferingsView from './offerings/offeringsList/OfferingsView';
import OfferingDetail from './offerings/offeringDetail/OfferingDetail';
import NotFound from './home/NotFound';
import LoginForm from './home/LoginForm';
import Home from './home/Home';
import RegisterForm from './home/RegisterForm';

// main
const PageRouter = () => {
  // init hooks
  return (
    <Switch>
      <Route exact path="/offering/:offeringId" render={p => <OfferingDetail props={p} />} />
      <Route exact path="/offerings" render={p => <OfferingsView props={p} />} />
      <Route exact path="/login" render={p => <LoginForm props={p} />} />
      <Route exact path="/register" render={p => <RegisterForm props={p} />} />
      <Route exact path="/" render={p => <Home props={p} />} />
      <Route render={p => <NotFound props={p} />} />
    </Switch>
  )
};

// export
export default PageRouter;
