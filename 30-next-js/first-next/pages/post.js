


/**
 * If you don't want to use  getServerSideProps or 
 * getStaticProps you can use withRouter
 * THIS WILL NOT BE RAIN SERVER SIDE!! (use getServerSideProps  for that)
 */

// import { withRouter } from 'next/router';

// const Post = withRouter((props) => {
//     const { id } = props.router.query;
//     return (
//         <h1>Post Page # {id}</h1>
//     );
// });



const Post = (props) => {
    const {id} = props.query;
    return (
    <h1>Post Page # {id}</h1>
    );
};


// This gets called on every request
export async function getServerSideProps({query}) {
    return { props: { query }};
}


export default Post;