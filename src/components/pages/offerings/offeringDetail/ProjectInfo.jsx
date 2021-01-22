// react
import React from 'react';
import {useSelector} from 'react-redux';
// components
import Fundamentals from './Fundamentals';
import OfferingLocation from './OfferingLocation';
import OfferingDocuments from './OfferingDocuments';

// main
const ProjectInfo = ({offeringObj}) => {
  // state
  const isDarkMode = useSelector(s=>s.view.isDarkMode);
  console.log('isdard', isDarkMode);
  return (
    <div
      className="ProjectInfo w100"
      style={{
        backgroundColor: `#c7c7c7`,
        display: `grid`,
        gridTemplateColumns: `1fr 1fr`,
        gridTemplateRows: `auto auto auto`,
        gridTemplateAreas: `
          'fundamentals map'
          'fundamentals divider'
          'documents documents'
        `,
      }}
    >
      <Fundamentals offeringObj={offeringObj} />
      <OfferingLocation />
      <div style={{
        gridArea: `divider`,
        justifySelf: 'center',
        backgroundColor: `rgba(0, 0, 0, 0.16)`,
        width: `90%`,
        height: `1px`,
        margin: `10px 5px`,
      }} ></div>
      <OfferingDocuments documents={offeringObj.documents} />
    </div>
    
  );
};

// export
export default ProjectInfo;
