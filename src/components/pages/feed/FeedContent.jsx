// react
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  List,
  Link as MuiLink,
} from '@material-ui/core';
// components
import FeedItem from './FeedItem';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    padding: `10px`,
    margin: `0 5px`,
  },
  cardRoot: {
    margin: `10px`,
  },
  cardHeader: {
    padding: `10px`,
    justifyContent: 'start',
  },
  avatar: {
    backgroundColor: 'lightblue',
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: 0,
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardBody: {
    textAlign: 'start',
  },
}));
// seed
const seedPostArrs = [
  {
    "_id": 1,
    "profileId": 1,
    "profile": {
      "profileType": "user",
      "profileClass": "sponsor",
      pii: {
        firstName: `Sarah`,
        lastName: `Daly`,
        residence: {
          stateProvince: 'CA',
          city: 'Los Angeles',
          city: 'Washington',
          stateProvince: 'DC',
        },
      },
      alias: 'sarah-daly23',
      position: 'Managing Director',
      currentEmployer: 'BlackRock Renewables Group',
      image: "",
    },
    "body": "Mark your calendar for an April 26th, 2021 subordinate debt offering \n on a 376 MwH wind project development in southern Virginia. \n The minimum investment level is $15,000.",
    "postType": "interest"
  },
  {
    "_id": 2,
    "profileId": 2,
    "profile": {
      "profileType": "organization",
      "profileClass": "sponsor",
      name: `Vertex Capital`,
      alias: 'vertex-capital',
      city: 'Charlottesville',
      stateProvince: 'VA',
      image: "",
    },
    "body": "Mark your calendar for an April 26th, 2021 subordinate debt offering on a 376 MwH wind project development in southern Virginia. The minimum investment level is $15,000. #SubDebtOffering",
    "postType": "offering"
  },
  {
    "_id": 3,
    "profileId": 3,
    "profile": {
      "profileType": "user",
      "profileClass": "sponsor",
      firstName: `Sasha`,
      lastName: `Carlton`,
      alias: 'sasha-carlton23049',
      position: 'Senior Analyst',
      currentEmployer: 'Sunwind Asset Management',
      city: 'Salt Lake City',
      stateProvince: 'UT',
      image: "",
    },
    "body": "NOW LIVE: The La Rosa Battery Station preferred equity offering is now accepting capital commitments. Brookfield Renewables is providing this $34 million offer on a first-come-first-serve basis.\n 11% Expected Annual Returns = ✅ \n $120M Net Present Value = ✅ \n 340 MwH / per day =  ✅",
    "postType": "interest"
  },
  {
    "_id": 4,
    "profileId": 4,
    "profile": {
      "profileType": "organization",
      "profileClass": "sponsor",
      alias: 'wind-grid-capital',
      name: `Wind Grid Capital`,
      city: 'Chicago',
      stateProvince: 'IL',
      image: "",
    },
    "body": "Wind Grid Capital Senior Vice President @Adam Stanley will be holding a zoom conference at 11:30 am EST on Thursday with investors in the Gold Tier Infrastructure Fund to go over FY 2021 projections.  #JoinUs",
    "postType": "rsvp"
  },
];

// main
const FeedContent = () => {
  // init hooks
  const classes = useStyles();
  // state
  const [postsArr, setPostsArr] = useState([]);
  // build
  const buildPostElemArr = arrOfPosts => {
    const arrOfPostElems = arrOfPosts.map((post, idx) => {
      return <FeedItem postObj={post} idx={idx} />;
    });
    return (
      <List>
        {arrOfPostElems}
      </List>
    );
  };
  console.log('posty', postsArr)
  // effects
  // fetch initial posts on page load
  useEffect(() => {
    // fetch
    const payload = seedPostArrs;
    setPostsArr(payload);
  }, []);
  // fetch additional posts when reaching the end
  useEffect(() => {}, []);
  return (
    <Paper className={`${classes.root} FeedContainer flexcol f1`} outlined elevation={3}>
      {buildPostElemArr(postsArr)}
    </Paper>
  );
};

// export
export default FeedContent;