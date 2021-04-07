// react
import React from 'react';
// components
import MarketCardList from './MarketCardList';

// main
const PublicMarkets = () => {
  const header = 'Public Markets';

  return (
    <div className="SidebarWidget PublicMarkets w100 flexcol" >
      <div className="header">{header}</div>
      <MarketCardList />
    </div>
  );
};

// export
export default PublicMarkets;