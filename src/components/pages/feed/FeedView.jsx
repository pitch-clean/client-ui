// react
import React from 'react';
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