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
  const [pdfRef, pdfRefSet] = useState();
  const [pdfDoc, pdfDocSetter] = useState();
  const [allPdfPages, allPdfPagesSet] = useState([]);
  console.log(pdfjs.GlobalWorkerOptions)


  // fxns
  const renderPage = useCallback(async (currentPage, pdfRef, isRenderingSet, renderedPageSet) => {
    if (pdfRef) {
      console.log('finalOutput', finalOutput)
      try {
        // finalOutput && console.log('asdf', await finalOutput.promise.cancel());
        finalOutput && finalOutput._internalRenderTask && finalOutput._internalRenderTask.cancel && await finalOutput._internalRenderTask.cancel();
      } catch (err) {
        console.log('cancelling', err)
      }
      const canvas = canvasRef.current;
      let renderedPage;
      try {
        console.log('attempt 1')
        renderedPage = await (await pdfRef.promise).getPage(currentPage);
      } catch (error) {
        throw error;
      }
      renderedPage.cleanupAfterRender = true;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      let viewport;
      try {
        console.log('attempt 2')
        viewport = renderedPage.getViewport({ scale: 1.5 });
        // console.log('renderedPage', renderedPage)

      } catch (error) {
        throw error;
      }
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport,
      };
      let output;
      try {
        console.log('attempt 3')
        output = renderedPage.render(renderContext);
        finalOutputSet(output);
        // console.log(output)
      } catch (error) {
        throw error;
      }
      renderedPageSet(currentPage);
    }
  }, [currentPage, pdfRef]);

  // effects
  useLayoutEffect(() => {
    // pdfRef && pdfRef.destroy();
    if (currentPage === renderedPage && isRendering) {
      // console.log('CLOSING THE LOOP currentPage = renderedPage  && rendering', currentPage, renderedPage, isRendering)
      isRenderingSet(false);
    }
    // console.log('lol', isRendering, pdfRef)
    if (!isRendering) {
      isRenderingSet(true);
      console.log('!isRendering && renderedPage !== currentPage', !isRendering, renderedPage !== currentPage)
      renderPage(currentPage, pdfRef, isRenderingSet, renderedPageSet);
    }
  }, [pdfRef, currentPage, renderPage, pdfFile, renderedPage]);
  useEffect(async () => {
    try {
      const pdfPromise = pdfjs.getDocument(pdfFile);
      pdfRefSet(pdfPromise);
      totalPagesSet((await pdfPromise.promise).numPages);
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
