// react
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ButtonBase, Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 15px`,
    border: `1px solid whitesmoke`,
    borderRadius: '7px',
  },
}));
const envProfilePath = 'profile';

// main
const ProfileDropDown = () => {
  // init hooks
  const classes = useStyles();
  // state
  const firstName = useSelector(s => s.auth.activeProfile.pii.firstName);
  const alias = useSelector(s => s.auth.activeProfile.alias);

  return (
    <MuiLink color="inherit" component={Link} to={`/${envProfilePath}/${alias}`}>
      <ButtonBase className={classes.root} variant="outlined">
        <Typography variant="subtitle1" color="inherit" component="div">
          {firstName}
        </Typography>
      </ButtonBase>
    </MuiLink>
  );
};

// export
export default ProfileDropDown;
