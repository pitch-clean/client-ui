// react
import React from 'react';
// components
import SortElem from './SortElem';

// main
const OfferingsSort = () => {

  return (
    <div
      className="w100 flexrow OfferingsSort"
      style={{
        padding: `0 5px`,
        borderRadius: 0,
        border: `1px solid rgba(128, 128, 128, 0.23)`,
        fontSize: `15px`,
        justifyContent: `start`,
      }}
    >
      <div className="title" style={{padding: `10px`}}>Sort By:</div>
      <div
        className="sortGroup flexrow hide-scrollbar"
        style={{
          overflowX: `hidden`,
          overflowY: `scroll`,
          justifyContent: `start`,
          padding: `15px 5px`,
        }}
      >
        <SortElem sortTitle="Name" />
        <SortElem sortTitle="Date Listed" />
        <SortElem sortTitle="Expected Return %" />
        <SortElem sortTitle="Fund Target ($)" />
      </div>
    </div>
  )
};

// export
export default OfferingsSort;
