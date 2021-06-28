// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import MsgLS from './MsgLS';
import MsgMain from './MsgMain';
import MsgRS from './msgRS/MsgRS';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'space-between',
    alignItems: 'start',
  },
}));

/**
 * main
 */
const MessagesView = () => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`MessagesView ${classes.root} page flexrow h100`}>
      <MsgLS />
      <MsgMain />
      <MsgRS />
    </div>
  );
};

// export
export default MessagesView;
