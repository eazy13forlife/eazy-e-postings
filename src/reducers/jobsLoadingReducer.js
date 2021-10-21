import types from "../actions/types.js";

const jobsLoadingReducer = (state = null, action) => {
  switch (action.type) {
    case types.LOAD_JOBS:
      return action.payload;
    default:
      return state;
  }
};

export default jobsLoadingReducer;
