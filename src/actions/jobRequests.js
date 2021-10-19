import axios from "axios";

import types from "./types.js";
import apiInfo from "../apiInfo.js";

const fetchJobData = () => {
  return async (dispatch, getState) => {
    try {
      const searchParams = getState().searchParams;
      const allParams = Object.keys(searchParams);
      let urlString = `https://api.adzuna.com/v1/api/jobs/${searchParams.country}/search/1?app_id=${apiInfo.adzuna.id}&app_key=${apiInfo.adzuna.key}&results_per_page=30`;

      //create our urlString with the different params that actually have values
      for (let i = 0; i < allParams.length; i++) {
        const param = allParams[i];
        const paramValue = searchParams[param];
        //skip country because it is part of path, not a query
        if (param === "country") {
          continue;
        } else if (paramValue) {
          urlString += `&${param}=${paramValue}`;
        }
      }

      const response = await axios.get(urlString);

      const results = createJobResults(response.data.results);
      console.log(results);
      dispatch({
        type: types.FETCH_JOB_DATA,
        payload: results,
      });
    } catch {
      dispatch({
        type: types.FETCH_JOB_DATA,
        payload: "error",
      });
    }
  };
};

const createJobResults = (responseData) => {
  const resultsArray = [];
  for (let i = 0; i < responseData.length; i++) {
    const jobInfo = responseData[i];

    const {
      company: { display_name: companyName },
      created,
      description,
      title,
      location: { display_name: jobLocation },
      salary_max: maxSalary = "",
      salary_min: minSalary = "",
      contract_time: contractTime = "",
      companyLogo = "",
      redirect_url: redirectUrl,
      category: { tag: categoryTag },
    } = jobInfo;

    const jobObject = {
      companyName,
      created,
      description,
      title,
      jobLocation,
      maxSalary,
      minSalary,
      contractTime,
      companyLogo,
      redirectUrl,
      categoryTag,
    };
    resultsArray.push(jobObject);
  }
  return resultsArray;
};

export { fetchJobData };
