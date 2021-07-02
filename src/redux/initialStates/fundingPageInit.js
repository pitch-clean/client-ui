import Joi from 'joi';

export const initialState = {
  generalInfo: {
    fields: {
      title: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
      slogan: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
      image: {
        validator: Joi.any().optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      linkedin: {
        validator: Joi.string().uri()
          .allow('')
          .max(250),
        value: '',
        error: '',
        isOptional: true,
      },
      twitter: {
        validator: Joi.string().uri()
          .allow('')
          .max(250),
        value: '',
        error: '',
        isOptional: true,
      },
      facebook: {
        validator: Joi.string().uri()
          .allow('')
          .max(250),
        value: '',
        error: '',
        isOptional: true,
      },
      sector: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(128),
        value: '',
        error: '',
      },
      employeeCt: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(128),
        value: '',
        error: '',
      },
      website: {
        validator: Joi.string().uri()
          .allow('')
          .max(256),
        value: '',
        error: '',
        isOptional: true,
      },
      email: {
        validator: Joi.string().email({ tlds: { allow: false } }).max(128),
        value: '',
        error: '',
        isOptional: true,
      },
      phone: {
        validator:Joi.string()
          .regex(/^[0-9-()]+$/)
          .min(10)
          .max(20),
        value: '',
        error: '',
        isOptional: true,
      },
      country: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z-']+$/)
          .allow('')
          .max(128),
        value: '',
        error: '',
      },
      provinceState: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(64),
        value: '',
        error: '',
      },
      city: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(64),
        value: '',
        error: '',
      },
      street: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(64),
        value: '',
        error: '',
        isOptional: true,
      },
      buildingNumber: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9-]+$/)
          .allow('')
          .max(10),
        value: '',
        error: '',
        isOptional: true,
      },
      apartment: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(64),
        value: '',
        error: '',
        isOptional: true,
      },
      about: {
        validator: Joi.string()
          .allow('')
          .max(2000),
        value: '',
        error: '',
      },
      dtClosedLatestFundingRound: {
        validator: Joi.string()
          .allow('')
          .max(2000),
        value: '',
        error: '',
        isOptional: true,
      },
      latestFundingRoundStage: {
        validator: Joi.string()
          .allow('')
          .max(64),
        value: '',
        error: '',
      },
      latestFundingRoundMethod: {
        validator: Joi.string()
          .allow('')
          .max(64),
        value: '',
        error: '',
      },
      amountRaised: {
        validator: Joi.string()
          .regex(/^[0-9,]+$/)
          .allow('')
          .max(10),
        value: '',
        error: '',
      },
    },
  },
  highlights: {
    fields: {
      highlights: {
        value: [],
        error: '',
        validator: Joi.any(),
      },
    },
  },
  recentNews: {
    fields: {
      recentNews: {
        value: [],
        error: '',
        validator: Joi.any(),
      },
    },
  },
  partnersAndSponsors: {
    fields: {
      partners: {
        value: [],
        error: '',
        validator: Joi.any(),
      },
      sponsors: {
        value: [],
        error: '',
        validator: Joi.any(),
      },
    },
  },
  pitchdeck: {
    fields: {
      pitchdeck: {
        value: { file: {} },
        error: '',
        validator: Joi.any(),
      },
    },
  },
  media: {
    fields: {
      images: {
        value: [],
        error: '',
        validator: Joi.any(),
      },
      videos: {
        value: [],
        error: '',
        validator: Joi.any(),
      },
    },
  },
  advisorsAndInvestors: {
    fields: {
      advisors: {
        value: [],
        error: '',
        validator: Joi.any(),
      },
      investors: {
        value: [],
        error: '',
        validator: Joi.any(),
      },
    },
  },
  team: {
    fields: {
      team: {
        value: [],
        error: '',
        validator: Joi.any(),
      },
    },
  },
  validForms: {
    generalInfo: false,
    highlights: false,
    recentNews: false,
    partnersAndSponsors: false,
    pitchdeck: false,
    media: false,
    advisorsAndInvestors: false,
    team: false,
  },
  activeForm: {
    name: 'media',
    isFormValid: false,
  },
  areAllFormsValid: false,
};
