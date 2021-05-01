// react
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { onKeyDownBlurAll } from './utils/keybinds';
import { updateLoginStatus } from './redux/actions/AuthActions';
// components
import PageRouter from './components/pages/PageRouter';
import MainNavBar from './components/elements/mainNavBar/MainNavBar';
import SubNav from './components/elements/subNav/SubNav';
// styling
import './App.css';
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
    minHeight: '100vh',
    maxHeight: '100vh',
    height: '100vh',
  },
  body: {
    justifyContent: 'start',
    flex: 1,
    flexFlow: 'column',
    overflow: 'scroll',
  },
  navGroup: {
    flexFlow: 'column',
    justifyContent: 'flex-start',
    maxWidth: '100%',
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
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        className={`${classes.root} App w100`}
        ref={appRef}
      >
        <Grid container className={classes.navGroup}>
          <MainNavBar />
          <SubNav />
        </Grid>
        <Grid container className={`${classes.body} w100 f1`}>
          <PageRouter />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

// export
export default App;
