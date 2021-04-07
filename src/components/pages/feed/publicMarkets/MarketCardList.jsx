// react
import React, { useState, useEffect } from 'react';
import MarketCard from './MarketCard';
// seed
const seedMktElems = [
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
  const [userMarketsElemArr, setUserMarketsElemArr] = useState(seedMktElems || []);
  // effects
  useEffect(() => {
    const mockUserMarketsElemArr = [];

    for (let idx = 0; idx < seedMktElems.length; idx += 1) {
      const marketObj = seedMktElems[idx];
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