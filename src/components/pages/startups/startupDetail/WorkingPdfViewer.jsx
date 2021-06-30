// react
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
// utils
import { pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { makeStyles } from '@material-ui/core/styles';
import { Document, Page } from "franco-react-pdf/dist/esm/entry.webpack";
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
const renderPage = (isPgRenderingSetter, pdfDoc, currentPageNum, scale, canvas, canvasCtx, pgNumPending, pgNumPendingSetter) => {
  console.log('isPgRenderingSetter 1', isPgRenderingSetter)
  isPgRenderingSetter(true); //pageRendering = true;
  // Using promise to fetch the page
  pdfDoc.getPage(currentPageNum).then(function(page) {
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
        renderPage(isPgRenderingSetter, pdfDoc, currentPageNum, scale, canvas, canvasCtx, pgNumPending, pgNumPendingSetter);
        pgNumPendingSetter(null)//pgNumPending = null;
      }
    });
  });

//   // Update page counters
//   document.getElementById('page_num').textContent = num;
};

function queueRenderPage(isPgRendering, pgNumPendingSetter, newPageNum) {
  if (isPgRendering) {
    pgNumPendingSetter(newPageNum);//pageNumPending = num;
  } else {
    renderPage(newPageNum);
  }
}
const onPrevPage = (currentPageNum, currentPageNumSetter, isPgRendering, pgNumPendingSetter) => e => {
  if (currentPageNum <= 1) {
    return;
  }
  const newPageNum = currentPageNum - 1;
  currentPageNumSetter(newPageNum);
  queueRenderPage(isPgRendering, pgNumPendingSetter, newPageNum);
};
const onNextPage = (currentPageNum, totalPages, currentPageNumSetter, isPgRendering, pgNumPendingSetter) => e => {
  if (currentPageNum >= totalPages) {
    return;
  }
  const newPageNum = currentPageNum + 1;
  currentPageNumSetter(newPageNum);
  queueRenderPage(isPgRendering, pgNumPendingSetter, newPageNum);
};

/**
 *
    url = 'https://github.com/mozilla/pdf.js/blob/master/test/pdfs/tracemonkey.pdf';
    var thePdf = null;
    var scale = 1;

    PDFJS.getDocument(url).promise.then(function(pdf) {
        thePdf = pdf;
        viewer = document.getElementById('pdf-viewer');

        for(page = 1; page <= pdf.numPages; page++) {
          canvas = document.createElement("canvas");    
          canvas.className = 'pdf-page-canvas';         
          viewer.appendChild(canvas);            
          renderPage(page, canvas);
        }
    });

    function renderPage(pageNumber, canvas) {
        thePdf.getPage(pageNumber).then(function(page) {
          viewport = page.getViewport(scale);
          canvas.height = viewport.height;
          canvas.width = viewport.width;          
          page.render({canvasContext: canvas.getContext('2d'), viewport: viewport});
    });
    }
 */

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
  const [currentPageNum, currentPageNumSetter] = useState(1);
  const [totalPgs, totalPgsSetter] = useState(1);
  const [allPdfPages, allPdfPagesSet] = useState([]);
  const [canvasCtx, canvasCtxSetter] = useState(null);
  
  // effects
  useLayoutEffect(async () => {
    // console.log('in layouteffect', canvasRef.current)
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.getContext('2d');
      canvasCtxSetter(canvasContext);

      const newPdfDoc = await pdfjs.getDocument(pdfFile).promise;
      const newNumPgs = newPdfDoc.numPages;

      const pdfPagesArr = [];
      for (page = 1; page <= newNumPgs; page += 1) {
        const newCanvas = <canvas></canvas>;
        pdfPagesArr.push(newCanvas);
        renderPage(page, canvas);
      }

      totalPgsSetter(newNumPgs);
      pdfDocSetter(newPdfDoc);
    }
  }, [canvasRef.current]);
  // get pdf doc on first render
  useEffect(async () => {
    
  }, []);
  // load first and subsequent pdf pages
  useEffect(() => {
    if (pdfDoc && canvasRef.current && canvasCtx) {
      console.log(pdfDoc && canvasRef.current)
      renderPage(isPgRenderingSetter, pdfDoc, currentPageNum, pgScale, canvasRef.current, canvasCtx, pgNumPending, pgNumPendingSetter);
    }
  }, [canvasRef.current, pdfDoc, canvasCtx, currentPageNum]);

  return (
    <div className={`PdfViewer ${classes.root} w100 h100`} id="my_pdf_viewer">
      <canvas className={`canvas ${classes.canvas}`} id="pdf_renderer" ref={canvasRef}></canvas>
      <div className="buttons">
        <button onClick={onPrevPage(currentPageNum, currentPageNumSetter, isPgRendering, pgNumPendingSetter)}>previous</button>
        <div>{currentPageNum}</div>
        <button onClick={onNextPage(currentPageNum, totalPgs, currentPageNumSetter, isPgRendering, pgNumPendingSetter)}>next</button>
      </div>
    </div>
  );
};

// export
export default PdfViewer;
