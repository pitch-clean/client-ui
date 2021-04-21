// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Chip, Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  link: {
    margin: `5px 7px`,
    padding: `7px`,
  },
  chip: {
    padding: `7px`,
  },
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
      <MuiLink component={Link} to={`/${envLoginPath}`} className={`${classes.link}`}>
        <Typography color="primary">Login</Typography>
      </MuiLink>
      <MuiLink component={Link} to={`/${envRegisterPath}`} className={`${classes.link}`}>
        <Chip
          clickable
          label={<Typography color="primary">Sign up</Typography>}
          variant="outlined"
          color="primary"
          className={`${classes.chip}`}
        />
      </MuiLink>
    </Grid>
  )
};

// export
export default LoginRegister;
