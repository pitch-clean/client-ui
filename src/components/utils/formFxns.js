export const updateInputField = (e, stateUpdateFxn) => {
  e.preventDefault();
  stateUpdateFxn(e.currentTarget.value);
};

export const formKeyDownHandler = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const isFormValid = null//validateForm(formData);
    if (isFormValid) {
      // const res = submitRegisterForm(formData);
    }
  }
};

export const searchKeyDownHandler = e => {
  // const filteredStr = `${e.currentTarget.value}`.replace(/\W/g, '');
  if (e.key === 'Enter') {
    e.preventDefault();
    console.log('submitting GET request for filtered info: ', e.target.value)
  }
}