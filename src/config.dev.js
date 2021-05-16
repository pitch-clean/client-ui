const protocol = 'http';
const hostname = 'localhost';
const clientApiPort = 8080;
const apiLoc = 'api';
const apiEndpoint = `${protocol}://${hostname}:${clientApiPort}/${apiLoc}`;

const apiRoutes = {
  posts: 'posts',
  offerings: 'offerings',
  profiles: 'profiles',
  auth: 'auth',
};
const clientRoutes = {
  posts: 'posts',
  offerings: 'offerings',
  offering: 'offering',
  profiles: 'profiles',
  profiles: 'profile',
  portfolio: 'portfolio',
  messages: 'messages',
  auth: 'auth',
};

const endpoints = {
  apiBase: apiEndpoint,
  posts: `${apiEndpoint}/${apiRoutes.posts}`,
  offerings: `${apiEndpoint}/${apiRoutes.offerings}`,
  profiles: `${apiEndpoint}/${apiRoutes.profiles}`,
  auth: `${apiEndpoint}/${apiRoutes.auth}`,
};

window.env = {
  protocol,
  hostname,
  clientApiPort,
  apiLoc,
  ...apiRoutes,
  endpoints,
  clientRoutes,
};
