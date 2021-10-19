import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import JobCard from "../../../components/JobCard/JobCard.js";
import "./Results.scss";

const Results = () => {
  const dispatch = useDispatch();

  const jobData = useSelector((state) => {
    return state.jobData;
  });

  const renderedCards = jobData.map((job, index) => {
    return (
      <React.Fragment key={index}>
        <JobCard data={job} />
      </React.Fragment>
    );
  });

  return <section className="Results">{renderedCards}</section>;
};

export default Results;
