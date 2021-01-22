// react
import React, {useState} from 'react';
// utils
import { fixedWidth } from '../../utils/styleFxns';

// main
const InvestorDeveloperDashboard = ({contentStyle}) => {
  // state
  const [isInvTab, setIsInvTab] = useState(true);
  // style
  /**@type {React.CSSProperties} */
  const titleStyle = {
    fontSize: `30px`,
    padding: `10px`,
    cursor: "pointer",
  };
  /**@type {React.CSSProperties} */
  const infoCardStyle = {
    alignItems: `space-between`,
    margin: `5px`,
  };
  const paragraphStyle = {
    backgroundColor: 'grey',
    maxWidth: `300px`,
    padding: `10px`,
    flex: 1,
  }
  // build fxn
  const investorContent = (
    <div>
      <div
        className="title"
        style={{
          fontSize: `30px`,
          padding: `10px`,
        }}
      >
        Why Ecofunded?
      </div>
      <div
        className="flexrow"
        style={{
          alignItems: `start`,
          padding: `20px`,
        }}
      >
        <div
          className="infoCard flexcol h100"
          style={infoCardStyle}
        >
          <div className="header" style={{padding: `10px`,}} >{`Speed & Security`}</div>
          <div
            className="paragraph"
            style={paragraphStyle}
          >
            Transactions on Envest are processed and stored using blockchain,<br/>
            allowing for rapid settlement with the highest standard for security and accountability
          </div>
        </div>
        <div className="infoCard flexcol h100" style={infoCardStyle} >
          <div className="header" style={{padding: `10px`,}}>{`Convenience`}</div>
          <div className="paragraph" style={paragraphStyle} >
            Envest does the hard work for you: <br/>
            We vet thousands of opportunities and<br/>
            compile the stats you need to know.
          </div>
        </div>
        <div className="infoCard flexcol h100" style={infoCardStyle} >
          <div className="header" style={{padding: `10px`,}}>{`Access`}</div>
          <div className="paragraph" style={paragraphStyle} >
            Envest's relationships with smaller<br/>
            developers means that our users get<br/>
            exclusive access to great opportunities.
          </div>
        </div>
      </div>
    </div>
  );
  const devContent = (
    <div>
      <div className="title" style={{fontSize: `30px`, padding: `20px`, marginTop: `20px`,}} >Leverage the power of blockchain for public and private offerings</div>
      <div className="flexrow">

      </div>
      <div className="paragraph"></div>
    </div>
  );

  return (
    <div style={{
      ...contentStyle,
      ...fixedWidth(80, '%'),
      padding: `20px`,
      minHeight: `300px`,
    }} >
      <div className="nav flexrow" style={{
        justifyContent: `space-evenly`,
        border: `1px solid black`,
        padding: `20px`,
        marginBottom: `10px`,
      }}>
        <div style={titleStyle} className={`contentSelector f1 ${isInvTab ? 'active' : ' '}`} onClick={() => setIsInvTab(true)} >Investors</div>
        <div style={titleStyle} className={`contentSelector f1 ${!isInvTab ? 'active' : ' '}`} onClick={() => setIsInvTab(false)} >Developers</div>
      </div>
      <div className="investorDevDashContent">
        {isInvTab ? investorContent : devContent}
      </div>
    </div>
  )
};

// export
export default InvestorDeveloperDashboard;
