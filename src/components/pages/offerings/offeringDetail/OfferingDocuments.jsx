// react
import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
// build fxns
const buildDocumentList = documentsArr => {
  const docList = [];
  for (let idx = 0; idx < documentsArr.length; idx++) {
    const docObj = documentsArr[idx];
    const docElem = (
      <div className="docElem flexrow h100" >
        <GetAppIcon />
        <div className="title" >
          {docObj.title}
        </div>
      </div>
    );
    docList.push(docElem);
  }
  return docList;
};

// main
const OfferingDocuments = ({documents}) => {
  return (
    <div className="OfferingDocuments" >
      {buildDocumentList(documents.arr)}
    </div>
  );
};

// export
export default OfferingDocuments;
