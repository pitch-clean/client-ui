// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
// components
import MessagesList from './MessagesList';
import MsgInput from './MsgInput';
// import { updateActiveConversationObj } from '../../../redux/actions/ViewActions';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    flexFlow: 'column',
    display: `flex`,
  },
}));

/**
 * main
 *
 */
const MsgContainer = () => {
  // init hooks
  const classes = useStyles();
  const activeConversationObj = useSelector(s => s.view.messages.activeConversationObj);
  // build
  // const messagesElemList = messages.map(() => {});

  return activeConversationObj ? (
    <Paper square className={`MsgContainer ${classes.root}`}>
      <MessagesList />
      <MsgInput />
    </Paper>
  ) : (
    <div />
  );
};

// export
export default MsgContainer;
