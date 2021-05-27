// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip, Link as MuiLink } from '@material-ui/core';
// components
// import LoginRegister from './LoginRegister';
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
const ProfileLoginRegister = () => {
  // init hooks
  const classes = useStyles();
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);

  return (
    <div className={`${classes.root} h100 flexrow`}>
      {/* {isAuthenticated ? <ProfileNavButton /> : <LoginRegister />} */}
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
export default ProfileLoginRegister;
