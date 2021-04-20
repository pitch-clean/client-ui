// react
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import OfferingsView from './offerings/offeringsList/OfferingsView';
import OfferingDetail from './offerings/offeringDetail/OfferingDetail';
import NotFound from './home/NotFound';
import LoginForm from './home/LoginForm';
import Home from './home/Home';
import CreateProfile from './profile/CreateProfile';
import ProfileView from './profile/ProfileView';

// main
const PageRouter = () => {
  // init hooks
  return (
    <div className="PageRouter w100 h100" style={{ minHeight: `100vh`, padding: '25px 20px' }}>
      <Switch>
        <Route path="/profile/:alias" render={p => <ProfileView props={p} />} />
        <Route exact path="/offering/:offeringId" render={p => <OfferingDetail props={p} />} />
        <Route exact path="/offerings" render={p => <OfferingsView props={p} />} />
        <Route exact path="/login" render={p => <LoginForm props={p} />} />
        <Route exact path="/" render={p => <Home props={p} />} />
        <Route exact path="/register" render={p => <CreateProfile props={p} />} />
        <Route render={p => <NotFound props={p} />} />
      </Switch>
    </div>
  );
};

// export
export default PageRouter;
