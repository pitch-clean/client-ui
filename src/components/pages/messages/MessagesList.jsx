// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// components
import MessageCard from './MessageCard';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex-start',
    overflowY: 'scroll',
    height: `100%`,
    scrollbarWidth: `none`,
  },
}));

/**
 * data
 */
const MessagesListData = () => {
  const conversationObj = useSelector(s => s.view.messages.activeConversationObj) || {};
  const messagesArr = conversationObj.messages || [];
  // build
  const messagesElemArr = [];
  for (let idx = 0; idx < messagesArr.length; idx += 1) {
    messagesElemArr.push(<MessageCard idx={idx} />);
  }
  return <>{messagesElemArr}</>
};

/**
 * main
 */
const MessagesList = () => {
  // init hooks
  const classes = useStyles();
  // state

  return (
    <Paper square className={`MessagesList ${classes.root} flexcol`}>
      <MessagesListData />
    </Paper>
  );
};

// export
export default MessagesList;
