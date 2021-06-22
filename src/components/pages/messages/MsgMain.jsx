// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { updateActiveConversationObj } from '../../../redux/actions/views/MessagesActions';
// components
import MsgTitle from './MsgTitle';
import MsgGroupMedia from './MsgGroupMedia';
import { Paper } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flex: '1 0',
    justifyContent: 'start',
    flexFlow: 'column',
    maxHeight: `100%`,
  },
}));

/**
 * main
 * data component
 */
const MsgMain = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeConversationIdx = useSelector(s => s.view.messages.activeConversationIdx)
  const conversationsArr = useSelector(s => s.view.messages.conversationsArr)
  const conversationsCt = conversationsArr.length
  // effects
  useEffect(() => {

    conversationsCt && dispatch(updateActiveConversationObj(conversationsArr[activeConversationIdx]))
  }, [activeConversationIdx, conversationsCt]);

  return (
    <Paper className={`MsgMain ${classes.root} flexcol h100`}>
      <MsgTitle />
      <MsgGroupMedia />
    </Paper>
  );
};

// export
export default MsgMain;
