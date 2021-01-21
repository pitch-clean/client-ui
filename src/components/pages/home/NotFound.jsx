// react
import React, {useEffect, useRef} from 'react';
// utils
import { pageTransition } from '../../utils/styleObjs';

// main
const NotFound = ({props: {location: {pathname}}}) => {
  // const {pathname} = props.location;
  // init hooks
  const pageRef = useRef(null);
  // style
  /**@type {React.CSSProperties} */
  const style = {
    fontWeight: `900`,
    justifyContent: `start`,
    ...pageTransition
  };
  // effects
  useEffect(() => {
    pageRef.current.style.opacity = 1;
    return () => {
      if (pageRef.current) {
        pageRef.current.style.opacity = 0;
      }
    }
  }, []);
  return (
    <div style={style} className="w100" ref={pageRef} >NOT FOUND: "{pathname}"</div>
  )
};

// export
export default NotFound;
