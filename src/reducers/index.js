// index.js

import { combineReducers } from "redux";
import teams from "./teamReducer";

export default combineReducers({
  teams: teams
});
