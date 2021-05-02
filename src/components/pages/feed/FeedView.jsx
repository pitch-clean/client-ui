// react
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { updatePosts, clearFeed } from '../../../redux/actions/ViewActions';
// components
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';
import FeedContent from './FeedContent';
// seed
import { testPosts } from '../../../seed/testPosts';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `7px 0`,
    backgroundColor: 'whitesmoke',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // '& .LSSuggestedConnections .MuiTypography-displayBlock': {
    //   whiteSpace: 'nowrap',
    //   overflowX: 'hidden',
    //   textOverflow: 'ellipsis',
    //   display: 'inline',
    // },
    // overflow: 'scroll',
  },
}));

// main
const FeedView = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // effects
  useEffect(() => {
    // fetch seed posts
    dispatch(updatePosts(testPosts));
  }, []);

  return (
    <div className={`${classes.root} FeedView w100 flexrow`} container>
      <LeftSidebar />
      <FeedContent />
      <RightSidebar />
    </div>
  );
};

// export
export default FeedView;