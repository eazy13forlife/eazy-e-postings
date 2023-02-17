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
      //let us know if currently loading jobs, so we can display an indicator
      dispatch(loadJobs(true));

      const searchParams = getState().searchParams;

      const urlString = createUrlString(searchParams);

      const response = await axios.get(urlString);

      const results = createJobResults(response.data.results);

      dispatch({
        type: types.FETCH_JOB_DATA,
        payload: results,
      });

      //checks to see if job data should be sorted by any filters
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

//creates urlString needed to make a request to Adzuna search api. Takes into
// account all search paramaters we have selected
const createUrlString = (searchParamsObject) => {
  const allParams = Object.keys(searchParamsObject);

  let urlString = `https://eazy13-github-proxy.herokuapp.com/https://api.adzuna.com/v1/api/jobs/${searchParamsObject.country}/search/1?app_id=${process.env.REACT_APP_ADZUNA_ID}&app_key=${process.env.REACT_APP_ADZUNA_KEY}&results_per_page=15`;

  //for each  query param, add the key and value to our urlString like key=value
  for (let i = 0; i < allParams.length; i++) {
    const param = allParams[i];

    //skip country because it is not part of the query string.(It is used in the root path)
    if (param === "country") {
      continue;
    }

    let paramValue = searchParamsObject[param];

    //the searchParam value for salary can't have commas or decimals in it, so we
    //need to format it first before setting in our url
    if (param === "salary_min" || param === "salary_max") {
      paramValue = returnWholeNumber(paramValue);
    }

    //only add the search param if it has a value
    if (paramValue) {
      urlString += `&${param}=${paramValue}`;
    }
  }

  return urlString;
};

//creates array of all our job results
const createJobResults = (responseData) => {
  const resultsArray = [];

  //for each job object, grab the necessary details and add to our resultsArray
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
