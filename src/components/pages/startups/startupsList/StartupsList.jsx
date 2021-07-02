// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { updateStartupsArr, updateStartupsFilters } from '../../../../redux/actions/ViewActions';
import { Get } from '../../../../utils/requests';
// components
import StartupCard from './StartupCard';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  listContainer: {
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
  },
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
    const urlStartups = `${window.env.api.startups}?page=${page}`;
    const urlFilters = `${window.env.api.startups}/filters`;
    const { response: startups, error: errorStartups } = await Get(urlStartups);
    const { response: filters, error: errorFilters } = await Get(urlFilters);
    if (errorStartups) throw errorStartups;
    if (errorFilters) throw errorFilters;
    // console.log('startups', startups)
    // console.log({filters})
    dispatch(updateStartupsArr(startups || []));
    dispatch(updateStartupsFilters(filters));
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
    <div className={`StartupsList ${classes.root} page flexcol`}>
      <div className={`listContainer ${classes.listContainer} flexrow w100`}>
        {startupsArrElem}
      </div>
    </div>
  ) : (
    <div className={`"StartupsList ${classes.emptyList} page flexrow w100`}>{startupsArrElem}</div>
  );
};

// export
export default StartupsList;
