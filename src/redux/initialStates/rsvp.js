import Joi from 'joi';

export const initialState = {
  general: {
    fields: {
      title: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: '',
      },
      description: {
        validator: Joi.string(),
        value: '',
        error: '',
      },
    },
  },
  timeAndDate: {
    fields: {
      date: {
        validator: Joi.date().optional(),
        value: new Date(),
        error: '',
        isOptional: true,
      },
    },
  },
  // location: {
  //   fields: {
  //     location: {
  //       validator: Joi.string().allow('').max(250),
  //     },
  //   },
  // },
  validForms: {
    general: false,
    timeAndDate: false,
    // location: false,
  },
  activeForm: {
    name: 'general',
    isFormValid: false,
  },
  areAllFormsValid: false,
};
