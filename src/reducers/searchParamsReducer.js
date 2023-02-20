import types from "../actions/types.js";
import defaultSearchInfo from "../general/defaultSearchInfo";

const searchParamsReducer = (state = defaultSearchInfo, action) => {
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
