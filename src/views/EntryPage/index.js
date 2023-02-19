import React from "react";

import JobSearchForm from "../../components/JobSearchForm";
import "./index.scss";

const EntryPage = () => {
  return (
    <div className="EntryPage">
      <div className="container">
        <p className="logo">
          <span className="bold">Eazy-E</span> Postings
        </p>
        <div className="EntryPage__job-search">
          <h1 className="EntryPage__heading">
            Find the <span className="color-tertiary">right</span> fit.
          </h1>
          <JobSearchForm />
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
