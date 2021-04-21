// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// components
import ProfileNavButton from './ProfileNavButton';
import LoginRegister from './LoginRegister';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 50px`,
    color: `white`,
  },
}));

/**
 * main
 */
const ProfileLoginRegister = () => {
  // init hooks
  const classes = useStyles();
  const activeProfile = useSelector(s => s.auth.activeProfile);

  return (
    <Grid item className={`h100 flexrow ${classes.root}`}>
      {activeProfile ? <ProfileNavButton /> : <LoginRegister />}
    </Grid>
  );
};

// export
export default ProfileLoginRegister;
