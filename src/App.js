import './App.css';
import Main from './main/Main.js';
import MessagePin from './pins/MessagePin.js';
import SocialMedia from './pins/SocialMedia.js'
import Searchbar from './searchbar/Searchbar.js'

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
        <Main />
      </Router>
      <SocialMedia />
      <MessagePin />
      <Searchbar />
    </div>
  );
}

export default App;
