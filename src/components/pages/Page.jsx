// react
import React, {useRef, useEffect} from 'react';

// main
const Page = ({children}) => {
  // init hooks
  const pageRef = useRef(null);
  // style
  /**@type {React.CSSProperties} */
  const style = {
    opacity: 0,
    transition: `opacity 0.15s ease-out`,
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
    <div style={style} ref={pageRef} className="PAGE w100 flexcol" >{children}</div>
  )
};

// export
export default Page;
