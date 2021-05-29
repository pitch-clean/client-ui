// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography, Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 5,
    padding: 10,
    '& > *': {
      padding: '0px 10px',
      fontSize: `1.2rem`,
    },
  },
  emoji: {
    textShadow: `0 0 0 #ececec`,
    color: `transparent`,
    fontSize: `2rem`,
    lineHeight: 0,
    padding: 0,
    transform: "matrix(0.921, 0.391, -0.391, 1.21, 0, 3)",
  },
}));

/**
 * main
 */
const Logo = () => {
  // init hooks
  const classes = useStyles();

  return (
    <MuiLink className={`Logo ${classes.root} flexrow navBarLink`} component={Link} to={{ pathname: '/' }} underline="none">
      <div className={`emoji ${classes.emoji}`}>&#x26A1;</div>
      <Typography variant="caption" color="primary">
        pitchclean
      </Typography>
    </MuiLink>
  );
};

// export
export default Logo;
