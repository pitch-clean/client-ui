// react
import React, { useState, useEffect } from 'react';

// TODO: CREATE ACTUAL MARKETOBJ WITH BETTER LABELS
const marketObjTest = {
  title: 'iShares Clean Energy ETF',
  ticker: 'FAN',
};
// fxns
const fetchMarketData = ticker => {
  const endpoint = `https://www.sitename.com/api/ticker/1D/`;
  // const mktPriceData = fetch();
  return {};
};

// main
const MarketCard = ({marketObj}) => {
  // state
  const [marketTickerInfo, setMarketTickerInfo] = useState({});
  // effects
  // get the market price and vol list for a given ticker
  useEffect(() => {
    const mktData = fetchMarketData(marketObj.ticker);
    setMarketTickerInfo(mktData);
  }, []);
  return (
    <div className="MarketCard w100 flexcol" >
      <div className="header">{marketObj.title}</div>

      {/* separate component */}
      <div className="chart w100 flexcol">
        <div className="dailyChange flexrow">
          <div className="pctChange">-0.9%</div>
          <div className="amtChange">-19.00</div>
        </div>
        {/* separate component */}
        <div className="chartContainer w100 flexcol">
          <div className="chartRange"></div>
          {/* separate component */}
          <div className="chart w100 flexrow">
            <div className="yAxis"></div>
            <div className="plot"></div>
          </div>
          <div className="xAxis"></div>
        </div>
      </div>
    </div>
  );
};

// export
export default MarketCard;