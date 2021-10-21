import types from "../actions/types.js";

const sortedJobDataReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_JOB_DATA:
      return action.payload;
    case types.SORT_BY_DATE:
      return action.payload;
    case types.SORT_BY_MAX_SALARY:
      return action.payload;
    case types.GET_UNSORTED_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default sortedJobDataReducer;
