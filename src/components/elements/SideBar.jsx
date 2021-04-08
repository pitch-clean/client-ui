// react
import React from 'react';
import Proptypes from 'prop-types';
// style
import './Sidebar.css';

// main
const Sidebar = ({ isLeft, children }) => {
  const style = {
    left: isLeft ? 0 : 'initial',
    right: isLeft ? 'initial' : 0,
  };

  return (
    <div className={`Sidebar h100 ${isLeft ? 'left' : 'right'}`} style={style}>
      {children}
    </div>
  );
};

// proptypes
Sidebar.propTypes = {
  isLeft: Proptypes.bool.isRequired,
  children: Proptypes.shape({}).isRequired,
};

// export
export default Sidebar;
