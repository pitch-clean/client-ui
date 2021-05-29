const protocol = 'http';
const hostname = 'localhost';
const clientApiPort = 8080;
const apiLoc = 'api';
const apiBase = `${protocol}://${hostname}:${clientApiPort}/${apiLoc}`;

// api and client route vars
const auth = 'auth';
const profile = 'profile';
const profiles = 'profiles';
const offering = 'offering';
const offerings = 'offerings';
const social = 'social';
const post = 'post';
const posts = 'posts';
const comments = 'comments';

const api = {
  base: apiBase,
  auth: `${apiBase}/${auth}`,
  profiles: `${apiBase}/${profiles}`,
  offerings: `${apiBase}/${offerings}`,
  posts: `${apiBase}/${social}/${posts}`,
  comments: `${apiBase}/${social}/${comments}`,
};

/**
 * client react router routes
 */
const client = {
  posts: 'posts',
  offerings: 'offerings',
  offering: 'offering',
  profiles: 'profiles',
  profile: 'profile',
  portfolio: 'portfolio',
  messages: 'messages',
  auth: 'auth',
  feed: 'feed',
};

window.env = {
  protocol,
  hostname,
  api,
  client,
};
