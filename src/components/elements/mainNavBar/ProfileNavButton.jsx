// react
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link as MuiLink } from '@material-ui/core';
// components
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
const ProfileNavButton = () => {
  // init hooks
  const classes = useStyles();
  // state
  const firstName = useSelector(s => s.auth.activeProfile.pii.firstName);
  const alias = useSelector(s => s.auth.activeProfile.alias);
  // const profileClass = useSelector(s => s.auth.activeProfile.profileClass);
  // const activeProfile = useSelector(s => s.auth.activeProfile);

  return (
    <div className={`ProfileNavButton ${classes.root} flexrow navBarLink`}>
      {/* {profileClass === 'sponsor' && (
        <MuiLink className={`navBarLink`} color="inherit" component={Link} to={`/${window.env.client.offerings}`}>
          <Typography
            className={`${classes.createOffering} navBarLink`}
            variant="subtitle1"
            color="inherit"
            component="div"
          >
            Create Offering
          </Typography>
        </MuiLink>
      )} */}
      <MuiLink className={`${classes.link} navBarLink`} color="inherit" component={Link} to={`/${window.env.client.profile}/${alias}`}>
        <StyledTab label={firstName} textColor="primary" />
      </MuiLink>
    </div>
  );
};

// export
export default ProfileNavButton;
