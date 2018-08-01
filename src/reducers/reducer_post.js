import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";
import _ from "lodash";

//const INITIAL_STATE = { all: [], post: null };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };
    //Key Interpolation is Done above;
    case FETCH_POSTS:
      //return { ...state, all: action.payload.data };
      return _.mapKeys(action.payload.data, "id");

    case DELETE_POST:
      //return { ...state, all: action.payload.data };
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
