// react
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// utils
import {activateFavorite} from '../../../utils/eventHandlers';
// style
import './OfferingsList.css';
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
const calcOfferSize = offerSize => {
  if (offerSize >= 1000000) {
    return `$${Math.round(offerSize/10000)/100}M`;
  } else if (offerSize >= 1000) {
    return `$${Math.round(offerSize/10)/100}K`;
  }
  return offerSize;
};

// main
const OfferingCard = ({offeringObj}) => {
  // TODO: delete this state
  const [isFavorited, setIsFavorited] = useState(false);
  const termLength = calculateTermLength(offeringObj.dtInvestmentTermEnd - offeringObj.dtInvestmentTermStart);
  const interestAccrued = Math.round(10000 * offeringObj.financials.interestAccrued) / 100
  return (
    <div className="OfferingCard" >
      <Link className="imgLink" to={`/offering/${offeringObj.slug}`} >
        <img
          className="img"
          src={offeringObj.images.card}
          alt="Not found"
          width="100%"
        />
      </Link>
      <div className="lowerCard flexcol" >
        <div className="title flexrow w100" >
          <Link to={`/offering/${offeringObj.slug}`} className="link nowrap" >
            {offeringObj.title}
          </Link>
          <div
            className="favorite noselect"
            style={{ color: isFavorited ? `yellow` : `white`, }}
            onClick={() => {activateFavorite(); setIsFavorited(!isFavorited)}}
          >
            {isFavorited ? filledStar : openStar}
          </div>
        </div>
        <div className="sponsor w100 flexrow">
          <Link className="link" to={offeringObj.sponsorSlug} >
            {offeringObj.sponsor}
          </Link>
          <div className="investmentClass">{offeringObj.financials.investmentClass}</div>
        </div>
        <div className="info flexcol w100 f1">
          <div className="annualInterest item flexrow" >
            <div>Annual Interest: </div>
            <div>{` ${interestAccrued}%`}</div>
          </div>
          <div className="divider"></div>
          <div className="termLength item flexrow" >
            <div>Term length: </div>
            <div>{` ${termLength}%`}</div>
          </div>
          <div className="divider"></div>
          <div className="offeringSize item flexrow" >
            <div>Offering Size: </div>
            <div>{` ${calcOfferSize(offeringObj.financials.fundTarget)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

// export
export default OfferingCard;
