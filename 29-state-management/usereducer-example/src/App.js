import React, { useReducer } from 'react';
import './App.css';


function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    case "RESET":
      return { count: 0 };
  }
}

function App() {
  const [state, dispatch] = countReducer(reducer, { count: 0 })
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}>Add 1</button>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 5 })}>Add 5</button>
      <button onClick={() => dispatch({ type: "DECREMENT", amount: 1 })}>Subtract 1</button>
      <button onClick={() => dispatch({ type: "RESET"})}>Reset</button>
    </div>
  );
}

export default App;


// (accumulatedValue, nextItem) => nextAccumulatedValue
// takes two values and "reduces" them down to one value

// In our case, the two values provided to a reducer are:
// - The current state
// - An action that (may) update the state

// (state, action) => newState 