// react
import React from 'react';
// components
import Sidebar from '../../elements/SideBar';
import News from './news/News';
// import PublicMarkets from './publicMarkets/PublicMarkets';

// main
const RightSidebar = () => {

  return (
    <Sidebar isLeft={false} >
      <div className="RightSidebar h100 flexcol">
        <News />
        {/* <PublicMarkets /> */}
      </div>
    </Sidebar>
  );
};

// export
export default RightSidebar;
