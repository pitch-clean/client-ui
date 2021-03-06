/**
 * traverse a "profile" object to get the name
 */
export const getProfileNameFromPii = pii => {
  if (pii.firstName) {
    return `${pii.firstName} ${pii.lastName}`;
  } else if (pii.name) {
    return pii.name;
  } else {
    throw new Error('Please use approved variable for getProfileNameFromPii()');
  }
};
export const getProfileName = (profileObj, type=null) => {
  if (profileObj.firstName) {
    return `${profileObj.firstName} ${profileObj.lastName}`;
  } else if (profileObj.name) {
    return profileObj.name;
  } else if (profileObj.pii) {
    return getProfileNameFromPii(profileObj.pii);
  } else {
    throw new Error('Please use approved variable for getProfileName()');
  }
};
export const getFirstName = parentObj => {
  if (parentObj.firstName) {
    return parentObj.firstName;
  } else if (parentObj.pii) {
    return parentObj.pii.firstName;
  } else {
    throw new Error('Please use approved variable for getFirstName()');
  }
};
export const getReverseName = profileObj => {
  const { pii } = profileObj;
  if (profileObj.pii.name) {
    return profileObj.pii.name;
  }
  return `${pii.lastName}, ${pii.firstName}`;
};