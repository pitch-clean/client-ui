// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs, Link as MuiLink } from '@material-ui/core';
import { updateProfileTab } from '../../../redux/actions/ViewActions';
// constants
const useStyles = makeStyles({
  tabs: {
    '& .MuiTabs-indicator': {
      width: 10,
    },
  },
  tab: {
    maxWidth: '100%',
    '&:hover': {
      background: 'whitesmoke',
    },
    '& span': {
      alignItems: 'flex-start',
      padding: `0 10px`,
    },
  },
  active: {
    opacity: 1,
  },
  overflow: {
    flex: `1 1 auto`,
    width: `100%`,
    margin: 0,
    padding: `0`,
    paddingTop: 10,
    '& .MuiCardHeader-content': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    '& .MuiTypography-root': {
      textAlign: 'start',
      padding: 0,
    },
    '& *': {
      textTransform: `none`,
    },
  },
});
const tabsObj = {};
const tabsArr = [
  { key: 'posts', label: 'Posts' },
  { key: 'likes', label: 'Likes' },
  // { key: 'network', label: 'Network' }, TODO
  // { key: 'portfolio', label: 'Portfolio' }, TODO
];
tabsArr.forEach((tabObj, idx) => {
  tabsObj[tabObj.key] = { idx, ...tabObj };
});

/**
 * main
 */
const ProfileTabs = ({ baseRoute }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeProfileTab = useSelector(s => s.view.profile.activeProfileTab);
  let activeTabIdx;
  // build
  const elemArr = [];
  for (let tabIdx = 0; tabIdx < tabsArr.length; tabIdx += 1) {
    const tabObj = tabsArr[tabIdx];
    if (tabObj.key === activeProfileTab) activeTabIdx = tabIdx
    elemArr.push(
      <MuiLink
        underline="none"
        color="textPrimary"
        component={Link}
        to={`${baseRoute}/${tabObj.key}`}
      >
        <Tab
          className={`${classes.tab} w100`}
          classes={{
            root: activeTabIdx === tabIdx ? classes.active : {},
          }}
          label={tabObj.label}
          textColor="primary"
          textColor="inherit"
          onClick={() =>
            activeTabIdx !== tabIdx &&
            dispatch(updateProfileTab(tabObj.key))
          }
          disableRipple
        />
      </MuiLink>
    );
  }

  return (
    <>
    <Tabs
        orientation="vertical"
        value={tabsObj[activeProfileTab].idx}
        variant="scrollable"
        aria-label="Vertical tabs"
        className={`${classes.tabs}`}
        textColor="inherit"
        indicatorColor="secondary"
      >
        {elemArr}
      </Tabs>
    </>
  );
};

// export
export default ProfileTabs;
