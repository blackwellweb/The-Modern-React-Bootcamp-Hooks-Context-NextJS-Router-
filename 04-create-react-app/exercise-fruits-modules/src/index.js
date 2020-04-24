
import React from 'react';
import ReactDOM from 'react-dom';


import fruits from './foods';
import { choice, remove } from './helpers';


const randomFruit = choice(fruits);
console.log(`I’d like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`)
console.log('Delicious! May I have another?');

remove(fruits,randomFruit);
console.log(`I’m sorry, we’re all out. We have ${fruits.length} left.`);


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
  