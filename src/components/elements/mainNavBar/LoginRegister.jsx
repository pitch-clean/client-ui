// react
import React from 'react';

// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Chip, Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  
}));
const envLoginPath = 'login';
const envRegisterPath = 'register';

/**
 * main
 */
const LoginRegister = () => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid item className="h100 flexrow">
      
    </Grid>
  )
};

// export
export default LoginRegister;
