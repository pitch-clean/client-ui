// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography, Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
  },
}));

/**
 * main
 */
const Logo = () => {
  // init hooks
  const classes = useStyles();

  return (
    <MuiLink className={`Logo ${classes.root} flexrow`} component={Link} to={{ pathname: '/' }}>
      <Typography variant="caption" color="primary">
        pitchclean
      </Typography>
    </MuiLink>
  );
};

// export
export default Logo;
