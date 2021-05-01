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
  root: {
    flexFlow: `column`,
    justifyContent: `flex-start`,
    borderTop: `1px solid black`,
  },
  overflow: {
    flex: `1 1 auto`,
    width: `100%`,
    '& .MuiCardHeader-content': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
}));
const initConvo = 0;

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
  const conversations = useSelector(s => s.auth.activeProfile.conversations);
  const tabsArr = [];
  const sortedConvos = conversations.sort((a, b) => {
    return new Date(a.lastMessage.dtReceipt) - new Date(b.lastMessage.dtReceipt); // descending
  });
  for (let i = 0; i < sortedConvos.length; i += 1) {
    tabsArr.push(<ConversationCard idx={i} />);
  }

  // effects
  useEffect(() => {
    dispatch(
      updateActiveConversation({
        conversationId: conversations[initConvo].conversationId,
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
        aria-label="Vertical tabs example"
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
