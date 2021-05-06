import { getImgPath } from './testAuthProfile';
import { offeringsObj } from './storeOfferings';

export const profilesObj = {
  "vs98j": {
    "profileType": "user",
    "profileClass": "investor",
    alias: 'tomyen',
    pii: {
      firstName: 'Thomas',
      lastName: 'Yen',
      residence: {
        stateProvince: 'CA',
        city: 'Los Angeles',
      },
    },
    active: {
      type: 'employment',
      organization: 'Greenbacker Capital',
      organizationSlug: 'greenbacker-capital',
      position: 'Senior VP',
    },
    images: {
      "profile": {
        thumbnail: getImgPath(`thomas-yen-thumbnail.jpg`),
      },
    },
  },
  "3m2n23": { // previously "2"
    "profileType": "user",
    "profileClass": "investor",
    alias: 'lpow88',
    pii: {
      firstName: 'Linda',
      lastName: 'Powell',
      residence: {
        stateProvince: 'CA',
        city: 'Los Angeles',
      },
    },
    active: {
      type: 'employment',
      organization: 'Brookfield Renewables',
      organizationSlug: 'brookfield-renewables',
      position: 'Senior VP',
    },
    images: {
      "profile": {
        thumbnail: getImgPath(`linda-powell-thumbnail.jpg`),
      },
    },
  },
  "3": {
    "profileType": "user",
    "profileClass": "investor",
    "alias": 'd_orrin55',
    "pii": {
      "firstName": 'Drew',
      "lastName": 'Orrin',
      "residence": {
        "stateProvince": 'CA',
        "city": 'Los Angeles',
      },
    },
    "profileBio":
      'As a Senior Vice President I manage all business development for the North West region of the United States for Vertex Capital’s solar project finance. With over 7 years of experience in the renewable finance sector, I am able to utilize my extensive network to access capital for our enterprise clients and oversee cashflow distribution to our investors.',
    "active": {
      "type": 'employment',
      "organizationId": "zxcv87",
      // organization: 'Test Capital',
      // organizationSlug: 'test-capital',
      "position": "Senior Vice President",
    },
    "connections": ['vs98j', '3m2n23', 'xcoviu8', 'zxcv09oip', 'mmnmmmmnmb', 'cxzxcxz', 'vcxv7878'],
    "posts": ['xcv0x9', 'vx09xv89v', 'xcvxcvd'],
    "investments": [
      {offeringId:'ase1wefa',  offering: offeringsObj['ase1wefa'],  "principalInvested": 35000, distributions: [{"date": "2021-02-01T00:00:00Z","amt": 2150},{"date": "2021-01-01T00:00:00Z","amt": 2150},{"date": "2020-12-01T00:00:00Z","amt": 2800},{"date": "2020-11-01T00:00:00Z","amt": 2205},{"date": "2020-10-01T00:00:00Z","amt": 2220},{"date": "2020-09-01T00:00:00Z","amt": 2940},{"date": "2020-08-01T00:00:00Z","amt": 2150},{"date": "2020-07-01T00:00:00Z","amt": 2590},{"date": "2020-06-01T00:00:00Z","amt": 2100},{"date": "2020-05-01T00:00:00Z","amt": 2850},{"date": "2020-04-01T00:00:00Z","amt": 2500},{"date": "2020-03-01T00:00:00Z","amt": 2800},],  isPublic: true},
      {offeringId:'v7vcv89',   offering: offeringsObj['v7vcv89'],   "principalInvested": 49000, distributions: [{"date": "2021-02-01T00:00:00Z","amt": 4410},{"date": "2021-01-01T00:00:00Z","amt": 4410},{"date": "2020-12-01T00:00:00Z","amt": 4410},{"date": "2020-11-01T00:00:00Z","amt": 4410},{"date": "2020-10-01T00:00:00Z","amt": 4410},{"date": "2020-09-01T00:00:00Z","amt": 4410},{"date": "2020-08-01T00:00:00Z","amt": 4410},{"date": "2020-07-01T00:00:00Z","amt": 4410}],   isPublic: false},
      {offeringId:'zxcv098',   offering: offeringsObj['zxcv098'],   "principalInvested": 23000, distributions: [{"date": "2021-02-01T00:00:00Z","amt": 2150},{"date": "2021-01-01T00:00:00Z","amt": 1089},{"date": "2020-12-01T00:00:00Z","amt": 1380},{"date": "2020-11-01T00:00:00Z","amt": 2196},{"date": "2020-10-01T00:00:00Z","amt": 2081},{"date": "2020-09-01T00:00:00Z","amt": 2334},{"date": "2020-08-01T00:00:00Z","amt": 2426},{"date": "2020-07-01T00:00:00Z","amt": 2610}],   isPublic: true},
      {offeringId:'mnb32',     offering: offeringsObj['mnb32'],     "principalInvested": 115000,distributions: [{"date": "2021-02-01T00:00:00Z","amt": 3900},{"date": "2021-01-01T00:00:00Z","amt": 4475},{"date": "2020-12-01T00:00:00Z","amt": 3050},{"date": "2020-11-01T00:00:00Z","amt": 5750}],     isPublic: false},
      {offeringId:'990f0f9u09',offering: offeringsObj['990f0f9u09'],"principalInvested": 84000, distributions: [{"date": "2021-02-01T00:00:00Z","amt": 2240},{"date": "2021-01-01T00:00:00Z","amt": 2240},{"date": "2020-12-01T00:00:00Z","amt": 2240}],isPublic: true},
      {offeringId:'lkhflkjhd', offering: offeringsObj['lkhflkjhd'], "principalInvested": 67000, distributions: [{"date": "2021-02-01T00:00:00Z","amt": 6030},{"date": "2021-01-01T00:00:00Z","amt": 6030}], isPublic: false},
      {offeringId:'2938f2',    offering: offeringsObj['2938f2'],    "principalInvested": 56000, distributions: [{"date": "2021-02-01T00:00:00Z","amt": 1920},],    isPublic: true},
    ],
    "images": {
      "profile": {
        "thumbnail": getImgPath(`drew-orrin-thumbnail.jpg`),
        "large": getImgPath(`drew-orrin-thumbnail.jpg`),
      },
    },
  },
  "xcoviu8": { // previously "9a"
    "profileType": "user",
    "profileClass": "investor",
    alias: 'gregory_h1',
    pii: {
      firstName: `Greg`,
      lastName: `Harris`,
      residence: {
        city: 'New York',
        stateProvince: 'NY',
      },
    },
    active: {
      position: 'Senior Vice President',
      type: 'employment',
      organization: 'Brooklane Renewables',
      organizationSlug: 'brooklane-renewables',
    },
    images: {
      profile: {
        thumbnail: getImgPath(`thomas-yen-thumbnail.jpg`),
      },
    },
  },
  "zxcv09oip": { // previously sd8x
    "profileType": "user",
    "profileClass": "sponsor",
    alias: 's_daly3',
    pii: {
      firstName: `Sarah`,
      lastName: `Daly`,
      residence: {
        city: 'Washington',
        stateProvince: 'DC',
      },
    },
    active: {
      position: 'Managing Director',
      type: 'employment',
      organization: 'Vertex Capital',
      organizationSlug: 'vertex-capital',
    },
    images: {
      profile: {
        thumbnail: getImgPath(`sarah-daly-main.jpg`),
        main: getImgPath(`sarah-daly-main.jpg`),
      },
    },
  },
  "mmnmmmmnmb": { // previously "dd9dfa09ux"
    "profileType": "user",
    "profileClass": "investor",
    alias: 'pt44',
    pii: {
      firstName: `Pete`,
      lastName: `Taylor`,
      residence: {
        city: 'Nashville',
        stateProvince: 'TN',
      },
    },
    active: {
      position: 'Associate',
      type: 'employment',
      organization: 'Atrium Solar LLC',
      organizationSlug: 'atriumsolar',
    },
    images: {
      profile: {
        thumbnail: getImgPath(`pete-taylor-thumbnail.jpg`),
        main: getImgPath(`pete-taylor-thumbnail.jpg`),
      },
    },
  },
  "cxzxcxz": { // previously xcjij0
    "profileType": "user",
    "profileClass": "investor",
    alias: 'sashagcarlton',
    pii: {
      firstName: `Sasha`,
      lastName: `Carlton`,
      residence: {
        city: 'Salt Lake City',
        stateProvince: 'UT',
      },
    },
    active: {
      position: 'Senior Analyst',
      type: 'employment',
      organization: 'Sunwind Asset Management',
      organizationSlug: 'sunwind-am',
      organizationId: '2c4c0c3c',
      // position: 'Partner and COO',
      // organization: 'Solstice Capital',
      // organizationSlug: 'solstice-capital',
      // "organizationId": 'xcv789',
      // xcjij0
    },
    images: {
      profile: {
        thumbnail: getImgPath(`thomas-yen-thumbnail.jpg`),
        large: getImgPath(`sasha-carlton-thumbnail.jpg`),
      },
    },
  },
  "vcxv7878": { // previously "8"
    "profileType": "user",
    "profileClass": "investor",
    alias: 'lc8397',
    pii: {
      firstName: `Lauren`,
      lastName: `Cunningham`,
      residence: {
        city: 'Seattle',
        stateProvince: 'WA',
      },
    },
    active: {
      position: 'Partner and COO',
      organization: 'Solstice Capital',
      organizationSlug: 'solstice-capital',
    },
    images: {
      profile: {
        thumbnail: getImgPath(`lauren-cunningham-thumbnail.jpg`),
      },
    },
  },
  "zxcv87": {
    "profileType": "organization",
    "profileClass": "sponsor",
    alias: 'wind-grid-capital',
    pii: {
      name: 'Wind Grid Capital',
      address: {
        stateProvince: 'VA',
        city: 'Charlottesville',
      },
    },
    images: {
      "profile": {
        thumbnail: getImgPath(`wind-grid-capital-thumbnail.jpg`),
      },
    },
  },
  "s0987cxlvkn": {
    "profileType": "organization",
    "profileClass": "sponsor",
    alias: 'solar-energy-capital',
    pii: {
      name: 'Solar Energy Capital',
      address: {
        stateProvince: 'IL',
        city: 'Chicago',
      },
    },
    images: {
      "profile": {
        thumbnail: getImgPath(`solar-energy-thumbnail.jpg`),
      },
    },
  },
};
