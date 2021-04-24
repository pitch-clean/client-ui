// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';
// components
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';
import FeedContent from './FeedContent';
// style
import './FeedView.css';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `7px 0`,
    backgroundColor: 'whitesmoke',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
}));

// main
const FeedView = () => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid className={`${classes.root} FeedView w100`} container direction="row">
      <LeftSidebar />
      <FeedContent />
      <RightSidebar />
    </Grid>
  );
};

// export
export default FeedView;