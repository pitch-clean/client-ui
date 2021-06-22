// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// components
import MessagesList from './MessagesList';
import MsgInput from './MsgInput';
import MsgConvCtrls from './MsgConvCtrls';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    // overflow: `hidden`,
    justifyContent: 'space-between',
    height: `100%`,
  },
  paper: {
    // width: `200px`,
    // flex: '1 1',
    height: `100%`,
    width: `100%`,
  },
  container: {
    // flex: 1,
    // flexFlow: 'column',
    // display: `flex`,
    // justifyContent: 'space-between',
    // overflowY: 'scroll',
    width: `100%`,
    height: `100%`,
  },
}));



/**
 * main
 * view component
 */
const MsgGroupMedia = () => {
  // init hooks
  const classes = useStyles();
  // state
  const conversationsCt = useSelector(s => s.view.messages.conversationsArr.length);

  return (
    <Paper className={`MsgGroupMedia ${classes.root} flexrow w100`}>
      <div className={`${classes.container} flexcol`}>
        <MessagesList />
        <MsgInput />
      </div>
      <MsgConvCtrls />
      
    </Paper>
  );
};

// export
export default MsgGroupMedia;
