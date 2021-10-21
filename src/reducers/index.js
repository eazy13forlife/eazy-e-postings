import { combineReducers } from "redux";

import searchParamsReducer from "./searchParamsReducer.js";
import jobDataReducer from "./jobDataReducer.js";
import userLocationReducer from "./userLocationReducer.js";
import jobsLoadingReducer from "./jobsLoadingReducer.js";
import sortedJobDataReducer from "./sortedJobDataReducer.js";
import jobFilterReducer from "./jobFilterReducer.js";

export default combineReducers({
  searchParams: searchParamsReducer,
  jobData: jobDataReducer,
  userLocation: userLocationReducer,
  jobsLoading: jobsLoadingReducer,
  sortedJobData: sortedJobDataReducer,
  jobFilter: jobFilterReducer,
});
