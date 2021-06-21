// react
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import PdfViewer from './PdfViewer';
import PdfNavControls from './PdfNavControls';
import PitchDeckEdit from './PitchDeckEdit';
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

/**
 * main
 */
const PitchDeck = ({ isEditing }) => {
  // init hooks
  const classes = useStyles();
  // state
  const [totalPages, totalPagesSet] = useState(null);
  const [currentPage, currentPageSet] = useState(1);
  const [isRendering, isRenderingSet] = useState(false);
  // const pdfFile = useSelector(s => s.view.startup.activeStartup.content.pitchDeck);
  const pdfFile_ = require("/Users/matthias/work/pitchclean/pitchclean-client-ui/src/seed/1907.00235.pdf").default;
  const [pdfFile, pdfFileSet] = useState(pdfFile_);
  // const pitchDeckUrl = require("/Users/matthias/work/pitchclean/pitchclean-client-ui/src/seed/1907.00235.pdf");
  // const pitchDeckUrl = "/Users/matthias/work/pitchclean/pitchclean-client-ui/src/seed/1907.00235.pdf";
  // const pitchDeckUrl = "https://natif.ai/wp-content/uploads/2021/02/2020-11-09-Senior-Machine-Learning_transformer.pdf";
  // effects
  useEffect(async () => {
    if (process.env.NODE_ENV !== 'development') {
      pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
    }
  }, []);
  useEffect(() => {
    if (pdfFile_ !== pdfFile) {
      pdfFileSet(pdfFile_);
    }
  }, [pdfFile_]);

  return !isEditing ? (
    <div className={`${classes.root} w100 h100`}>
      <PdfViewer
        pdfFile={pdfFile}
        currentPage={currentPage}
        totalPagesSet={totalPagesSet}
        isRendering={isRendering}
        isRenderingSet={isRenderingSet}
      />
      {totalPages && 
        <PdfNavControls
          totalPages={totalPages}
          currentPage={currentPage}
          currentPageSet={currentPageSet}
          isRendering={isRendering}
          isRenderingSet={isRenderingSet}
        />
      }
    </div>
  ) : (
    <PitchDeckEdit pdfFile={pdfFile} pdfFileSet={pdfFileSet} />
  );
};
// export
export default PitchDeck;
