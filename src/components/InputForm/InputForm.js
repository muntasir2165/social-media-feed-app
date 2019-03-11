import React, { Component } from 'react';
import "./InputForm.css";

class InputForm extends Component {
  // Setting the component's initial state
  state = {
    postPicUrl: "",
    postTitle: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Update the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // console.log(this.state.postPicUrl + " " + this.state.postTitle);
    this.props.newPostHandler({postPicUrl: this.state.postPicUrl, postTitle: this.state.postTitle});

    this.setState({
      postPicUrl: "",
      postTitle: ""
    });
  };

  render() {
    return (
      <div className="row p-2">
        <div className="col-md-8 offset-md-2 offset-md-right-2">
          <form>
            <div className="form-group">
              <input value={this.state.postPicUrl} name="postPicUrl" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Enter URL" />
            </div>
            <div className="form-group row">
              <div className="col-md-10">
                <input value={this.state.postTitle} name="postTitle" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Title" />
              </div>
              <div className="col-md-2">
                <button onClick={this.handleFormSubmit} className="btn btn-primary">New Post</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default InputForm;
