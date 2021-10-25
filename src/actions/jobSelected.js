import types from "./types.js";

const selectJob = (referenceId) => {
  return (dispatch, getState) => {
    const data = getState().sortedJobData;
    const selectedJob = data.find((job) => job.adref === referenceId);
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
