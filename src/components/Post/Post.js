import React from "react";
import "./Post.css";

const Post = (props) => (
	<div className="row p-2">
			<div className="col-md-8 offset-md-2 offset-md-right-2 p-2 post">
			<h2 className="post-title">{props.postTitle}</h2>
	  	<img src={props.postPicUrl} alt={props.postTitle} />
	  </div>
  </div>
);

export default Post;