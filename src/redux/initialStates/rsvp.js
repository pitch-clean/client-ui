import Joi from 'joi';

export const initialState = {
  title: {
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
    title: false
  },
  activeForm: {
    name: 'title',
    isFormValid: false
  },
  areAllFormsValid: false
};
