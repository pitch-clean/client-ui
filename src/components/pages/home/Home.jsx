// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
// components
import LandingPage from './LandingPage';

// main
const Home = () => {
  // TODO: add route for logged in user
  const isAuthenticated = useSelector(s => s.auth.activeProfile._id);
  if (isAuthenticated) {
    return <Redirect to="/feed" />;
  }

  return <LandingPage />;
};

// export
export default Home;
