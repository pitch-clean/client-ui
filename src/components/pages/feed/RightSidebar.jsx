// react
import React from 'react';
// components
import Sidebar from '../../elements/Sidebar';
import News from './news/News';
import PublicMarkets from './publicMarkets/PublicMarkets';

// main
const RightSidebar = () => {

  return (
    <div className="RightSidebar h100 flexcol" >
      <Sidebar isLeft={false} >
        <News />
        <PublicMarkets />
      </Sidebar>
    </div>
  );
};

// export
export default RightSidebar;