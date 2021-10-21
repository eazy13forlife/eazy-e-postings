import types from "./types.js";

const sortJobData = () => {
  return async (dispatch, getState) => {
    const jobFilters = getState().jobFilters;
    const filterSelected = findFilterSelected(jobFilters); //return the name of filter selected
    if (filterSelected === "sort_date") {
      dispatch(sortByDate());
    }
  };
};

const sortByDate = () => {
  return async (dispatch, getState) => {
    const jobData = getState().jobData;
    const newJobData = [...jobData];
    newJobData.sort((a, b) => {
      if (a.created > b.created) {
        return -1;
      } else if (b.created > a.created) {
        return 1;
      } else {
        return 0;
      }
    });
    dispatch({
      type: types.SORT_BY_DATE,
      payload: newJobData,
    });
  };
};

const getUnsortedData = () => {
  return async (dispatch, getState) => {
    const jobData = getState().jobData;
    dispatch({
      type: types.GET_UNSORTED_DATA,
      payload: jobData,
    });
  };
};

const findFilterSelected = (filtersObject) => {
  const allFilters = Object.keys(filtersObject);
  for (let i = 0; i < allFilters.length; i++) {
    const filter = allFilters[i];
    const value = filtersObject[filter];
    if (value === true) {
      return filter;
    }
  }
  return null;
};

export { sortJobData, sortByDate, getUnsortedData };
