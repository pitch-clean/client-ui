// react
import React from 'react';
import {Link} from 'react-router-dom';
// components
import InvestmentProgress from './InvestmentProgress';
import MainAbout from './MainAbout';
// build fxns
const formatPctStr = (number) => {
  const toInteger = Math.round(number * 10000)/100;
  const toStr = `${toInteger}%`
  return toStr;
};
const buildStatElem = (title, number) => {
  return (
    <div className="statContainer flexcol" style={{padding: `5px 20px`}}>
      <div className="title" style={{fontSize: `12px`, padding: `2px`}} >{title}</div>
      <div className="stat" style={{fontSize: `20px`, padding: `2px`}} >{formatPctStr(number)}</div>
    </div>
  )
};
const calculateProgressPercent = () => {
  const progressPercent = 10;
  return progressPercent;
};

// main
const MainInfo = ({offeringObj}) => {
  return (
    <div
      className="MainInfo w100"
      style={{
        display: `grid`,
        backgroundColor: `grey`,
        padding: `20px`,
        gridTemplateColumns: `minmax(1fr, auto) minmax(1fr, auto) minmax(1fr, auto) minmax(1fr, auto) minmax(1fr, auto)`,
        gridTemplateRows: `auto auto auto minmax(20px, auto)`,
        gridTemplateAreas: `
          'title title title image image'
          'border1 border1 border1 border1 border1'
          'progress progress progress progress progress'
          'border2 border2 border2 border2 border2'
          'about about about about about'
        `,
      }}
    >
      <div
        className="OfferingTitle flexcol"
        style={{
          gridArea: `title`,
          alignItems: `start`,
          justifyContent: `start`,
          padding: `0px 0 0 50px`,
        }}
      >
        <div className="offeringName" style={{
            fontSize: `40px`, fontWeight: `400`,
          }}
        >
          {offeringObj.title}
        </div>
        <Link
          className="offeringSponsor"
          to={`/${offeringObj.sponsorSlug}`}
          style={{ textDecoration: `unset`, color: `inherit`, padding: `5px 0 15px 0`, fontSize: `20px`}}
        >
          {offeringObj.sponsor}
        </Link>
        <div className="returnStats flexrow" style={{background: `black`, justifyContent: `space-between`}} >
          <div className="principalOutstanding">{buildStatElem('Principal Outstanding', offeringObj.financials.principalOutstanding)}</div>
          <div className="divider" style={{borderLeft: `1px solid rgb(91, 97, 91)`, height: `70%`}} ></div>
          <div className="interestAccrued" >{buildStatElem('Interest Accrued', offeringObj.financials.interestAccrued)}</div>
        </div>
      </div>
      <div
        className="OfferingImage"
        style={{
          gridArea: `image`,
          backgroundColor: 'yellow',
        }}
      >
        <img src={offeringObj.images.large} alt="" srcset="" style={{backgroundColor: 'yellow'}} />
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
