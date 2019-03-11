import React, { Component } from 'react';
import './App.css';

import InputForm from "./components/InputForm";


class App extends Component {
  // Setting the component's initial state
  state = {
    feed: []
  };

  handleNewPost = post => {
    console.log("Inside handleNewPost in App.js!!!");
    console.log(post);
    this.setState( currentState => ({
      feed: [...currentState.feed, [post.postPicUrl, post.postTitle]]
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Social Media Feed App</h1>
        <InputForm newPostHandler={this.handleNewPost}/>
      </div>
    );
  }
}

export default App;
