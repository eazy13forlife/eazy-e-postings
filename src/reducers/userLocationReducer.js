import types from "../actions/types.js";

const userLocationReducer = (state = "", action) => {
  switch (action.type) {
    case types.FETCH_USER_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default userLocationReducer;
