// react
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// components
import OfferingsView from './offerings/offeringsList/OfferingsView';
import OfferingDetail from './offerings/offeringDetail/OfferingDetail';
import NotFound from './home/NotFound';
import LoginForm from './profile/LoginForm';
import FeedView from './feed/FeedView';
import Home from './home/Home';
import CreateProfile from './profile/CreateProfile';
import ProfileView from './profile/ProfileView';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    height: `100vh`,
    minHeight: `100vh`,
  },
}));

/**
 * main
 */
const PageRouter = () => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid className={`${classes.root} PageRouter w100`}>
      <Switch>
        <Route path="/profile/:alias" render={p => <ProfileView props={p} />} />
        <Route exact path="/offering/:offeringId" render={p => <OfferingDetail props={p} />} />
        <Route exact path="/offerings" render={p => <OfferingsView props={p} />} />
        <Route exact path="/feed" render={p => <FeedView props={p} />} />
        <Route exact path="/" render={p => <Home props={p} />} />
        <Route exact path="/login" render={p => <LoginForm props={p} />} />
        <Route exact path="/register" render={p => <CreateProfile props={p} />} />
        <Route render={p => <NotFound props={p} />} />
      </Switch>
    </Grid>
  );
};

// export
export default PageRouter;
