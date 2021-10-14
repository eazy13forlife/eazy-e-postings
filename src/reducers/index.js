import { combineReducers } from "redux";

import searchParamsReducer from "./searchParamsReducer.js";
import jobDataReducer from "./jobDataReducer.js";
import userLocationReducer from "./userLocationReducer.js";

export default combineReducers({
  searchParams: searchParamsReducer,
  jobData: jobDataReducer,
  userLocation: userLocationReducer,
});
