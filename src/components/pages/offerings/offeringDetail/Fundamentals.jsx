// react
import React from 'react';
import { convertUnixMsToDate } from '../../../utils/datetime';
// fxns
const buildListItem = (title, value) => {
  return (
    <div className="metric flexrow w100" >
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
    <div className="Fundamentals w100 flexcol" >
      <div className="title w100" >Fundamentals</div>
      <div className="divider" ></div>
      <div className="metrics w100" >{buildMetrics(offeringObj)}</div>
    </div>
  );
};

// export
export default Fundamentals;
