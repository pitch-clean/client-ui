import { getImgPath } from './testAuthProfile';

export const users1 = {
  "1": {
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
  "2": {
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
    alias: 'd_orrin55',
    // self
    pii: {
      firstName: 'Drew',
      lastName: 'Orrin',
      residence: {
        stateProvince: 'CA',
        city: 'Los Angeles',
      },
    },
    active: {
      type: 'employment',
      organization: 'Test Capital',
      organizationSlug: 'test-capital',
      position: 'Senior Vice President',
    },
    images: {
      "profile": {
        thumbnail: getImgPath(`drew-orrin-thumbnail.jpg`),
      },
    },
  },
  "4": {
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
  "5": {
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
        thumbnail: getImgPath(`thomas-yen-thumbnail.jpg`),
      },
    },
  },
  "6": {
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
        thumbnail: getImgPath(`thomas-yen-thumbnail.jpg`),
      },
    },
  },
  "7": {
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
    },
    images: {
      profile: {
        thumbnail: getImgPath(`thomas-yen-thumbnail.jpg`),
      },
    },
  },
  "8": {
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
  "xcjij0": {
    alias: 'sasha-carlton23049',
    pii: {
      firstName: `Sasha`,
      lastName: `Carlton`,
      residence: {
        city: 'Salt Lake City',
        stateProvince: 'UT',
      },
    },
    active: {
      position: 'Partner and COO',
      organization: 'Solstice Capital',
      organizationSlug: 'solstice-capital',
    },
    images: {
      profile: {
        thumbnail: getImgPath(`sasha-carlton-thumbnail.jpg`),
      },
    },
  },
};

export const usersRecConnections = {
  "9a": {
    alias: 'harrisgreg49920',
    pii: {
      firstName: `Greg`,
      lastName: `Harris`,
      residence: {
        city: 'New York',
        stateProvince: 'NY',
      },
    },
    active: {
      type: 'employment',
      position: 'Senior Vice President',
      organization: 'Brooklane Renewables',
      organizationSlug: 'brooklane-renewables',
    },
    images: {
      profile: {
        thumbnail: getImgPath(`greg-harris-thumbnail.jpg`),
      },
    },
  },
  'sd8x': {
    alias: 'sdaly-234',
    pii: {
      firstName: `Sarah`,
      lastName: `Daly`,
      residence: {
        city: 'Washington',
        stateProvince: 'DC',
      },
    },
    active: {
      type: 'employment',
      position: 'Managing Director',
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
  'dd9dfa09ux': {
    alias: 'petetaylor393',
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
      organization: 'Atrium Solar LLC',
      organizationSlug: 'atrium-solar-llc',
      type: 'employment',
    },
    images: {
      profile: {
        thumbnail: getImgPath(`pete-taylor-thumbnail.jpg`),
        main: getImgPath(`pete-taylor-thumbnail.jpg`),
      },
    },
  },
  "8": {
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
  "2": {
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
};

export const org = {
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