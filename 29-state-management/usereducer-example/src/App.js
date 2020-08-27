import React, { useReducer } from 'react';
import './App.css';


function reducer(state, action) {
  if (action.type === "INCREMENT") return { count: state.count + action.amount };
  if (action.type === "DECREMENT") return { count: state.count - action.amount };
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}>Add 1</button>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 5 })}>Add 5</button>
      <button onClick={() => dispatch({ type: "DECREMENT", amount: 1 })}>Subtract 1</button>
    </div>
  );
}

export default App;
