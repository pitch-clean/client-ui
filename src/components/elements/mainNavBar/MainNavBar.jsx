// react
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Link as MuiLink } from '@material-ui/core';
// components
import ProfileLoginRegister from './ProfileLoginRegister';
import InfoGroup from './InfoGroup';
// utils
// styles
import './MainNavBar.css';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'space-between',
    alignItems: 'centered',
    padding: 5,
  },
}));

/**
 * main
 */
const MainNavBar = () => {
  // init hooks
  const ref1 = useRef(null);
  const classes = useStyles();
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
  // effects
  useEffect(() => {
    console.log(ref1.current.getBoundingClientRect())
  }, [ref1]);

  return (
    <Grid container direction="row" className={`w100 flexrow MainNavBar ${classes.root}`}>
      <MuiLink component={Link} to={{ pathname: '/' }} ref={ref1}>
        <Button style={{ lineHeight: 1 }}>
          <Typography variant="h4" color="secondary">
            EN
          </Typography>
          <Typography variant="h4" color="primary">
            VEST
          </Typography>
        </Button>
      </MuiLink>
      {!isAuthenticated && <InfoGroup />}
      <ProfileLoginRegister />
    </Grid>
  );
};

// export
export default MainNavBar;
