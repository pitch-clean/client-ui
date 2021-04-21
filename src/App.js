// react
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PageRouter from './components/pages/PageRouter';
import MainNavBar from './components/elements/mainNavBar/MainNavBar';
import SubNav from './components/elements/subNav/SubNav';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { onKeyDownBlurAll } from './utils/keybinds';
import { updateLoginStatus } from './redux/actions/AuthActions';
// styling
import './App.css';
import { fixedHeight } from './components/utils/styleFxns';
// seed
import { profile } from './seed/testAuthProfile';
// constants
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4f4f4',
    },
    secondary: {
      main: '#11cb5f',
    },
    tertiary: {
      main: '#9f3e3e',
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: 600,
    },
    h4: {
      fontWeight: 700,
      fontSize: 25,
      letterSpacing: 0.9,
    },
    body1: {
      fontWeight: 500,
    },
  },
  darkBg: {
    '& *': {
      color: 'whitesmoke',
    },
  },
});
const useStyles = makeStyles(theme => ({
  root: {},
  body: {
    justifyContent: 'start',
    flex: 1,
  },
  footer: {
    backgroundColor: `black`,
    padding: `10px 20px`,
    height: `40px`,
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
  const isDarkMode = useSelector(s => s.view.isDarkMode);
  document.addEventListener('keydown', onKeyDownBlurAll, false);
  // style
  /** @type {React.CSSProperties} */
  const style = {
    justifyContent: `start`,
  };
  // effects
  // load the state for the activeprofile
  useEffect(() => {
    // load
    if (isTestMode) {
      // dispatch(updateLoginStatus(true, profile));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        className={`App w100 flexcol ${isDarkMode}`}
        style={{
          ...style,
          ...fixedHeight(100, 'vh'),
          flexFlow: `start`,
        }}
        ref={appRef}
      >
        <MainNavBar />
        <SubNav />
        <Grid container direction="column" className={`${classes.body} w100`}>
          <PageRouter />
          <Grid item className={`${classes.footer} w100`}>
            Footer
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

// export
export default App;
