import types from "../actions/types.js";

const searchParams = {
  country: "us",
  what: "",
  company: "",
  where: "",
  salary_min: "",
  salary_max: "",
  full_time: "",
  part_time: "",
};

const searchParamsReducer = (state = searchParams, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_PARAM:
      return {
        ...state,
        [action.payload.param]: action.payload.value,
      };
    case types.UPDATE_ALL_SEARCH_PARAMS:
      return action.payload;
    default:
      return state;
  }
};

export default searchParamsReducer;
