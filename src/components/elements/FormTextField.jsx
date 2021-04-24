// react
import React from 'react';
// utils
import {updateInputField, formKeyDownHandler} from '../utils/formFxns';
import {fixedHeight} from '../utils/styleFxns';
import {slugify} from '../../utils/general';
// main
const FormTextField = ({title, value, stateUpdateFxn, isPassword, validateFxn}) => {
  // style
  /**@type {React.CSSProperties} */
  const style = {
    alignItems: `start`,
    padding: `10px`,
  };
  /**@type {React.CSSProperties} */
  const titleStyle = {
    padding: `5px`,
  };
  /**@type {React.CSSProperties} */
  const textInputStyle = {
    ...fixedHeight(30, 'px'),
    fontSize: `15px`,
    padding: `10px 5px`,
    margin: `5px 0`,
  };

  return (
    <div className="form text input flexcol w100" style={style} >
      <div style={titleStyle} >{title}</div>
      <input
        style={textInputStyle}
        className="w100 f1"
        type={isPassword ? 'password' : 'text'}
        placeholder="..."
        value={value}
        onChange={e => updateInputField(e, stateUpdateFxn)}
        onKeyDown={e => formKeyDownHandler(e, validateFxn)}
        autoFocus
      />
    </div>
  )
};

// export
export default FormTextField;
