


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
    const { id, comments } = props;
    return (
        <div>
            <h1>Post Page #{id}</h1>
            {comments.map(comment => (
                <Comment {...comment} key={comment.id}/>
            ))}
        </div>
    );
};


// This could be its own component
const Comment = ({ email, body }) => (
    <div>
        <h5>{email}</h5>
        <p>{body}</p>
    </div>
)



// This gets called on every request
export async function getServerSideProps({ query }) {

    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { ...query, comments: data } };
}


export default Post;