// react
import React from 'react';
import {Link} from 'react-router-dom';
import { calculateTermLength } from '../../../utils/datetime';
// components
import InvestmentProgress from './InvestmentProgress';
import MainAbout from './MainAbout';
// build fxns
const formatPctStr = (number) => {
  const toInteger = Math.round(number * 10000)/100;
  const toStr = `${toInteger}%`;
  return toStr;
};
const buildStatElem = (title, number) => {
  let printNumber = number
  if (number === typeof 0.1 || number === typeof 10) {
    printNumber = formatPctStr(number)
  }
  return (
    <div className="statContainer flexcol" style={{padding: `5px 20px`}} >
      <div className="title" style={{fontSize: `12px`, padding: `2px`}} >{title}</div>
      <div className="stat" style={{fontSize: `20px`, padding: `2px`}} >{printNumber}</div>
    </div>
  );
};
const calculateProgressPercent = () => {
  const progressPercent = 10;
  return progressPercent;
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
const MainInfo = ({offeringObj}) => {
  console.log(offeringObj)
  console.log(offeringObj.dtInvestmentTermEnd)
  console.log(offeringObj.dtInvestmentTermStart)

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
        <div className="OfferingImage h100" >
          <img className="" src={offeringObj.images.large} alt="" srcset="" />
        </div>
      </div>
      <div style={{gridArea: `border1`, justifySelf: 'center', backgroundColor: `rgba(0, 0, 0, 0.16)`, width: `90%`, height: `1px`, margin: `10px 5px`,}} ></div>
      <InvestmentProgress progressPct={calculateProgressPercent()} offeringSlug={offeringObj.slug} />
      <div style={{gridArea: `border2`, justifySelf: 'center', backgroundColor: `rgba(0, 0, 0, 0.16)`, width: `90%`, height: `1px`, margin: `10px 5px`,}} ></div>
      <MainAbout />
      
    </div>
  )
};

// export
export default MainInfo;
