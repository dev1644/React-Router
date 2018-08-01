import React, { Component } from "react";
import { fetchPost, deletePost } from "../actions/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class PostShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  };
  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back to Posts</Link>
        <button
          style={{ marginTop: "10px" }}
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories{post.category}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  //First Argument Application State ,2nd Argument is OwnProps
  //OWn Props is the head obejct that is going to component here this.props  (of component)
  //is equal to ownprops.
  return { post: posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  {
    fetchPost,
    deletePost
  }
)(PostShow);
