import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router";

class PostsIndex extends Component {
  componentWillMount() {
    console.log("I am Running");
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post.
          </Link>
        </div>
        List of Blog Posts
      </div>
    );
  }
}

// const mapStateToProps = dispatch => {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }; // Refactoring

export default connect(
  null,
  {
    fetchPosts
  }
)(PostsIndex);
