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
  const [offeringObj, setOfferingObj] = useState(null);
  // on load, get the authorized offering detail
  useEffect(() => {
    const newOfferingObj = fakeFetchOfferingObj(offeringId);
    setOfferingObj(newOfferingObj);
    try {
      
    } catch (err) {
      console.error(err);
    }
  }, []);
  return offeringObj ? (
    <div
      className="OfferingDetail"
      style={{
        maxWidth: `1000px`,
        width: `80%`,
      }}
    >
      <MainInfo offeringObj={offeringObj} />
      <ProjectInfo offeringObj={offeringObj} />
    </div>
  ) : (
    <></>
  )
};

// export
export default OfferingDetail;
