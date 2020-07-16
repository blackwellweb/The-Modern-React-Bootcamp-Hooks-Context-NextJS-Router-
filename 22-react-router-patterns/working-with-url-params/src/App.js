import React from 'react';
import { Route } from 'react-router-dom';
import Food from './Food';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* {...routeProps} will extract the items match, location and history and pass them down as three separate props to our Food component  */}
      <Route exact path="/food/:name" render={(routeProps) => <Food {...routeProps} />} /> 

      {/* this will do the same as above but you will not be able to pass in additional props for example component={Food, authenticated="true"} will NOT work*/}
      {/* <Route exact path="/food/:name" component={Food} />  */}
    </div>
  );
}

export default App;
