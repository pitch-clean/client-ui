import { queryPostsByProfile } from './storePosts';
import { profilesObj } from './storeProfiles';

const queryOfferingsForProfile = offeringsArr => {
  const newOfferings = [];
  for (let i = 0; i < offeringsArr.length; i += 1) {
    const offeringObj = offeringsArr[i];
    const { isPublic } = offeringObj;
    if (isPublic) {
      newOfferings.push(offeringObj);
    }
  }
  return newOfferings;
};
const queryProfilesForConnection = profilesArr => {
  const payload = [];
  for (let i = 0; i < profilesArr.length; i += 1) {
    const profileId = profilesArr[i];
    const { pii, active, alias, location, images } = profilesObj[profileId];
    const profObj = {
      pii,
      active,
      alias,
      location,
      image: images.profile.thumbnail,
    };
    payload.push(profObj);
  }
  return payload;
};
const queryOrganizationForActive = orgId => {
  if (!orgId) console.log('PLEASE ADD PROFILEID');
  return {
    name: profilesObj[orgId].pii.name,
    slug: profilesObj[orgId].alias,
  };
};
export const queryProfileForPost = profileId => {
  const { images, active, alias, pii } = profilesObj[profileId];
  const newProfile = {
    alias,
    pii,
    active: {
      ...active,
      ...queryOrganizationForActive(active.organizationId),
    },
    image: images.profile.thumbnail,
  };
  return newProfile;
};
export const queryProfileForProfilePage = profileId => {
  const { images, active, alias, pii, connections, profileBio, investments } = profilesObj[
    profileId
  ];
  const newProfile = {
    alias,
    pii,
    profileBio,
    connections: [...queryProfilesForConnection(connections)],
    active: {
      ...active,
      ...queryOrganizationForActive(active.organizationId),
    },
    image: images.profile.large,
    posts: [...queryPostsByProfile(alias)],
    investments: [...queryOfferingsForProfile(investments)],
  };
  return newProfile;
};