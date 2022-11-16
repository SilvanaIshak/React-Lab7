const PostDetails = (props) => {
    return (
        <div className="postDetails">
            <p className="title"> {props.postDetails.title}</p>
            <p>{props.postDetails.author}</p>
            <p>This is the post details...</p>
            <button>Edit</button>
      <button>Delete</button>
        </div>
    );
};

export default PostDetails