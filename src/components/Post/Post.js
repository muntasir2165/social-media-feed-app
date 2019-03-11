import React from "react";
import "./Post.css";

const Post = (props) => (
	<div className="row">
			<div className="col-md-8 offset-md-2 offset-md-right-2 p-2">
			<h2>{props.postTitle}</h2>
	  	<img src={props.postPicUrl} alt={props.postTitle} />
	  </div>
  </div>
);

export default Post;