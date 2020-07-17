import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FoodSearch from './FoodSearch';
import Food from './Food';
import Meal from './Meal';
import './App.css';


function App() {
  return (
    <div className="App">

      <Switch>

        <Route exact path="/" render={() => <FoodSearch />} />


        {/* {...routeProps} will extract the items match, location and history and pass them down as three separate props to our Food component  */}
        <Route exact path="/food/:name" render={(routeProps) => <Food {...routeProps} />} />

        {/* this will do the same as above but you will not be able to pass in additional props for example component={Food, authenticated="true"} will NOT work*/}
        {/* <Route exact path="/food/:name" component={Food} />  */}


        {/* Multiple Route Params */}
        <Route exact path='/food/:foodName/drink/:drinkName' render={(routeProps) => <Meal {...routeProps} />} />

        {/* 404 Page not Found */}
        <Route render={() => <h1>Error not found!!</h1>} />


      </Switch>

    </div>
  );
}

export default App;
