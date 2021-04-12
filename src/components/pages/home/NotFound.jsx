// react
import React from 'react';
import { useSelector } from 'react-redux';

// main
const NotFound = ({props: {location: {pathname}}}) => {
  const isDarkMode = useSelector(s => s.view.isDarkMode);

  // style
  /**@type {React.CSSProperties} */
  const style = {
    fontWeight: `900`,
    justifyContent: `start`,
    color: isDarkMode ? `white` : 'black',
  };
  return (
    <div style={style} className="w100 f1 page" >NOT FOUND: "{pathname}"</div>
  )
};

// export
export default NotFound;
