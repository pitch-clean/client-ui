// react
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { clearSearch } from '../../../redux/actions/ViewActions';
// components
import SearchSidebar from './SearchSidebar';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    color: 'black',
    justifyContent: 'space-bewteen',
    alignItems: 'start',
  },
}));

/**
 * main
 */
const SearchView = ({ props: { match: { params: { searchStr }}}}) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const searchResults = useSelector(s => s.view.search);
  console.log('getting updated search results', searchResults)
  const [isFetching, isFetchingSet] = useState(false);
  // effects
  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, []);

  return !isFetching ? (
    <div className={`SearchView ${classes.root} page flexrow`}>
      <SearchSidebar />
      <div className={`f1`}>
        Searching: {searchStr}
      </div>
    </div>
  ) : (
    <div />
  );
};

// export
export default SearchView;