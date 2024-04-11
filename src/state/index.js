// // rootReducer.js

import { combineReducers } from "redux";
import authReducer from "./userSlice";
import toastReducer from "./toastSlice";
import modeReducer from "./modeSlice";
import postsReducer from "./postSlice";
import projectsReducer from "./projectSlice";

const rootReducer = combineReducers({
  toast: toastReducer,
  auth: authReducer,
  mode: modeReducer,
  projects: projectsReducer,
  posts: postsReducer,
});

export default rootReducer;
