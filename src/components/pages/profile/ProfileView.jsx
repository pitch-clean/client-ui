// react
import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, useLocation, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { updateViewProfile, clearProfile } from '../../../redux/actions/ViewActions';
// components
import Nav from './home/Nav';
import About from './home/About';
import Investments from './home/Investments';
import Network from './home/Network';
import LeftSidebar from '../feed/LeftSidebar';
import Posts from './home/Posts';
// seed
import { Get } from '../../../utils/requests';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: '0px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      // paddingRight: '20%',
    },
  },
}));

/**
 * main
 */
const ProfileView = () => {
  // destructure
  const {
    params: { alias },
  } = match;
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const match = useRouteMatch();
  // state
  const viewProfile = useSelector(s => s.view.profile.viewProfile);
  const activeProfile = useSelector(s => s.auth.activeProfile);
  let pageAlias = alias;

  if (activeProfile) {
    if (!alias) {
      pageAlias = activeProfile.alias;
    }
    // if (activeProfile.alias === alias) {}
  }
  // effects
  useEffect(async () => {
    const url = `${window.env.api.profiles}/${alias}?by=alias`;
    const res = await Get(url, {}, true);
    dispatch(updateViewProfile(res));
    return () => {
      dispatch(clearProfile());
    };
  }, [alias]);
  if (!pageAlias) {
    return <Redirect to="/" />;
  }
  if (!viewProfile) {
    return <div>{`issue with redux state: <ProfileView /> > viewProfile `}</div>;
  }
  const baseRoute = `/${window.env.client.profile}/${pageAlias}`;

  return (
    <div className={`ProfileView ${classes.root} flexrow`}>
      <LeftSidebar />
      <div direction="column" className="Body f1">
        <About />
        <Nav baseRoute={baseRoute} />
        <Switch location={{ ...location, baseRoute }}>
          <Route exact path="/profile/:alias/posts" render={p => <Posts props={p} />} />
          <Route exact path="/profile/:alias/investments" render={p => <Investments props={p} />} />
          <Route exact path="/profile/:alias/network" render={p => <Network props={p} />} />
          <Redirect to={`/profile/${alias}/posts`} />
        </Switch>
      </div>
      {/* <Sidebar isLeft={false}></Sidebar> */}
    </div>
  );
};

// export
export default ProfileView;
