// react
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// utils
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { onKeyDownBlurAll } from './utils/keybinds';
import { updateLoginStatus } from './redux/actions/AuthActions';
import { baseTheme } from './styling/themes';
// components
import PageRouter from './components/pages/PageRouter';
import MainNavBar from './components/elements/mainNavBar/MainNavBar';
// styling
import './App.css';
import './config.dev.js';
// seed
import { profile } from './seed/testAuthProfile';

// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eaebe8',
    minHeight: '100vh',
    maxHeight: '100vh',
    justifyContent: 'flex-start',
  },
  navGroup: {
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
}));

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
  useEffect(() => {
    // load
    if (isTestMode) {
      dispatch(updateLoginStatus(true, profile));
    }
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <div className={`App ${classes.root} flexcol`} ref={appRef}>
        {/* <div className={`${classes.navGroup} flexcol w100`}> */}
          <MainNavBar />
        {/* </div> */}
        <PageRouter />
      </div>
    </ThemeProvider>
  );
};

// export
export default App;
