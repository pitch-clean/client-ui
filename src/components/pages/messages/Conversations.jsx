// react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Tabs } from '@material-ui/core';
import { updateActiveConversation } from '../../../redux/actions/ViewActions';
// components
import ConversationCard from './ConversationCard';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
}));
const initConvo = 0;
// fxns
const sortByDt = obj => {
  return Object.entries(obj).sort((a, b) => {
    return new Date(b[1].lastMessage.dtReceipt) - new Date(a[1].lastMessage.dtReceipt);
  });
};

/**
 * main
 * Vertical Tabs list
 */
const Conversations = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeConversationIdx = useSelector(s => s.view.messages.activeConversationIdx);
  const conversationsObj = useSelector(s => s.auth.activeProfile.conversations);
  // sort
  const sortedConvos = sortByDt(conversationsObj);
  const tabsArr = [];
  for (let i = 0; i < sortedConvos.length; i += 1) {
    const [conversationId, conversationObj] = sortedConvos[i];
    tabsArr.push(
      <ConversationCard
        tabIdx={i}
        conversationId={conversationId}
        conversationObj={conversationObj}
      />,
    );
  }
  // effects
  useEffect(() => {
    dispatch(
      updateActiveConversation({
        conversationId: sortedConvos[0][0],
        idx: initConvo,
      }),
    );
  }, []);

  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={activeConversationIdx}
        aria-label="Vertical tabs"
        className={classes.tabs}
        textColor="inherit"
      >
        {tabsArr}
      </Tabs>
    </>
  );
};

// export
export default Conversations;
