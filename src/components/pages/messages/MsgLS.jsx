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
  root: {},
}));

/**
 * main
 *
 */
const MsgLS = () => {
  // init hooks
  const classes = useStyles();
  return (
    <Sidebar>
      <LSSuggestedConnections />
    </Sidebar>
  );
};

// export
export default MsgLS;
