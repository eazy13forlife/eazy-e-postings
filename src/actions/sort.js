import types from "./types.js";

const sortJobData = () => {
  return async (dispatch, getState) => {
    const jobFilter = getState().jobFilter;

    switch (jobFilter) {
      case "sort_date":
        return dispatch(sortByDate());
      case "salary_max":
        return dispatch(sortByMaxSalary());
      default:
        return;
    }
  };
};

//sort from newest postings to latest postings
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

//sort from highest salary to lowest salary
const sortByMaxSalary = () => {
  return async (dispatch, getState) => {
    const jobData = getState().jobData;

    const newJobData = [...jobData];

    newJobData.sort((a, b) => {
      if (a.maxSalary > b.maxSalary) {
        return -1;
      } else if (b.maxSalary > a.maxSalary) {
        return 1;
      } else {
        return 0;
      }
    });
    dispatch({
      type: types.SORT_BY_MAX_SALARY,
      payload: newJobData,
    });
  };
};

const getUnsortedJobData = () => {
  return async (dispatch, getState) => {
    const jobData = getState().jobData;

    dispatch({
      type: types.GET_UNSORTED_JOB_DATA,
      payload: jobData,
    });
  };
};

export { sortJobData, sortByDate, sortByMaxSalary, getUnsortedJobData };
