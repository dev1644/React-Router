import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import Post from "./components/post_index";
import PostNew from "./components/post_new";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Post} />
    <Route path="posts/new" component={PostNew} />
  </Route>

  // "/" refers to google.com/
);
