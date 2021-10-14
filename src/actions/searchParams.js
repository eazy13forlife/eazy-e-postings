import types from "./types.js";

const updateSearchParam = (param, value) => {
  return {
    type: types.UPDATE_SEARCH_PARAM,
    payload: {
      param,
      value,
    },
  };
};

export { updateSearchParam };
