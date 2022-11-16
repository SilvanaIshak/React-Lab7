import Posts from "../Posts/Posts";
import { useState } from 'react';
import PostDetails from "../../components/PostDetails/PostDetails";
//import NewProduct from "../../components/NewProduct/NewProduct";

    const Dashboard = () => {
   
    const [postsState, setPostsState] = useState(
        [
            { id: 111, title: "Happiness", author: "John" },
            { id: 112, title: "MIU", author: "Dean" },
            { id: 113, title: "Enjoy Life", author: "Jasmine" }
        ]
    );

    const [postState, setPostState] = useState(
        {
            title: "",
            author: ""
        }
    )


    const [postDetails, setPostDetails] = useState([
        { id: "", title: "", author: "" },
      ]);
    
    const [flag, setFlag] = useState("false");


    const displayDetails = (id) => {
        const selected = Posts.find((e) => e.id === id);
        setPostDetails(selected);
        setFlag("true");
      };

    // const onChange = (events) => {
    //     const updatedPost = { ...postState, [events.target.title]: events.target.value };
    //     setPostState(updatedPost);
    // }

    const [title, setTitle] = useState("");

    const changeName = (event) => {
      const copyPosts = [...Posts];
      copyPosts[0].title = title;
      setPostState(copyPosts);
    };



    return (
        <div >
            {/* <Product name={productsState[0].name} price={productsState[0].price} />
            <Product name={productsState[1].name} price={productsState[1].price} /> */}
            <div className="Post">
                <Posts posts={postsState} />
            </div>

            <div>
        <input
          type="text"
          title="title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button onClick={changeName}> Change title </button>
      </div>
      {flag && <PostDetails postDetails={postDetails} />}

            {/* <div >
                <NewPost
                    title={postState.name}
                    author={postState.price}
                    onChange={(event) => { onChange(event) }}
                    addButtonClicked={addButtonClicked}
                />
            </div> */}
        </div>
    )

};  
export default Dashboard;