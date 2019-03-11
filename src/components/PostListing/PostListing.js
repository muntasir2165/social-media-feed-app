import React from "react";
import "./PostListing.css";
import Post from "../Post";

const PostListing = (props) => (
	<div>
		{props.posts.map((post, index) => {
	      return <Post postPicUrl={post[0]} postTitle={post[1]} key={index}/>
	    })}
  </div>
);

export default PostListing;