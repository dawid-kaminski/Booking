import './App.css';
import Main from './main/Main.js';
import MessagePin from './pins/MessagePin.js';
import SocialMedia from './pins/SocialMedia.js'
import Searchbar from './searchbar/Searchbar.js'
import FeaturedRent from './featuredRent/FeaturedRent.js'
import BestPlaces from './bestPlaces/BestPlaces.js'
import FeaturedProperties from './featuredProperties/FeaturedProperties.js'
import Article from './article/Article.js'
import TypeList from './rentTypeList/TypeList.js'

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
        <FeaturedRent />
        < BestPlaces />
        <FeaturedProperties />
        <Article />
        <TypeList />
      </Router>
      <SocialMedia />
      <MessagePin />
      <Searchbar />
    </div>
  );
}

export default App;
