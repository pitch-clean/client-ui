// react
import React from 'react';
import {useSelector} from 'react-redux';
// components
import OfferingCard from './OfferingCard';
// seed
import {offeringsArr} from '../../../seed/offerings';

// main
const OfferingsList = () => {
  // style
  /**@type {React.CSSProperties} */
  // build fxn
  const buildOfferingsArrElem = (offeringsArr) => {
    const offeringsArrElem = [];
    for (let idx = 0; idx < offeringsArr.length; idx++) {
      const offeringObj = offeringsArr[idx];
      offeringsArrElem.push(<OfferingCard offeringObj={offeringObj} />)
    }
    return offeringsArrElem;
  };

  return (
    <div
      className="flexrow w100 OfferingsList"
      style={{
        // flexWrap: `wrap`,
        // justifyContent: `start`,
        minHeight: `1000px`,
        backgroundColor: `lightgrey`,
        // overflow: `hidden`,
      }}
    >
      {/* {buildOfferingsArrElem(offeringsArr)} */}
    </div>
  )
};

// export
export default OfferingsList;
