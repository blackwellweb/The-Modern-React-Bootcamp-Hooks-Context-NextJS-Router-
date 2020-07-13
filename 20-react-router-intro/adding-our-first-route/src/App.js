import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

import './App.css';


const Hater = () => <h1>I absolutely hate dogs!</h1>

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Link to="/">About</Link>
        <Link to="/dog">Dog</Link>
        <Link to="/contact">Contact</Link>


        {/* We don’t use the ‘a’ tag because we it will send a GET request to the server re-loading the page so un-link Link with will load in the Data client side  */}
        {/* <a href='/'>About</a>
        <a href='/dog'>Dog</a>
        <a href='/contact'>Contact</a> */}

      </nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/dog" component={Dog} />
        <Route exact path="/dog/hater" component={Hater} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
