import { combineReducers } from "redux";

import searchParamsReducer from "./searchParamsReducer.js";
import jobDataReducer from "./jobDataReducer.js";
import userLocationReducer from "./userLocationReducer.js";
import jobsLoadingReducer from "./jobsLoadingReducer.js";
import sortedJobDataReducer from "./sortedJobDataReducer.js";
import jobFiltersReducer from "./jobFiltersReducer.js";

export default combineReducers({
  searchParams: searchParamsReducer,
  jobData: jobDataReducer,
  userLocation: userLocationReducer,
  jobsLoading: jobsLoadingReducer,
  sortedJobData: sortedJobDataReducer,
  jobFilters: jobFiltersReducer,
});
