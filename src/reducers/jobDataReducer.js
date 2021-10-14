import types from "../actions/types.js";

const jobDataReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_JOB_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default jobDataReducer;
