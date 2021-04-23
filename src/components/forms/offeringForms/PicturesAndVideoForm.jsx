// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// utils
// components
// import Sample from './Sample';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
}));

/**
 * main
 */
const PicturesAndVideoForm = () => {
  // init hooks
  const classes = useStyles();
  return (
    <Grid item className={`PicturesAndVideoForm ${classes.root}`} ></Grid>
  );
};

// export
export default PicturesAndVideoForm;
