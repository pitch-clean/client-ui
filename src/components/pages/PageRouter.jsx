// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import StartupsList from './startups/startupsList/StartupsList';
import StartupDetail from './startups/startupDetail/StartupDetail';
import NotFound from './home/NotFound';
import LoginView from './login/LoginView';
import FeedView from './feed/FeedView';
import Home from './home/Home';
import CreateProfile from './profile/CreateProfile';
// import CreateOffering from './offerings/CreateOffering';
import ProfileView from './profile/ProfileView';
import MessagesView from './messages/MessagesView';
import PostDetail from './post/PostDetail';
// import RSVPView from './rsvp/RSVPView';
// import SearchView from './search/SearchView';
// import CreateRSVP from './rsvp/CreateRSVP';

// constants
const useStyles = makeStyles(theme => ({
  root: {
    height: `100%`,
    minHeight: `100%`,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: `100%`,
    '& > div': {
      maxWidth: '1300px',
      width: '100%',
      minWidth: '500px',
      opacity: 1,
      animationName: 'pageOpen',
      animationDuration: `0.325s`,
      animationTimingFunction: `ease-out`,
    },
    alignSelf: 'center',
    overflow: 'scroll',
  },
  footer: {
    backgroundColor: `black`,
    padding: `10px 20px`,
    height: `40px`,
    color: 'white',
  },
}));

/**
 * main
 */
const PageRouter = () => {
  // init hooks
  const classes = useStyles();
  // state
  const isAuthenticated = useSelector(s => s.auth.activeProfile._id);

  return (
    <div className={`PageRouter ${classes.root} flexcol f1`}>
      <Switch>
        <Route path="/profile/:alias" render={p => <ProfileView props={p} />} />
        <Route exact path="/startup/:startupId" render={p => <StartupDetail props={p} />} />
        <Route exact path="/marketplace" render={p => <StartupsList props={p} />} />
        <Route exact path="/post/:postId" render={p => <PostDetail props={p} />} />
        {/* <Route exact path="/search/:searchStr" render={p => <SearchView props={p} />} /> */}
        {isAuthenticated && <Route exact path="/feed" render={p => <FeedView props={p} />} />}
        {isAuthenticated && <Route exact path="/messages" render={p => <MessagesView props={p} />} />}
        {!isAuthenticated && <Route exact path="/login" render={p => <LoginView props={p} />} />}
        {isAuthenticated && <Route exact path="/new/startup" render={p => <CreateStartup props={p} />} />}
        {!isAuthenticated && <Route exact path="/new/profile" render={p => <CreateProfile props={p} />} />}
        <Route exact path="/" render={p => <Home props={p} />} />
        {/* <Route
          exact
          path="/new/rsvp"
          render={p => isAuthenticated ? <CreateRSVP props={p} /> : <div>Please sign in</div>}
        /> */}
        <Route path="/profile" render={p => <ProfileView props={p} />} />
        <Route render={p => <NotFound props={p} />} />
      </Switch>
      {/* <Grid item className={`${classes.footer} w100`}>
        Footer
      </Grid> */}
    </div>
  );
};

// export
export default PageRouter;
