// react
import React, { useState, useEffect } from 'react';
import MarketCard from './MarketCard';
// seed
const seedMkts = [
  {
    title: 'iShares Clean Energy ETF',
    ticker: 'FAN',
  },
  {
    title: 'Invesco Wind Energy',
    ticker: 'WND',
  }
];

// main
const MarketCardList = () => {
  // state
  const [userMarketsElemArr, setUserMarketsElemArr] = useState([]);
  // effects
  useEffect(() => {
    const mockUserMarketsElemArr = [];

    for (let idx = 0; idx < seedMkts.length; idx += 1) {
      const marketObj = seedMkts[idx];
      mockUserMarketsElemArr.push(<MarketCard marketObj={marketObj} />);
    }
    setUserMarketsElemArr(mockUserMarketsElemArr);
  }, [])
  
  return (
    <div className="MarketCardList w100 flexcol" >
      {userMarketsElemArr}
    </div>
  );
};

// export
export default MarketCardList;