// react
import React from 'react';
// utils
import { Divider } from '@material-ui/core';
// components
import MsgSearch from './MsgSearch';
// import RecentMessages from './RecentMessages';
import Conversations from './Conversations';
import Sidebar from '../../elements/SideBar';

/**
 * main
 * data component
 */
const MsgLS = () => {

  return (
    <Sidebar h100>
      <MsgSearch />
      <Divider variant="fullWidth" />
      <Conversations />
    </Sidebar>
  );
};

// export
export default MsgLS;
