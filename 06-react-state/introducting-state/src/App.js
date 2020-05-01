import React from 'react';
import './App.css';

import Game from './Game';
import Game2 from './Game2';
import Demo from './Demo';
import Rando from './Rando';

function App() {
  return (
    <div className="App">
      <Rando maxNum={7} />
    </div>
  );
}

export default App;
