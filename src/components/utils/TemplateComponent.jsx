// react
import React, { useState, useEffect } from 'react';
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
  // state
  const x = useSelector(s => s.view);
  const [xstate, xstateSet] = useState(true);
  // effects
  useEffect(() => {}, []);

  return (
    <Grid item className={`TemplateComponent ${classes.root}`} ></Grid>
  );
};

// export
export default TemplateComponent;
