import Joi from 'joi';

// eslint-disable-next-line
export const initialState = {
  basics: {
    fields: {
      investmentName: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
      sponsorName: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
      location: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
    },
  },
  projectType: {
    fields: {
      type: { value: null, error: '' },
      other: {
        validator: Joi.string().allow('').max(250).optional(),
        value: '',
        error: '',
        isOptional: true,
      },
    },
  },
  assetClass: {
    fields: {
      type: { value: null, error: '' },
    },
  },
  offeringType: {
    fields: {
      type: { value: null, error: '' },
    },
  },
  financialProjections: {
    fields: {
      expectedReturn: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
      netPresentValue: {
        validator: Joi.string()
          .regex(/^[0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
      offeringSize: {
        validator: Joi.string()
          .regex(/^[0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
    },
  },
  operations: {
    fields: {
      expectedAnnualMwh: {
        validator: Joi.string()
          .regex(/^[0-9]+$/)
          .allow(''),
        value: '',
        error: '',
      },
      capacity: {
        validator: Joi.string()
          .regex(/^[0-9]+$/)
          .allow(''),
        value: '',
        error: '',
      },
      ppaTerm: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
      ppaPrice: {
        validator: Joi.string()
          .regex(/^[0-9]+$/)
          .allow(''),
        value: '',
        error: '',
      },
      commercial: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
      counterparty: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
    },
  },
  projectSummary: {
    fields: {
      projectSummary: {
        validator: Joi.string(),
        value: '',
        error: '',
      },
    },
  },
  investmentBlurb: {
    fields: {
      investmentBlurb: {
        validator: Joi.string(),
        value: '',
        error: '',
      },
    },
  },
  capitalStackChart: {
    fields: {
      seniorDebt: {
        validator: Joi.string(),
        value: '',
        error: '',
      },
      mezzanineDebt: {
        validator: Joi.string(),
        value: '',
        error: '',
      },
      preferredEquity: {
        validator: Joi.string(),
        value: '',
        error: '',
      },
      commonEquity: {
        validator: Joi.string(),
        value: '',
        error: '',
      },
    },
  },
  // picturesAndVideo: {
  //   fields: {
  //     projectSummary: {
  //       validator: Joi.string(),
  //       value: '',
  //       error: '',
  //     },
  //   },
  // },
  sponsorSummary: {
    fields: {
      sponsorSummary: {
        value: '',
        error: '',
        validator: Joi.string(),
      },
    },
  },
  existingProjects: {
    fields: {
      text0: {
        validator: Joi.string(),
        value: '',
        error: '',
        isOptional: true,
      },
      text1: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text2: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text3: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text4: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text5: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text6: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text7: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text8: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text9: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text10: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
      text11: {
        validator: Joi.string().allow('').optional(),
        value: '',
        error: '',
        isOptional: true,
      },
    },
  },
  viewSettings: {
    fields: {
      type: {
        value: '',
        error: '',
      },
    },
  },
  accessSettings: {
    fields: {
      adminAccess: {
        value: '',
        error: '',
        validator: Joi.string(),
      },
      inboxAccess: {
        value: '',
        error: '',
        validator: Joi.string(),
      },
    },
  },
  validForms: {
    basics: false,
    projectType: false,
    assetClass: false,
    offeringType: false,
    financialProjections: false,
    operations: false,
    projectSummary: false,
    investmentBlurb: false,
    capitalStackChart: false,
    picturesAndVideo: false,
    sponsorSummary: false,
    existingProjects: false,
    viewSettings: false,
    accessSettings: false,
  },
  activeForm: {
    name: 'basics',
    isFormValid: false,
  },
  areAllFormsValid: false,
};
