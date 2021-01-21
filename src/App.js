// react
import {useRef, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
// components
import Home from './components/pages/home/Home';
import MainNavBar from './components/elements/mainNavBar/MainNavBar';
import NotFound from './components/pages/home/NotFound';
import LoginForm from './components/pages/home/LoginForm';
import RegisterForm from './components/pages/home/RegisterForm';
// utils
import {onKeyDownBlurAll} from './utils/keybinds';
// styling
import './App.css';
import { fixedHeight } from './components/utils/styleFxns';

// main
const App = () => {
  document.addEventListener('keydown', onKeyDownBlurAll, false)
  // style
  /**@type {React.CSSProperties} */
  const style = {
    justifyContent: `start`,
    opacity: 0,
    transition: `opacity 0.3s ease-out`,
    // WebkitTransition: `all 3s ease-out`,
  };
  const testRef = useRef(null);
  useEffect(() => {
    testRef.current.style.opacity = 1;
    return () => {};
  }, []);

  return (
    <div
      className="App w100 flexcol darkmode"
      style={{
        ...style,
        ...fixedHeight(100, 'vh'),
      }}
      ref={testRef}
    >
      <MainNavBar />
      <div
        className="flexcol w100 f1"
        style={{
          overflow: `scroll`,
          justifyContent: "space-between",
          alignItems: "space-between",
        }}
      >
        <Switch>
          <Route exact path="/login" render={p => <LoginForm props={p} />} />
          <Route exact path="/register" render={p => <RegisterForm props={p} />} />
          <Route exact path="/" render={p => <Home props={p} />} />
          <Route path="/" render={p => <NotFound props={p} />} />
        </Switch>
        <div className="footer w100" style={{padding: `20px`, backgroundColor: `grey`}} ></div>
      </div>
    </div>
  );
}

// export
export default App;
