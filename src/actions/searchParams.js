import types from "./types.js";
import countryCodes from "../countryCodes.js";

const updateSearchParam = (param, value) => {
  return {
    type: types.UPDATE_SEARCH_PARAM,
    payload: {
      param,
      value,
    },
  };
};

const updateCountryCode = (code) => {
  code = code.toLowerCase();
  let value;
  if (countryCodes.includes(code)) {
    value = code;
    //if we don't have access to user's countyCode, use usa.
  } else {
    value = "us";
  }
  return {
    type: types.UPDATE_COUNTRY_CODE,
    payload: {
      param: "country",
      value: value,
    },
  };
};

export { updateSearchParam, updateCountryCode };
