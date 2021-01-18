// react
import {Switch, Route} from 'react-router-dom';
// components
import Home from './components/pages/home/Home';
import MainNavBar from './components/elements/MainNavBar';
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
    display: `flex`,
    flexFlow: `column`,
  };

  return (
    <div className="App h100 w100" style={style} >
      <MainNavBar />
      <Switch>
        <Route exact path="/" render={p => <Home props={p} />} />
      </Switch>
    </div>
  );
}

// export
export default App;
