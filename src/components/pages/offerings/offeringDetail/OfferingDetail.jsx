// react
import React, {useState, useEffect} from 'react';
// components
import MainInfo from './MainInfo';
import ProjectInfo from './ProjectInfo';
// style
import './OfferingDetail.css';
// seed
import {offeringsArr} from '../../../../seed/offerings';
const fakeFetchOfferingObj = (offeringId) => {
  const offeringObj = offeringsArr.find(elem => {
    return elem.slug === offeringId;
  });
  return offeringObj;
};

// main
const OfferingDetail = ({props: {match: {params: {offeringId}}}}) => {
  // state
  const [offeringObj, setOfferingObj] = useState(null);
  // effects
  useEffect(() => {
    // on load, get the authorized offering detail
    const newOfferingObj = fakeFetchOfferingObj(offeringId);
    setOfferingObj(newOfferingObj);
    try {
      
    } catch (err) {
      console.error(err);
    }
  }, []);
  return offeringObj ? (
    <div className="OfferingDetail w100" >
      <MainInfo offeringObj={offeringObj} />
      <ProjectInfo offeringObj={offeringObj} />
      {/* <Overview offeringObj={offeringObj} /> */}
    </div>
  ) : (
    <></>
  )
};

// export
export default OfferingDetail;
