import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentWillMount() {
    console.log("I am Running");
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  };
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h3> List of Blog Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post.
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  {
    fetchPosts
  }
)(PostsIndex);
