import { combineReducers } from "redux";
import PostsReducer from "./reducer_post";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer // Very Important Part to assign it to Key form.
});

export default rootReducer;
