// react
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { updateMessagesArr } from '../../../redux/actions/views/MessagesActions';
// components
import MessageCard from './MessageCard';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'start',
    overflowY: 'scroll',
    height: `100%`,
    scrollbarWidth: `none`,
    flexGrow: 1,
    minHeight: 0,
  },
  emptyRoot: {},
}));

/**
 * main
 */
const MessagesList = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const ref = useRef();
  // state
  const messagesLen = useSelector(s => s.view.messages.messagesArr.length);
  const msgarr = useSelector(s => s.view.messages.messagesArr);
  // build
  const messagesElemArr = [];
  for (let idx = 0; idx < messagesLen; idx += 1) {
    messagesElemArr.push(<MessageCard idx={idx} />);
  }
  // effects
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollTopMax;
    ref.current && ref.current.scrollIntoView()
  }, [msgarr]);

  return  (
    <Paper className={`MessagesList ${classes.root} flexcol w100`} square ref={ref}>
      {messagesElemArr.length > 0 ? messagesElemArr : (
        <Typography className={`MessagesList ${classes.emptyRoot} flexcol w100`} color="textSecondary">Conversation is empty</Typography>
      )}
    </Paper>
  );
};

// export
export default MessagesList;
