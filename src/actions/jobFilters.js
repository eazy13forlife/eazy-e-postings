import types from "./types.js";

const turnOnFilter = (filterName) => {
  return {
    type: types.TURN_ON_FILTER,
    payload: filterName,
  };
};

const turnOffFilter = () => {
  return {
    type: types.TURN_OFF_FILTER,
  };
};

export { turnOnFilter, turnOffFilter };
