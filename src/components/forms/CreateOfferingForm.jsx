// react
import React from 'react';
import { useHistory } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  updateActiveForm,
  checkIfAllValidForms,
  resetAllForms,
} from '../../redux/actions/CreateOfferingActions';
// components
import HorizontalNonLinearAlternativeLabelStepper from '../elements/HorizontalNonLinearAlternativeLabelStepper';
import BasicsForm from './offeringForms/BasicsForm';
import ProjectTypeForm from './offeringForms/ProjectTypeForm';
import AssetClassForm from './offeringForms/AssetClassForm';
import OfferingTypeForm from './offeringForms/OfferingTypeForm';
import FinancialProjectionsForm from './offeringForms/FinancialProjectionsForm';
import OperationsForm from './offeringForms/OperationsForm';
import ProjectSummaryForm from './offeringForms/ProjectSummaryForm';
import InvestmentBlurbForm from './offeringForms/InvestmentBlurbForm';
import CapitalStackChartForm from './offeringForms/CapitalStackChartForm';
import PicturesAndVideoForm from './offeringForms/PicturesAndVideoForm';
import SponsorSummaryForm from './offeringForms/SponsorSummaryForm';
import ExistingProjectsForm from './offeringForms/ExistingProjectsForm';
import ViewSettingsForm from './offeringForms/ViewSettingsForm';
import AccessSettingsForm from './offeringForms/AccessSettingsForm';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 10%`,
    minHeight: '50vh',
  },
}));
const reducerName = 'createOffering';
const envOfferingRoute = 'offering';

/**
 * main
 * controls the form groups
 */
const CreateOfferingForm = () => {
  // init hooks
  const classes = useStyles();
  const history = useHistory();

  const stepObjsArr = [
    {
      header: 'Basics',
      message: 'Name and location',
      component: <BasicsForm formName="basics" reducerName={reducerName} />,
      isOptional: false,
      formName: 'basics',
    },
    {
      header: 'Project Type',
      message: 'Please select the type of project to list',
      component: <ProjectTypeForm formName="projectType" reducerName={reducerName} />,
      isOptional: false,
      formName: 'projectType',
    },
    {
      header: 'Asset Class',
      message: 'Please select the asset class',
      component: <AssetClassForm formName="assetClass" reducerName={reducerName} />,
      isOptional: false,
      formName: 'assetClass',
    },
    {
      header: 'Offering Type',
      message: 'Please select the type of offering',
      component: <OfferingTypeForm formName="offeringType" reducerName={reducerName} />,
      isOptional: false,
      formName: 'offeringType',
    },
    {
      header: 'Financial Projections',
      message: '',
      formName: 'financialProjections',
      component: (
        <FinancialProjectionsForm formName="financialProjections" reducerName={reducerName} />
      ),
      isOptional: false,
    },
    {
      header: 'Operations',
      message: '',
      formName: 'operations',
      component: <OperationsForm formName="operations" reducerName={reducerName} />,
      isOptional: false,
    },
    {
      header: 'Project Summary',
      message: '',
      component: <ProjectSummaryForm formName="projectSummary" reducerName={reducerName} />,
      isOptional: false,
      formName: 'projectSummary',
    },
    {
      header: 'Investment Blurb',
      message: '',
      component: <InvestmentBlurbForm formName="investmentBlurb" reducerName={reducerName} />,
      isOptional: false,
      formName: 'investmentBlurb',
    },
    {
      header: 'Capital Stack Chart',
      message: '',
      component: <CapitalStackChartForm formName="capitalStackChart" reducerName={reducerName} />,
      isOptional: false,
      formName: 'capitalStackChart',
    },
    // {
    //   header: 'Pictures and Video',
    //   message: '',
    //   component: <PicturesAndVideoForm formName="picturesAndVideo" reducerName={reducerName} />,
    //   isOptional: false,
    //   formName: 'picturesAndVideo',
    // },
    {
      header: 'Sponsor Summary',
      message: '',
      component: <SponsorSummaryForm formName="sponsorSummary" reducerName={reducerName} />,
      isOptional: false,
      formName: 'sponsorSummary',
    },
    {
      header: 'Existing Projects and Investments',
      message: 'Existing Projects and Investments',
      component: <ExistingProjectsForm formName="existingProjects" reducerName={reducerName} />,
      isOptional: true,
      formName: 'existingProjects',
    },
    {
      header: 'View Settings',
      message: '',
      component: <ViewSettingsForm formName="viewSettings" reducerName={reducerName} />,
      isOptional: false,
      formName: 'viewSettings',
    },
    {
      header: 'Access Settings',
      message: '',
      component: <AccessSettingsForm formName="accessSettings" reducerName={reducerName} />,
      isOptional: false,
      formName: 'accessSettings',
    },
  ];

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={`CreateOfferingForm w100 ${classes.root}`}
    >
      <HorizontalNonLinearAlternativeLabelStepper
        stepObjsArr={stepObjsArr}
        redirectRoute={`${envOfferingRoute}`}
        reducerName={reducerName}
        updateActiveForm_={updateActiveForm}
        checkIfAllValidForms_={checkIfAllValidForms}
        resetAllForms_={resetAllForms}
      />
    </Grid>
  );
};

// export
export default CreateOfferingForm;
