// react
import React from 'react';
import {useSelector} from 'react-redux';
// components
import OfferingCard from './OfferingCard';

// main
const OfferingsList = () => {
  // state
  const offeringsArr = useSelector(s => s.offerings.offeringsArr);
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
        flexWrap: `wrap`,
        justifyContent: `center`,
        padding: `0 50px`,
        maxWidth: `80%`,
      }}
    >
      {buildOfferingsArrElem(offeringsArr)}
    </div>
  )
};

// export
export default OfferingsList;
