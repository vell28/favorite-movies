import { combineReducers } from "redux";

import AllPosts from "./data";
import SingleMovie from './singleMovie';

export default combineReducers({
  AllPosts,
  SingleMovie
});