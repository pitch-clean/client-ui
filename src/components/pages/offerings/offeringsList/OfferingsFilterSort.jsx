// react
import React from 'react';
// components
// import OfferingsFilter from './OfferingsFilter';
import OfferingsSort from './OfferingsSort';

// main
const OfferingsFilterSort = () => {

  return (
    <div
      className="w100 flexcol OfferingsFilterSort"
      style={{
        minHeight: `50px`,
        boxShadow: `black 0 0 10px -2px`,
        zIndex: `1`,
        borderRadius: 0,
        background: `#494d49`,
      }}
    >
      {/* <OfferingsFilter /> */}
      <OfferingsSort />
    </div>
  )
};

// export
export default OfferingsFilterSort;
