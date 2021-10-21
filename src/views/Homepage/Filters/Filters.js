import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Filters.scss";
import {
  updateSearchParam,
  fetchJobData,
  sortByDate,
  turnOnFilter,
  turnOffFilter,
  getUnsortedData,
} from "../../../actions/";
import { BsCurrencyDollar } from "react-icons/bs";
import returnWholeNumber from "../../../general/returnWholeNumber.js";
const Filters = () => {
  const dispatch = useDispatch();

  const searchParams = useSelector((state) => {
    return state.searchParams;
  });

  return (
    <section className="Filters">
      <h2 className="Filters__heading text-large-2">Job Filters</h2>

      <div className="Filters__group">
        <div className="Filters__sort-by-group">
          <label className="Filters__group-title" htmlFor="sort-by-date">
            Sort by date posted:
          </label>
          <input
            type="checkbox"
            name="sort-by-date"
            id="sort-by-date"
            className="Filters__checkbox"
            onChange={(e) => {
              console.log(e);
              if (e.target.checked) {
                dispatch(turnOnFilter("sort_date"));
                dispatch(sortByDate());
              } else {
                dispatch(turnOffFilter("sort_date"));
                dispatch(getUnsortedData());
              }
            }}
          />
        </div>
      </div>

      <div className="Filters__group">
        <p className="Filters__group-title">Salary:</p>
        <div className="Filters__text-input-group">
          <BsCurrencyDollar className="Filters__icon" />
          <input
            type="text"
            className="Filters__text-input"
            name="minimum salary"
            id="minimum-salary"
            placeholder="Min Salary"
            value={searchParams.salary_min}
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
            className="Filters__text-input"
            id="maximum-salary"
            placeholder="Max Salary"
            value={searchParams.salary_max}
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

      <div className="Filters__group">
        <p className="Filters__group-title">Contract Time:</p>
        <div
          className="Filters__radio-container"
          onChange={(e) => {
            if (e.target.value === "part time") {
              dispatch(updateSearchParam("full_time", ""));
              dispatch(updateSearchParam("part_time", 1));
            } else if (e.target.value === "full time") {
              dispatch(updateSearchParam("part_time", ""));
              dispatch(updateSearchParam("full_time", 1));
            } else if (e.target.value === "both") {
              dispatch(updateSearchParam("part_time", ""));
              dispatch(updateSearchParam("full_time", ""));
            }
            dispatch(fetchJobData());
          }}
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
    </section>
  );
};

export default Filters;
