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
  const activeProfile = useSelector(s => s.auth.activeProfile);
  if (!activeProfile) {
    return <div />;
  }

  return (
    <Sidebar isLeft={false}>
      <LSProfile />
      <LSSuggestedConnections />
    </Sidebar>
  );
};

// export
export default LeftSidebar;
