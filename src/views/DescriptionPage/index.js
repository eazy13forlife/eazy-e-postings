import React from "react";
import history from "../../history";
import { useSelector } from "react-redux";
import moment from "moment";
import { BsClock } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";

import Header from "../../components/Header/Header.js";
import "./index.scss";

const DescriptionPage = () => {
  const jobSelected = useSelector((state) => state.jobSelected);

  if (!jobSelected) {
    history.push("/");
  }

  const {
    companyName,
    created,
    description,
    title,
    jobLocation,
    maxSalary,
    minSalary,
    redirectUrl,
  } = jobSelected;

  //Get readable contractTime value
  let contractTime;

  if (jobSelected.contractTime === "part_time") {
    contractTime = "Part Time";
  } else if (jobSelected.contractTime === "full_time") {
    contractTime = "Full Time";
  }

  //Get readable momentFromNow value
  const momentFromNow = moment(created).fromNow();

  return (
    <>
      <Header />

      <main className="DescriptionPage">
        <div className="container-2 DescriptionPage__container">
          <div className="DescriptionPage__main-content">
            <div className="DescriptionPage__title-date">
              <div className="DescriptionPage__header-contract">
                <h1 className="DescriptionPage__heading text-extra-large">
                  {title}
                </h1>

                {contractTime ? (
                  <p className="text-medium DescriptionPage__contract">
                    {contractTime}
                  </p>
                ) : null}
              </div>

              <div className="DescriptionPage__time">
                <BsClock className="DescriptionPage__icon DescriptionPage__clock-icon" />
                <p className="text-small">{momentFromNow}</p>
              </div>
            </div>

            <div className="DescriptionPage__company-location">
              <p className=" text-large DescriptionPage__company">
                {companyName}
              </p>
              <div className="DescriptionPage__location">
                <FaGlobeAmericas className="DescriptionPage__icon DescriptionPage__globe-icon" />
                <p className="text-small">{jobLocation}</p>
              </div>
            </div>

            <p className="text-regular-2 DescriptionPage__description">
              {`${description} (read more by applying on company site).`}
            </p>

            <div className="DescriptionPage__salaries">
              {minSalary ? (
                <p className="text-regular-2 DescriptionPage__min-salary">
                  Min $:{" "}
                  <span className="DescriptionPage__salary">{minSalary}</span>
                </p>
              ) : null}

              {maxSalary ? (
                <p className="text-regular-2 DescriptionPage__max-salary">
                  Max $:{" "}
                  <span className="DescriptionPage__salary">{maxSalary}</span>
                </p>
              ) : null}
            </div>
          </div>

          <div className="DescriptionPage__url">
            <a
              href={redirectUrl}
              target="_blank"
              rel="noreferrer"
              className="button-4 button-4--primary text-medium DescriptionPage__button"
            >
              <span>Apply on company site</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default DescriptionPage;
