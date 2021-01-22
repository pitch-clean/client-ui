// react
import React from 'react';

// main
const NotFound = ({props: {location: {pathname}}}) => {
  // style
  /**@type {React.CSSProperties} */
  const style = {
    fontWeight: `900`,
    justifyContent: `start`,
  };
  return (
    <div style={style} className="w100 f1 page" >NOT FOUND: "{pathname}"</div>
  )
};

// export
export default NotFound;
