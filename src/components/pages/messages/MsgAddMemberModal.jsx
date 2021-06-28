// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import Sidebar from '../../elements/SideBar';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    height: `100%`,
    width: `100%`,
  },
}));

/**
 * main
 */
const MsgConvCtrls = () => {
  // init hooks
  const classes = useStyles();

  return (
    <Sidebar h100 >
      <MemberCtrls />
    </Sidebar>
  );
};

export default MsgConvCtrls;