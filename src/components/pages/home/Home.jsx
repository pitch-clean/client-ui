// react
import React from 'react';
// import { useSelector } from 'react-redux';
// components
import LandingPage from './LandingPage';
import FeedView from '../feed/FeedView';

// main
const Home = () => {
  // TODO: add route for logged in user
  // const account = useSelector(s => s.auth);
  // const account = {id: 1};
  const account = null;
  return account ? <FeedView /> : <LandingPage />;
};

// export
export default Home;