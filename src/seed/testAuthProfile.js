const imagesPath = './images';
export const getImgPath = (imgPath) => {
  const imgObj = require(`${imagesPath}/${imgPath}`);
  const staticImgPath = imgObj.default;
  return staticImgPath;
};
const education = [
  {
    organization: 'Harvard School of Management',
    degree: 'Masters in Business Administration',
    dtEnd: '2016-05-01T00:00:00.000Z',
    dtStart: '2014-08-01T00:00:00.000Z',
  },
  {
    organization: 'Cornell University',
    degree: 'B.A. in Economics',
    dtEnd: '2013-05-01T00:00:00.000Z',
    dtStart: '2013-05-01T00:00:00.000Z',
  },
];
const employment = [
  {
    employer: 'Test Asset Management',
    title: 'Investments Director',
    dtEnd: '2020-05-01T00:00:00.000Z',
    dtStart: '2017-05-01T00:00:00.000Z'
  },
  {
    employer: 'Test Solar LLC',
    title: 'Senior Vice President',
    dtEnd: '2017-05-01T00:00:00.000Z',
    dtStart: '2014-05-01T00:00:00.000Z'
  },
  {
    employer: 'Test Capital',
    title: 'Analyst',
    dtEnd: '2014-05-01T00:00:00.000Z',
    dtStart: '2013-05-01T00:00:00.000Z'
  }
];
const about = {
  profileBio:
    'As a Senior Vice President I manage all business development for the North West region of the United States for Vertex Capital’s solar project finance. With over 7 years of experience in the renewable finance sector, I am able to utilize my extensive network to access capital for our enterprise clients and oversee cashflow distribution to our investors.',
};
const pii = {
  firstName: 'Drew',
  lastName: 'Orrin',
  residence: {
    stateProvince: 'CA',
    city: 'Los Angeles',
  },
};
const images = {
  "profile": {
      "large": "",
      "main": "",
      "thumbnail": getImgPath("drew-orrin-thumbnail.jpg"),
  },
  "background": {
      "large": "",
      "thumbnail": "",
  }
};
const active = [
  {
    type: 'employment',
    employer: 'Test Capital',
    title: 'Senior Vice President',
    dtStart: '2020-05-01T00:00:00.000Z',
    dtEnd: null,
  },
];
const connections = [
  {
    investorId: 0,
    firstName: `Jamie`,
    lastName: `Harris`,
    position: 'Senior Vice President',
    organization: 'Brooklane Renewables',
    city: 'New York',
    stateProvince: 'NY',
  },
  {
    investorId: 1,
    firstName: `Tom`,
    lastName: `Daly`,
    position: 'Managing Director',
    organization: 'Vertex Capital',
    city: 'Washington',
    stateProvince: 'DC',
  },
  {
    investorId: 2,
    firstName: `Maya`,
    lastName: `Taylor`,
    position: 'Associate',
    organization: 'Atrium Solar LLC',
    city: 'Nashville',
    stateProvince: 'TN',
  },
  {
    investorId: 3,
    firstName: `Ben`,
    lastName: `Carlton`,
    position: 'Senior Analyst',
    organization: 'Sunwind Asset Management',
    city: 'Salt Lake City',
    stateProvince: 'UT',
  },
  {
    investorId: 4,
    firstName: `Jennifer`,
    lastName: `Cunningham`,
    position: 'Partner and COO',
    organization: 'Solstice Capital',
    city: 'Seattle',
    stateProvince: 'WA',
  },
];
const investments = [
  {
    "isPublic": true,
    "offeringId": 1,
      "offering": {
        "sponsorId": 1,
        "sponsor": {
          "name": "Vertex Capital",
          "slug": "vertex-capital",
        },
        "title": "Buffalo Creek Wind Farm",
        "slug": "buffalo-creek-wind-farm",
        "financials": {
          "instrument": 'debt',
          "expectedReturn": 133300,
          "fundTarget": 333300,
          "amtFunded": 333300,
          "principalOutstanding": 0.091,
          "interestAccrued": 0.074,
          "ppaCounterparty": 'counterparty 8',
          "annualInterest": '0.097',
        },
        "location": {
          "address": {
            "stateProvince": "OK",
            "city": "Tulsa",
          },
        },
      },
      // financials
      "datePurchased": "2020-05-19T00:00:00Z",
      "principalInvested": 35000,
      "img": 'https://test.io',
    "distributions": [
      {
        "date": "2021-02-01T00:00:00Z",
        "amt": 3150
      },
      {
        "date": "2021-01-01T00:00:00Z",
        "amt": 3150
      },
      {
        "date": "2020-12-01T00:00:00Z",
        "amt": 2800
      },
      {
        "date": "2020-11-01T00:00:00Z",
        "amt": 2205
      },
      {
        "date": "2020-10-01T00:00:00Z",
        "amt": 3220
      },
      {
        "date": "2020-09-01T00:00:00Z",
        "amt": 2940
      },
      {
        "date": "2020-08-01T00:00:00Z",
        "amt": 3150
      },
      {
        "date": "2020-07-01T00:00:00Z",
        "amt": 2590
      },
      {
        "date": "2020-06-01T00:00:00Z",
        "amt": 2100
      },
      {
        "date": "2020-05-01T00:00:00Z",
        "amt": 3850
      },
      {
        "date": "2020-04-01T00:00:00Z",
        "amt": 3500
      },
      {
        "date": "2020-03-01T00:00:00Z",
        "amt": 2800
      },
    ],
  },
  {
    "isPublic": true,
    "offeringId": 2,
      "offering": {
        "sponsorId": 2,
        "sponsor": {
          "name": "Greenbacker Capital",
          "slug": "greenbacker-capital",
        },
        "title": "La Rosa Battery Storage",
        "slug": "buffalocreekwindfarm",
        "financials": {
          "instrument": 'cash',
          "expectedReturn": 330000,
          "fundTarget": 130000,
          "amtFunded": 530000,
          "principalOutstanding": 0.091,
          "interestAccrued": 0.074,
          "ppaCounterparty": 'counterparty 8',
          "annualInterest": '0.097',
        },
        "location": {
          "address": {
            "stateProvince": "KS",
            "city": "Kansas City",
          }
        },
      },
      "datePurchased": "2020-07-04T00:00:00Z",
      "principalInvested": 49000,
      "img": 'https://test.io',
      "distributions": [
          {
              "date": "2021-02-01T00:00:00Z",
              "amt": 4410
          },
          {
              "date": "2021-01-01T00:00:00Z",
              "amt": 4410
          },
          {
              "date": "2020-12-01T00:00:00Z",
              "amt": 4410
          },
          {
              "date": "2020-11-01T00:00:00Z",
              "amt": 4410
          },
          {
              "date": "2020-10-01T00:00:00Z",
              "amt": 4410
          },
          {
              "date": "2020-09-01T00:00:00Z",
              "amt": 4410
          },
          {
              "date": "2020-08-01T00:00:00Z",
              "amt": 4410
          },
          {
              "date": "2020-07-01T00:00:00Z",
              "amt": 4410
          }
      ]
  },
  {
      "isPublic": false,
      "offeringId": 6,
      "offering": {
        "sponsorId": 2,
        "sponsor": {
          "name": "Greenbacker Capital",
          "slug": "greenbacker-capital",
        },
        "title": "Desert Valley Solar Station",
        "slug": "desert-valley-solar-station",
        "financials": {
          "instrument": 'equity',
          "expectedReturn": 530000,
          "fundTarget": 1333000,
          "amtFunded": 130000,
          "principalOutstanding": 0.091,
          "interestAccrued": 0.074,
          "ppaCounterparty": 'counterparty 8',
          "annualInterest": '0.097',
        },
        "location": {
          "address": {
            "stateProvince": "KS",
            "city": "Kansas City",
          }
        },
      },
      "datePurchased": "2020-07-08T00:00:00Z",
      "principalInvested": 23000,
      "img": 'https://test.io',
      "distributions": [
          {
              "date": "2021-02-01T00:00:00Z",
              "amt": 1150
          },
          {
              "date": "2021-01-01T00:00:00Z",
              "amt": 989
          },
          {
              "date": "2020-12-01T00:00:00Z",
              "amt": 1380
          },
          {
              "date": "2020-11-01T00:00:00Z",
              "amt": 1196
          },
          {
              "date": "2020-10-01T00:00:00Z",
              "amt": 1081
          },
          {
              "date": "2020-09-01T00:00:00Z",
              "amt": 1334
          },
          {
              "date": "2020-08-01T00:00:00Z",
              "amt": 1426
          },
          {
              "date": "2020-07-01T00:00:00Z",
              "amt": 1610
          }
      ]
  },
  {
    "isPublic": true,
    "offeringId": 3,
      "offering": {
        "sponsorId": 3,
        "sponsor": {
          "name": "Wind Grid Investments",
          "slug": "wind-grid-investments",
        },
        "title": "Spring River Battery Storage",
        "slug": "spring-river-battery-storage",
        "financials": {
          "instrument": 'debt',
          "expectedReturn": 100000,
          "fundTarget": 33330000,
          "amtFunded": 80000,
          "principalOutstanding": 0.091,
          "interestAccrued": 0.074,
          "ppaCounterparty": 'counterparty 8',
          "annualInterest": '0.097',
        },
        "location": {
          "address": {
            "stateProvince": "NSW",
            "city": "Sydney",
          }
        },
      },
      "datePurchased": "2020-11-05T00:00:00Z",
      "principalInvested": 115000,
      "img": 'https://test.io',
      "distributions": [
          {
              "date": "2021-02-01T00:00:00Z",
              "amt": 6900
          },
          {
              "date": "2021-01-01T00:00:00Z",
              "amt": 7475
          },
          {
              "date": "2020-12-01T00:00:00Z",
              "amt": 8050
          },
          {
              "date": "2020-11-01T00:00:00Z",
              "amt": 5750
          }
      ]
  },
  {
    "isPublic": true,
    "offeringId": 7,
      "offering": {
        "sponsorId": 3,
        "sponsor": {
          "name": "Wind Grid Investments",
          "slug": "wind-grid-investments",
        },
        "title": "Oak Ridge Wind Farm",
        "slug": "oak-ridge-wind-farm",
        "financials": {
          "instrument": 'cash',
          "expectedReturn": 50000,
          "fundTarget": 4330000,
          "amtFunded": 30000,
          "principalOutstanding": 0.091,
          "interestAccrued": 0.074,
          "ppaCounterparty": 'counterparty 8',
          "annualInterest": '0.097',
        },
        "location": {
          "address": {
            "stateProvince": "MN",
            "city": "Oak Ridge",
          }
        },
      },
      "datePurchased": "2020-12-16T00:00:00Z",
      "principalInvested": 84000,
      "img": 'https://test.io',
      "distributions": [
          {
              "date": "2021-02-01T00:00:00Z",
              "amt": 9240
          },
          {
              "date": "2021-01-01T00:00:00Z",
              "amt": 9240
          },
          {
              "date": "2020-12-01T00:00:00Z",
              "amt": 9240
          }
      ]
  },
  {
    "isPublic": false,
      "offeringId": 8,
      "offering": {
        "sponsorId": 4,
        "sponsor": {
          "name": "Software Innovation",
          "slug": "software-innovation",
        },
        "title": "Wharf Complex Retrofitting",
        "slug": "wharf-complex-retrofitting",
        "financials": {
          "instrument": 'equity',
          "expectedReturn": 9030000,
          "fundTarget": 10030000,
          "amtFunded": 1330000,
          "principalOutstanding": 0.091,
          "interestAccrued": 0.074,
          "ppaCounterparty": 'counterparty 8',
          "annualInterest": '0.097',
        },
        "location": {
          "address": {
            "stateProvince": "MD",
            "city": "Seabright",
          }
        },
      },
      "datePurchased": "2021-01-03T00:00:00Z",
      "principalInvested": 67000,
      "img": 'https://test.io',
      "distributions": [
          {
              "date": "2021-02-01T00:00:00Z",
              "amt": 6030
          },
          {
              "date": "2021-01-01T00:00:00Z",
              "amt": 6030
          }
      ]
  },
  {
    "isPublic": true,
      "offeringId": 5,
      "offering": {
        "sponsorId": 1,
        "sponsor": {
          "name": "Vertex Capital",
          "slug": "vertex-capital",
        },
        "title": "Dog River Wind Farm",
        "slug": "dog-river-wind-farm",
        "financials": {
          "instrument": 'cash',
          "expectedReturn": 130000,
          "fundTarget": 33330000,
          "amtFunded": 100000,
          "principalOutstanding": 0.091,
          "interestAccrued": 0.074,
          "ppaCounterparty": 'counterparty 8',
          "annualInterest": '0.097',
        },
        "location": {
          "address": {
            "stateProvince": "OK",
            "city": "Tulsa",
          }
        },
      },
      "datePurchased": "2021-01-08T00:00:00Z",
      "principalInvested": 56000,
      "img": 'https://test.io',
      "distributions": [
          {
              "date": "2021-02-01T00:00:00Z",
              "amt": 3920
          },
          {
              "date": "2021-01-01T00:00:00Z",
              "amt": 3920
          }
      ]
  }
];
const following = [4, 5, 6, 7, 8];
const conversations = {
  "1a": {
    participants: [2, 3],
    lastMessage: {
      msgId: 2,
      profileId: 2,
      text: "Great! Thanks.",
      media: null,
      dtReceipt: "2021-04-17T12:34:56.501000Z",
    },
  },
  "2a": {
    participants: [1, 3],
    lastMessage: {
      msgId: 2,
      profileId: 3,
      text: "Thanks for reaching out, Thomas. We’ll be in touch soon with a potential investors video chat RSVP link.",
      media: null,
      dtReceipt: "2021-04-16T12:34:56.502Z",
    },
  },
};

export const profile = {
  _id: 3,
  alias: 'd_orrin55',
  email: 'd_orrin55@mail.com',
  pii,
  active,
  education,
  about,
  employment,
  investments,
  connections,
  following,
  "profileType": "user",
  "profileClass": "sponsor",
  images,
  conversations,
};
