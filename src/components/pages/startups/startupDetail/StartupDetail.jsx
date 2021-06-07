// react
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Get } from '../../../../utils/requests';
import { updateActiveStartupObj, clearActiveStartup } from '../../../../redux/actions/ViewActions';
// components
// constants
const useStyles = makeStyles({
  root: {},
})
const fetchStartupObj = async (alias, isFetchingSet, dispatch) => {
  isFetchingSet(true)
  const endpoint = `${window.env.api.startups}/${alias}`;
  try {
    const resJSON = await Get(endpoint, {}, true);
    console.log('\n\nresJSON', resJSON, '\n')
    const payload = resJSON;
    dispatch(updateActiveStartupObj(payload));
    isFetchingSet(false);
  } catch (err) {
    console.log('ERROR: startupdetail.jsx > fetchStartupObj GET')
    console.log(err)
    alert(err);
  }
  isFetchingSet(false)
};

/**
 * main
 */
const StartupDetail = ({props: {match: {params: { startupId, alias }}}}) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [isFetching, isFetchingSet] = useState(true);
  // effects
  useEffect(async () => {
    await fetchStartupObj(alias, isFetchingSet, dispatch);
    return () => {
      dispatch(clearActiveStartup())
    };
  }, [alias]);

  return isFetching ? (
    <div className={`StartupDetail ${classes.root}`}>
      Startup here
    </div>
  ) : (
    <div/>
  );
};

// export
export default StartupDetail;