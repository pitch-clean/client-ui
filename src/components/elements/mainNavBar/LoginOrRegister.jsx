// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip, Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 50px`,
    color: `white`,
  },
  link: {
    margin: `5px 7px`,
    padding: `7px`,
  },
  chip: {
    padding: `7px`,
  },
}));

/**
 * main
 */
const LoginOrRegister = () => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`LoginOrRegister ${classes.root} h100 flexrow`}>
      <MuiLink component={Link} to={`/${window.env.client.login}`} className={`${classes.link}`}>
        <Typography color="primary">Login</Typography>
      </MuiLink>
      <MuiLink component={Link} to={`/${window.env.client.register}`} className={`${classes.link}`}>
        <Chip
          clickable
          label={<Typography color="primary">Sign up</Typography>}
          variant="outlined"
          color="primary"
          className={`${classes.chip}`}
        />
      </MuiLink>
    </div>
  );
};

// export
export default LoginOrRegister;
