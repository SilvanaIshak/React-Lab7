import Post from "../../components/Post/Post"

const Posts = (props) => {

    const posts = props.posts.map(posts => {
        return <Post
            title={posts.title}
            author={posts.author}
            id={posts.id}
            key={posts.id}
            display={props.display}
        />
    });
    return posts;
}
export default Posts;