// react
import React, { useEffect, Suspense } from 'react';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// components
import Sidebar from '../../elements/SideBar';
import Nav from './home/Nav';
import About from './home/About';
import Investments from './home/Investments';
import Network from './home/Network';
// utils
import { updateViewProfile } from '../../../redux/actions/ViewActions';
// seed
const education = [
  {
    organization: 'Yale Schoole of Management',
    degree: 'Masters in Business Administration',
    dtEnd: '2016-05-01T00:00:00.000Z',
    dtStart: '2014-08-01T00:00:00.000Z',
  },
  {
    organization: 'Bucknell University',
    degree: 'B.A. in Economics',
    dtEnd: '2013-05-01T00:00:00.000Z',
    dtStart: '2013-05-01T00:00:00.000Z',
  },
];
const employment = [
  {
    employer: 'Sungage Asset Management',
    title: 'Investments Director',
    dtEnd: '2020-05-01T00:00:00.000Z',
    dtStart: '2017-05-01T00:00:00.000Z'
  },
  {
    employer: 'Atrium Solar LLC',
    title: 'Senior Vice President',
    dtEnd: '2017-05-01T00:00:00.000Z',
    dtStart: '2014-05-01T00:00:00.000Z'
  },
  {
    employer: 'Wind Capital',
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
  firstName: 'Rob',
  lastName: 'Sherman',
  residence: {
    provinceState: 'NY',
    city: 'NYC',
  },
};
const active = [
  {
    type: 'employment',
    employer: 'Vertex Capital',
    title: 'Senior Vice President',
    dtStart: '2020-05-01T00:00:00.000Z',
    dtEnd: null,
  },
];
const connections = [
  {
    _id: 0,
    firstName: `Jamie`,
    lastName: `Harris`,
    position: 'Senior Vice President',
    currentEmployer: 'Brooklane Renewables',
    city: 'New York',
    stateProvince: 'NY',
  },
  {
    _id: 1,
    firstName: `Tom`,
    lastName: `Daly`,
    position: 'Managing Director',
    currentEmployer: 'Vertex Capital',
    city: 'Washington',
    stateProvince: 'DC',
  },
  {
    _id: 2,
    firstName: `Maya`,
    lastName: `Taylor`,
    position: 'Associate',
    currentEmployer: 'Atrium Solar LLC',
    city: 'Nashville',
    stateProvince: 'TN',
  },
  {
    _id: 3,
    firstName: `Ben`,
    lastName: `Carlton`,
    position: 'Senior Analyst',
    currentEmployer: 'Sunwind Asset Management',
    city: 'Salt Lake City',
    stateProvince: 'UT',
  },
  {
    _id: 4,
    firstName: `Jennifer`,
    lastName: `Cunningham`,
    position: 'Partner and COO',
    currentEmployer: 'Solstice Capital',
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
      "location": {
        "address": {
          "provinceState": "OK",
          "city": "Tulsa",
        },
      },
    },
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
        "slug": "la-rosa-battery-storage",
        "location": {
          "address": {
            "provinceState": "KS",
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
        "location": {
          "address": {
            "provinceState": "KS",
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
        "location": {
          "address": {
            "provinceState": "NSW",
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
        "location": {
          "address": {
            "provinceState": "MN",
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
        "location": {
          "address": {
            "provinceState": "MD",
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
        "location": {
          "address": {
            "provinceState": "OK",
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

// main
const ProfileView = () => {
  // init hooks
  const dispatch = useDispatch();
  const location = useLocation();
  const match = useRouteMatch();
  const {
    params: { alias },
  } = match;
  const baseRoute = `/profile/${match.params.alias}`;
  // effects
  useEffect(() => {
    const mockProfileViewObj = {
      _id: 3,
      alias,
      pii,
      active,
      education,
      about,
      employment,
      investments,
      connections,
    };
    dispatch(updateViewProfile(mockProfileViewObj));
  }, []);

  return (
    <div className="ProfileView flexrow w100">
      <Sidebar isLeft />
      <div className="Body f1 flexcol">
        <Nav baseRoute={baseRoute} />
        <Switch location={{ ...location, baseRoute }}>
          <Route exact path="/profile/:alias" render={p => <About props={p} />} />
          <Route exact path="/profile/:alias/investments" render={p => <Investments props={p} />} />
          <Route exact path="/profile/:alias/network" render={p => <Network props={p} />} />
        </Switch>
      </div>
    </div>
  );
};

// export
export default ProfileView;
