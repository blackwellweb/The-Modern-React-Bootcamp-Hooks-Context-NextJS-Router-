import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/dog" component={Dog}/>
    </div>
  );
}

export default App;
