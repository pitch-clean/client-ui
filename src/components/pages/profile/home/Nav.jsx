// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// constants
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const tabObj = {
  about: 0,
  investments: 1,
  network: 2,
};

// main
const Nav = ({ baseRoute }) => {
  // init hooks
  const classes = useStyles();
  // state
  const activeProfileTab = useSelector(s => s.view.profile.activeProfileTab);

  return (
    <div className="Nav w100">
      <Paper className={classes.root}>
        {/* <Tabs value={0} indicatorColor="primary" textColor="primary" centered> */}
        <Tabs
          value={tabObj[activeProfileTab]}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Link to={baseRoute}>
            <Tab label="About" />
          </Link>
          <Link to={`${baseRoute}/investments`}>
            <Tab label="Investments" />
          </Link>
          <Link to={`${baseRoute}/network`}>
            <Tab label="Network" />
          </Link>
        </Tabs>
      </Paper>
    </div>
  );
};

// export
export default Nav;
