import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Filters.scss";
import {
  updateSearchParam,
  fetchJobData,
  sortByDate,
  sortByMaxSalary,
  turnOnFilter,
  turnOffFilter,
  getUnsortedJobData,
} from "../../actions";
import { BsCurrencyDollar } from "react-icons/bs";

const Filters = () => {
  const dispatch = useDispatch();

  const [showFiltersButton, setShowFiltersButton] = useState(
    window.innerWidth <= 760
  );
  const [showHideFiltersButton, setShowHideFiltersButton] = useState(
    window.innerWidth <= 760
  );

  const searchParams = useSelector((state) => {
    return state.searchParams;
  });

  //Whenever window resizes, check to see if we should make this component
  //mobile or desktop version
  useEffect(() => {
    const makeFiltersResponsive = (e) => {
      if (e.srcElement.innerWidth <= 760) {
        setShowFiltersButton(true);
        setShowHideFiltersButton(true);
      } else {
        setShowFiltersButton(false);
        setShowHideFiltersButton(false);
      }
    };

    window.addEventListener("resize", makeFiltersResponsive);

    return () => {
      window.removeEventListener("resize", makeFiltersResponsive);
    };
  }, []);

  const onSortByChange = (e) => {
    const value = e.target.value;

    if (value === "none") {
      dispatch(turnOffFilter());

      dispatch(getUnsortedJobData());

      return;
    }

    dispatch(turnOnFilter(value));

    switch (value) {
      case "sort_date":
        return dispatch(sortByDate());
      case "salary_max":
        return dispatch(sortByMaxSalary());
      default:
        return;
    }
  };

  const onContractTimeChange = (e) => {
    const contractType = e.target.value;

    switch (contractType) {
      case "part time":
        dispatch(updateSearchParam("full_time", ""));
        dispatch(updateSearchParam("part_time", 1));
        break;
      case "full time":
        dispatch(updateSearchParam("part_time", ""));
        dispatch(updateSearchParam("full_time", 1));
        break;
      case "both":
        dispatch(updateSearchParam("part_time", ""));
        dispatch(updateSearchParam("full_time", ""));
        break;
      default:
        return;
    }
    dispatch(fetchJobData());
  };

  return (
    <section className="Filters">
      {showFiltersButton ? (
        <button
          className="button-3 button-3--primary text-large Filters__show-button"
          onClick={() => {
            setShowFiltersButton(false);
          }}
        >
          Edit Job Filters
        </button>
      ) : null}

      <div
        className={`Filters__content ${
          showFiltersButton ? "Filters__content--hide" : null
        }`}
      >
        <h2 className="Filters__heading text-large-2">Job Filters</h2>
        <div className="Filters__group">
          <p className="Filters__group-title">Sort By:</p>
          <div className="Filters__radios-container" onChange={onSortByChange}>
            <div className="Filters__radio-group">
              <input
                type="radio"
                className="Filters__radio-button"
                name="filter"
                value="sort_date"
                id="sort_date"
              />
              <label htmlFor="sort_date">Date Posted</label>
            </div>
            <div className="Filters__radio-group">
              <input
                type="radio"
                className="Filters__radio-button"
                name="filter"
                value="salary_max"
                id="salary_max"
              />
              <label htmlFor="salary_max">Maximum Salary</label>
            </div>
            <div className="Filters__radio-group">
              <input
                type="radio"
                className="Filters__radio-button"
                name="filter"
                value="none"
                id="none"
                defaultChecked
              />
              <label htmlFor="none">None</label>
            </div>
          </div>
        </div>

        <div className="Filters__group">
          <p className="Filters__group-title">Salary:</p>
          <div className="Filters__salary-inputs">
            <div className="Filters__text-input-group">
              <BsCurrencyDollar className="Filters__icon" />
              <input
                type="text"
                className="Filters__text-input"
                name="minimum salary"
                id="minimum-salary"
                placeholder="Min Salary"
                value={searchParams.salary_min}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    dispatch(fetchJobData());
                  }
                }}
                onChange={(e) => {
                  dispatch(updateSearchParam("salary_min", e.target.value));
                }}
              />
            </div>
            <div className="Filters__text-input-group">
              <BsCurrencyDollar className="Filters__icon" />
              <input
                type="text"
                name="maximum salary"
                className="Filters__text-input Filters__text-input-max"
                id="maximum-salary"
                placeholder="Max Salary"
                value={searchParams.salary_max}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    dispatch(fetchJobData());
                  }
                }}
                onChange={(e) => {
                  dispatch(updateSearchParam("salary_max", e.target.value));
                }}
              />
            </div>
            <button
              className="button-2 button-2--primary Filters__button"
              onClick={() => {
                dispatch(fetchJobData());
              }}
            >
              Go
            </button>
          </div>
        </div>

        <div className="Filters__group">
          <p className="Filters__group-title">Contract Time:</p>
          <div
            className="Filters__radios-container"
            onChange={onContractTimeChange}
          >
            <div className="Filters__radio-group">
              <input
                type="radio"
                className="Filters__radio-button"
                name="contract time"
                value="full time"
                id="full-time"
              />
              <label htmlFor="full-time">Full Time</label>
            </div>
            <div className="Filters__radio-group">
              <input
                type="radio"
                className="Filters__radio-button"
                name="contract time"
                value="part time"
                id="part-time"
              />
              <label htmlFor="part-time">Part Time</label>
            </div>
            <div className="Filters__radio-group">
              <input
                type="radio"
                className="Filters__radio-button"
                name="contract time"
                value="both"
                id="both"
                defaultChecked
              />
              <label htmlFor="both">Both</label>
            </div>
          </div>
        </div>

        {showHideFiltersButton ? (
          <button
            className="button-3 button-3--primary text-large Filters__hide-button"
            onClick={() => {
              setShowFiltersButton(true);
            }}
          >
            Hide Job Filters
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Filters;
