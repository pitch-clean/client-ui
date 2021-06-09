// react
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
// import { Document as DocumentEsm, Page as PageEsm, pdfjs as pdfjsEsm } from 'react-pdf/dist/esm/entry.webpack';
// import { Document as DocumentUmd, Page as PageUmd } from 'react-pdf/dist/umd/entry.webpack';
console.log('pdfjs', pdfjs)
// utils
import { makeStyles } from '@material-ui/core/styles';

// const PDF = require('react-pdf')
// console.log(PDF)
// constants
const useStyles = makeStyles({
  content: {
    padding: `20px 0`,
  },
})
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};
/**
 * main
 */
const PitchDeck = () => {
  // init hooks
  const classes = useStyles();
  // state
  // const pitchDeckUrl = useSelector(s => s.view.startup.activeStartup.content.pitchDeck);
  const pitchDeckUrl = "https://natif.ai/wp-content/uploads/2021/02/2020-11-09-Senior-Machine-Learning_transformer.pdf";
  const [numPages, numPagesSet] = useState(null);

  // callbacks
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    numPagesSet(nextNumPages);
  }
  // effects
  useEffect(() => {
    // pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);
  // console.log(pdfjs)

  return (
    <div className={classes.content}>
      <Document
        file={pitchDeckUrl}
        // file={""}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {
          Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ),
          )
        }
      </Document>
    </div>
  );
};

// export
export default PitchDeck;
