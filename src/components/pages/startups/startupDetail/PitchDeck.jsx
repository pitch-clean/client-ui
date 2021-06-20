// react
import React, { useState, useEffect, useRef, useContext } from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import PdfViewer from './PdfViewer';
import PdfNavControls from './PdfNavControls';
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
  // '& *': {
  //   width: `100%`,
  //   flex: 1,
  //   height: `auto`,
  // },
})

/**
 * main
 */
const PitchDeck = () => {
  // init hooks
  const classes = useStyles();
  // state
  const [totalPages, totalPagesSet] = useState(null);
  const [currentPage, currentPageSet] = useState(1);
  
  // const pitchDeckUrl = require("/Users/matthias/work/pitchclean/pitchclean-client-ui/src/seed/1907.00235.pdf");
  // const pitchDeckUrl = "/Users/matthias/work/pitchclean/pitchclean-client-ui/src/seed/1907.00235.pdf";
  // const pitchDeckUrl = "https://natif.ai/wp-content/uploads/2021/02/2020-11-09-Senior-Machine-Learning_transformer.pdf";
  // effects
  useEffect(async () => {
    if (process.env.NODE_ENV !== 'development') {
      pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
    }
  }, []);

  return (
    <div className={`${classes.root} w100 h100`}>
      <PdfViewer currentPage={currentPage} totalPagesSet={totalPagesSet} />
      {totalPages && <PdfNavControls totalPages={totalPages} currentPage={currentPage} currentPageSet={currentPageSet} />}
    </div>
  );
};
// export
export default PitchDeck;
