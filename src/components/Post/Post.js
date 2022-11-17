// import { useContext } from 'react';
// import { APIConfig } from '../../App';
import './Post.css'

const Post = (props) => {
    //     const context = useContext(APIConfig)
    return (
        <div className="Content" onClick={() => props.display(props)}>
            <h5> {props.id}</h5>
            <h5> {props.title}</h5>
            <div className="Field">
                {props.author}
            </div>
        </div>
    );

};
export default Post;

