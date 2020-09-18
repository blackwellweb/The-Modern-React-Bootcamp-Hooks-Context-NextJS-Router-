
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
    }

    static async getInitialProps(ctx) {
        const res = await fetch('https://api.github.com/repos/vercel/next.js');
        const json = await res.json();
        console.log(json);
        return { stars: json.stargazers_count };
    }


    render() {
        return (
            <div>
                <h1>this is the index page</h1>
            </div>
        );
    }
}

export default Index;