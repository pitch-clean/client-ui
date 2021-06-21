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

/**
 * pdf viewer
 */
 const PdfViewer = ({ pdfFile, currentPage, totalPagesSet, isRendering, isRenderingSet }) => {
  // init hooks
  const classes = useStyles();
  const canvasRef = useRef();
  // state
  const [pdfRef, pdfRefSet] = useState();
  const [allPdfPages, allPdfPagesSet] = useState([]);

  // fxns
  const renderPage = useCallback(async (pageNum, pdf=pdfRef, pdfFile) => {
    if (pdf) {
      const preLoadedPdf = await pdfjs.getDocument(pdfFile);
      const newPdf = await preLoadedPdf.promise;

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      const renderedPage = await newPdf.getPage(pageNum);
      const viewport = renderedPage.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport,
      };
      await renderedPage.render(renderContext);
    }
  }, [pdfRef]);

  // effects
  useLayoutEffect(() => {
    renderPage(currentPage, pdfRef, pdfFile);
  }, [pdfRef, currentPage, renderPage, pdfFile]);
  useEffect(async () => {
    try {
      const preLoadedPdf = await pdfjs.getDocument(pdfFile);
      const pdfPromise = await preLoadedPdf.promise;
      pdfRefSet(pdfPromise);
      totalPagesSet(pdfPromise.numPages);
    } catch (err) {
      console.log(`${err.name}: ${err.message}`, '\n\n', err.stack)
    }
  }, [pdfFile]);

  return (
    <div className={`PdfViewer ${classes.root} w100 h100`} id="my_pdf_viewer">
      <canvas className={`canvas ${classes.canvas}`} id="pdf_renderer" ref={canvasRef}></canvas>
    </div>
  )
};

// export
export default PdfViewer;
