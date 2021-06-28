// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Get } from '../../../utils/requests';
import { updateActiveConversationObj, updateMessagesArr } from '../../../redux/actions/views/MessagesActions';
// components
import MsgTitle from './MsgTitle';
import MessagesList from './MessagesList';
import MsgInput from './MsgInput';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'space-between',
    width: `100%`,
  },
}));
const getMessagesByConversationId = async conversationId => {
  const url = `${window.env.api.messages}/conversation/${conversationId}`;
  const messagesArr = await Get(url);
  return messagesArr;
};

/**
 * main
 * data component
 */
const MsgMain = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeConversationIdx = useSelector(s => s.view.messages.activeConversationIdx);
  const conversationsArr = useSelector(s => s.view.messages.conversationsArr);
  const activeConversationObj = useSelector(s => s.view.messages.activeConversationObj) || {};
  const conversationsCt = conversationsArr.length;
  // effects
  useEffect(async () => {
    if (conversationsCt) {
      dispatch(updateActiveConversationObj(conversationsArr[activeConversationIdx]))
    }
  }, [activeConversationIdx, conversationsCt]);
  useEffect(async () => {
    if (activeConversationObj._id) {
      const messagesArr = await getMessagesByConversationId(activeConversationObj._id);
      dispatch(updateMessagesArr(messagesArr))
    }
  }, [activeConversationObj._id]);

  return (
    <Paper className={`MsgMain ${classes.root} flexcol h100`}>
      <MsgTitle />
      {activeConversationObj._id && <MessagesList />}
      <MsgInput />
    </Paper>
  );
};

// export
export default MsgMain;
