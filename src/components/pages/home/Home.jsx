// react
import React, {useEffect, useRef} from 'react';
import { fixedWidth, fixedHeight } from '../../utils/styleFxns';
// components
import InvestorDeveloperDashboard from './InvestorDeveloperDashboard';
// utils
import { pageTransition } from '../../utils/styleObjs';

// main
const Home = () => {
  // init hooks
  const pageRef = useRef(null);
  // style
  /**@type {React.CSSProperties} */
  const contentStyle = {
    padding: `5px`,
    margin: `20px 0`,
    border: `1px dotted black`,
  };
  /**@type {React.CSSProperties} */
  const borderHorizStyle = {
    margin: `50px 0`,
    ...fixedWidth(70, '%'),
    border: `1px solid rgba(84, 89, 84, 0.48)`,
  };
  /**@type {React.CSSProperties} */
  const borderVertStyle = {
    margin: `0 50px`,
    ...fixedHeight(70, '%'),
    border: `0.5px solid rgba(84, 89, 84, 0.68)`,
  };
  /**@type {React.CSSProperties} */
  const miniCtnrStyle = {
    padding: `10px`,
    margin: `10px`,
    color: `#2c592c`,
    backgroundColor: `#bfdcbf`,
    fontWeight: `400`,
    fontSize: `25px`,
    boxShadow: `black 1px 0 7px -1px`,
  };
  const borderHorizElem = (
    <div className="w100" style={borderHorizStyle} ></div>
  );
  const borderVertElem = (
    <div className="h100" style={borderVertStyle} ></div>
  );
  const content1 = (
    <div
      className="flexrow CONTENT1"
      style={{
        ...contentStyle,
        ...fixedHeight(500, 'px'),
        // border: `1px solid black`,
      }}
    >
      <div
        className="left flexcol"
        style={{fontSize: `50px`,}}
      >
        <div className="text" style={{fontWeight: `200`}}>
          Investments made for your portfolio <br/>
          <u>& the planet</u>
        </div>
      </div>
      <div className="right" >
      </div>
    </div>
  );
  const content2 = (
    <div
      className="flexrow content2"
      style={{
        ...contentStyle,
        ...fixedHeight(300, 'px'),
        // border: `1px solid black`,
      }}
    >
      <div className="left">
        <div className="w100" style={{fontSize: `50px`,}} ><u>Why invest in renewable assets?</u></div>
        <div 
          lassName="paragraph w100"
          style={{
            fontSize: `30px`,
            paddingTop: '10px',
            fontWeight: 200,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
          Maecenas vitae nulla sollicitudin, pellentesque metus ut, accumsan eros.<br/>
          Integer ac nibh justo.<br/>
          Nullam at risus consequat, elementum augue eu, elementum elit.<br/>
          Quisque lorem enim, dapibus interdum nulla et, semper finibus enim.<br/>
          Aliquam erat volutpat.<br/>
        </div>
      </div>
      {borderVertElem}
      <div className="right flexcol">
        <div className="ctnr w100" style={miniCtnrStyle} >{`High & Consistent Returns`}</div>
        <div className="ctnr w100" style={miniCtnrStyle} >Low Stock Market Correlation</div>
        <div className="ctnr w100" style={miniCtnrStyle} >Support Green Energy</div>
      </div>
    </div>
  )
  // effects
  useEffect(() => {
    pageRef.current.style.opacity = 1;
    return () => {
      if (pageRef.current) {
        pageRef.current.style.opacity = 0;
      }
    }
  }, []);
  
  return (
    <div
      className="w100 flexcol darkmode"
      style={{
        ...pageTransition,
        justifyContent: `space-between`,
        padding: `10px 0`,
      }}
      ref={pageRef}
    >
      {content1}
      {borderHorizElem}
      {content2}
      {borderHorizElem}
      <InvestorDeveloperDashboard contentStyle={contentStyle} />
    </div>
  );
};

// export
export default Home;