// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link as MuiLink } from '@material-ui/core';
import { loadInitState, checkIfAllValidForms, updateFormFieldValue, resetAllForms } from '../../../../redux/actions/forms/CreateFundingPageActions';
// components
import SubmitButton from './SubmitButton';
import HorizontalNonLinearAlternativeLabelStepper from '../../../elements/HorizontalNonLinearAlternativeLabelStepper';
import GeneralInfoCreate from './GeneralInfoCreate';
import HighlightsCreate from './HighlightsCreate';
import RecentNewsCreate from './RecentNewsCreate';
import PartnersAndSponsorsCreate from './PartnersAndSponsorsCreate';
import PitchdeckCreate from './PitchdeckCreate';
import AdvisorsAndInvestorsCreate from './AdvisorsAndInvestorsCreate';
import LeadershipTeamCreate from './LeadershipTeamCreate';
import MediaCreate from './MediaCreate';
// constants
const useStyles = makeStyles(theme => ({
  CreateFundingPage: {},
}));
const reducerName = 'fundingPage';

/**
 * MAIN
 * This creates a profile and posts on personal
 * Refreshing just repopulates fields from existing form in cookies/localstorage
 * TODO: Need to implement cookies for refreshing and clearing the cookie
 */
const CreateFundingPage = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const isAuthenticated = useSelector(s => s.auth.activeProfile._id);
  const isLoaded = useSelector(s => s.forms.fundingPage.areAllFormsValid !== undefined)
  const stepObjsArr = [
    {
      header: 'General',
      message: 'Create a new Funding Page',
      component: <GeneralInfoCreate reducerName={reducerName} formName={'generalInfo'} />,
      isOptional: false,
      formName: 'generalInfo',
    },
    {
      header: 'Highlights',
      message: 'Add highlights',
      component: <HighlightsCreate reducerName={reducerName} formName={'highlights'} />,
      isOptional: true,
      formName: 'highlights',
    },
    {
      header: 'Recent News',
      message: 'Add recent news articles',
      component: <RecentNewsCreate reducerName={reducerName} formName={'recentNews'} />,
      isOptional: true,
      formName: 'recentNews',
    },
    {
      header: 'Partners and Sponsors',
      message: 'Add active partners and sponsors',
      component: <PartnersAndSponsorsCreate reducerName={reducerName} formName={'partnersAndSponsors'} />,
      isOptional: true,
      formName: 'partnersAndSponsors',
    },
    {
      header: 'Pitchdeck',
      message: 'Add a PDF of your company\'s pitchdeck',
      component: <PitchdeckCreate reducerName={reducerName} formName={'pitchdeck'} />,
      isOptional: true,
      formName: 'pitchdeck',
    },
    {
      header: 'Images and Videos',
      message: 'Cultivate your audience: upload images directly or add videos from the web',
      component: <MediaCreate reducerName={reducerName} formName={'media'} />,
      isOptional: true,
      formName: 'media',
    },
    {
      header: 'Advisors & Investors',
      message: 'Add advisors and investors',
      component: <AdvisorsAndInvestorsCreate reducerName={reducerName} formName={'advisorsAndInvestors'} />,
      isOptional: true,
      formName: 'advisorsAndInvestors',
    },
    {
      header: 'Leadership Team',
      message: 'Add founders and core employees',
      component: <LeadershipTeamCreate reducerName={reducerName} formName={'team'} />,
      isOptional: true,
      formName: 'team',
    },
  ];
  // effects
  useEffect(() => {
    dispatch(loadInitState());
  }, []);

  return (
    <div className={`${classes.CreateFundingPage} flexcol w100 h100`}>
      {isLoaded && <HorizontalNonLinearAlternativeLabelStepper
        stepObjsArr={stepObjsArr}
        redirectAddress={`/${window.env.client.marketplace}`}
        reducerName={reducerName}
        checkIfAllValidForms={checkIfAllValidForms}
        updateActiveForm={updateFormFieldValue}
        customSubmitComponent={<SubmitButton reducerName={reducerName} />}
        resetAllForms={resetAllForms}
      />}
    </div>
  );
};

// export
export default CreateFundingPage;
