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

/**
 * main
 */
const TemplateComponent = () => {
  // init hooks
  const classes = useStyles();
  return (
    <Grid item className={`TemplateComponent ${classes.root}`} ></Grid>
  );
};

// export
export default TemplateComponent;
