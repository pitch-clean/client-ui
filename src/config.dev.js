const protocol = 'http';
const hostname = 'localhost';
const clientApiPort = 8080;
const apiLoc = 'api';
const apiBase = `${protocol}://${hostname}:${clientApiPort}/${apiLoc}`;

// api and client route vars
const auth = 'auth';
const search = 'search';
const feed = 'feed';
const messages = 'messages';
const profile = 'profile';
const profiles = 'profiles';
// const offering = 'offering'; // deprecated
// const offerings = 'offerings'; // deprecated
const social = 'social';
const post = 'post';
const posts = 'posts';
const comments = 'comments';
const startup = 'startup';
const startups = 'startups';
const rsvp = 'rsvp';
const rsvps = 'rsvps';


const api = {
  base: apiBase,
  auth: `${apiBase}/${auth}`,
  login: `${apiBase}/${auth}/login`,
  search: `${apiBase}/${search}`,
  profiles: `${apiBase}/${profiles}`,
  startups: `${apiBase}/${startups}`,
  posts: `${apiBase}/${social}/${posts}`,
  comments: `${apiBase}/${social}/${comments}`,
  rsvps: `${apiBase}/${rsvps}`,
};


/**
 * client react router routes
 */
const client = {
  marketplace: 'marketplace',
  feed,
  auth,
  search,
  messages,
  posts,
  profiles,
  profile,
  startup,
  startups,
  rsvp,
  rsvps,
  login: 'login',
  register: 'register',
};

window.env = {
  protocol,
  hostname,
  api,
  client,
};
