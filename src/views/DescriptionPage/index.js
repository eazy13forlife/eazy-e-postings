import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { BsClock } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";

import Header from "../../components/Header/Header.js";
import "./index.scss";

const DescriptionPage = () => {
  const jobSelected = useSelector((state) => state.jobSelected);
  const {
    companyName,
    created,
    description,
    title,
    jobLocation,
    maxSalary,
    minSalary,
    contractTime,
    redirectUrl,
  } = jobSelected;

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
                {contractTime ? <p text-medium>{contractTime}</p> : null}
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
              {`${description}(read more by applying on company site).`}
            </p>
          </div>
          <div className="DescriptionPage__url">
            <a href={redirectUrl} target="_blank" rel="noreferrer">
              <button className="button-4 button-4--primary text-medium">
                Apply on company site
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default DescriptionPage;
