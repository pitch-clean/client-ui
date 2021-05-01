// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider } from '@material-ui/core';
// components
import Search from './Search';
// import RecentMessages from './RecentMessages';
import Conversations from './Conversations';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    width: 0,
    border: `1px solid #b6b6b6`,
    [theme.breakpoints.up('md')]: {
      width: `33%`,
      paddingRight: `15px`,
    },
    [theme.breakpoints.up('xs')]: {
      width: `25%`,
      minWidth: 300,
      paddingRight: `5px`,
      paddingLeft: `10px`,
    },
  },
}));

/**
 * main
 *
 */
const MsgLS = () => {
  // init hooks
  const classes = useStyles();

  return (
    <Paper className={`${classes.root}`}>
      <Search />
      {/* <RecentMessages /> */}
      <Divider variant="fullWidth" />
      <Conversations />
    </Paper>
  );
};

// export
export default MsgLS;
