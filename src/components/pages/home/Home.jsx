// react
import React from 'react';
import { useSelector } from 'react-redux';
// components
import LandingPage from './LandingPage';
import FeedView from '../feed/FeedView';

// main
const Home = () => {
  // TODO: add route for logged in user
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
  // const account = {id: 1};
  return isAuthenticated ? <FeedView /> : <LandingPage />;
};

// export
export default Home;
