import types from "./types.js";

//grabs the current job we clicked on
const selectJob = (referenceId) => {
  return (dispatch, getState) => {
    const data = getState().sortedJobData;

    const selectedJob = data.find((job) => job.id === referenceId);

    dispatch({
      type: types.SELECT_JOB,
      payload: selectedJob,
    });
  };
};

const clearJobSelected = () => {
  return {
    type: types.CLEAR_JOB_SELECTED,
  };
};

export { selectJob, clearJobSelected };
