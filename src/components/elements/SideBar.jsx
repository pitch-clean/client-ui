// react
import React from 'react';
// style
import './Sidebar.css';

// main
const Sidebar = ({ isLeft, children }) => {
  const style = {
    left : isLeft ? 0         : 'initial' ,
    right: isLeft ? 'initial' : 0         ,
  }
  return (
    <div className={`Sidebar h100 ${ isLeft ? 'left': 'right'}`} style={style} >
      {children}
    </div>
  );
};

// export
export default Sidebar;