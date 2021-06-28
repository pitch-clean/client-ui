// react
import React, { useState, useEffect } from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import PdfViewer from './PdfViewer';
import PdfNavControls from './PdfNavControls';
import TextFieldEdit from '../../../forms/fields/TextFieldEdit';
// constants
const useStyles = makeStyles({
  root: {
    padding: `20px 0`,
  },
  inputLabel: {
    display: 'inline-block',
    margin: '5px',
    padding: '4px 8px',
    background: 'whitesmoke',
    boxSizing: 'border-box',
    border: '2px solid rgb(172, 169, 169)',
    boxShadow: '0 0 0px 1px rgba(0, 0, 0, 0.164)',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '12px',
  },
  inputButton: {
    display: 'none',
  },
})
const updatePdf = (pdfFileSet, e) => {
  pdfFileSet(e.target.value);
};
const extractPdf = async (e, pdfFileSet) => {
  // default vars
  let mbLimit = 10;
  let byteLimit = mbLimit * 1000000;
  // destructure
  const pdfObj = e.target.files[0];
  const {
    name, size: fileSize, type,
  } = pdfObj;
  if (fileSize > byteLimit) {
    alert("Please select files under 10MB");
    return;
  }
  // load the bytecode for uploading
  let reader = new FileReader();
  reader.onloadend = e => {
    const result = {
      blob: e.target.result,
      file: {
        name: pdfObj.name,
        lastModified: pdfObj.lastModified,
        size: pdfObj.size,
        type: pdfObj.type,
      },
    };
    pdfFileSet(result);
  };
  // process the pdf, run the callback
  reader.readAsDataURL(pdfObj);
};

/**
 * main
 */
const PitchDeckEdit = ({ pdfFile, pdfFileSet }) => {
  // init hooks
  const classes = useStyles();
  let pdfValue;
  if (typeof pdfFile === typeof {}) {
    pdfValue = pdfFile.file.name;
  } else {
    pdfValue = pdfFile;
  }

  return (
    <div className={`PitchDeckEdit ${classes.root} w100 h100`}>
      <TextFieldEdit value={pdfValue} updateFxn={updatePdf} updateFxnInputs={pdfFileSet} />
      <label className={`${classes.inputLabel}`}>
        <input
          className={`${classes.inputButton}`}
          type="file"
          accept="application/pdf"
          onChange={e => {extractPdf(e, pdfFileSet)}}
        />
        Browse Images...
      </label>
    </div>
  );
};
// export
export default PitchDeckEdit;
