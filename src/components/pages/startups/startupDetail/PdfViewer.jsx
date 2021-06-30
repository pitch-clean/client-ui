// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { makeStyles } from '@material-ui/core/styles';
// constants
const useStyles = makeStyles({
  root: {
    padding: `20px 0`,
  },
  canvasContainer: {},
  canvas: {},
  navControls: {},
  button: {},
  input: {},
  goNext: {},
});
// fxns
const onDocumentLoadSuccess = totalPagesSetter => e => {
  totalPagesSetter(e.numPages);
};

/**
 * pdf viewer
 */
 const PdfViewer = ({ pdfFile, currentPage, totalPagesSet }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Document className={`PdfViewer ${classes.root} w100 h100`} file={pdfFile} onLoadSuccess={onDocumentLoadSuccess(totalPagesSet)}>
      <Page pageNumber={currentPage} />
    </Document>
  );
};

// export
export default PdfViewer;
