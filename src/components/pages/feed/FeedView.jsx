// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// import { clearFeed } from '../../../redux/actions/ViewActions';
// components
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';
import FeedContent from './FeedContent';
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