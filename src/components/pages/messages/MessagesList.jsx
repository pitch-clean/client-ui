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
    flex: 1,
    flexFlow: 'column',
    display: `flex`,
    justifyContent: 'flex-start',
    overflowY: 'scroll',
    height: `100%`,
  },
}));

/**
 * main
 *
 */
const MessagesList = () => {
  // init hooks
  const classes = useStyles();
  // state
  const messagesLen = useSelector(s => s.view.messages.activeConversationObj.messages.length);
  // build
  const messagesArr = [];
  for (let idx = 0; idx < messagesLen; idx += 1) {
    messagesArr.push(<MessageCard idx={idx} />);
  }

  return (
    <Paper square className={`MessagesList ${classes.root}`}>
      {messagesArr}
    </Paper>
  );
};

// export
export default MessagesList;
