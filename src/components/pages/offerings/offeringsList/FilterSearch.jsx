// react
import React, {useState} from 'react';
import { searchKeyDownHandler } from '../../../utils/formFxns';
// utils
import { fixedWidth } from '../../../utils/styleFxns';

// main
const FilterSearch = () => {
  // state
  const [inputStr, setInputStr] = useState('');

  return (
    <div
      className="flexrow"
      style={{
        justifyContent: `flex-start`,
        alignItems: `start`,
        // padding: `10px`,
      }}
    >
      <input
        className="FilterSearch"
        style={{
          ...fixedWidth(150, 'px'),
          padding: `4px 10px`,
        }}
        placeholder="Search..."
        value={inputStr}
        onChange={e => {
          const filteredStr = `${e.currentTarget.value}`.replace(/[^0-9a-zA-Z_-]/, '');
          setInputStr(filteredStr)
        }}
        onKeyDown={e => searchKeyDownHandler(e)}
      >
      </input>
      <div
        className="h100 f1"
        style={{
          border: `1px solid black`,
          background: 'yellow',
          flexGrow: 1,
          cursor: `pointer`,
        }}
        onClick={() => {
          console.log('submitting form');
        }}
      >
        Search
      </div>
    </div>
  )
};

// export
export default FilterSearch;
