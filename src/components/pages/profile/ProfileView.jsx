// react
import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// components
import Sidebar from '../../elements/SideBar';
import Nav from './home/Nav';
import About from './home/About';
import Investments from './home/Investments';
import Network from './home/Network';
// utils
import { updateViewProfile } from '../../../redux/actions/ViewActions';
// seed
const education = [
  {
    organization: 'Yale Schoole of Management',
    degree: 'Masters in Business Administration',
    dtEnd: '2016-05-01T00:00:00.000Z',
    dtStart: '2014-08-01T00:00:00.000Z',
  },
  {
    organization: 'Bucknell University',
    degree: 'B.A. in Economics',
    dtEnd: '2013-05-01T00:00:00.000Z',
    dtStart: '2013-05-01T00:00:00.000Z',
  },
];
const employment = [
  {
    employer: 'Sungage Asset Management',
    title: 'Investments Director',
    dtEnd: '2020-05-01T00:00:00.000Z',
    dtStart: '2017-05-01T00:00:00.000Z'
  },
  {
    employer: 'Atrium Solar LLC',
    title: 'Senior Vice President',
    dtEnd: '2017-05-01T00:00:00.000Z',
    dtStart: '2014-05-01T00:00:00.000Z'
  },
  {
    employer: 'Wind Capital',
    title: 'Analyst',
    dtEnd: '2014-05-01T00:00:00.000Z',
    dtStart: '2013-05-01T00:00:00.000Z'
  }
];
const about = {
  profileBio:
    'As a Senior Vice President I manage all business development for the North West region of the United States for Vertex Capital’s solar project finance. With over 7 years of experience in the renewable finance sector, I am able to utilize my extensive network to access capital for our enterprise clients and oversee cashflow distribution to our investors.',
};
const pii = {
  firstName: 'Rob',
  lastName: 'Sherman',
  residence: {
    provinceState: 'NY',
    city: 'NYC',
  },
};
const active = [
  {
    type: 'employment',
    employer: 'Vertex Capital',
    title: 'Senior Vice President',
    dtStart: '2020-05-01T00:00:00.000Z',
    dtEnd: null,
  },
];

// main
const ProfileView = () => {
  // init hooks
  const dispatch = useDispatch();
  const location = useLocation();
  const match = useRouteMatch();
  const {
    params: { alias },
  } = match;
  const baseRoute = `/profile/${match.params.alias}`;
  // effects
  useEffect(() => {
    const mockProfileViewObj = {
      _id: 3,
      alias,
      pii,
      active,
      education,
      about,
      employment,
    };
    dispatch(updateViewProfile(mockProfileViewObj));
  }, []);

  return (
    <div className="ProfileView flexrow w100">
      <Sidebar isLeft />
      <div className="Body f1 flexcol">
        <Nav baseRoute={baseRoute} />
        <Switch location={{ ...location, baseRoute }}>
          <Route exact path="/profile/:alias" render={p => <About props={p} />} />
          <Route exact path="/profile/:alias/investments" render={p => <Investments props={p} />} />
          <Route exact path="/profile/:alias/network" render={p => <Network props={p} />} />
        </Switch>
      </div>
    </div>
  );
};

// export
export default ProfileView;
