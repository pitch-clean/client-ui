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
  viewer: {
    width: `100%`,
    height: `1000px`,
    display: `flex`,
    flexDirection: `column`,
  },
  webviewer: {
    flex: `1`,
    margin: `8px`,
    '-webkit-box-shadow': `1px 1px 10px #999`,
    boxShadow: `1px 1px 10px #999`,
  },
})
const updatePdf = (pdfFileSet, e) => {
  pdfFileSet(e.target.value);
};

/**
 * main
 */
const PitchDeckEdit = ({ pdfFile, pdfFileSet }) => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`PitchDeckEdit ${classes.root} w100 h100`}>
      <TextFieldEdit value={pdfFile} updateFxn={updatePdf} updateFxnInputs={pdfFileSet} />
    </div>
  );
};
// export
export default PitchDeckEdit;
