// react
import React from 'react';
// components
import NewsList from './NewsList';

// main
const News = () => {

  return (
    <div className="News SidebarWidget w100 flexcol" >
      <div className="header w100" >Industry News</div>
      <NewsList />
    </div>
  );
};

// export
export default News;