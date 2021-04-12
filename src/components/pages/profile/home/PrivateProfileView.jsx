// react
import React from 'react';

// main
const PrivateProfileView = ({
  props: {
    match: {
      params: { alias },
    },
  },
  ...otherProps
}) => {
  return (
    <div className="PrivateProfileView"></div>
  );
};

// export
export default PrivateProfileView;
