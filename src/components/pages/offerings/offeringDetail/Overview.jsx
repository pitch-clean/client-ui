// react
import React, {useState} from 'react';
// constants
const defaultTab = 'investment';

// main
const Overview = ({offeringObj}) => {
  console.log(offeringObj)
  let content = '';
  // state
  const [activeTab, setActiveTab] = useState(defaultTab);
  content = offeringObj.content[activeTab];
  // if (activeTab.toLowerCase() === 'investment') {
  // } else if (activeTab.toLowerCase() === 'sponsor') {
  //   content = offeringObj.content.sponsor;
  // } else if (activeTab.toLowerCase() === 'disclaimer') {
  //   content = offeringObj.content.disclaimer;
  // }
  return (
    <div className="Overview flexcol" >
      <div className="nav flexrow">
        <div className={`item ${activeTab.toLowerCase() === 'investment' ? 'active': ''}`} onClick={() => setActiveTab('investment')}>Investment</div>
        <div className="divider-vertical" ></div>
        <div className={`item ${activeTab.toLowerCase() === 'sponsor' ? 'active': ''}`} onClick={() => setActiveTab('sponsor')}>Sponsor</div>
        <div className="divider-vertical" ></div>
        <div className={`item ${activeTab.toLowerCase() === 'disclaimer' ? 'active': ''}`} onClick={() => setActiveTab('disclaimer')}>Disclaimer</div>
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  )
};

// export
export default Overview;
