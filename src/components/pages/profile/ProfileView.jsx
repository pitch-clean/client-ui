// react
import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// components
import Nav from './home/Nav';
import About from './home/About';
import Investments from './home/Investments';
import Network from './home/Network';
import LeftSidebar from '../feed/LeftSidebar';
import Sidebar from '../../elements/SideBar';
// utils
import { updateViewProfile } from '../../../redux/actions/ViewActions';
// seed
import { profile } from '../../../seed/testAuthProfile';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    // width: `80%`,
    paddingRight: '0px',
    [theme.breakpoints.up('sm')]: {
      // paddingRight: '20%',
    },
  },
}));

/**
 * main
 */
const ProfileView = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const match = useRouteMatch();
  const {
    params: { alias },
  } = match;
  const baseRoute = `/profile/${alias}`;
  // state
  const viewProfile = useSelector(s => s.view.profile.viewProfile);
  // effects
  useEffect(() => {
    const mockProfileViewObj = profile;
    dispatch(updateViewProfile(mockProfileViewObj));
  }, []);
  if (!viewProfile) {
    return <div />;
  }

  return (
    <Grid
      // container
      // direction="row"
      alignItems="flex-start"
      justify="space-between"
      className={`${classes.root} ProfileView flexrow h100`}
    >
      <LeftSidebar />
      <Grid direction="column" className="Body f1">
        <Nav baseRoute={baseRoute} />
        <Switch location={{ ...location, baseRoute }}>
          <Route exact path="/profile/:alias" render={p => <About props={p} />} />
          <Route exact path="/profile/:alias/investments" render={p => <Investments props={p} />} />
          <Route exact path="/profile/:alias/network" render={p => <Network props={p} />} />
        </Switch>
      </Grid>
      <Sidebar isLeft={false}></Sidebar>
    </Grid>
  );
};

// export
export default ProfileView;
