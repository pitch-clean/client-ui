// react
import React, {useEffect, useRef, useState, memo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// redux
import {setActiveSortTitle} from '../../../../redux/actions/OfferingsActions';
// constants
const activeArrowHexCode = `\u21E3`;
const inactiveArrowHexCode = `\u25BF`;

// main
const SortElem = ({sortTitle}) => {
  // init hooks
  const sortRef = useRef(null);
  const arrowRef = useRef(null);
  const dispatch = useDispatch();
  // state
  const [isArrowDescending, setIsArrowDescending] = useState(true);
  const activeSortTitle = useSelector(s=>s.offerings.activeSortTitle);
  useEffect(() => {
    if (isArrowDescending) {
      arrowRef.current.style.transform = `matrix(1,0,0,1,0,0)`;
    } else {
      arrowRef.current.style.transform = `matrix(1,0,0,-1,0,0)`;
    }
  }, [isArrowDescending])

  return (
    <div
      className="sortElem flexrow noselect"
      ref={sortRef}
      tabIndex='0'
      onMouseDown={e => {
        setIsArrowDescending(!isArrowDescending)
        dispatch(setActiveSortTitle(sortTitle))
      }}
      style={{
        padding: `5px 10px`,
        outlineColor: `#b9f2b9`,
        justifyContent: `start`,
        border: `1px solid white`,
        cursor: `pointer`,
        margin: `2px 10px`,
        flexShrink: 0,
      }}
    >
      <div
        className="title flexrow w100 h100"
        style={{
          justifyContent: `space-between`,
          minWidth: `60px`,
        }}
      >
        <div style={{fontWeight: 500, paddingRight: `30px`,}} >{sortTitle}</div>
        <div ref={arrowRef} >
          {sortTitle === activeSortTitle ? activeArrowHexCode : inactiveArrowHexCode}
        </div>
      </div>
    </div>
  )
};

// export
export default memo(SortElem);
