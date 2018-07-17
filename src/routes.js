import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import Post from "./components/post_index";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Post} />
  </Route>

  // "/" refers to google.com/
);
