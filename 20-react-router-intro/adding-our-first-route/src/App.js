import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

import './App.css';


const Hater = () => <h1>I absolutely hate dogs!</h1>

function App() {
  return (
    <div className="App">
      <nav className="App-nav">


        {/* <NavLink> is just like link, but with one additional feature, if at a page that link would go to the <a> gets a CSS class of active  */}
        <NavLink exact activeClassName="active-link" to="/">About</NavLink>
        <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
        <NavLink exact activeClassName="active-link" to="/dog/r">Dog(r)</NavLink>
        <NavLink exact activeClassName="active-link" to="/dog/c">Dog(c)</NavLink>
        <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>


        {/* <Link to="/">About</Link>
        <Link to="/dog">Dog</Link>
        <Link to="/contact">Contact</Link> */}


        {/* We DON'T use the ‘a’ tag because we it will send a GET request to the server re-loading the page so un-link Link with will load in the Data client side  */}
        {/* <a href='/'>About</a>
        <a href='/dog'>Dog</a>
        <a href='/contact'>Contact</a> */}

      </nav>
      <Switch>
        <Route exact path="/" component={About} />

        {/* NOTE: So the conclusion is, there is not performance different between component and render prop if you are use
         component={AppComponent} directly, if you want to assign some props to AppComponent, 
         use render={() => <AppComponent {...props}/> } instead of component={() => <AppComponent {...props}/> } 
         READ MORE: https://stackoverflow.com/questions/48150567/react-router-difference-between-component-and-render*/}

        <Route exact path="/dog/c" component={() => <Dog name='Muffins' />} /> {/* Component will instantiate a new dog every time */}
        <Route exact path="/dog/r" render={() => <Dog name='Biscuits' />} /> {/* Render will re-use the existing dog component */}
        <Route exact path="/dog/hater" component={Hater} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
