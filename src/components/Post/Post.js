import './Post.css'
const Post = (props) => {

    return (
        <div className="Content" onClick={ () => props.display(props.id)}>
            <h5> {props.id}</h5>
            <h5> {props.title}</h5>
            <div className="Field">
                {props.author}
            </div>
        </div>
    );
}

export default Post;

