// react
import React from 'react';
import { useSelector } from 'react-redux';
// components
import Sidebar from '../../elements/SideBar';
import LSProfile from './LSProfile';
import LSSuggestedConnections from './LSSuggestedConnections';

// main
const LeftSidebar = () => {
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Sidebar isLeft />;
  }

  return (
    <Sidebar isLeft>
      <LSProfile />
      <LSSuggestedConnections />
    </Sidebar>
  );
};

// export
export default LeftSidebar;
