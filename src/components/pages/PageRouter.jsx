// react
import React from 'react';
import {Switch, Route} from 'react-router-dom';
// components
import OfferingsView from './offerings/OfferingsView';
import NotFound from './home/NotFound';
import LoginForm from './home/LoginForm';
import Home from './home/Home';
import RegisterForm from './home/RegisterForm';

// main
const PageRouter = () => {
  // init hooks
  return (
    <div
      className="PageRouter flexcol f1 w100 darkmode"
      style={{
        overflowY: `scroll`,
      }}
    >
      <Switch>
        <Route exact path="/offerings" render={p => <OfferingsView props={p} />} />
        <Route exact path="/login" render={p => <LoginForm props={p} />} />
        <Route exact path="/register" render={p => <RegisterForm props={p} />} />
        <Route exact path="/" render={p => <Home props={p} />} />
        <Route render={p => <NotFound props={p} />} />
      </Switch>
      <div className="footer w100" style={{padding: `10px 20px`, backgroundColor: `grey`}} >Footer</div>
    </div>
  )
};

// export
export default PageRouter;
