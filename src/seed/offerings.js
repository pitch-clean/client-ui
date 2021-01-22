export const offeringsArr = [
  {
    id: 1,
    sponsor: 'ABC Corp',
    title: 'Wind farm in Oklahoma',
    location: {
      coordinates: {lat: 0.1010101, lon: 1.1049293},
      address: {
        country: 'USA',
        provinceState: 'Oklahoma',
        city: 'Tulsa',
        street: 'Main',
        buildingNumber: '123',
        apartment: '',
      }
    },
    fundTarget: 1500000,
    dtListed: 1612291996043,
    get dtInvestmentStart() {return this.dtListed + 5.3*24*60*60*1000},
    get dtInvestmentEnd() {return this.dtListed + 380*24*60*60*1000},
  },
  {
    id: 2,
    sponsor: 'Greenbacker Capital',
    title: 'Hydroelectric Dam',
    location: {
      coordinates: {lat: 2.1010101, lon: -1.1049293},
      address: {
        country: 'USA',
        provinceState: 'Kansas',
        city: 'Kansas City',
        street: 'Broad St.',
        buildingNumber: '123',
        apartment: '',
      }
    },
    fundTarget: 900000,
    dtListed: 1610671996043,
    get dtInvestmentStart() {return this.dtListed + 3.3*24*60*60*1000},
    get dtInvestmentEnd() {return this.dtListed + 181*24*60*60*1000},
  },
  {
    id: 3,
    sponsor: '123 Corp',
    title: 'Solar farm in Australia',
    location: {
      coordinates: {lat: 0.1010101, lon: 1.1049293},
      address: {
        country: 'Australia',
        provinceState: 'NSW',
        city: 'Sydney',
        street: 'Melbourne St',
        buildingNumber: '5',
        apartment: '',
      }
    },
    fundTarget: 22300000,
    dtListed: 1641691996043,
    get dtInvestmentStart() {return this.dtListed + 2.2*24*60*60*1000},
    get dtInvestmentEnd() {return this.dtListed + 45*24*60*60*1000},
  },
  {
    id: 4,
    sponsor: 'NP Fuel',
    title: 'Biomass converter in New Jersey',
    location: {
      coordinates: {lat: 7.1010101, lon: 4.1049293},
      address: {
        country: 'USA',
        provinceState: 'NJ',
        city: 'Patterson',
        street: 'Main St.',
        buildingNumber: '8',
        apartment: '',
      }
    },
    fundTarget: 33330000,
    dtListed: 1621691996043,
    get dtInvestmentStart() {return this.dtListed + 1.1*24*60*60*1000},
    get dtInvestmentEnd() {return this.dtListed + 90*24*60*60*1000},
  },
  {
    id: 1,
    sponsor: 'ABC Corp',
    title: 'Wind farm in Oklahoma',
    location: {
      coordinates: {lat: 0.1010101, lon: 1.1049293},
      address: {
        country: 'USA',
        provinceState: 'Oklahoma',
        city: 'Tulsa',
        street: 'Main',
        buildingNumber: '123',
        apartment: '',
      }
    },
    fundTarget: 1500000,
    dtListed: 1612291996043,
    get dtInvestmentStart() {return this.dtListed + 5.3*24*60*60*1000},
    get dtInvestmentEnd() {return this.dtListed + 380*24*60*60*1000},
  },
  {
    id: 2,
    sponsor: 'Greenbacker Capital',
    title: 'Hydroelectric Dam',
    location: {
      coordinates: {lat: 2.1010101, lon: -1.1049293},
      address: {
        country: 'USA',
        provinceState: 'Kansas',
        city: 'Kansas City',
        street: 'Broad St.',
        buildingNumber: '123',
        apartment: '',
      }
    },
    fundTarget: 900000,
    dtListed: 1610671996043,
    get dtInvestmentStart() {return this.dtListed + 3.3*24*60*60*1000},
    get dtInvestmentEnd() {return this.dtListed + 181*24*60*60*1000},
  },
  {
    id: 3,
    sponsor: '123 Corp',
    title: 'Solar farm in Australia',
    location: {
      coordinates: {lat: 0.1010101, lon: 1.1049293},
      address: {
        country: 'Australia',
        provinceState: 'NSW',
        city: 'Sydney',
        street: 'Melbourne St',
        buildingNumber: '5',
        apartment: '',
      }
    },
    fundTarget: 22300000,
    dtListed: 1641691996043,
    get dtInvestmentStart() {return this.dtListed + 2.2*24*60*60*1000},
    get dtInvestmentEnd() {return this.dtListed + 45*24*60*60*1000},
  },
  {
    id: 4,
    sponsor: 'NP Fuel',
    title: 'Biomass converter in New Jersey',
    location: {
      coordinates: {lat: 7.1010101, lon: 4.1049293},
      address: {
        country: 'USA',
        provinceState: 'NJ',
        city: 'Patterson',
        street: 'Main St.',
        buildingNumber: '8',
        apartment: '',
      }
    },
    fundTarget: 33330000,
    dtListed: 1621691996043,
    get dtInvestmentStart() {return this.dtListed + 1.1*24*60*60*1000},
    get dtInvestmentEnd() {return this.dtListed + 90*24*60*60*1000},
  },
];
