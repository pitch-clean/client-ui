// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';
import { Post } from '../../../../utils/requests';
import { slugify } from '../../../../utils/general';

// components
// constants
const useStyles = makeStyles(theme => ({
  SubmitButton: {
    width: `100%`,
    marginTop: theme.spacing(1),
    backgroundColor: '#3b9aee',
    fontWeight: '500',
    color: theme.palette.primary.light,
    '& MuiButton-label': {
      fontWeight: 600,
    },
    '&:disabled': {
      color: theme.palette.primary.dark,
    },
  },
}));
// fxns
const buildBody = async (input, activeProfileId) => {
  console.log('inputinput', input)
  const body = {
    'profile': activeProfileId,
    'title': input.title.value,
    'alias': slugify(input.title.value),
    'slogan': input.slogan.value,
    'sector': input.sector.value,
    'employeeCt': input.employeeCt.value,
    'website': input.website.value,
    'contact': {
      'email': input.email.value,
      'phone': input.phone.value,
    },
    'social': {
      'linkedin': input.linkedin.value,
      'twitter': input.twitter.value,
      'facebook': input.facebook.value,
    },
    'location': {
      'coordinates': {
        'lat': 0,
        'lon': 0,
      },
      "address": {
        "country": input.country.value,
        "provinceState": input.provinceState.value,
        "city": input.city.value,
        "street": input.street.value,
        "buildingNumber": input.buildingNumber.value,
        "apartment": input.apartment.value,
      },
    },
    "fundingRounds": [
      {
        "dtClosed": input.dtClosedLatestFundingRound.value,
        "round": input.latestFundingRoundStage.value,
        "type": input.latestFundingRoundMethod.value,
        "amount": input.amountRaised.value,
      },
    ],
    "likes": [],
    "reposts": [],
    "views": [],
    "content": {
      "cardBody": input.about.value,
      "about": input.about.value,
      "highlights": input.highlights,
      "recentNews": input.recentNews,
      "pitchdeck": input.pitchdeck,
      "media": {
        "images": input.images,
        "videos": input.videos,
      },
    },
    "partners": input.partners,
    "sponsors": input.sponsors,
    "team": input.team,
    'advisors': input.partners,
    'investors': input.investors,
    'images': {
      'large': input.image.value,
    },
  };
  return body;
};
const handleSubmit = async (input, activeProfileId) => {
  const url = `${window.env.api.startups}/create`;
  // console.log('inputinput', input, activeProfileId)
  const body = await buildBody(input, activeProfileId);
  try {
    const res = await Post(url, body);
  } catch (err) {
    console.log(err)
    throw err;
  }
};

/**
 * main
 */
const SubmitButton = ({ reducerName }) => {
  // init hooks
  const classes = useStyles();
  // state
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const areAllFormsValid = useSelector(s => s.forms[reducerName].areAllFormsValid);
  const formGeneralInfo = useSelector(s => s.forms[reducerName].generalInfo.fields);
  const highlights = useSelector(s => s.forms[reducerName].highlights.fields.highlights.value);
  const recentNews = useSelector(s => s.forms[reducerName].recentNews.fields.recentNews.value);
  const partners = useSelector(s => s.forms[reducerName].partnersAndSponsors.fields.partners.value);
  const sponsors = useSelector(s => s.forms[reducerName].partnersAndSponsors.fields.sponsors.value);
  const pitchdeck = useSelector(s => s.forms[reducerName].pitchdeck.fields.pitchdeck.value);
  const advisors = useSelector(s => s.forms[reducerName].advisorsAndInvestors.fields.advisors.value);
  const investors = useSelector(s => s.forms[reducerName].advisorsAndInvestors.fields.investors.value);
  const team = useSelector(s => s.forms[reducerName].team.fields.team.value);
  const images = useSelector(s => s.forms[reducerName].media.fields.images.value);
  const videos = useSelector(s => s.forms[reducerName].media.fields.videos.value);
  const input = {
    ...formGeneralInfo,
    highlights,
    recentNews,
    partners,
    sponsors,
    pitchdeck,
    advisors,
    investors,
    team,
    images,
    videos,
  };

  return (
    <Button
      disabled={!areAllFormsValid}
      variant="contained"
      color="primary"
      onClick={() => handleSubmit(input, activeProfileId)}
      className={classes.SubmitButton}
      endIcon={<SendIcon />}
      size="large"
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
