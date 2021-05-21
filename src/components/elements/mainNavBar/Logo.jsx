// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography, Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
  },
}));

/**
 * main
 */
const Logo = () => {
  // init hooks
  const classes = useStyles();

  return (
    <MuiLink className={`Logo ${classes.nav} flexrow`} component={Link} to={{ pathname: '/' }}>
      <Typography variant="caption" color="primary">
        pitchclean
      </Typography>
    </MuiLink>
  );
};

// export
export default Logo;
