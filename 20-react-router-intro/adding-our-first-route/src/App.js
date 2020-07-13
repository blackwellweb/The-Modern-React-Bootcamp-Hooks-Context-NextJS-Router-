import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

import './App.css';


const Hater = () => <h1>I absolutely hate dogs!</h1>

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dog" component={Dog} />
        <Route exact path="/dog/hater" component={Hater} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
