
// const Index = () => {
//     console.log('Im the Index component');
//     return (
//         <div>
//             <h1>Our Index Page!!</h1>
//         </div>
//     )
// };

import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        console.log('Fetching your data in constructor');
    }

    // componentDidMount() {
    //     console.log('Fetching your data in componentDidMount');
    // }

    render() {
        return (
            <div>
                <h1>this is the index page</h1>
            </div>
        );
    }
}

export default Index;