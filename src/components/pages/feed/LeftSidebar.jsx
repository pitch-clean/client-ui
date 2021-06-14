// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Tabs } from '@material-ui/core';
// components
import Sidebar from '../../elements/SideBar';
import LSProfile from './LSProfile';
import ProfileTabs from './ProfileTabs';

/**
 * main
 */
const LeftSidebar = () => {
  // init hooks
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);

  return isAuthenticated ? (
    <Sidebar isLeft>
      <LSProfile />
      <ProfileTabs />
    </Sidebar>
  ) : (<div></div>);
};

// export
export default LeftSidebar;
