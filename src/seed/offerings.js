import { slugify } from "../utils/general";

const imagesPath = './images';
const getImgPath = (imgPath) => {
  const imgObj = require(`${imagesPath}/${imgPath}`);
  const staticImgPath = imgObj.default;
  return staticImgPath;
};

export const offeringsArr = [
  {
    id: 1,
    // subordinate debt
    sponsor: 'ABC Corp',
    title: 'Wind farm in Oklahoma 1',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 30,
      capacityKWh: 30,
      ppaTerm: 0,
      ppaPriceUSD: 100,
    },
    financials: {
      investmentClass: 'Common Stock',
      expectedReturn: 1800000,
      fundTarget: 1500000,
      amtFunded: 500000,
      principalOutstanding: 0.12,
      interestAccrued: 0.097,
      ppaCounterparty: 'Counterparty 1',
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {filePath: 'doc1.pdf', type: 'doctype1'},
        {filePath: 'doc2.pdf', type: 'doctype2'},
      ],
    },
    dtListed: 1612291996043,
    get dtInvestmentTermStart() {return this.dtListed + 5.3*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 380*24*60*60*1000},
    location: {
      coordinates: {lat: 0.1010101, lon: 1.1049293},
      address: {
        country: 'USA',
        provinceState: 'Oklahoma',
        city: 'Tulsa',
        street: 'Main',
        buildingNumber: '123',
        apartment: '',
      },
    },
    images: {
      get large() {return this.card},
      card: getImgPath(`extern4l-content.duckduckgo.com.jpg`),
    },
  },
  {
    id: 2,
    sponsor: 'Greenbacker Capital',
    title: 'Hydroelectric Dam 2',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 101,
      capacityKWh: 101,
      ppaTerm: 0,
      ppaPriceUSD: 97,
    },
    financials: {
      investmentClass: 'Common Stock',
      expectedReturn: 1100000,
      fundTarget: 921742,
      amtFunded: 880000,
      principalOutstanding: 0.081,
      interestAccrued: 0.078,
      ppaCounterparty: 'Counterparty 2',
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {filePath: 'doc1.pdf', type: 'doctype1'},
        {filePath: 'doc2.pdf', type: 'doctype2'},
      ],
    },
    dtListed: 1610671996043,
    get dtInvestmentTermStart() {return this.dtListed + 3.3*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 181*24*60*60*1000},
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
    images: {
      get large() {return this.card},
      card: getImgPath(`e3xternal-content.duckduckgo.com.jpg`),
    },
  },
  {
    id: 3,
    sponsor: '123 Corp',
    title: 'Solar farm in Australia 3',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 1298,
      capacityKWh: 1298,
      ppaTerm: 0,
      ppaPriceUSD: 212,
    },
    financials: {
      investmentClass: 'Preferred Stock',
      expectedReturn: 26300000,
      fundTarget: 22300000,
      amtFunded: 1000000,
      principalOutstanding: 0.0112,
      interestAccrued: 0.0103,
      ppaCounterparty: 'counterparty 3',
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {filePath: 'doc1.pdf', type: 'doctype1'},
        {filePath: 'doc2.pdf', type: 'doctype2'},
      ],
    },
    dtListed: 1641691996043,
    get dtInvestmentTermStart() {return this.dtListed + 2.2*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 45*24*60*60*1000},
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
    images: {
      get large() {return this.card},
      card: getImgPath(`1980_schwinn_air_dyne_ergometric_exerciser.png`),
    },
  },
  {
    id: 4,
    sponsor: 'NP Fuel',
    title: 'Biomass converter in New Jersey 4',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 200,
      capacityKWh: 200,
      ppaTerm: 0,
      ppaPriceUSD: 73,
    },
    financials: {
      investmentClass: 'Subordinate Debt',
      expectedReturn: 53330000,
      fundTarget: 33330000,
      amtFunded: 33330000,
      principalOutstanding: 0.091,
      interestAccrued: 0.074,
      ppaCounterparty: 'counterparty 8',
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {filePath: 'doc1.pdf', type: 'doctype1'},
        {filePath: 'doc2.pdf', type: 'doctype2'},
      ],
    },
    dtListed: 1621691996043,
    get dtInvestmentTermStart() {return this.dtListed + 1.1*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 90*24*60*60*1000},
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
    images: {
      get large() {return this.card},
      card: getImgPath(`external-content.duckduckgo.com.jpg`),
    },
  },
  {
    id: 5,
    sponsor: 'ABC Corp',
    title: 'Wind farm in Oklahoma 5',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 800,
      capacityKWh: 800,
      ppaTerm: 0,
      ppaPriceUSD: 1232,
    },
    financials: {
      investmentClass: 'Common Stock',
      expectedReturn: 1900000,
      fundTarget: 1500000,
      amtFunded: 1200000,
      principalOutstanding: 0.881,
      interestAccrued: 0.0121,
      ppaCounterparty: 'counterparty 4',
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {filePath: 'doc1.pdf', type: 'doctype1'},
        {filePath: 'doc2.pdf', type: 'doctype2'},
      ],
    },
    dtListed: 1612291996043,
    get dtInvestmentTermStart() {return this.dtListed + 5.3*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 380*24*60*60*1000},
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
    images: {
      get large() {return this.card},
      card: getImgPath(`external-content2.duckduckgo.com.jpg`),
    },
  },
  {
    id: 6,
    sponsor: 'Greenbacker Capital',
    title: 'Hydroelectric Dam 6',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 54,
      capacityKWh: 54,
      ppaTerm: 0,
      ppaPriceUSD: 192,
    },
    financials: {
      investmentClass: 'Preferred Stock',
      expectedReturn: 970000,
      fundTarget: 900000,
      amtFunded: 200000,
      principalOutstanding: 0.0101,
      interestAccrued: 0.0034,
      ppaCounterparty: 'counterparty 5',
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {filePath: 'doc1.pdf', type: 'doctype1'},
        {filePath: 'doc2.pdf', type: 'doctype2'},
      ],
    },
    dtListed: 1610671996043,
    get dtInvestmentTermStart() {return this.dtListed + 3.3*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 181*24*60*60*1000},
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
    images: {
      get large() {return this.card},
      card: getImgPath(`external-content5.duckduckgo.com.jpg`),
    },
  },
  {
    id: 7,
    sponsor: '123 Corp',
    title: 'Solar farm in Australia 7',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 33,
      capacityKWh: 33,
      ppaTerm: 0,
      ppaPriceUSD: 500,
    },
    financials: {
      investmentClass: 'Common Stock',
      energyOutputKWh: 33,
      expectedReturn: 24300000,
      fundTarget: 22300000,
      amtFunded: 2300000,
      principalOutstanding: 0.0131,
      interestAccrued: 0.0111,
      ppaCounterparty: 'counterparty 6',
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {filePath: 'doc1.pdf', type: 'doctype1'},
        {filePath: 'doc2.pdf', type: 'doctype2'},
      ],
    },
    dtListed: 1641691996043,
    get dtInvestmentTermStart() {return this.dtListed + 2.2*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 45*24*60*60*1000},
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
    images: {
      get large() {return this.card},
      card: getImgPath(`e3xternal-content.duckduckgo.com.jpg`),
    },
  },
  {
    id: 8,
    sponsor: 'NP Fuel',
    title: 'Biomass converter in New Jersey 8',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 89,
      capacityKWh: 89,
      ppaTerm: 0,
      ppaPriceUSD: 434,
    },
    financials: {
      expectedReturn: 33930000,
      fundTarget: 33330000,
      amtFunded: 33130000,
      principalOutstanding: 0.00941,
      interestAccrued: 0.0124,
      investmentClass: 'Subordinate Debt',
      ppaCounterparty: 'counterparty 7',
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {filePath: 'doc1.pdf', type: 'doctype1'},
        {filePath: 'doc2.pdf', type: 'doctype2'},
      ],
    },
    dtListed: 1621691996043,
    get dtInvestmentTermStart() {return this.dtListed + 1.1*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 90*24*60*60*1000},
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
    images: {
      get large() {return this.card},
      card: getImgPath('1980_schwinn_air_dyne_ergometric_exerciser.png'),
    },
  },
];
