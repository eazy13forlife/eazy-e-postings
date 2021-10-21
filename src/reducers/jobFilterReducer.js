import types from "../actions/types.js";

const jobFilterReducer = (state = null, action) => {
  switch (action.type) {
    case types.TURN_ON_FILTER:
      return action.payload;
    case types.TURN_OFF_FILTER:
      return null;
    default:
      return state;
  }
};

export default jobFilterReducer;
