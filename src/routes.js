import React from "react";
import { BrowserRouter, IndexRoute, Switch, Route } from "react-router-dom";

import App from "./components/app";
import Post from "./components/post_index";
import PostNew from "./components/post_new";
import PostShow from "./components/post_show";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="posts/new" component={PostNew} />
      <Route path="posts/:id" component={PostShow} />
      <Route path="/" component={App}>
        <IndexRoute component={Post} />
      </Route>
    </Switch>
  </BrowserRouter>

  // "/" refers to google.com/
);
