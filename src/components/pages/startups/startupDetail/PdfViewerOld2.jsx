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
// fxns
const renderPage = (isPgRenderingSetter, pdfDoc, currentPage, scale, canvas, canvasCtx, pgNumPending, pgNumPendingSetter) => {
  console.log('isPgRenderingSetter 1', isPgRenderingSetter)
  isPgRenderingSetter(true); //pageRendering = true;
  // Using promise to fetch the page
  pdfDoc.getPage(currentPage).then(function(page) {
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    // Render PDF page into canvas context
    const renderContext = {
      canvasContext: canvasCtx,
      viewport,
    };

    const renderTask = page.render(renderContext);
    // // Wait for rendering to finish
    renderTask.promise.then(function() {
      isPgRenderingSetter(false)//pageRendering = false;
      if (pgNumPending !== null) {
        // New page rendering is pending
        renderPage(isPgRenderingSetter, pdfDoc, currentPage, scale, canvas, canvasCtx, pgNumPending, pgNumPendingSetter);
        pgNumPendingSetter(null)//pgNumPending = null;
      }
    });
  });

//   // Update page counters
//   document.getElementById('page_num').textContent = num;
};

function queueRenderPage(isPgRendering, pgNumPendingSetter, num) {
  if (isPgRendering) {
    pgNumPendingSetter(num);//pageNumPending = num;
  } else {
    renderPage(num);
  }
}
function onPrevPage(currentPage, currentPageSetter) {
  if (currentPage <= 1) {
    return;
  }
  const newPageNum = currentPage - 1;
  currentPageSetter(newPageNum);
  queueRenderPage(newPageNum);
}
function onNextPage(currentPage, totalPages, currentPageSetter) {
  if (currentPage >= totalPages) {
    return;
  }
  const newPageNum = currentPage + 1;
  currentPageSetter(newPageNum);
  queueRenderPage(newPageNum);
}


/**
 * pdf viewer
 */
 const PdfViewer = ({ pdfFile, currentPage, currentPageSetter, totalPages, totalPagesSet, isRendering, isRenderingSet, renderedPage, renderedPageSet }) => {
  // init hooks
  const classes = useStyles();
  const canvasRef = useRef();
  // state
  // const [finalOutput, finalOutputSet] = useState();
  const [pdfDoc, pdfDocSetter] = useState(null);
  const [isPgRendering, isPgRenderingSetter] = useState(false);
  const [pgNumPending, pgNumPendingSetter] = useState(false);
  const [pgScale, pgScaleSetter] = useState(0.8);
  const [allPdfPages, allPdfPagesSet] = useState([]);
  const [canvasCtx, canvasCtxSetter] = useState(null);
  
  // effects
  useLayoutEffect(() => {
    // console.log('in layouteffect', canvasRef.current)
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.getContext('2d');
      canvasCtxSetter(canvasContext);
    }
  }, [canvasRef.current]);
  // get pdf doc on first render
  useEffect(async () => {
    const newPdfDoc = await pdfjs.getDocument(pdfFile).promise;
    totalPagesSet(newPdfDoc.numPages);
    pdfDocSetter(newPdfDoc);
  }, []);
  // load first and subsequent pdf pages
  useEffect(() => {
    if (pdfDoc && canvasRef.current && canvasCtx) {
      console.log(pdfDoc && canvasRef.current)
      renderPage(isPgRenderingSetter, pdfDoc, currentPage, pgScale, canvasRef.current, canvasCtx, pgNumPending, pgNumPendingSetter);
    }
  }, [canvasRef.current, pdfDoc, canvasCtx, currentPage]);

  return (
    <div className={`PdfViewer ${classes.root} w100 h100`} id="my_pdf_viewer">
      <canvas className={`canvas ${classes.canvas}`} id="pdf_renderer" ref={canvasRef}></canvas>
    </div>
  )
};

// export
export default PdfViewer;
