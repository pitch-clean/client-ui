import { Get } from "../../utils/requests";

export const getLikesByQuery = async (profileId, by="profile", window) => {
  let url;
  if (by === "profile") {
    url = `${window.env.api.profiles}`;
  } else if (by === "post") {
    url = `${window.env.api.posts}`;
  } else if (by === "startup") {
    url = `${window.env.api.startups}`;
  }
  try {
    url = `${url}/getLikes/${profileId}`;
    const res = await Get(url, {}, true);
    return res;
  } catch (err) {
    throw new Error("ERROR: getLikesByQuery() was not successfully returned")
  }
};
