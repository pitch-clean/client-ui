import { users1, usersRecConnections, org } from './queryUsersById';

export const testPosts = [
  {
    "_id": 'fs98ufd9',
    "profileId": 'sd8x',
    "profile": { ...usersRecConnections['sd8x']},
    "body": "Mark your calendar for an April 26th, 2021 subordinate debt offering \n on a 376 MwH wind project development in southern Virginia. \n The minimum investment level is $15,000.",
    "postType": "interest"
  },
  {
    "_id": `34s343s`,
    "profileId": 'zxcv87',
    "profile": {...org['zxcv87']},
    "body": "Mark your calendar for an April 26th, 2021 subordinate debt offering on a 376 MwH wind project development in southern Virginia. The minimum investment level is $15,000. #SubDebtOffering",
    "postType": "offering"
  },
  {
    "_id": `fvs9876`,
    "profileId": 'xcjij0',
    "profile": {...users1['xcjij0']},
    "body": "NOW LIVE: The La Rosa Battery Station preferred equity offering is now accepting capital commitments. Brookfield Renewables is providing this $34 million offer on a first-come-first-serve basis.\n 11% Expected Annual Returns = ✅ \n $120M Net Present Value = ✅ \n 340 MwH / per day =  ✅",
    "postType": "interest"
  },
  {
    "_id": 's0987cxlvkn',
    "profileId": 'afccxmnvbu',
    "profile": {...org['zxcv87']},
    "body": "Wind Grid Capital Senior Vice President @Adam Stanley will be holding a zoom conference at 11:30 am EST on Thursday with investors in the Gold Tier Infrastructure Fund to go over FY 2021 projections.  #JoinUs",
    "postType": "rsvp"
  },
];
