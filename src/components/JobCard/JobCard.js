import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { GoGlobe } from "react-icons/go";
import history from "../../history.js";

import "./JobCard.scss";
import { selectJob } from "../../actions";

const JobCard = ({ data }) => {
  const dispatch = useDispatch();

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
    adref,
  } = data;

  const companyNameUrl = companyName.replace(/\s/g, "-");
  const titleUrl = title.replace(/\s/g, "-");

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
    <div
      className="JobCard"
      onClick={() => {
        dispatch(selectJob(adref));
        history.push(`/jobs/${companyNameUrl}/${titleUrl}`);
      }}
    >
      <div className="JobCard__main-info">
        <p className="JobCard__company-name text-regular">{companyName}</p>
        <h2 className="JobCard__title text-large">{title}</h2>
        <div className="JobCard__location-contract">
          <div className="JobCard__location-wrapper">
            <GoGlobe className="JobCard__icon" />
            <p className="JobCard__location text-small">{jobLocation}</p>
          </div>
          <p className="JobCard__contract text-small">{renderContract()}</p>
        </div>
      </div>
      <div className="JobCard__date-salary">
        <p className="JobCard__date text-small">{`Posted on ${momentCreated}`}</p>
        <div className="JobCard__salary-group">
          {minSalary ? (
            <p className="JobCard__salary text-small">{`Min $: ${minSalary}`}</p>
          ) : null}
          {maxSalary ? (
            <p className="JobCard__salary text-small">{`Max $: ${maxSalary}`}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
