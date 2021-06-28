// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import Sidebar from '../../../elements/SideBar';
import MemberCtrls from './MemberCtrls';
import AddMemberModal from './AddMemberModal';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    height: `100%`,
    width: `100%`,
  },
}));
// fxns
const updateSearch = ({ setter } , e) => {
  setter(e.target.value);
};

/**
 * main
 */
const MsgRS = () => {
  // init hooks
  const classes = useStyles();
  // state
  const activeConversationId = useSelector(s => s.view.messages.activeConversationObj._id);
  const [isOpen, isOpenSet] = useState(false);
  // const conversationsCt = useSelector(s => s.view.messages.conversationsArr.length);

  return (
    <Sidebar h100 elevation={1}>
      <MemberCtrls isOpen={isOpen} isOpenSet={isOpenSet} />
      {activeConversationId && <AddMemberModal isOpen={isOpen} isOpenSet={isOpenSet} />}
    </Sidebar>
  );
};

export default MsgRS;