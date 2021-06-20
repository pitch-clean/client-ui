// react
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
// utils
import { pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { makeStyles } from '@material-ui/core/styles';
console.log('pdfjsLib', pdfjs)
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
 const PdfViewer = ({ currentPage, totalPagesSet }) => {
  // init hooks
  const classes = useStyles();
  const canvasRef = useRef();
  // state
  const [pdfRef, pdfRefSet] = useState();
  // const pitchDeckResource = useSelector(s => s.view.startup.activeStartup.content.pitchDeck);
  const pitchDeckResource = require("/Users/matthias/work/pitchclean/pitchclean-client-ui/src/seed/1907.00235.pdf").default;
  // fxns
  const renderPage = useCallback(async (pageNum, pdf=pdfRef) => {
    pdf && await pdf.getPage(pageNum).then(async page => {
      const viewport = await page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: await canvas.getContext('2d'),
        viewport,
      };
      await page.render(renderContext);
    });   
  }, [pdfRef]);

  // effects
  useEffect(async () => {
    await renderPage(currentPage, pdfRef);
  }, [pdfRef, currentPage, renderPage]);
  useEffect(async () => {
    try {
      const preLoadedPdf = await pdfjs.getDocument(pitchDeckResource);
      await preLoadedPdf.promise.then(
        async loadedPdf => {
          await pdfRefSet(loadedPdf);
          await totalPagesSet(loadedPdf.numPages)
        },
        err => {console.error(err)},
      )
    } catch (err) {
      console.log('ERRORRORR', err)
    }
  }, []);

  return (
    <div className={`PdfViewer ${classes.root} w100 h100`} id="my_pdf_viewer">
      <canvas className={`canvas ${classes.canvas}`} id="pdf_renderer" ref={canvasRef}></canvas>
    </div>
  )
};

// export
export default PdfViewer;
