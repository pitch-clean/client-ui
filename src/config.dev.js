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
const startups = 'startups';

const api = {
  base: apiBase,
  auth: `${apiBase}/${auth}`,
  profiles: `${apiBase}/${profiles}`,
  startups: `${apiBase}/${startups}`,
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
  search: 'search',
  startup: 'startup',
  startups,
  marketplace: 'marketplace',
};

window.env = {
  protocol,
  hostname,
  api,
  client,
};
