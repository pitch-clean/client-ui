// react
import React from 'react';
import { useSelector } from 'react-redux';
// components
import Sidebar from '../../elements/SideBar';
import LSProfile from './LSProfile';
import ProfileTabs from './ProfileTabs';

/**
 * main
 */
const LeftSidebar = ({ baseRoute }) => {
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);

  return isAuthenticated ? (
    <Sidebar isLeft>
      <LSProfile />
      {/* (below) only enabled for profile view */}
      {baseRoute && <ProfileTabs baseRoute={baseRoute} />}
    </Sidebar>
  ) : (<div></div>);
};

// export
export default LeftSidebar;
