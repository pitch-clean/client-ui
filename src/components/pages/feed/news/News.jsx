// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, Paper, Typography, Divider } from '@material-ui/core';
// components
import NewsList from './NewsList';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    // width: `80%`,
    padding: '0px 16px',
    paddingBottom: '5px',
    [theme.breakpoints.up('sm')]: {
      // paddingRight: '20%',
    },
  },
  divider: {
    minHeight: `1px`,
    height: `1px`,
    minWidth: `100%`,
  },
  header: {
    paddingBottom: 0,
    paddingLeft: 5,
  },
}));

/**
 * main
 */
const News = () => {
  // init hooks
  const classes = useStyles();

  return (
    <Paper className={`${classes.root} News SidebarWidget w100 flexcol`} outlined elevation={3}>
      <CardHeader
        className={`w100 ${classes.header}`}
        title={
          <Typography variant="h6" component="h1" color="textPrimary">
            Industry News
          </Typography>
        }
      />
      <Divider className={classes.divider} variant="fullWidth" component="div" />
      {/* <div className="header w100">Industry News</div> */}
      <NewsList />
    </Paper>
  );
};

// export
export default News;