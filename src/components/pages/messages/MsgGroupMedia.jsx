// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import MessagesList from './MessagesList';
import MsgInput from './MsgInput';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    flexFlow: 'row',
    display: 'flex',
    overflow: `hidden`,
  },
  paper: {
    width: `200px`,
    flexFlow: 'column',
  },
  container: {
    maxHeight: `100%`,
    height: `100%`,
    minHeight: `100%`,
    display: 'flex',
    flexFlow: 'column',
    flex: 1,
  },
}));

/**
 * main
 *
 */
const MsgGroupMedia = () => {
  // init hooks
  const classes = useStyles();
  // state
  const activeConversationObj = useSelector(s => s.view.messages.activeConversationObj);

  return (
    <Paper container className={`MsgGroupMedia ${classes.root}`}>
      <div className={classes.container}>
        {activeConversationObj && <MessagesList />}
        <MsgInput />
      </div>
      {/* <MsgContainer /> */}
      <Paper square className={`MsgGroupMedia ${classes.paper}`}></Paper>
    </Paper>
  );
};

// export
export default MsgGroupMedia;
