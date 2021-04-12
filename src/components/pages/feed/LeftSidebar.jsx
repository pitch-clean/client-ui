// react
import React from 'react';
// components
import Sidebar from '../../elements/SideBar';

// main
const LeftSidebar = () => {

  return (
    <div className="LeftSidebar h100 flexcol" >
      <Sidebar isLeft />
    </div>
  );
};

// export
export default LeftSidebar;