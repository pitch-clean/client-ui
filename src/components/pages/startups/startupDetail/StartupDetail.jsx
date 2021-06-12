// react
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Get } from '../../../../utils/requests';
import { updateActiveStartupObj, clearActiveStartup } from '../../../../redux/actions/ViewActions';
// components
import Factory from './Factory';
import GeneralInfo from './GeneralInfo';
import Highlights from './Highlights';
import RecentNews from './RecentNews';
import PartnersAndSponsors from './PartnersAndSponsors';
import PitchDeck from './PitchDeck';
import Media from './Media';
import AdvisorsAndInvestors from './AdvisorsAndInvestors';
import LeadershipTeam from './LeadershipTeam';
import LeftSidebar from '../../feed/LeftSidebar';
// constants
const useStyles = makeStyles({
  root: {
    alignItems: 'start',
  },
  content: {
    color: `black`,
    padding: '0 10px',
  },
})
const fetchStartupObj = async (alias, isFetchingSet, dispatch) => {
  isFetchingSet(true);
  const endpoint = `${window.env.api.startups}/${alias}`;
  try {
    const resJSON = await Get(endpoint, {}, true);
    const payload = resJSON;
    dispatch(updateActiveStartupObj(payload));
    isFetchingSet(!payload);
  } catch (err) {
    console.log('ERROR: startupdetail.jsx > fetchStartupObj GET')
    console.log(err)
  }
};

/**
 * main
 */
const StartupDetail = ({props: {match: {params: { alias }}}}) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeProfile = useSelector(s => s.auth.activeProfile);
  const activeStartup = useSelector(s => s.view.startup.activeStartup);
  const [isFetching, isFetchingSet] = useState(true);
  // effects
  useEffect(async () => {
    alias && await fetchStartupObj(alias, isFetchingSet, dispatch);
    // allow editing if logged in
    if (activeProfile) {
      console.log(activeStartup)
      console.log(activeProfile)
      if (activeProfile) {

      }
    }
    return () => {
      dispatch(clearActiveStartup())
    };
  }, [alias]);

  return !isFetching ? (
    <div className={`StartupDetail ${classes.root} page flexrow`}>
      <LeftSidebar />
      <div className={`${classes.content} flexcol`}>
        <Factory
          componentName="GeneralInfo"
          title="Company Overview"
        >
          <GeneralInfo />
        </Factory>
        <Factory
          componentName="Highlights"
          title="Highlights"
        >
          <Highlights />
        </Factory>
        <Factory
          componentName="RecentNews"
          title="Recent News"
        >
          <RecentNews />
        </Factory>
        <Factory
          componentName="PartnersAndSponsors"
          title="Partners And Sponsors"
        >
          <PartnersAndSponsors />
        </Factory>
        <Factory
          componentName="PitchDeck"
          title="Pitch Deck"
        >
          <PitchDeck />
        </Factory>
        <Factory
          componentName="Media"
          title="Pictures and Video"
        >
          <Media />
        </Factory>
        <Factory
          componentName="AdvisorsAndInvestors"
          title="Advisors And Investors"
        >
          <AdvisorsAndInvestors />
        </Factory>
      </div>
      <LeadershipTeam />
    </div>
  ) : (
    <div/>
  );
};

// export
export default StartupDetail;
