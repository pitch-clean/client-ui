// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
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
    justifyContent: 'space-between',
    overflowY: 'scroll',
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
  console.log('activeConversationObj', activeConversationObj)

  return (
    <Paper square className={`MsgContainer ${classes.root}`}>
      {activeConversationObj && <MessagesList />}
      <MsgInput />
    </Paper>
  );
};

// export
export default MsgContainer;
