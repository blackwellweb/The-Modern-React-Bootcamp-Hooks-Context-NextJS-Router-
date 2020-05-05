import React, { Component } from 'react'

class BrokenClick extends Component {
    state = { clicked: false }

    // this.handleClick = this.handleClick.bind(this); // Setting the context of handleClick by binding this

    // The arrow function will bind handleClick automatically to the instance of this component 
    // Just like we did it explicitly in the constructor, we it will do it automatically instead 
    handleClick = e => {
        this.setState({ clicked: true });
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default BrokenClick;