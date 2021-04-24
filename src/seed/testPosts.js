export const testPosts = [
  {
    "_id": 1,
    "profileId": 1,
    "profile": {
      "profileType": "user",
      "profileClass": "sponsor",
      firstName: `Sarah`,
      lastName: `Daly`,
      residence: {
        stateProvince: 'CA',
        city: 'Los Angeles',
        // city: 'Washington',
        // stateProvince: 'DC',
      },
      pii: {
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
