// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// import { updateStartupsArr } from '../../../../redux/actions/ViewActions';
// import { Get } from '../../../../utils/requests';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 50,
    backgroundColor: 'green',
    justifyContent: 'start',
  },
}));
// fxns
const getFilteredItems = (dispatch) => {};

/**
 * main
 */
const SearchFilter = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  // const startupsArrLen = useSelector(s => s.view.startup.startupsArr.length);
  // effects
  // useEffect(async () => {}, []);

  return (
    <div className={`SearchFilter ${classes.root} flexrow w100`}>
      {'search'}
    </div>
  );
};

// export
export default SearchFilter;
