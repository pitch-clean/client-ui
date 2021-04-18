// react
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// seed
const newsItems = [
  {
    title: 'Wall Street Journal: New ITC  Credits Rocket Renewables Stocks ',
    url: 'http://envest.pro',
    dtPublished: '2021-04-02T05:23:00Z',
  },
  {
    title: 'UtilityDIVE: New ITC Credits Rocket Renewables Stocks',
    url: 'http://envest.pro',
    dtPublished: '2021-04-02T21:45:00Z',
  },
  {
    title: 'POLITICO: Biden Squeezed Between Promises to Go Green and Bolster Unions',
    url: 'http://envest.pro',
    dtPublished: '2021-04-01T00:00:00Z',
  },
  {
    title: 'E&E News: Texas Grid Collapse Points To Looming Climate Tests',
    url: 'http://envest.pro',
    dtPublished: '2021-03-31T00:00:00Z',
  },
  {
    title: 'Seeking Alpha: NextEra: A Bet On Renewable Energy Growth',
    url: 'http://envest.pro',
    dtPublished: '2021-03-30T00:00:00Z',
  },
  {
    title: 'GreenTech Media: Telecom Firms Pile Into Spain’s Renewable Energy Market',
    url: 'http://envest.pro',
    dtPublished: '2021-03-25T00:00:00Z',
  },
];
// format fxn
const formatStringDt = dtStr => {
  const dtDate = new Date(dtStr);
  const now = new Date();
  const dtDeltaMs = now - dtDate;
  const dtDiffSec = Math.floor(dtDeltaMs / 1000);
  const dtDiffMin = Math.floor(dtDiffSec / 60);
  const dtDiffHrs = Math.floor(dtDiffMin / 60);
  const dtDiffDays = Math.floor(dtDiffHrs / 24);

  // logic to create the string
  let newStr = `ago`;
  if (dtDiffDays > 0) {
    newStr = `${dtDiffDays} days ${newStr}`;
  } else if (dtDiffHrs > 0) {
    newStr = `${dtDiffHrs} hours ${newStr}`;
  } else if (dtDiffMin > 0) {
    newStr = `${dtDiffMin} minutes ${newStr}`;
  }
  return newStr;
};

// main
const NewsList = () => {
  // state
  const [newsElemArr, setNewsElemArr] = useState([]);
  // effects
  useEffect(() => {
    const mockNewsElemArr = [];
    for (let idx = 0; idx < newsItems.length; idx += 1) {
      const newsItem = newsItems[idx];
      const newsElem = (
        <Link to={newsItem.url} className="newsItem linkCard w100 flexcol" >
          <div className="newsTitle">- {newsItem.title}</div>
          <div className="newsPubDt">{formatStringDt(newsItem.dtPublished)}</div>
        </Link>
      );
      mockNewsElemArr.push(newsElem);
    }
    setNewsElemArr(mockNewsElemArr);
  }, []);

  return <div className="NewsList w100 flexcol">{newsElemArr}</div>;
};

// export
export default NewsList;