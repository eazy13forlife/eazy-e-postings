import types from "../actions/types.js";

const jobSelectedReducer = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_JOB:
      return action.payload;
    case types.CLEAR_JOB_SELECTED:
      return null;
    default:
      return state;
  }
};

export default jobSelectedReducer;
