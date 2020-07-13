import React, { Component } from 'react';


class Dog extends Component {

    componentDidMount(){
        console.log('Dog did mount');
    }

    componentWillUnmount(){
        console.log('Dog will unmount');
    }

    render() {
        console.log('Dog render')
        return (
            <div className="Dog">
                <h1>Dog</h1>
                <h3>This Dog is named: {this.props.name}</h3>
            </div>
        )
    }
}

export default Dog;
