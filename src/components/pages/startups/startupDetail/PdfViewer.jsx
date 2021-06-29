// react
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
// utils
import { pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { makeStyles } from '@material-ui/core/styles';
// components
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
const loadAPage = () => {
  // 1 delete the worker
  // 2 create new worker
  // 3 render page
};

/**
 * pdf viewer
 */
 const PdfViewer = ({ pdfFile, currentPage, totalPagesSet, isRendering, isRenderingSet, renderedPage, renderedPageSet }) => {
  // init hooks
  const classes = useStyles();
  const canvasRef = useRef();
  // state
  const [finalOutput, finalOutputSet] = useState();
  const [pdfDoc, pdfDocSetter] = useState();
  const [allPdfPages, allPdfPagesSet] = useState([]);
  console.log(pdfjs.GlobalWorkerOptions)
  // effects
  useLayoutEffect(() => {}, []);
  useEffect(async () => {}, []);

  return (
    <div className={`PdfViewer ${classes.root} w100 h100`} id="my_pdf_viewer">
      <canvas className={`canvas ${classes.canvas}`} id="pdf_renderer" ref={canvasRef}></canvas>
    </div>
  )
};

// export
export default PdfViewer;
