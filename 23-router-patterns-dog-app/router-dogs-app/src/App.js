import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import NavBar from './Navbar';
import Dogs from './Dogs';
import Dog from './Dog';
import './App.css';
import hazelImg from './imgs/hazel.jpg';
import tubbyImg from './imgs/tubby.jpg';
import whiskeyImg from './imgs/whiskey.jpg';



class App extends Component {

  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskeyImg,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazelImg,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubbyImg,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {

    const renderEachDog = this.props.dogs.map(dog =>
      <Route exact path={`/${dog.name}`} render={(routeProps) => <Dog {...routeProps} data={dog} key={uuid()}/>} />
    );

    return (
      <div className="App">
        <NavBar links={this.props.dogs}/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dogs" />
          </Route>
          <Route exact path="/dogs" render={(routeProps) => <Dogs {...routeProps} data={this.props.dogs} key={uuid()}/>} />
          {renderEachDog}
        </Switch>
      </div>
    );
  }

}

export default App;
