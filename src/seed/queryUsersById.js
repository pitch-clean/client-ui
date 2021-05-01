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
      title: 'Senior VP',
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
      title: 'Senior VP',
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
      title: 'Senior Vice President',
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
      currentEmployer: 'Brooklane Renewables',
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
      currentEmployer: 'Vertex Capital',
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
      currentEmployer: 'Atrium Solar LLC',
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
      currentEmployer: 'Sunwind Asset Management',
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
      currentEmployer: 'Solstice Capital',
    },
    images: {
      profile: {
        thumbnail: getImgPath(`thomas-yen-thumbnail.jpg`),
      },
    },
  },
};
