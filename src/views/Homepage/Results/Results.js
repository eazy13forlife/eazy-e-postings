import React from "react";
import { useSelector } from "react-redux";

import JobCard from "../../../components/JobCard/JobCard.js";
import "./Results.scss";

const Results = () => {
  const jobData = useSelector((state) => {
    return state.sortedJobData;
  });

  const jobsLoading = useSelector((state) => {
    return state.jobsLoading;
  });

  const renderData = () => {
    if (jobsLoading === true || jobsLoading === null) {
      return (
        <p className="Results__fetching-jobs text-large">
          Fetching jobs that match your criteria. Hold on, this might take a
          while...
        </p>
      );
    }

    if (jobData === "error") {
      return (
        <p className="Results__error text-large">
          There was a problem retrieving job data. Try Again.
        </p>
      );
    }

    if (!jobData.length) {
      return <p className="Results__none text-large">No results found.</p>;
    }

    return jobData.map((job, index) => {
      return (
        <React.Fragment key={index}>
          <JobCard data={job} />
        </React.Fragment>
      );
    });
  };

  return <section className="Results text-large">{renderData()}</section>;
};

export default Results;
