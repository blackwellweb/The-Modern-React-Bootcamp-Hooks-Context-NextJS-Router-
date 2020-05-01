import React from 'react';
import './App.css';

import Game from './Game';
import Game2 from './Game2';
import Demo from './Demo';

function App() {
  return (
    <div className="App">
      <Game />
      <Game2 />
      <Demo animal="Bobcat" food="Pineapple" />
    </div>
  );
}

export default App;
