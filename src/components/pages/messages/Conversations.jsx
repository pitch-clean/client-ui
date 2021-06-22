// react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Tabs } from '@material-ui/core';
import { updateActiveConversation, updateConversationsArr } from '../../../redux/actions/views/MessagesActions';
// components
import ConversationCard from './ConversationCard';
import { Get } from '../../../utils/requests';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
}));
const initConvo = 0;
// fxns
const sortByDt = arr => {
  return arr.sort((a, b) => {
    return b.dtUpdated - a.dtUpdated;
  })
};
/**
 * view component
 * Vertical Tabs list
 */
const ConversationsView = () => {
  return (
    <div></div>
  );
};

/**
 * main
 * data component
 * Vertical Tabs list
 */
const Conversations = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeConversationIdx = useSelector(s => s.view.messages.activeConversationIdx);
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const conversationsCt = useSelector(s => s.view.messages.conversationsArr.length);
  const tabsArr = [];
  for (let i = 0; i < conversationsCt; i += 1) {
    tabsArr.push(
      <ConversationCard
        tabIdx={i}
      />,
    );
  }
  // effects
  useEffect(async () => {
    // get the messages from active profile
    const url = `${window.env.api.conversations}/user/${activeProfileId}`;
    const conversations = await Get(url);
    const sortedConvos = sortByDt(conversations);
    dispatch(updateConversationsArr(sortedConvos))
  }, []);

  return (
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
  );
};

// export
export default Conversations;
