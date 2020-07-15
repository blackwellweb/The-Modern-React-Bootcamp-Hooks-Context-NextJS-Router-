import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <VendingMachine />} />
        <Route exact path='/chips' render={() => <Chips />} />
        <Route exact path='/sardines' render={() => <Sardines />} />
        <Route exact path='/soda' render={() => <Soda />} />
      </Switch>
    </div>
  );
}

export default App;
