// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { updateActiveConversationObj } from '../../../redux/actions/ViewActions';
// components
import MsgTitle from './MsgTitle';
import MsgGroupMedia from './MsgGroupMedia';
// seed
import { user1Conversation1, user1Conversation2 } from '../../../seed/testConversations';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    justifyContent: 'start',
    flexFlow: 'column',
  },
}));

/**
 * main
 *
 */
const MsgMain = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeConversationId = useSelector(s => s.view.messages.activeConversationId);
  // effects
  useEffect(() => {
    // call the last 20 messages with activeConversationId
    // console.log('calling with activeConversationId', activeConversationId)
    if (activeConversationId === 1) {
      dispatch(updateActiveConversationObj(user1Conversation1));
    } else if (activeConversationId === 2) {
      dispatch(updateActiveConversationObj(user1Conversation2));
    }
  }, [activeConversationId]);

  return (
    <Grid container className={`MsgMain ${classes.root}`}>
      <MsgTitle />
      <MsgGroupMedia />
    </Grid>
  );
};

// export
export default MsgMain;
