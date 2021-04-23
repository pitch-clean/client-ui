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
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: 'lightgreen',
        },
        '&$active': {
          color: 'lightblue',
        },
      },
      active: {},
      completed: {},
    },
  },
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
  root: {
    backgroundColor: '#d7d3d3',
  },
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
  document.addEventListener('keydown', onKeyDownBlurAll, false);
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
      <Grid
        container
        direction="column"
        justify="flex-start"
        className={`${classes.root} App w100`}
        ref={appRef}
      >
        <MainNavBar />
        <SubNav />
        <Grid container direction="column" component="div" className={`${classes.body} w100`}>
          <PageRouter />
          <Grid item className={`${classes.footer} w100`}>
            Footer
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

// export
export default App;
