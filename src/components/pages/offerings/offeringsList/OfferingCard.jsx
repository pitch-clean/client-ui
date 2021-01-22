// react
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// utils
import { fixedHeight } from '../../../utils/styleFxns';
import {activateFavorite} from '../../../utils/eventHandlers';
// constants
const filledStar = '\u2605';
const openStar = '\u2606';
const calculateTermLength = (timeDeltaMs) => {
  const totalTermDays = Math.floor(timeDeltaMs / (1000*60*60*24))
  const termYears = Math.floor(totalTermDays / 365.25);
  const termDays = Math.round(totalTermDays - (termYears * 365.25));
  const yearsPlural = termYears > 1 ? 'years' : 'year';
  const daysPlural = termDays > 1 ? 'days' : 'day';
  const termYearsStr = totalTermDays >= 365.25 ? `${termYears} ${yearsPlural}, ${termDays} ${daysPlural}` : `${termDays} ${daysPlural}`;
  return termYearsStr;
};

// main
const OfferingCard = ({offeringObj}) => {
  // TODO: delete this state
  const [isFavorited, setIsFavorited] = useState(false);
  // console.log(offeringObj.financials.amtFunded, offeringObj.financials.fundTarget);
  const fundPctCSS = Math.round(100*(offeringObj.financials.amtFunded / offeringObj.financials.fundTarget));
  const expectedReturnPct = Math.round(10000 * (offeringObj.financials.expectedReturn - offeringObj.financials.fundTarget) / offeringObj.financials.fundTarget)/100;
  const termLength = calculateTermLength(offeringObj.dtInvestmentTermEnd - offeringObj.dtInvestmentTermStart);

  return (
    <div
      className="OfferingCard"
      style={{
        minWidth: `200px`,
        width: `300px`,
        maxWidth: `90%`,
        ...fixedHeight(375, 'px'),
        border: `1px solid beige`,
        margin: `20px 15px`,
        display: `grid`,
        gridTemplateAreas: `
          'image'
          'lowerCard'
        `,
        gridTemplateRows: `40% auto`,
        gridTemplateColumns: `100%`,
      }}
    >
      <Link
        to={`/offering/${offeringObj.slug}`}
        style={{
          gridArea: `image`, 
          overflow: `hidden`,
        }}
      >
        <img
          src={offeringObj.images.card}
          alt="Not found"
          width="100%"
          style={{
            maxHeight: `100%`,
            objectFit: `cover`,

          }}
        />
      </Link>
      <div
        className="lowerCard"
        style={{
          gridArea: `lowerCard`,
          display: `grid`,
          gridTemplateAreas: `
            'sponsor        sponsor'
            'graph          graph' 
            'debtClass      energyOutputKWh'
            'expectedReturn termLength'
          `,
          gridTemplateColumns: `50% 50%`,
          gridTemplateRows: `auto auto 1fr 1fr`,
          padding: `10px`,
        }}
      >

        <div
          className="sponsor flexrow"
          style={{
            gridArea: `sponsor`,
            alignSelf: `center`,
            padding: `0 2px 5px 2px`,
            justifyContent: "space-between",
          }}
        >
          <Link
            to={offeringObj.sponsorSlug}
            style={{
              fontSize: `15px`,
              whiteSpace: `nowrap`,
              overflowX: `hidden`,
              textOverflow: `ellipsis`,
              alignItems: `center`,
              color: `inherit`,
              textDecoration: `unset`,
            }}
          >
            {offeringObj.sponsor}
          </Link>
          <div
            className="favorite noselect"
            style={{
              cursor: `pointer`,
              alignItems: `center`,
              fontSize: `20px`,
              color: isFavorited ? `yellow` : `white`,
            }}
            onClick={() => {activateFavorite(); setIsFavorited(!isFavorited)}}
          >
            {isFavorited ? filledStar : openStar}
          </div>
        </div>
        <Link
          to={`/offering/${offeringObj.slug}`}
          className="graph nowrap"
          style={{
            backgroundColor: `white`,
            backgroundImage: `linear-gradient(to right, #a0d6a0 ${fundPctCSS}%, white ${Math.min(...[fundPctCSS+1, 100])}%)`,
            color: `rgb(59, 91, 59)`,
            fontWeight: 500,
            gridArea: `graph`,
            padding: `5px`,
            border: `1px solid darkgrey`,
          }}
        >
          {offeringObj.title}
        </Link>
        <div
          className="cornerTop cornerLeft debtClass flexrow"
          style={{
            gridArea: `debtClass`,
            borderBottom: `0.5px solid white`,
            borderRight: `0.5px solid white`,
          }}
        >
          {`Debt Class: `}
          <br/>
          {offeringObj.financials.debtClass}
        </div>
        <div
          className="cornerTop cornerRight energyOutputKWh flexrow"
          style={{
            gridArea: `energyOutputKWh`,
            borderBottom: `0.5px solid white`,
            borderLeft: `0.5px solid white`,
          }}
        >
          {`Energy Output: `}
          <br/>
          {`${offeringObj.metrics.energyOutputKWh} kWh`}
        </div>
        <div
          className="cornerBottom cornerLeft expectedReturn flexcol"
          style={{
            gridArea: `expectedReturn`,
            borderTop: `0.5px solid white`,
            borderRight: `0.5px solid white`,
          }}
        >
          {`Expected Return: `}
          <br/>
          {`${expectedReturnPct}%`}
        </div>
        <div
          className="cornerBottom cornerRight termLength flexcol"
          style={{
            gridArea: `termLength`,
            borderTop: `0.5px solid white`,
            borderLeft: `0.5px solid white`,
          }}
        >
          {`Term Length: `}
          <br/>
          {termLength}
        </div>
      </div>
    </div>
  )
};

// export
export default OfferingCard;
