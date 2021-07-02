// react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
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
const fetchStartupObj = async (startupId, dispatch) => {
  const endpoint = `${window.env.api.startups}/startup/${startupId}`;
  try {
    const resJSON = await Get(endpoint);
    const payload = resJSON;
    console.log(resJSON)
    dispatch(updateActiveStartupObj(payload));
  } catch (err) {
    console.log('ERROR: startupdetail.jsx > fetchStartupObj GET')
    console.log(err)
  }
};

/**
 * view component
 * @param {*} param0 
 * @returns 
 */
const StartupDetailView = ({ startupObj, activeProfile }) => {
  // init hooks
  const classes = useStyles();
  // allow editing if logged in
  if (activeProfile) {
    // console.log('allow editing?', activeProfile._id, startupObj.profile, activeProfile._id === startupObj.profile)
  }

  return (
    <div className={`StartupDetail ${classes.root} page flexrow`}>
      <LeftSidebar />
      <div className={`${classes.content} flexcol`}>
        {/* <Factory
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
        </Factory> */}
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
  );
};

/**
 * main
 */
const StartupDetail = () => {
  // init hooks
  const dispatch = useDispatch();
  const {
    params: {
      startupId,
    },
  } = useRouteMatch();
  // state
  const activeProfile = useSelector(s => s.auth.activeProfile);
  const activeStartup = useSelector(s => s.view.startup.activeStartup) || {};
  // effects
  useEffect(async () => {
    await fetchStartupObj(startupId, dispatch);
    return () => {
      dispatch(clearActiveStartup())
    };
  }, [startupId]);
  if (startupId === 'undefined') {
    // display toast noti saying startup doesnt exist
    // then redirect to startups
    return <Redirect to={`/${window.env.client.marketplace}`} />
  }
  return activeStartup._id ? (
    <StartupDetailView startupObj={activeStartup} activeProfile={activeProfile} />
  ) : (
    <div/>
  );
};

// export
export default StartupDetail;
