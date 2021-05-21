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
    padding: '0px 16px',
    paddingBottom: '5px',
    boxShadow: `
      0px 2px 1px -1px rgba(0,0,0,0.03),
      0px 1px 1px 0px rgba(0,0,0,0.02),
      0px 1px 3px 0px rgba(0,0,0,0.01)
    `,
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
    <Paper className={`${classes.root} News SidebarWidget w100 flexcol`} elevation={0}>
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