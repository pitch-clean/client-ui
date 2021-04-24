// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link as MuiLink } from '@material-ui/core';
// components
import SideBar from '../../elements/SideBar';
// constants
const useStyles = makeStyles(theme => ({
  root: {

  },
}));

/**
 * main
 * 
 */
const MsgRS = () => {
  // init hooks
  const classes = useStyles();
  return (
    <SideBar className={`MsgRS ${classes.root}`}>
      {/* <Grid item className={`${classes.leftCol}`} ></Grid> */}
    </SideBar>
  );
};

// export
export default MsgRS;
