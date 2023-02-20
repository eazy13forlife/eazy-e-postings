import types from "./types.js";
import countryCodes from "../countryCodes.js";

// make sure country code is valid, otherwise just return u.s.a
const checkCountryCode = (code) => {
  let newCode = code.toLowerCase();

  if (!countryCodes.includes(newCode)) {
    newCode = "us";
  }

  return newCode;
};

const updateSearchParam = (param, value) => {
  let updatedValue = value;

  if (param === "country") {
    updatedValue = checkCountryCode(updatedValue);
  }

  return {
    type: types.UPDATE_SEARCH_PARAM,
    payload: {
      param,
      value: updatedValue,
    },
  };
};

const updateAllSearchParams = (paramsObj) => {
  return {
    type: types.UPDATE_ALL_SEARCH_PARAMS,
    payload: paramsObj,
  };
};

export { updateSearchParam, updateAllSearchParams };
