import { getImgPath } from './testAuthProfile';
import { offeringsObj } from './storeOfferings';

export const profilesObj = {
  "vs98j": {
    "_id": "vs98j",
    "profileType": "user",
    "profileClass": "investor",
    "alias": "tomyen",
    "pii": {
        "firstName": "Thomas",
        "lastName": "Yen",
        "residence": {
            "stateProvince": "CA",
            "city": "San Francisco"
        }
    },
    "profileBio": "Thomas is a driven, hardworking Senior VP working at Greenbacker Capital.  He manages deals for some of the largest developers in the country.  Known for his grit and attention to detail, he alwaysd delivers.",
    "active": {
      "type": "employment",
      "organizationId": "98vcv9c8",
      "position": "Senior VP Sales East"
    },
    "connections": ["zxcv09oip", "mmnmmmmnmb", "cxzxcxz", "vcxv7878"],
    "following": ["s0987cxlvkn", "zxcv87", "3"],
    "posts": [],
    "investments": [],
    "images": {
        "profile": {
          "thumbnail": "thomas-yen-thumbnail.jpg",
          "large": "thomas-yen-thumbnail.jpg"
        }
    }
  },
  "3m2n23": {// previously "2"
    "_id": "3m2n23",
    "profileType": "user",
    "profileClass": "investor",
    "alias": "lpow88",
    "pii": {
        "firstName": "Linda",
        "lastName": "Powell",
        "residence": {
            "stateProvince": "CA",
            "city": "Anaheim"
        }
    },
    "profileBio":
      "Linda is a driven, hardworking Senior VP working at Brookfield Renewables.  She manages deals for some of the largest developers in the country.  Known for her grit and attention to detail, she alwaysd delivers.",
    "active": {
        "type": "employment",
        "organizationId": "123dsd9vop",
        "position": "Senior VP Sales West"
    },
    "connections": ["vs98j", "cxzxcxz", "zxcv87", "zxcv09oip"],
    "following": ["s0987cxlvkn", "zxcv87", "3", "zxcv09oip"],
    "posts": ["mnb33mn96"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("linda-powell-thumbnail.jpg"),
            "large": getImgPath("linda-powell-thumbnail.jpg")
        }
    }
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
      "position": "Senior Vice President",
    },
    "connections": ['vs98j', '3m2n23', 'xcoviu8', 'zxcv09oip', 'mmnmmmmnmb', 'cxzxcxz', 'vcxv7878'],
    "posts": ['xcv0x9', 'vx09xv89v', 'xcvxcvd'],
    "investments": [
      {offeringId:'ase1wefa',  offering: offeringsObj['ase1wefa'],  "principalInvested": 35000,  isPublic: true,  distributions: [{"date": "2021-02-01T00:00:00Z","amt": 2150},{"date": "2021-01-01T00:00:00Z","amt": 2150},{"date": "2020-12-01T00:00:00Z","amt": 2800},{"date": "2020-11-01T00:00:00Z","amt": 2205},{"date": "2020-10-01T00:00:00Z","amt": 2220},{"date": "2020-09-01T00:00:00Z","amt": 2940},{"date": "2020-08-01T00:00:00Z","amt": 2150},{"date": "2020-07-01T00:00:00Z","amt": 2590},{"date": "2020-06-01T00:00:00Z","amt": 2100},{"date": "2020-05-01T00:00:00Z","amt": 2850},{"date": "2020-04-01T00:00:00Z","amt": 2500},{"date": "2020-03-01T00:00:00Z","amt": 2800}]},
      {offeringId:'v7vcv89',   offering: offeringsObj['v7vcv89'],   "principalInvested": 49000,  isPublic: false, distributions: [{"date": "2021-02-01T00:00:00Z","amt": 4410},{"date": "2021-01-01T00:00:00Z","amt": 4410},{"date": "2020-12-01T00:00:00Z","amt": 4410},{"date": "2020-11-01T00:00:00Z","amt": 4410},{"date": "2020-10-01T00:00:00Z","amt": 4410},{"date": "2020-09-01T00:00:00Z","amt": 4410},{"date": "2020-08-01T00:00:00Z","amt": 4410},{"date": "2020-07-01T00:00:00Z","amt": 4410}]},
      {offeringId:'zxcv098',   offering: offeringsObj['zxcv098'],   "principalInvested": 23000,  isPublic: true,  distributions: [{"date": "2021-02-01T00:00:00Z","amt": 2150},{"date": "2021-01-01T00:00:00Z","amt": 1089},{"date": "2020-12-01T00:00:00Z","amt": 1380},{"date": "2020-11-01T00:00:00Z","amt": 2196},{"date": "2020-10-01T00:00:00Z","amt": 2081},{"date": "2020-09-01T00:00:00Z","amt": 2334},{"date": "2020-08-01T00:00:00Z","amt": 2426},{"date": "2020-07-01T00:00:00Z","amt": 2610}]},
      {offeringId:'mnb32',     offering: offeringsObj['mnb32'],     "principalInvested": 115000, isPublic: false, distributions: [{"date": "2021-02-01T00:00:00Z","amt": 3900},{"date": "2021-01-01T00:00:00Z","amt": 4475},{"date": "2020-12-01T00:00:00Z","amt": 3050},{"date": "2020-11-01T00:00:00Z","amt": 5750}]},
      {offeringId:'990f0f9u09',offering: offeringsObj['990f0f9u09'],"principalInvested": 84000,  isPublic: true,  distributions: [{"date": "2021-02-01T00:00:00Z","amt": 2240},{"date": "2021-01-01T00:00:00Z","amt": 2240},{"date": "2020-12-01T00:00:00Z","amt": 2240}]},
      {offeringId:'lkhflkjhd', offering: offeringsObj['lkhflkjhd'], "principalInvested": 67000,  isPublic: false, distributions: [{"date": "2021-02-01T00:00:00Z","amt": 6030},{"date": "2021-01-01T00:00:00Z","amt": 6030}]},
      {offeringId:'2938f2',    offering: offeringsObj['2938f2'],    "principalInvested": 56000,  isPublic: true,  distributions: [{"date": "2021-02-01T00:00:00Z","amt": 1920}]},
    ],
    "images": {
      "profile": {
        "thumbnail": getImgPath(`drew-orrin-thumbnail.jpg`),
        "large": getImgPath(`drew-orrin-thumbnail.jpg`),
      },
    },
  },
  "xcoviu8": { // previously 9a
    "_id": "xcoviu8",
    "profileType": "user",
    "profileClass": "investor",
    "alias": "gregory_h1",
    "pii": {
      "firstName": "Greg",
      "lastName": "Harris",
      "residence": {
        "stateProvince": "NY",
        "city": "New York"
      }
    },
    "profileBio":
      "I am a manager at Brooklane Rewenables.  With over 10 years of experience, I specialize in sourcing hydroelectric projects. Based in NYC.",
    "active": {
      "type": "employment",
      "organizationId": "vvbb1010",
      "position": "Senior Manager"
    },
    "connections": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz", "vcxv7878"],
    "following": ["zxcv09oip", "zxcv87", "s0987cxlvkn"],
    "posts": ["mnb33mn96"],
    "likes": ["xcv0x9", "vx09xv89v"],
    "investments": [
      {"offeringId":"zxcv098", "principalInvested": 13000, "isPublic": true, "distributions": [{"date": "2021-02-01T00:00:00Z","amt": 1150},{"date": "2021-01-01T00:00:00Z","amt": 589},{"date": "2020-12-01T00:00:00Z","amt": 680},{"date": "2020-11-01T00:00:00Z","amt": 696},{"date": "2020-10-01T00:00:00Z","amt": 681},{"date": "2020-09-01T00:00:00Z","amt": 634},{"date": "2020-08-01T00:00:00Z","amt": 926},{"date": "2020-07-01T00:00:00Z","amt": 910}]},
      {"offeringId":"mnb32", "principalInvested": 65000, "isPublic": false, "distributions": [{"date": "2021-02-01T00:00:00Z","amt": 2900},{"date": "2021-01-01T00:00:00Z","amt": 1475},{"date": "2020-12-01T00:00:00Z","amt": 1050},{"date": "2020-11-01T00:00:00Z","amt": 1750}]},
      {"offeringId":"990f0f9u09","principalInvested": 44000, "isPublic": true, "distributions": [{"date": "2021-02-01T00:00:00Z","amt": 1240},{"date": "2021-01-01T00:00:00Z","amt": 1240},{"date": "2020-12-01T00:00:00Z","amt": 1240}]},
      {"offeringId":"lkhflkjhd", "principalInvested": 47000, "isPublic": false, "distributions": [{"date": "2021-02-01T00:00:00Z","amt": 3030},{"date": "2021-01-01T00:00:00Z","amt": 3030}]},
      {"offeringId":"2938f2", "principalInvested": 36000, "isPublic": true, "distributions": [{"date": "2021-02-01T00:00:00Z","amt": 920}]}
    ],
    "images": {
      "profile": {
        "thumbnail": getImgPath("greg-harris-thumbnail.jpg"),
        "large": getImgPath("greg-harris-thumbnail.jpg")
      }
    }
  },
  "zxcv09oip": {// previously sd8x
    "_id": "zxcv09oip",
    "profileType": "user",
    "profileClass": "investor",
    "alias": "e_jones3",
    "pii": {
        "firstName": "Emily",
        "lastName": "Jones",
        "residence": {
            "stateProvince": "DC",
            "city": "Washington"
        }
    },
    "profileBio":
      "I am a Managing Director at Vertex Capital.  With over 10 years of experience, I specialize in sourcing renewable wind-based projects. Based in NYC.",
    "active": {
        "type": "employment",
        "organizationId": "ytyty8383",
        "position": "Managing Director"
    },
    "connections": ["zxcv09oip", "mmnmmmmnmb", "cxzxcxz", "vcxv7878"],
    "following": ["vs98j", "3m2n23", "3", "zxcv09oip", "zxcv87", "s0987cxlvkn"],
    "posts": ["34s343s"],
    "likes": ["vx09xv89v", "vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("emily-jones-main.jpg"),
            "large": getImgPath("emily-jones-main.jpg")
        }
    }
},
  "mmnmmmmnmb": {// previously "dd9dfa09ux"
    "_id": "mmnmmmmnmb",
    "profileType": "user",
    "profileClass": "investor",
    "alias": "pt44",
    "pii": {
        "firstName": "Pete",
        "lastName": "Taylor",
        "residence": {
            "stateProvince": "TN",
            "city": "Nashville"
        }
    },
    "profileBio":
      "I am an Associate at Atrium Solar LLC.  With over 10 years of experience, I specialize in sourcing renewable geo-based projects. Based in NYC.",
    "active": {
        "type": "employment",
        "organizationId": "qpowieur3",
        "position": "Associate"
    },
    "connections": ["zxcv09oip", "mmnmmmmnmb", "cxzxcxz", "vcxv7878"],
    "following": ["vs98j"],
    "posts": [],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("pete-taylor-main.jpg"),
            "large": getImgPath("pete-taylor-main.jpg")
        }
    }
},
  "cxzxcxz": {// previously xcjij0
    "_id": "cxzxcxz",
    "profileType": "user",
    "profileClass": "investor",
    "alias": "sashagcarlton",
    "pii": {
        "firstName": "Sasha",
        "lastName": "Carlton",
        "residence": {
            "stateProvince": "UT",
            "city": "Salt Lake City"
        }
    },
    "profileBio":
      "I am an Associate at Sunwind Asset Management.  With over 10 years of experience, I specialize in sourcing renewable geo-based projects. Based in NYC.",
    "active": {
        "type": "employment",
        "organizationId": "2c4c0c3c",
        "position": "Senior Analyst"
    },
    "connections": ["zxcv09oip"],
    "following": ["zxcv09oip"],
    "posts": ["fvs9876"],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("sasha-carlton-main.jpg"),
            "large": getImgPath("sasha-carlton-main.jpg")
        }
    }
},
  "vcxv7878": {// previously "8"
    "_id": "vcxv7878",
    "profileType": "user",
    "profileClass": "investor",
    "alias": "lc8397",
    "pii": {
        "firstName": "Lauren",
        "lastName": "Cunningham",
        "residence": {
            "stateProvince": "WA",
            "city": "Seattle"
        }
    },
    "profileBio":
      "I am the COO and a Partner at Solstice Capital.  With over 10 years of experience, I specialize in sourcing renewable geo-based projects. Based in NYC.",
    "active": {
        "type": "employment",
        "organizationId": "12321qwewq",
        "position": "Partner and COO"
    },
    "connections": ["zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "following": ["zxcv09oip", "zxcv87", "mmnmmmmnmb", "cxzxcxz"],
    "posts": [],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("lauren-cunningham-main.jpg"),
            "large": getImgPath("lauren-cunningham-main.jpg")
        }
    }
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
        large: getImgPath(`wind-grid-capital-main.jpg`),
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
        large: getImgPath(`solar-energy-main.jpg`),
      },
    },
  },
  "vvbb1010": {
    "_id": "vvbb1010",
    "profileType": "organization",
    "profileClass": "sponsor",
    "alias": "brooklane-rewenables",
    "pii": {
        "name": "Brooklane Rewenables",
        "address": {
            "stateProvince": "OR",
            "city": "Portland"
        }
    },
    "profileBio":
      "Generic company profile for Brooklane Rewenables.",
    "connections": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "following": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "posts": [],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("external-content.duckduckgo.com.jpg"),
            "large": getImgPath("external-content.duckduckgo.com.jpg")
        }
    },
    "dtCreated": 1619801596043
  },
  'vvbb1010': {
    "_id": "vvbb1010",
    "profileType": "organization",
    "profileClass": "sponsor",
    "alias": "brooklane-rewenables",
    "pii": {
        "name": "Brooklane Rewenables",
        "address": {
            "stateProvince": "OR",
            "city": "Portland"
        }
    },
    "profileBio":
      "Generic company profile for Brooklane Rewenables.",
    "connections": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "following": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "posts": [],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("e3xternal-content.duckduckgo.com.jpg"),
            "large": getImgPath("e3xternal-content.duckduckgo.com.jpg")
        }
    },
    "dtCreated": 1619801596043
},
  'ytyty8383': {
    "_id": "ytyty8383",
    "profileType": "organization",
    "profileClass": "sponsor",
    "alias": "vertex-capital",
    "pii": {
        "name": "Vertex Capital",
        "address": {
            "stateProvince": "NY",
            "city": "New York City"
        }
    },
    "profileBio":
      "Generic company profile for Vertex Capital.",
    "connections": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "following": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "posts": [],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("external-content5.duckduckgo.com.jpg"),
            "large": getImgPath("external-content5.duckduckgo.com.jpg")
        }
    },
    "dtCreated": 1619801596043
},
  'qpowieur3': {
    "_id": "qpowieur3",
    "profileType": "organization",
    "profileClass": "sponsor",
    "alias": "atrium-solar-llc",
    "pii": {
        "name": "Atrium Solar LLC",
        "address": {
            "stateProvince": "NY",
            "city": "New York City"
        }
    },
    "profileBio":
      "Generic company profile for Atrium Solar LLC.",
    "connections": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "following": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "posts": [],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("external-content2.duckduckgo.com.jpg"),
            "large": getImgPath("external-content2.duckduckgo.com.jpg")
        }
    },
    "dtCreated": 1619801596043
},
  '2c4c0c3c': {
    "_id": "2c4c0c3c",
    "profileType": "organization",
    "profileClass": "sponsor",
    "alias": "sunwind-asset-management",
    "pii": {
        "name": "Sunwind Asset Management",
        "address": {
            "stateProvince": "NY",
            "city": "New York City"
        }
    },
    "profileBio":
      "Generic company profile for Sunwind Asset Management.",
    "connections": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "following": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "posts": [],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("external-content.duckduckgo.com.jpg"),
            "large": getImgPath("external-content.duckduckgo.com.jpg")
        }
    },
    "dtCreated": 1619801596043
},
  '12321qwewq': {
    "_id": "12321qwewq",
    "profileType": "organization",
    "profileClass": "sponsor",
    "alias": "solstice-capital",
    "pii": {
        "name": "Solstice Capital",
        "address": {
            "stateProvince": "NJ",
            "city": "Newark"
        }
    },
    "profileBio":
      "Generic company profile for Solstice Capital.",
    "connections": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "following": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "posts": [],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("solar-energy-main.jpg"),
            "large": getImgPath("solar-energy-main.jpg")
        }
    },
    "dtCreated": 1619801596043
},
  '12321qwewq':{
    "_id": "12321qwewq",
    "profileType": "organization",
    "profileClass": "sponsor",
    "alias": "solstice-capital",
    "pii": {
        "name": "Solstice Capital",
        "address": {
            "stateProvince": "NJ",
            "city": "Newark"
        }
    },
    "profileBio":
      "Generic company profile for Solstice Capital.",
    "connections": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "following": ["vs98j", "3m2n23", "3", "zxcv09oip", "mmnmmmmnmb", "cxzxcxz"],
    "posts": [],
    "likes": ["vx09xv89v"],
    "investments": [],
    "images": {
        "profile": {
            "thumbnail": getImgPath("wind-grid-capital-main.jpg"),
            "large": getImgPath("wind-grid-capital-main.jpg")
        }
    },
    "dtCreated": 1619801596043
}
};
