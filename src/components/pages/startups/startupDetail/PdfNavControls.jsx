// react
import React from 'react';
// utils
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
  pageCt: {},
});
// event handlers
const nextPage = (totalPages, currentPage, currentPageSet) => () => currentPage < totalPages && currentPageSet(currentPage + 1);
const prevPage = (currentPage, currentPageSet) => () => currentPage > 1 && currentPageSet(currentPage - 1);

/**
 * main
 * @param {*} param0 
 * @returns 
 */
const PdfNavControls = ({ totalPages, currentPage, currentPageSet }) => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`PdfNavControls ${classes.navControls} w100 flexrow`} id="navigation_controls">
      <button
        className={`button ${classes.button}`}
        id="go_previous"
        onClick={prevPage(currentPage, currentPageSet)}
      >
        Previous
      </button>
      <div className={`button ${classes.pageCt}`}>{`${currentPage} / ${totalPages}`}</div>
      <button
        className={`goNext ${classes.goNext}`}
        id="go_next"
        onClick={nextPage(totalPages, currentPage, currentPageSet)}
      >
        Next
      </button>
    </div>
  );
};

// export
export default PdfNavControls;
