import { profilesObj } from './storeProfiles';

export const postsArr = [
  {
    "_id": `34s343s`,//seed-posts-1 (offering sub debt)
    "profile": 'zxcv09oip',
    "profile": { ...profilesObj['zxcv09oip']},
    "body": "Mark your calendar for an April 26th, 2021 subordinate debt offering \n on a 376 MwH wind project development in southern Virginia. \n The minimum investment level is $15,000.",
    "postType": "interest",
    "dtCreated": 1619791196043,
  },
  {
    "_id": `mnb33mn96`,// seed posts 2 (blackrock)
    "profile": '3m2n23',
    "profile": {...profilesObj['3m2n23']},
    "body": "The BlackRock renewables group plans on raising capital for a new emerging markets solar fund with regional focuses in Asia and Latin America. Our minimum investment level is $200,000. Please signal interest below. #NewFund",
    "postType": "interest",
    "dtCreated": 1614791296043,
  },
  {
    "_id": `fvs9876`, //seed-posts-3 (La Rosa)
    "profile": 'cxzxcxz',
    "profile": {...profilesObj['cxzxcxz']},
    "body": "NOW LIVE: The La Rosa Battery Station preferred equity offering is now accepting capital commitments. Brookfield Renewables is providing this $34 million offer on a first-come-first-serve basis.\n 11% Expected Annual Returns = ✅ \n $120M Net Present Value = ✅ \n 340 MwH / per day =  ✅",
    "postType": "interest",
    "dtCreated": 1619791396043,
  },
  {
    "_id": 'zzzfff', // seed posts 4 (wind grid)
    "profile": 's0987cxlvkn',
    "profile": {...profilesObj['s0987cxlvkn']},
    "body": "Wind Grid Capital Senior Vice President @Adam Stanley will be holding a zoom conference at 11:30 am EST on Thursday with investors in the Gold Tier Infrastructure Fund to go over FY 2021 projections.  #JoinUs",
    "postType": "rsvp",
    "dtCreated": 1619791496043,
  },
  {
    "_id": 'xcv0x9',
    "profile": '3',
    "profile": {...profilesObj['3']},
    "body": "Hello world. This is a test post you can like.",
    "postType": "social",
    "dtCreated": 1619771596043,
    "likes": [
      'vs98j',
      '3m2n23',
      'xcoviu8',
    ],
  },
  {
    "_id": 'vx09xv89v',
    "profile": '3',
    "profile": {...profilesObj['3']},
    "body": "Why are building renovations so costly?  Typically the grid will be emissions-free by the time they're already done!! It may be wiser to reallocate the $$$ to speed up converting to electric + new effic. buildings near pub. transport https://test.link.here #innovate #renovate",
    "postType": "social",
    "dtCreated": 1619791596043,
    "likes": [
      'vs98j',
      '3m2n23',
      'xcoviu8',
      'zxcv09oip',
      'mmnmmmmnmb',
      'cxzxcxz',
      'vcxv7878',
      'zxcv87',
      's0987cxlvkn',
    ],
  },
  {
    "_id": 'xcvxcvb',
    "profile": '3',
    "profile": {...profilesObj['3']},
    "body": "Idea: Identifying the best underground sites for carbon sinks can take up to or even over 10 yrs.  We really need to start now.  There's no excuse to delay and theres an abundance of available sites near high emission regions. Storage is relatively cheap, but capture isnt: $20 per ton https://another.test.link.here #USA #Europe",
    "postType": "social",
    "dtCreated": 1619801596043,
    "likes": [
      's0987cxlvkn',
    ],
  },
  {
    "_id": 'xcvxcvbf23',
    "profile": '3',
    "profile": {...profilesObj['3']},
    "body": "Repeating the last post.  Idea: Identifying the best underground sites for carbon sinks can take up to or even over 10 yrs.  We really need to start now.  There's no excuse to delay and theres an abundance of available sites near high emission regions. Storage is relatively cheap, but capture isnt: $20 per ton https://another.test.link.here #USA #Europe",
    "postType": "social",
    "dtCreated": 1619801599043,
    "likes": [
      '3',
    ],
  },
];

export const queryPostsByProfile = inputAlias => {
  const payloadPosts = [];
  for (let i = 0; i < postsArr.length; i += 1) {
    const postObj = postsArr[i];
    const {
      profile: { alias },
      _id,
      body,
      postType,
      dtCreated,
      profile,
    } = postObj;
    if (alias === inputAlias) {
      payloadPosts.push({ _id, body, postType, dtCreated, profile });
    }
  }
  return payloadPosts;
};
