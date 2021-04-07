// react
import React from 'react';
// components
import Sidebar from '../../elements/Sidebar';

// main
const LeftSidebar = () => {

  return (
    <div className="LeftSidebar h100 flexcol" >
      <Sidebar isLeft={true} />
    </div>
  );
};

// export
export default LeftSidebar;