// react
import React from 'react';
// components
import Fundamentals from './Fundamentals';
import OfferingLocation from './OfferingLocation';
import OfferingDocuments from './OfferingDocuments';

// main
const ProjectInfo = ({offeringObj}) => {
  return (
    <div className="ProjectInfo w100" >
      <Fundamentals offeringObj={offeringObj} />
      <OfferingLocation />
      <div className="divider" ></div>
      <OfferingDocuments documents={offeringObj.documents} />
    </div>
    
  );
};

// export
export default ProjectInfo;
