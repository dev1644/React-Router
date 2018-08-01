import React, { Component } from "react";
import { Field, reduxForm } from "redux-form"; // IDentical to connect Function of Redux
import { Link } from "react-router-dom";
import { createPost } from "../actions";
import { connect } from "react-redux";

class PostNew extends Component {
  renderField = field => {
    const {
      meta: { touched, error },
      input,
      label
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input className="form-control" {...input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  };

  onSubmit = values => {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3> Create A New Post</h3>

        {/* <label>Title</label> */}
        <Field
          name="title"
          label="Title For Post"
          component={this.renderField}
        />

        {/* <label>Categories</label> */}
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />

        {/*   */}
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

// connect: First Argument is MapStatetoPROPS and Second is mapDispatchToProps
//ReduxForm: 1st is form Config , 2nd  is mapStateToProps, third is mApDispatchtoProps

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a username";
  }
  if (!values.categories) {
    errors.categories = "Enter a Categories";
  }

  if (!values.content) {
    errors.content = "Enter a Content";
    // Add a property to error object with a key(that matches Field name)
  }

  return errors;
};

export default reduxForm({
  validate,
  form: "PostsNewForm" // A UNique Token , name can be mutable
})(
  connect(
    null,
    { createPost }
  )(PostNew)
);
