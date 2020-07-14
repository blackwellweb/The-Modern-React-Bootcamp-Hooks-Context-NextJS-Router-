import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
          <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
          <NavLink exact activeClassName="active-link" to="/soda">Soda</NavLink>
          <NavLink exact activeClassName="active-link" to="/chips">Chips</NavLink>
          <NavLink exact activeClassName="active-link" to="/sardines">Sardines</NavLink>
      </nav>


      <Switch>
        <Route exact path="/" render={() => <VendingMachine/>}/>
        <Route exact path="/soda" render={() => <Snack name="soda" />}/>
        <Route exact path="/chips" render={() => <Snack name="chips" />}/>
        <Route exact path="/sardines" render={() => <Snack name="sardines" />}/>
      </Switch>
    </div>
  );
}

export default App;
