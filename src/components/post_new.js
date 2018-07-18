import React, { Component } from "react";
import { reduxForm } from "redux-form"; // IDentical to connect Function of Redux

class PostNew extends Component {
  render() {
    const {
      fields: { title, categories, content },
      handleSubmit
    } = this.props;

    console.log(title);
    return (
      <form onSubmit={handleSubmit}>
        <h3> Create A New Post</h3>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Content</label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm", // A UNique Token , name can be mutable
  fields: ["title", "categories ", "content"]
})(PostNew);
