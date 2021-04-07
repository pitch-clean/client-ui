// react
import React from 'react';
// components
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';
import FeedContent from './FeedContent';
// style
import './FeedView.css';

// main
const FeedView = () => {

  return (
    <div className="FeedView w100 flexrow" >
      <LeftSidebar />
      <FeedContent />
      <RightSidebar />
    </div>
  );
};

// export
export default FeedView;