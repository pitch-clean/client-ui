// react
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// components
// import OfferingsSidebar from './OfferingsSidebar';
// import OfferingsFilterSort from './OfferingsFilterSort';
import OfferingsFilterSort from './OfferingsFilterSort';
import OfferingsList from './OfferingsList';
// redux
import {updateOfferingsArr} from '../../../../redux/actions/OfferingsActions';
// seed
import {offeringsArr} from '../../../../seed/offerings';

// main
const OfferingsView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // make the fetch to api
    dispatch(updateOfferingsArr(offeringsArr));

    // TODO: fetch call here
  }, []);
  return (
    <div
      className="w100 page OfferingsView"
      style={{}}
    >
      <OfferingsFilterSort />
      <OfferingsList />
    </div>
  )
};

// export
export default OfferingsView;
