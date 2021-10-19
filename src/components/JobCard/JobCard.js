import React from "react";
import moment from "moment";
import "./JobCard.scss";
import { GoGlobe } from "react-icons/go";

const JobCard = ({ data }) => {
  const {
    companyName,
    created,
    description,
    title,
    jobLocation,
    maxSalary,
    minSalary,
    contractTime,
    categoryTag,
  } = data;

  const renderContract = () => {
    if (contractTime === "full_time") {
      return "Full Time";
    } else if (contractTime === "part_time") {
      return "Part Time";
    }

    return;
  };

  const momentCreated = moment(created).format("MMM Do, YY");
  return (
    <div className="JobCard">
      <div className="JobCard__main-info">
        <p className="JobCard__company-name text-regular">{companyName}</p>
        <h2 className="JobCard__title text-large">{title}</h2>
        <div className="JobCard__date-contract">
          <p className="JobCard__date text-small">{`Posted on ${momentCreated}`}</p>
          <p className="JobCard__contract text-small">{renderContract()}</p>
        </div>
      </div>
      <div className="JobCard__location-salary">
        <div className="JobCard__location-wrapper">
          <GoGlobe className="JobCard__icon" />
          <p className="JobCard__location text-small">{jobLocation}</p>
        </div>
        {minSalary ? (
          <p className="JobCard__salary text-small">{`Min $: ${minSalary}`}</p>
        ) : null}
        {maxSalary ? (
          <p className="JobCard__salary text-small">{`Max $: ${maxSalary}`}</p>
        ) : null}
      </div>
    </div>
  );
};

export default JobCard;
