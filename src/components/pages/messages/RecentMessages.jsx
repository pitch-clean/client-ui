// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link as MuiLink, Paper } from '@material-ui/core';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {
  },
}));

/**
 * main
 *
 */
const RecentMessages = () => {
  // init hooks
  const classes = useStyles();
  return (
    <Grid className={`RecentMessages ${classes.root}`}>
      
    </Grid>
  );
};

// export
export default RecentMessages;
