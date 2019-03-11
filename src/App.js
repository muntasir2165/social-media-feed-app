import React, { Component } from 'react';
import './App.css';
import InputForm from "./components/InputForm";
import PostListing from "./components/PostListing";

class App extends Component {
  // Setting the component's initial state
  state = {
    feed: []
  };

  handleNewPost = post => {
    this.setState( currentState => ({
      feed: [...currentState.feed, [post.postPicUrl, post.postTitle]]
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Social Media Feed App</h1>
        <InputForm newPostHandler={this.handleNewPost}/>
        <PostListing posts={this.state.feed} />
      </div>
    );
  }
}

export default App;
