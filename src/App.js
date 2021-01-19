// react
import {Switch, Route, Redirect} from 'react-router-dom';
// components
import Home from './components/pages/home/Home';
import MainNavBar from './components/elements/MainNavBar';
import NotFound from './components/pages/home/NotFound';
import LoginForm from './components/pages/home/LoginForm';
import RegisterForm from './components/pages/home/RegisterForm';
// utils
import {onKeyDownBlurAll} from './utils/keybinds';
// styling
import './App.css';

// main
const App = () => {
  document.addEventListener('keydown', onKeyDownBlurAll, false)
  // style
  /**@type {React.CSSProperties} */
  const style = {
    justifyContent: `space-between`,
  };

  return (
    <div className="App h100 w100 flexcol" style={style} >
      <MainNavBar />
      <Switch>
        <Route exact path="/login" render={p => <LoginForm props={p} />} />
        <Route exact path="/register" render={p => <RegisterForm props={p} />} />
        <Route exact path="/" render={p => <Home props={p} />} />
        <Route path="/" render={p => <NotFound props={p} />} />
      </Switch>
    </div>
  );
}

// export
export default App;
