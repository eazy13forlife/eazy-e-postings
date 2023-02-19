import React from "react";

import "./Header.scss";
import useGoToJobsPage from "../../hooks/useGoToJobsPage";
import JobSearchForm from "../JobSearchForm";

const Header = () => {
  const goToJobsPage = useGoToJobsPage();

  return (
    <header className="Header">
      <div className="container Header__container">
        <h1
          className="logo"
          onClick={() => {
            goToJobsPage(
              {
                country: "us",
                what: "",
                company: "",
                where: "",
                salary_min: "",
                salary_max: "",
                full_time: "",
                part_time: "",
              },
              1
            );
          }}
        >
          <span className="bold">Eazy-E</span> Postings
        </h1>
        <JobSearchForm />
      </div>
    </header>
  );
};

export default Header;
