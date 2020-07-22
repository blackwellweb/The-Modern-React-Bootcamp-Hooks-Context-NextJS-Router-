import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBAr from './Navbar';
import Dogs from './Dogs';
import './App.css';


class App extends Component {

  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: 'imgs/whiskey.jpg',
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: 'imgs/hazel.jpg',
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: 'imgs/tubby.jpg',
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {




    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/dogs" /> 
          </Route>
          <Route exact path="/dogs" render={(routeProps) => <Dogs {...routeProps} data={this.props.dogs}/>} />
        </Switch>
      </div>
    );
  }

}

export default App;
