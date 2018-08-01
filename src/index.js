import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//import Routes from "./routes";
import promise from "redux-promise"; // Connect Redux MiddleWare to Project.
import { BrowserRouter, IndexRoute, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import App from "./components/app";
import Post from "./components/post_index";
import PostNew from "./components/post_new";
import PostShow from "./components/post_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
