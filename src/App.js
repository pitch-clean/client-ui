// react
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { onKeyDownBlurAll } from './utils/keybinds';
import { updateLoginStatus } from './redux/actions/AuthActions';
import { baseTheme } from './styling/themes';
import { Get } from './utils/requests';
// components
import PageRouter from './components/pages/PageRouter';
import MainNavBar from './components/elements/mainNavBar/MainNavBar';
import MarketplaceNav from './components/pages/startups/startupsList/MarketplaceNav';
// styling
import './App.css';
import './config.dev.js';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eaebe8',
    minHeight: '100vh',
    height: '100vh',
    maxHeight: '100vh',
    justifyContent: 'flex-start',
  },
  navGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    '& > * > *': {
      maxWidth: 1300,
      width: `100%`,
      justifySelf: 'center',
      height: `100%`,
    },
  },
}));
const getProfile = async window => {
  const url = `${window.env.api.profiles}/ccc333ccc333ccc333ccc333`;
  const profile = await Get(url);
  return profile;
};

// main
const App = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const appRef = useRef(null);
  // state
  const isTestMode = useSelector(s => s.auth.isTestMode);
  document.addEventListener('keydown', onKeyDownBlurAll, false);
  // effects
  // load the state for the activeprofile
  useEffect(async () => {
    // load
    if (isTestMode) {
      const profile = await getProfile(window);
      dispatch(updateLoginStatus(profile));
    }
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <div className={`App ${classes.root} flexcol`} ref={appRef}>
        <div className={`${classes.navGroup} flexcol w100`}>
          <MainNavBar />
          <MarketplaceNav />
        </div>
        <PageRouter />
      </div>
    </ThemeProvider>
  );
};

// export
export default App;
