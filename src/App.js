import './App.css';
import Main from './main/Main.js';
import MessagePin from './pins/MessagePin.js';
import SocialMedia from './pins/SocialMedia.js';
import Searchbar from './searchbar/Searchbar.js';
import FeaturedRent from './featuredRent/FeaturedRent.js';
import BestPlaces from './bestPlaces/BestPlaces.js';
import FeaturedProperties from './featuredProperties/FeaturedProperties.js';
import Article from './article/Article.js';
import TypeList from './rentTypeList/TypeList.js';

import * as reactRouterDom from 'react-router-dom';

function App() {
  document.addEventListener('scroll', () => {
    console.log(document.scrollY);
  });

  return (
    <div className="router">
      <reactRouterDom.BrowserRouter>
        <Main />
        <FeaturedRent />
        <BestPlaces />
        <FeaturedProperties />
        <Article />
        <TypeList />
      </reactRouterDom.BrowserRouter>
      <SocialMedia />
      <MessagePin />
      <Searchbar />
    </div>
  );
}

export default App;
