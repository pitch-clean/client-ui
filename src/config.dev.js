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
const startup = 'startup';
const startups = 'startups';
const search = 'search';

const api = {
  base: apiBase,
  auth: `${apiBase}/${auth}`,
  profiles: `${apiBase}/${profiles}`,
  startups: `${apiBase}/${startups}`,
  posts: `${apiBase}/${social}/${posts}`,
  comments: `${apiBase}/${social}/${comments}`,
  search: `${apiBase}/${search}`,
};

/**
 * client react router routes
 */
const client = {
  marketplace: 'marketplace',
  messages: 'messages',
  feed: 'feed',
  auth,
  posts,
  offerings,
  offering,
  profiles,
  profile,
  search,
  startup,
  startups,
};

window.env = {
  protocol,
  hostname,
  api,
  client,
};
