// react
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import PageRouter from './components/pages/PageRouter';
import MainNavBar from './components/elements/mainNavBar/MainNavBar';
import SubNav from './components/elements/subNav/SubNav';
// utils
import { onKeyDownBlurAll } from './utils/keybinds';
import { updateLoginStatus } from './redux/actions/AuthActions';
// styling
import './App.css';
import { fixedHeight } from './components/utils/styleFxns';
// seed
import { profile } from './seed/testAuthProfile';

// main
const App = () => {
  // init hooks
  const dispatch = useDispatch();
  const appRef = useRef(null);
  // state
  const isTestMode = useSelector(s => s.auth.isTestMode);
  const isDarkMode = useSelector(s => s.view.isDarkMode);
  document.addEventListener('keydown', onKeyDownBlurAll, false);
  // style
  /** @type {React.CSSProperties} */
  const style = {
    justifyContent: `start`,
  };
  // effects
  // load the state for the activeprofile
  useEffect(() => {
    // load
    if (isTestMode) {
      dispatch(updateLoginStatus(true, profile));
    }
  }, []);

  return (
    <div
      className={`App w100 flexcol ${isDarkMode}`}
      style={{
        ...style,
        ...fixedHeight(100, 'vh'),
        flexFlow: `start`,
      }}
      ref={appRef}
    >
      <MainNavBar />
      <SubNav />
      <div
        className="w100 flexcol f1"
        style={{
          justifyContent: `start`,
        }}
      >
        <PageRouter />
        <div className="footer w100">Footer</div>
      </div>
    </div>
  );
};

// export
export default App;
