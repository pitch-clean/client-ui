// react
import React from 'react';
import { convertUnixMsToDate } from '../../../utils/datetime';
// fxns
const buildListItem = (title, value) => {
  return (
    <div className="flexrow w100" style={{fontSize: `12px`}} >
      <div className="nowrap" style={{minWidth: `70%`, maxWidth: `70%`, textAlign: `start`}} >{title}</div>
      <div className="nowrap" style={{flex: 1, textAlign: `start`,}} >{value}</div>
    </div>
  )
}
const buildMetrics = (offeringObj) => {
  return (
    <>
      {buildListItem("Expected Annual Energy Output:", `${offeringObj.metrics.energyOutputKWh} kWh`)}
      {buildListItem("Capacity (AC/DC):", `${offeringObj.metrics.capacityKWh} kWh`)}
      {buildListItem("PPA Term:", offeringObj.metrics.ppaTerm)}
      {buildListItem("PPA Price:", `$${offeringObj.metrics.ppaPriceUSD}`)}
      {buildListItem("PPA Counterparty:", offeringObj.financials.ppaCounterparty)}
      {buildListItem("Commercial Operation Date", convertUnixMsToDate(offeringObj.dtInvestmentTermEnd))}
    </>
  )
};

// main
const Fundamentals = ({offeringObj}) => {

  return (
    <div
      className="Fundamentals w100 flexcol"
      style={{
        gridArea: `fundamentals`,
        padding: `10px 5px`,
      }}
    >
      <div className="title" style={{fontSize: `20px`}} >Fundamentals</div>
      <div style={{justifySelf: 'center', backgroundColor: `rgba(0, 0, 0, 0.16)`, width: `95%`, height: `1px`,}} ></div>
      <div className="metrics w100" style={{padding: `4px 15px 4px 40px`}} >{buildMetrics(offeringObj)}</div>
    </div>
    
  );
};

// export
export default Fundamentals;
