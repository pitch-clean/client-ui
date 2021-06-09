// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import { updateStartupsArr } from '../../../../redux/actions/ViewActions';
import { Get } from '../../../../utils/requests';
// components
import StartupCard from './StartupCard';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    // justifyContent: 'center',
    // paddingTop: '20px',
  },
  rootContainer: {},
  emptyList: {
    flexWrap: `wrap`,
    justifyContent: `center`,
    padding: `0 50px`,
    maxWidth: `100%`,
  },
}));
// fxns
const fetchStartupsArr = async (dispatch, page) => {
  try {
    const endpoint = `${window.env.api.startups}?page=${page}`;
    const startupsArr = await Get(endpoint, {}, true);
    console.log('startupsArr', startupsArr)
    dispatch(updateStartupsArr(startupsArr || []));
  } catch (err) {
    console.log("ERROR: StartupsList.jsx > fetchStartupsArr()");
    console.log(err);
  }
};

// main
const StartupsList = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const su = useSelector(s => s.view.startup);
  console.log('su', su)
  const startupsArrLen = useSelector(s => s.view.startup.startupsArr.length);
  // build fxn
  const startupsArrElem = [];
  for (let idx = 0; idx < startupsArrLen; idx += 1) {
    startupsArrElem.push(<StartupCard idx={idx} />);
  }
  // effects
  useEffect(async () => {
    // make the fetch to api
    await fetchStartupsArr(dispatch, 1);
    return () => {
      dispatch(clearStartupsArr());
    };
  }, []);

  return startupsArrLen > 0 ? (
    <div className={`${classes.rootContainer} w100 page flexcol`}>
      <GridList cellHeight={300} className={`StartupsList ${classes.root}`} cols={3}>
        {startupsArrElem}
      </GridList>
    </div>
  ) : (
    <div className={`"StartupsList ${classes.emptyList} page flexrow w100`}>{startupsArrElem}</div>
  );
};

// export
export default StartupsList;
