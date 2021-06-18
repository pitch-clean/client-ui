// react
import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, useLocation, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { updateRecommendedConnections, updateViewProfile, clearViewProfile } from '../../../redux/actions/ViewActions';
// components
import About from './home/About';
import Network from './home/Network';
import LeftSidebar from '../feed/LeftSidebar';
import Posts from './home/Posts';
import LikesView from './home/LikesView';
import RecommendedConnections from '../../elements/RecommendedConnections';
import Sidebar from '../../elements/SideBar';
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
const getRecommendedConnections = async (window, dispatch, viewProfileId, activeProfileId) => {
  const url = `${window.env.api.profiles}/${viewProfileId}/recommended/?by=id&activeProfile=${activeProfileId}`;
  try {
    const res = await Get(url, {}, true);
    dispatch(updateRecommendedConnections(res));
  } catch (err) {
    console.log('ERROR: ProfileView > getRecommendedConnections() get()')
  }
};

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
  // state
  const viewProfile = useSelector(s => s.view.profile.viewProfile) || {};
  const activeProfile = useSelector(s => s.auth.activeProfile) || {};
  let pageAlias = alias;

  if (activeProfile._id) {
    if (!alias) {
      pageAlias = activeProfile.alias;
    }
    // if (activeProfile.alias === alias) {}
  }
  // effects
  useEffect(async () => {
    console.log('hey3', alias)
    const url = `${window.env.api.profiles}/${alias}?by=alias`;
    const res = await Get(url, {}, true);
    console.log(res, 'res', url)
    dispatch(updateViewProfile(res));
    // depending on who's profile, get recommended connections
    if (viewProfile._id) {
      await getRecommendedConnections(window, dispatch, viewProfile._id, activeProfile._id );
    }
    return () => {
      dispatch(clearViewProfile());
    };
  }, [alias, viewProfile._id]);

  if (!pageAlias) {
    return <Redirect to="/" />;
  }

  if (!viewProfile._id) {
    return <div>{`issue with redux state: <ProfileView /> > viewProfile `}</div>;
  }

  const baseRoute = `/${window.env.client.profile}/${pageAlias}`;

  return (
    <div className={`ProfileView ${classes.root} flexrow`}>
      <LeftSidebar baseRoute={baseRoute} />
      <div className={`Body f1 flexcol`}>
        <About />
        <Switch location={{ ...location, baseRoute }}>
          <Route exact path="/profile/:alias/posts" render={p => <Posts props={p} />} />
          <Route exact path="/profile/:alias/likes" render={p => <LikesView props={p} />} />
          {/* <Route exact path="/profile/:alias/network" render={p => <Network props={p} />} /> */}
          {/* <Route exact path="/profile/:alias/portfolio" render={p => <Portfolio props={p} />} /> */}
          <Redirect to={`/profile/${alias}/posts`} />
        </Switch>
      </div>
      <Sidebar isLeft={false}>
        <RecommendedConnections />
      </Sidebar>
    </div>
  );
};

// export
export default ProfileView;
