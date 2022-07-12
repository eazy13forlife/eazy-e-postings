import axios from "axios";
import moment from "moment";
import types from "./types.js";

import returnWholeNumber from "../general/returnWholeNumber.js";
import { sortJobData } from "../actions/sort.js";

const loadJobs = (boolean) => {
  return {
    type: types.LOAD_JOBS,
    payload: boolean,
  };
};

const fetchJobData = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadJobs(true));
      const searchParams = getState().searchParams;
      const urlString = createUrlString(searchParams);
      const response = await axios.get(urlString);

      const results = createJobResults(response.data.results);

      dispatch({
        type: types.FETCH_JOB_DATA,
        payload: results,
      });

      //checks to see if it should sort the data according to any sort by filters
      dispatch(sortJobData());

      dispatch(loadJobs(false));
    } catch {
      dispatch({
        type: types.FETCH_JOB_DATA,
        payload: "error",
      });

      dispatch(loadJobs(false));
    }
  };
};

const createUrlString = (searchParamsObject) => {
  const allParams = Object.keys(searchParamsObject);

  let urlString = `https://eazy13-github-proxy.herokuapp.com/https://api.adzuna.com/v1/api/jobs/${searchParamsObject.country}/search/1?app_id=${process.env.REACT_APP_ADZUNA_ID}&app_key=${process.env.REACT_APP_ADZUNA_KEY}&results_per_page=15`;

  //create our urlString with the different params that actually have values
  for (let i = 0; i < allParams.length; i++) {
    const param = allParams[i];
    let paramValue = searchParamsObject[param];
    //searchParam value for salary can't have commas or decimals in it, so we
    //need to format it first before setting in our url
    if (param === "salary_min" || param === "salary_max") {
      paramValue = returnWholeNumber(paramValue);
    }
    if (param === "country") {
      //skip country because it is part of path, not part of query string
      continue;
    } else if (paramValue) {
      urlString += `&${param}=${paramValue}`;
    }
  }
  return urlString;
};

const createJobResults = (responseData) => {
  const resultsArray = [];
  for (let i = 0; i < responseData.length; i++) {
    const jobInfo = responseData[i];

    const {
      company: { display_name: companyName = "Unknown Company" },
      description,
      title,
      id,
      location: { display_name: jobLocation },
      salary_max: maxSalary = "",
      salary_min: minSalary = "",
      contract_time: contractTime = "",
      redirect_url: redirectUrl,
      category: { tag: categoryTag },
    } = jobInfo;

    const created = moment(jobInfo.created).valueOf();
    const state = jobInfo.location.area[0];

    const jobObject = {
      companyName,
      created,
      description,
      title,
      id,
      state,
      jobLocation,
      maxSalary,
      minSalary,
      contractTime,
      redirectUrl,
      categoryTag,
    };
    resultsArray.push(jobObject);
  }
  return resultsArray;
};

export { fetchJobData, loadJobs };
