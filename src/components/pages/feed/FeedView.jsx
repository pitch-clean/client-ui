// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// import { clearFeed } from '../../../redux/actions/ViewActions';
// components
import RightSidebar from './rightSidebar/RightSidebar';
import LeftSidebar from './leftSidebar/LeftSidebar';
import FeedContent from './FeedContent';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'whitesmoke',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
}));

// main
const FeedView = () => {
  // init hooks
  const classes = useStyles();
  // state
  const isActive = useSelector(s => s.auth.activeProfile);

  return isActive ? (
    <div className={`${classes.root} FeedView w100 flexrow`} container>
      <LeftSidebar />
      <FeedContent />
      <RightSidebar />
    </div>
  ) : (
    <div />
  );
};

// export
export default FeedView;