// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
// utils
import { updateProfileTab } from '../../../../redux/actions/ViewActions';
// seed
const arr = [
  {
    id: 0,
    title: `La Rosa Battery Storage`,
    location: 'Brookfield Renewables (Reston, VA)',
  },
  {
    id: 1,
    title: 'Mount Ridge Solar Farm',
    location: 'WindSolar Management (Denver, CO)',
  },
];
// main
const Investments = ({}) => {
  // init hooks
  const dispatch = useDispatch();
  const match = useRouteMatch();
  console.log('invests match', match);
  useEffect(() => {
    dispatch(updateProfileTab('investments'));
  }, []);
  // state
  // const activeProfile = useSelector(s => s.auth.activeProfile.alias);
  // build
  const comp = (title, location) => {
    return (
      <div className="investment1">
        <div className="title">{title}</div>
        <div className="location">{location}</div>
      </div>
    );
  };
  const elemArr = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    const element = arr[idx];
    elemArr.push(comp(element.title, element.location));
  }

  return (
    <div className="Investments">
      {elemArr}
    </div>
  );
};

// export
export default Investments;
