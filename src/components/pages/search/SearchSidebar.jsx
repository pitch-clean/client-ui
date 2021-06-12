// react
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import Sidebar from '../../elements/SideBar';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    color: 'black',
    '& *': {
      color: 'black',
    },
  },
}));

/**
 * main
 */
const SearchSidebar = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const profiles = useSelector(s => s.view.search.profiles);
  const posts = useSelector(s => s.view.search.posts);
  const startups = useSelector(s => s.view.search.startups);
  // console.log('getting updated search results', searchResults)
  // effects
  useEffect(() => {}, []);
  const msg1 = `Profiles: ${profiles && profiles.length}`;

  return (
    // <div className={`SearchSidebar ${classes.root}`}>
      <Sidebar isLeft={false}>
        <div>{msg1}</div>
      </Sidebar>
  );
};

// export
export default SearchSidebar;