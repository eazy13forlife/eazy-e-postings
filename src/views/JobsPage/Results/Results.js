import React from "react";
import { useSelector } from "react-redux";

import JobCard from "../../../components/JobCard/JobCard.js";
import "./Results.scss";
import Pagination from "../../../components/Pagination/Pagination.js";

const Results = ({ currentPage }) => {
  const jobData = useSelector((state) => {
    return state.sortedJobData;
  });

  const jobsLoading = useSelector((state) => {
    return state.jobsLoading;
  });

  const getTotalPageButtons = () => {
    return Math.ceil(jobData.length / 7);
  };

  const renderData = () => {
    //whenever we are fetching new jobs, show a loading jobs status on top of the data
    //already there, if current data contains values and has no errors
    if (jobsLoading === true || jobsLoading === null) {
      return (
        <>
          <p className="Results__fetching-jobs text-large">
            Fetching jobs tailored around your criteria. Hold on, this might
            take a while...
          </p>

          {jobData !== "error" && jobData.length ? (
            <Pagination
              data={jobData}
              buttonsRange={5}
              dataLimit={7}
              cardComponent={JobCard}
              currentPage={currentPage}
            ></Pagination>
          ) : null}
        </>
      );
    }

    if (jobData === "error") {
      return (
        <p className="Results__error text-large">
          There was a problem retrieving job data. Try Again.
        </p>
      );
    }

    if (!jobData.length || currentPage > getTotalPageButtons()) {
      return <p className="Results__none text-large">No results found</p>;
    }

    return (
      <Pagination
        data={jobData}
        buttonsRange={5}
        dataLimit={7}
        cardComponent={JobCard}
        currentPage={currentPage}
      ></Pagination>
    );
  };

  return <section className="Results text-large">{renderData()}</section>;
};

export default Results;
