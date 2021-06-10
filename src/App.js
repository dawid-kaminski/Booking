import './App.css';
import Header from './header/Header.js';
import Main from './main/Main.js';
import MessagePin from './message/MessagePin.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="router">
      <Router>
        <div className="main-placement">
          <Main />
        </div>
        <MessagePin />
      </Router>
    </div>
  );
}

export default App;
