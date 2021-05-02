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
import { conversationObj } from '../../../seed/testConversations';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    justifyContent: 'start',
    flexFlow: 'column',
    maxHeight: `100%`,
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
    dispatch(updateActiveConversationObj(conversationObj[activeConversationId]));
  }, [activeConversationId]);

  return (
    <Grid container className={`MsgMain ${classes.root}`}>
      {activeConversationId && <MsgTitle />}
      <MsgGroupMedia />
    </Grid>
  );
};

// export
export default MsgMain;
