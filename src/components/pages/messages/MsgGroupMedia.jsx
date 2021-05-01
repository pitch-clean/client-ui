// react
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import MsgContainer from './MsgContainer';
// import { updateActiveConversationObj } from '../../../redux/actions/ViewActions';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    flexFlow: 'row',
    display: 'flex',
  },
  paper: {
    height: `100%`,
    width: `200px`,
    flexFlow: 'column',
  },
}));

/**
 * main
 *
 */
const MsgGroupMedia = () => {
  // init hooks
  const classes = useStyles();

  return (
    <Paper container className={`MsgGroupMedia ${classes.root}`}>
      <MsgContainer />
      <Paper square className={`MsgGroupMedia ${classes.paper}`}></Paper>
    </Paper>
  );
};

// export
export default MsgGroupMedia;
