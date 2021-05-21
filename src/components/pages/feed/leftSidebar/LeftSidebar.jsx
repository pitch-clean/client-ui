// react
import React from 'react';
import { useSelector } from 'react-redux';
// components
import Sidebar from '../../../elements/SideBar';
import LSProfile from './LSProfile';

/**
 * main
 */
const LeftSidebar = () => {
  // init hooks
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);

  return <Sidebar isLeft>{isAuthenticated && <LSProfile />}</Sidebar>;
};

// export
export default LeftSidebar;
