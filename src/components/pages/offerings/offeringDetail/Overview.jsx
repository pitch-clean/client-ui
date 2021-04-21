// react
import React, {useState} from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `30px 10%`,
    margin: 0,
    width: '100%',
    minHeight: '200px',
    backgroundColor: 'whitesmoke',
    borderRadius: '0',
  },
  nav: {
    backgroundColor: 'black',
    width: '100%',
  },
  content: {
    padding: '40px 10%',
    textAlign: 'start',
    whiteSpace: 'pre-wrap',
    backgroundColor: 'whitesmoke',
    color: 'black',
    '& *': {
    },
  },
  header: {
    marginBottom: 10,
    fontWeight: 600,
  },
}));
// constants
const defaultTab = 'investment';

// main
const Overview = ({offeringObj}) => {
  console.log(offeringObj)
  const classes = useStyles();
  let content = '';
  // state
  const [activeTab, setActiveTab] = useState(defaultTab);
  content = offeringObj.content[activeTab];
  return (
    <div className="Overview flexcol w100">
      <div className={`${classes.nav} nav flexrow`}>
        <div className={`item ${activeTab.toLowerCase() === 'investment' ? 'active': ''}`} onClick={() => setActiveTab('investment')}>Investment</div>
        <div className="divider-vertical" ></div>
        <div className={`item ${activeTab.toLowerCase() === 'Visuals' ? 'active': ''}`} onClick={() => setActiveTab('visuals')}>Visuals</div>
        <div className="divider-vertical" ></div>
        <div className={`item ${activeTab.toLowerCase() === 'sponsor' ? 'active': ''}`} onClick={() => setActiveTab('sponsor')}>Sponsor</div>
        <div className="divider-vertical" ></div>
        <div className={`item ${activeTab.toLowerCase() === 'disclaimer' ? 'active': ''}`} onClick={() => setActiveTab('disclaimer')}>Disclaimer</div>
      </div>
      <Typography className={`${classes.content}`}>
        {content}
      </Typography>
    </div>
  )
};

// export
export default Overview;
