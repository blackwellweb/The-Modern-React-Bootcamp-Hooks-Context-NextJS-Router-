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