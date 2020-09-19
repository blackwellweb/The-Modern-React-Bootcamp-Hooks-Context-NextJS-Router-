import Link from "next/link";


const Index = ({posts}) => {
    return (
        <div>
            <h1>Our Index Page!!</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post?id=${post.id}`}><a>{post.title}</a></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};



/**
 * Don't use getInitialProps
 * Recommended: getStaticProps or getServerSideProps.
 * These new data fetching methods allow you to have a granular choice 
 * between static generation and server-side rendering. Learn more on 
 * the documentation for Pages and Data fetching.
 */

// Index.getInitialProps = async (ctx) => {

//     // The Next.js example, colts example didn't work (lesson: 296. Fetching Posts w/ getInitialProps)
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();

//     return { posts: data };

// }


/**
 * This gets called on every request
 * THIS WILL BE SERVER SIDE!!: use getStaticProps if you want 
 * to make a request client side
 */
export async function getServerSideProps() {

    // Fetch data from external API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // Pass data to the page via props
    return { props: {posts: data }};
}
  

  export default Index;