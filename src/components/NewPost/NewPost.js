import { useState } from "react";
import './NewPost.css';



const NewPost = (props) => {

    // const something = <h1> Something</h1>;
    // const [x, setX] =useState(5)

    // const valueHandler = () => {
    //     setX(x+1);
    //}

    return (
        <div className="NewPost">

            <h1>Add a Post</h1>

            <label>Name</label>
            <input type="text"
                label={'name'}
                name={'name'}
                onChange={props.onChange}
                value={props.name}
            />
            <label>Price</label>
            <input type="text"
                label={'price'}
                name={'price'}
                onChange={props.onChange}
                value={props.price}
            />

            <button onClick={props.addButtonClicked}>Add Product </button>

            <label> Value:  {x}  </label>
            <button onClick={valueHandler} > Change Value </button>


        </div>
    );

}

export default NewPost;