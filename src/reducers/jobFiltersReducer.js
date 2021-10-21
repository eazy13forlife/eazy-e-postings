import types from "../actions/types.js";

const jobFilters = {
  sort_date: false,
};

const jobFiltersReducer = (state = jobFilters, action) => {
  switch (action.type) {
    case types.TURN_ON_FILTER:
      return { ...state, [action.payload]: true };
    case types.TURN_OFF_FILTER:
      return { ...state, [action.payload]: false };
    default:
      return state;
  }
};

export default jobFiltersReducer;
