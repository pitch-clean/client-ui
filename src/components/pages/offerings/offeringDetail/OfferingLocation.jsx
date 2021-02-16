// react
import React, {useLayoutEffect, useRef, useState} from 'react';
// utils
import { fixedHeight } from '../../../utils/styleFxns';

// main
const OfferingLocation = () => {
  // init hooks
  const ref1 = useRef();
  // state
  const [height, setHeight] = useState(0);
  // effects
  useLayoutEffect(() => {
    if (ref1.current) {
      const width = ref1.current.getBoundingClientRect().width;
      setHeight(width * (9/16));
    }
  }, []);
  return (
    <div
      className="OfferingLocation"
      style={{...fixedHeight(height, 'px'),}}
      ref={ref1}
    >
      Map here
    </div>
    
  );
};

// export
export default OfferingLocation;
