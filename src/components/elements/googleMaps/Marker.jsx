// react
import React from 'react';
// utils
import { PinDropOutlined } from '@material-ui/icons';

/**
 * main
 * @param {*} param0 
 */
const Marker = ({ onClick, text }) => {

  return (
    <>
      <PinDropOutlined onClick={onClick} />
      <p>{text}</p>
    </>
  );
};

export default Marker;
