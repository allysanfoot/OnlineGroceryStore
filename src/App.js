
// import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import data
import stores from './data/stores';
import items from './data/items';

// import styles and images
import './App.css';

// import components
import Navigation from './components/Nav';

// import pages
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StoresPage from './pages/StoresPage';
import SiteDate from './components/Date';


function App() {  

  return (
    <div>
      <Router>
        {/* style the following header */}
        <header>
          <h1>General Online Grocery Store</h1>
          <p><i>A Node, Express, and React App demonstration</i></p>
          <p>We're an online grocery store. Except you can't actually buy jack offa here, so. There you have it. Enjoy.</p>
        </header>
        <Navigation />
        <main>
          <article>
            <Route path="/" exact><HomePage /></Route>
            <Route path="/order"><OrderPage items={items} /></Route>
            <Route path="/stores"><StoresPage stores={stores} /></Route>
          </article>
        </main>
        <footer>
          <p>Last updated on {Date()}. <cite>&copy; 2022 Allysa Foot</cite></p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
