// react
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import PdfViewer from './PdfViewer';
import PdfNavControls from './PdfNavControls';
import PitchDeckEdit from './PitchDeckEdit';
import { Put } from '../../../../utils/requests';
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
  // const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const activeStartupId = useSelector(s => s.view.startup.activeStartup._id);
  const [totalPages, totalPagesSet] = useState(null);
  const [currentPage, currentPageSetter] = useState(1);
  const [renderedPage, renderedPageSet] = useState(1);
  const [isRendering, isRenderingSet] = useState(false);
  // const pdfFile = useSelector(s => s.view.startup.activeStartup.content.pitchdeck);
  const pdfFile_ = require("/Users/matthias/work/pitchclean/pitchclean-client-ui/src/seed/1907.00235.pdf").default;
  const [pdfFile, pdfFileSet] = useState(pdfFile_);
  // const pitchdeckUrl = require("/Users/matthias/work/pitchclean/pitchclean-client-ui/src/seed/1907.00235.pdf");
  // const pitchdeckUrl = "/Users/matthias/work/pitchclean/pitchclean-client-ui/src/seed/1907.00235.pdf";
  // const pitchdeckUrl = "https://natif.ai/wp-content/uploads/2021/02/2020-11-09-Senior-Machine-Learning_transformer.pdf";
  
  // effects
  useEffect(async () => {
    if (process.env.NODE_ENV !== 'development') {
      pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
    }
  }, []);
  // when closing the form, update the database
  useEffect(async () => {
    console.log('edddit', isEditing)
    if (!isEditing && JSON.stringify(pdfFile_) !== JSON.stringify(pdfFile)) {
      const url = `${window.env.api.startups}/update/${activeStartupId}`;
      const payload = { 'content.pitchdeck': pdfFile };
      console.log('\n\nain the edit', url)
      console.log('payload', payload)
      try {
        const { result, error } = await Put(url, payload);
        console.log('response@@@@response', typeof result.content.pitchdeck.blob, '\n\ndone')
        pdfFileSet(result.content.pitchdeck);
      } catch (err) {
        console.log('error updating pdf PitchDeck', err);
      }
    }
  }, [isEditing]);
  let pdfValue;
  if (typeof pdfFile === typeof {}) {
    pdfValue = pdfFile.blob;
  } else {
    pdfValue = pdfFile;
  }

  return !isEditing ? (
    <div className={`${classes.root} w100 h100`}>
      <PdfViewer
        pdfFile={pdfValue}
        currentPage={currentPage}
        currentPageSetter={currentPageSetter}
        renderedPage={renderedPage}
        renderedPageSet={renderedPageSet}
        totalPages={totalPages}
        totalPagesSet={totalPagesSet}
        isRendering={isRendering}
        isRenderingSet={isRenderingSet}
      />
      {totalPages && 
        <PdfNavControls
          totalPages={totalPages}
          currentPage={currentPage}
          currentPageSet={currentPageSetter}
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
