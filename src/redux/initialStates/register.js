// eslint-disable-next-line
export const initialState = {
  loginInfo: {
    fields: {
      firstName: { value: '', error: '' },
      middleName: { value: '', error: '', isOptional: true },
      lastName: { value: '', error: '' },
      email: { value: '', error: '' },
      password: { value: '', error: '' },
      confirmPassword: { value: '', error: '' },
    },
  },
  profileType: {
    fields: {
      type: { value: null, error: '' },
    },
  },
  investorPurpose: {
    fields: {
      items: {
        p1: { prompt: 'I earn > $200,000 per year', isChecked: false },
        p2: { prompt: 'I have > $1M in assets', isChecked: false },
        p3: { prompt: 'I work for an accredited investment entity', isChecked: false },
        p4: {
          prompt: 'I hold a Series 7, 65 or 82 license currently in good standing',
          isChecked: false,
        },
        none: { prompt: 'None of the above', isChecked: false },
      },
    },
  },
  investorPii: {
    fields: {
      employer: { value: '', error: '' },
      companyWebsite: { value: '', error: '' },
      linkedinUrl: { value: '', error: '' },
      address1: { value: '', error: '' },
      address2: { value: '', error: '', isOptional: true },
      country: { value: 'USA', error: '' },
      stateProvince: { value: '', error: '' },
      city: { value: '', error: '' },
      zipcode: { value: '', error: '' },
    },
  },
  validForms: {
    loginInfo: false,
    profileType: false,
    investorPurpose: false,
    investorPii: false,
  },
  activeForm: {
    name: 'loginInfo',
    isFormValid: false,
  },
  areAllFormsValid: false,
};
