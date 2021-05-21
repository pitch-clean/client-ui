// react
import React from 'react';
// components
import Sidebar from '../../../elements/SideBar';
import News from './news/News';
// import PublicMarkets from './publicMarkets/PublicMarkets';

// main
const RightSidebar = () => {

  return (
    <Sidebar isLeft={false}>
      <News />
      {/* <PublicMarkets /> */}
    </Sidebar>
  );
};

// export
export default RightSidebar;
