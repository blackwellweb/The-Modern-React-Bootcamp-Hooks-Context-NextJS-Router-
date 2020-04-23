
import React from 'react';
import ReactDOM from 'react-dom';

import fruits from './foods';

console.log(fruits);

class App extends React.Component {
    render(){
      return (
        <div>
          <p>Check the console</p>
        </div>
      )
    }
  }



ReactDOM.render(<App />,document.getElementById('root'));
  