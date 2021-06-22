// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip, Link as MuiLink } from '@material-ui/core';
import StyledTab from './StyledTab';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    fontSize: `1rem`,
  },
  button: {
    padding: `0 15px`,
    border: `1px solid whitesmoke`,
    borderRadius: '7px',
  },
  createOffering: {
    padding: `0 15px`,
    margin: `0 45px`,
  },
  link: {
    textDecoration: 'none',
  },
  text: {
    fontSize: `1rem`,
    textDecoration: 'none',
    padding: 10,
  },
}));

/**
 * main
 */
const LoginOrRegister = () => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`LoginOrRegister ${classes.root} navBarLink flexrow`}>
      <MuiLink className={`${classes.link}`} color="inherit" component={Link} to={`/${window.env.client.login}`} >
        <StyledTab label="Login" textColor="primary" />
      </MuiLink>
    </div>
  );
};

// export
export default LoginOrRegister;
