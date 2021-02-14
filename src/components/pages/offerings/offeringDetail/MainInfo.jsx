// react
import React from 'react';
import {Link} from 'react-router-dom';
import { calculateTermLength, formatPctStr, calcOfferSize } from '../../../utils/printFxns';
// components
import InvestmentProgress from './InvestmentProgress';
// build fxns
const buildStatElem = (title, number) => {
  let printNumber = number
  if (number === typeof 0.1 || number === typeof 10) {
    printNumber = formatPctStr(number)
  }
  return (
    <div className="statContainer flexcol" >
      <div className="title" >{title}</div>
      <div className="stat" >{printNumber}</div>
    </div>
  );
};
const calculateProgressPercent = () => {
  const progressPercent = 10;
  return progressPercent;
};

// main
const MainInfo = ({offeringObj}) => {

  const termLength = calculateTermLength(offeringObj.dtInvestmentTermEnd - offeringObj.dtInvestmentTermStart);
  return (
    <div className="MainInfo w100" >
      <div className="topRow flexrow">
        <div className="OfferingTitle flexcol" >
          <div className="offeringName" >
            {offeringObj.title}
          </div>
          <div className="w100 subtitle flexrow">
            <Link
              className="offeringSponsor nowrap"
              to={`/${offeringObj.sponsorSlug}`}
            >
              {offeringObj.sponsor}
            </Link>
            <div className="assetClass">{offeringObj.financials.investmentClass}</div>
          </div>
          <div className="returnStats flexrow w100" >
            <div className="annualInterest">{buildStatElem('Annual Interest', offeringObj.financials.interestAccrued)}</div>
            <div className="divider h100" ></div>
            <div className="termLength" >{buildStatElem('Term', termLength)}</div>
            <div className="divider h100" ></div>
            <div className="offeringSize" >{buildStatElem('Offering Size', calcOfferSize(offeringObj.financials.fundTarget))}</div>
          </div>
        </div>
        <div className="OfferingImage h100 flexrow" >
            <img className="h100" src={offeringObj.images.large} alt="" srcset="" height="100%" />
            <div className="otherClass">{offeringObj.financials.otherClass}</div>
        </div>
      </div>
      <div style={{gridArea: `border1`, justifySelf: 'center', backgroundColor: `rgba(0, 0, 0, 0.16)`, width: `90%`, height: `1px`, margin: `10px 5px`,}} ></div>
      <InvestmentProgress progressPct={calculateProgressPercent()} offeringSlug={offeringObj.slug} />
      <div style={{gridArea: `border2`, justifySelf: 'center', backgroundColor: `rgba(0, 0, 0, 0.16)`, width: `90%`, height: `1px`, margin: `10px 5px`,}} ></div>
      <div className="MainAbout">{offeringObj.content.about}</div>
    </div>
  )
};

// export
export default MainInfo;
