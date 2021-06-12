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
        error: ''
      },
      description: {
        validator: Joi.string()
          .regex(/^[ a-zA-Z0-9]+$/)
          .allow('')
          .max(250),
        value: '',
        error: ''
      }
    }
  },
  validForms: {
    general: false
  },
  activeForm: {
    name: 'general',
    isFormValid: false
  },
  areAllFormsValid: false
};
