// react
import React from 'react';
import { Link } from 'react-router-dom';

// main
const InvestmentProgress = ({progressPct, offeringSlug}) => {
  return (
    <div className="InvestmentProgress" >
      <div className="remaining" >{`Remaining: ${100-progressPct}% | ${progressPct+'M'}`}</div>
      <div className="progressBarContainer w100 flexrow" >
        <div className="progressBar h100" style={{minWidth: `${progressPct}%`,}} ></div>
      </div>
      <Link
        to={`/invest/${offeringSlug}`}
        className="InvestButton h100 flexcol noselect"
      >
        Invest
      </Link>
    </div>
  );
};

// export
export default InvestmentProgress;
