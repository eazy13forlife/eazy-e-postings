import React from "react";

import "./Header.scss";
import useGoToJobsPage from "../../hooks/useGoToJobsPage";
import JobSearchForm from "../JobSearchForm";
import defaultSearchInfo from "../../general/defaultSearchInfo";

const Header = () => {
  const goToJobsPage = useGoToJobsPage();

  return (
    <header className="Header">
      <div className="container Header__container">
        <p
          className="Header__logo logo"
          onClick={() => {
            goToJobsPage(defaultSearchInfo, 1);
          }}
        >
          <span className="bold">Eazy-E</span> Postings
        </p>
        <JobSearchForm />
      </div>
    </header>
  );
};

export default Header;
