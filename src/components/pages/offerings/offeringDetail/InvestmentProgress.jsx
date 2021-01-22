// react
import React from 'react';
import { Link } from 'react-router-dom';

// main
const InvestmentProgress = ({progressPct, offeringSlug}) => {
  return (
    <div
      className="InvestmentProgress"
      style={{
        display: `grid`,
        gridTemplateColumns: `minmax(0, 90%) minmax(0, 1fr)`,
        gridTemplateRows: `auto minmax(50%, 1fr)`,
        gridTemplateAreas: `
          'remaining remaining'
          'progressBar investButton'
        `,
        gridArea: `progress`,
        padding: `0 5px`,
        fontSize: `13px`,
        marginBottom: `10px`,
      }}
    >
      <div className="remaining" style={{gridArea: `remaining`, justifySelf: `start`, alignSelf: `start`, marginLeft: `10px`, marginBottom: `5px`, padding: `0 5px`}} >{`Remaining: ${100-progressPct}% | ${progressPct+'M'}`}</div>
      <div className="progressBarContainer w100 flexrow" style={{gridArea: `progressBar`, backgroundColor: `white`, padding: `1px`, justifyContent: `start`,}} >
        <div className="progressBar h100" style={{backgroundColor: `darkgreen`, minWidth: `${progressPct}%`, }} ></div>
      </div>
      <Link
        to={`/invest/${offeringSlug}`}
        className="InvestButton h100 flexcol noselect"
        style={{
          gridArea: `investButton`,
          border: `1px solid black`,
          cursor: `pointer`,
          margin: ` 0 5px`,
          textDecoration: `unset`,
          color: `inherit`,
          backgroundColor: `rgb(146, 165, 146)`,
        }}
      >
        Invest
      </Link>
    </div>
  );
};

// export
export default InvestmentProgress;
