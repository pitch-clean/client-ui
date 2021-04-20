// react
import React from 'react';
import { useSelector } from 'react-redux';
// components
import LandingPage from './LandingPage';
import FeedView from '../feed/FeedView';

// main
const Home = () => {
  // TODO: add route for logged in user
  const activeProfile = useSelector(s => s.auth.activeProfile);
  // const account = {id: 1};
  return activeProfile ? <FeedView /> : <LandingPage />;
};

// export
export default Home;
