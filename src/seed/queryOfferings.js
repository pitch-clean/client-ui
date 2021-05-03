// import { sponsors } from './querySponsorsById';
export const offeringsObj = {
  "ase1wefa": {
    "title": "Buffalo Creek Wind Farm",
    "slug": "buffalo-creek-wind-farm",
    "sponsorId": 1,
    "sponsor": {
      "name": "Vertex Capital",
      "slug": "vertex-capital",
    },
    "term": {
      length: 4*365*24*60*60*1000,
      get dtStart() {return 1524592796043 || this.dtEnd - this.length},
      get dtEnd() {return this.dtStart + this.length},
    },
    "financials": {
      "instrument": 'debt',
      "fundTarget": 333300,
      "ppaCounterparty": 'counterparty 8',
      "annualInterest": '0.121',
    },
    "location": {
      "address": {
        "stateProvince": "OK",
        "city": "Tulsa",
      },
    },
    "img": 'https://test.io',
  },
  "v7vcv89": {
    "title": "La Rosa Battery Storage",
    "slug": "buffalocreekwindfarm",
    "sponsorId": 2,
    "sponsor": {
      "name": "Greenbacker Capital",
      "slug": "greenbacker-capital",
    },
    "term": {
      length: 2*365*24*60*60*1000,
      get dtStart() {return 1579791996043 || this.dtEnd - this.length},
      get dtEnd() {return this.dtStart + this.length},
    },
    "financials": {
      "instrument": 'cash',
      "fundTarget": 130000,
      "ppaCounterparty": 'counterparty 8',
      "annualInterest": '0.097',
    },
    "location": {
      "address": {
        "stateProvince": "KS",
        "city": "Kansas City",
      }
    },
    "img": 'https://test.io',
  },
  "zxcv098": {
    "title": "Desert Valley Solar Station",
    "slug": "desert-valley-solar-station",
    "sponsorId": 2,
    "sponsor": {
      "name": "Greenbacker Capital",
      "slug": "greenbacker-capital",
    },
    "term": {
      length: 1*365*24*60*60*1000,
      get dtStart() {return 1599791996043 || this.dtEnd - this.length},
      get dtEnd() {return this.dtStart + this.length},
    },
    "financials": {
      "instrument": 'equity',
      "fundTarget": 1333000,
      "ppaCounterparty": 'counterparty 8',
      "annualInterest": '0.087',
    },
    "location": {
      "address": {
        "stateProvince": "KS",
        "city": "Kansas City",
      }
    },
    "img": 'https://test.io',
  },
  "mnb32": {
    "title": "Spring River Battery Storage",
    "slug": "spring-river-battery-storage",
    "sponsorId": 3,
    "sponsor": {
      "name": "Wind Grid Investments",
      "slug": "wind-grid-investments",
    },
    "term": {
      length: 2.5*365*24*60*60*1000,
      get dtStart() {return 1609791996043 || this.dtEnd - this.length},
      get dtEnd() {return this.dtStart + this.length},
    },
    "financials": {
      "instrument": 'debt',
      "fundTarget": 33330000,
      "ppaCounterparty": 'counterparty 1',
      "annualInterest": '0.17',
    },
    "location": {
      "address": {
        "stateProvince": "NSW",
        "city": "Sydney",
      }
    },
    "img": 'https://test.io',
  },
  "990f0f9u09": {
    "title": "Oak Ridge Wind Farm",
    "slug": "oak-ridge-wind-farm",
    "sponsorId": 3,
    "sponsor": {
      "name": "Wind Grid Investments",
      "slug": "wind-grid-investments",
    },
    "term": {
      length: 3*365*24*60*60*1000,
      get dtStart() {return 1612791996043 || this.dtEnd - this.length},
      get dtEnd() {return this.dtStart + this.length},
    },
    "financials": {
      "instrument": 'cash',
      "fundTarget": 4330000,
      "ppaCounterparty": 'counterparty 2',
      "annualInterest": '0.215',
    },
    "location": {
      "address": {
        "stateProvince": "MN",
        "city": "Oak Ridge",
      }
    },
    "img": 'https://test.io',
  },
  "lkhflkjhd": {
    "title": "Wharf Complex Retrofitting",
    "slug": "wharf-complex-retrofitting",
    "sponsorId": 4,
    "sponsor": {
      "name": "Software Innovation",
      "slug": "software-innovation",
    },
    "term": {
      length: 1.6*365*24*60*60*1000,
      get dtStart() {return 1615791996043 || this.dtEnd - this.length},
      get dtEnd() {return this.dtStart + this.length},
    },
    "financials": {
      "instrument": 'equity',
      "fundTarget": 10030000,
      "ppaCounterparty": 'counterparty 4',
      "annualInterest": '0.171',
    },
    "location": {
      "address": {
        "stateProvince": "MD",
        "city": "Seabright",
      }
    },
    "img": 'https://test.io',
  },
  "2938f2": {
    "title": "Dog River Wind Farm",
    "slug": "dog-river-wind-farm",
    "sponsorId": 1,
    "sponsor": {
      "name": "Vertex Capital",
      "slug": "vertex-capital",
    },
    "term": {
      length: 2.8*365*24*60*60*1000,
      get dtStart() {return 1619791996043 || this.dtEnd - this.length},
      get dtEnd() {return this.dtStart + this.length},
    },
    "financials": {
      "instrument": 'cash',
      "fundTarget": 33330000,
      "ppaCounterparty": 'counterparty 5',
      "annualInterest": '0.0757',
    },
    "location": {
      "address": {
        "stateProvince": "OK",
        "city": "Tulsa",
      }
    },
    "img": 'https://test.io',
  }
};
