// react
import React from 'react';
// build fxns
const buildDocumentList = (documentsArr) => {
  const docList = [];
  for (let idx = 0; idx < documentsArr.length; idx++) {
    const docObj = documentsArr[idx];
    console.log(docObj);
    const docElem = (
      <div
        className="docElem"
        style={{
          border: `1px solid rgba(255, 255, 255, 0.18)`,
          height: `70px`,
          width: `70px`,
          margin: `5px`,
          backgroundColor: `rgba(0, 0, 0, 0.08)`,
          cursor: `pointer`,
        }}
      >{docObj.filePath}</div>
    )
    docList.push(docElem);
  }
  return docList;
};

// main
const OfferingDocuments = ({documents}) => {
  return (
    <div
      className="OfferingDocuments flexrow"
      style={{
        flexWrap: `wrap`,
        gridArea: `documents`,
        minHeight: `100px`,
        justifyContent: `start`,
        alignItems: `start`,
        padding: `15px`,
      }}
    >
      {buildDocumentList(documents.arr)}
    </div>
    
  );
};

// export
export default OfferingDocuments;
