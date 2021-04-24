// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link as MuiLink } from '@material-ui/core';
// components
// import Sample from './Sample';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
}));

/** className={`MsgLS ${classes.root}`}
 * main
 * 
 */
const MsgMain = () => {
  // init hooks
  const classes = useStyles();
  return (
    <Grid item className={`MsgMain ${classes.root}`} >
      <Grid item className={`${classes.leftCol}`} ></Grid>
    </Grid>
  );
};

// export
export default MsgMain;
