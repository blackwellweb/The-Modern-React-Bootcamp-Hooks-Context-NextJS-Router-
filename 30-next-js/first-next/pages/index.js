import axios from 'axios';


// import React, { Component } from 'react';
// class Index extends Component {
//     constructor(props) {
//         super(props);
//     }

//     static async getInitialProps(ctx) {
//         const res = await fetch('https://api.github.com/repos/vercel/next.js');
//         const json = await res.json();
//         console.log(json);
//         return { stars: json.stargazers_count };
//     }


//     render() {
//         return (
//             <div>
//                 <h1>this is the index page</h1>
//             </div>
//         );
//     }
// }

// export default Index;



const Index = ({posts}) => {
    return (
        <div>
            <h1>Our Index Page!!</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
};

Index.getInitialProps = async (ctx) => {

    // The Next.js example, colts example didn't work (lesson: 296. Fetching Posts w/ getInitialProps)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return { posts: data };

}



export default Index;