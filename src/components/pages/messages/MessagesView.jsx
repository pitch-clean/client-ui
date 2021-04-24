// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link as MuiLink } from '@material-ui/core';
// components
import MsgLS from './MsgLS';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
}));

/**
 * main
 * 
 */
const MessagesView = () => {
  // init hooks
  const classes = useStyles();
  return (
    <Grid item className={`MessagesView ${classes.root}`} >
      <MsgLS />
    </Grid>
  );
};

// export
export default MessagesView;
