// react
import React from 'react';

// main
const SidebarWidget = ({header, children}) => {

  return (
    <div className="SidebarWidget w100 flexcol" >
      <div className="header">{header}</div>
      {children}
    </div>
  );
};

// export
export default SidebarWidget;