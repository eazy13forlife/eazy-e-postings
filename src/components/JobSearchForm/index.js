import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import "./index.scss";
import Dropdown from "../Dropdown/Dropdown.js";
import SelectBox from "../SelectBox";
import { fetchLocationOptions } from "./requests.js";
import countryCodes from "../../countryCodes.js";
import TextInput from "../formInputs/TextInput.js";
import { updateSearchParam } from "../../actions";
import {
  jobs,
  companies,
  locations,
} from "../../general/staticDropdownOptions.js";
import useGoToJobsPage from "../../hooks/useGoToJobsPage";

const JobSearchForm = () => {
  const dispatch = useDispatch();

  const jobInputRef = useRef();

  const companyInputRef = useRef();

  const locationInputRef = useRef();

  const [showDropdownFor, setShowDropdownFor] = useState(null);

  const [locationChoices, setLocationChoices] = useState(locations);

  const [locationValue, setLocationValue] = useState("");

  const [debouncedLocationValue, setDebouncedLocationValue] = useState("");

  const goToJobsPage = useGoToJobsPage();

  const searchParams = useSelector((state) => {
    return state.searchParams;
  });

  //adds event listener on our body that closes all Dropdown components when user
  //clicks outside of them
  useEffect(() => {
    const closeDropdownsOutsideClick = (e) => {
      const refs = [jobInputRef, companyInputRef, locationInputRef];

      const closeDropdown = refs.every((ref) => {
        return ref.current && !ref.current.contains(e.target);
      });

      if (closeDropdown) {
        setShowDropdownFor(null);
      }
    };

    document.body.addEventListener("click", closeDropdownsOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeDropdownsOutsideClick);
    };
  }, []);

  //sets debouncedLocationValue after a certain time passes without user typing a
  //character, in order to avoid too many requests.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedLocationValue(locationValue);
    }, 600);

    return () => {
      clearInterval(timerId);
    };
  }, [locationValue]);

  //fetches suggested location options based on user's debouncedLocationValue
  useEffect(() => {
    const getLocationOptions = async () => {
      const result = await fetchLocationOptions(debouncedLocationValue);
      setLocationChoices(result);
    };

    if (debouncedLocationValue) {
      getLocationOptions();
    }
  }, [debouncedLocationValue]);

  //reroute to the correct page
  const onSearchSubmit = (e) => {
    e.preventDefault();

    goToJobsPage(searchParams, 1);
  };

  const onInputClick = (paramName) => {
    if (showDropdownFor === paramName) {
      setShowDropdownFor(null);
    } else {
      setShowDropdownFor(paramName);
    }
  };

  //renders dropdown component for job type, company and location text inputs
  const renderDropdown = (paramName, dropTitle, dropItems) => {
    if (paramName === showDropdownFor) {
      return (
        <Dropdown
          title={dropTitle}
          items={dropItems}
          onItemClick={(e, paramValue) => {
            dispatch(updateSearchParam(paramName, paramValue));
            setShowDropdownFor(null);
            e.stopPropagation();
          }}
        />
      );
    }
  };

  return (
    <form className="JobSearchForm" onSubmit={onSearchSubmit}>
      <div className="JobSearchForm__input-group" ref={jobInputRef}>
        <AiOutlineSearch className="JobSearchForm__icon" />
        <TextInput
          className="JobSearchForm__input"
          name="what"
          placeholder="All jobs"
          value={searchParams.what}
          onClick={() => {
            onInputClick("what");
          }}
          onChange={(e) => {
            dispatch(updateSearchParam("what", e.target.value));
          }}
        />
        {renderDropdown("what", "Popular Job Searches", jobs)}
      </div>

      <div className="JobSearchForm__input-group" ref={companyInputRef}>
        <FaRegBuilding className="JobSearchForm__icon" />
        <TextInput
          className="JobSearchForm__input"
          name="company"
          placeholder="All Companies"
          onClick={() => {
            onInputClick("company");
          }}
          value={searchParams.company}
          onChange={(e) => {
            dispatch(updateSearchParam("company", e.target.value));
          }}
        />
        {renderDropdown("company", "Popular Company Searches", companies)}
      </div>

      <div className="JobSearchForm__input-group">
        <SelectBox
          title="Country"
          items={countryCodes}
          onItemClick={(code) => {
            dispatch(updateSearchParam("country", code));
          }}
          value={searchParams.country}
        />
      </div>

      <div className="JobSearchForm__input-group" ref={locationInputRef}>
        <IoLocationSharp className="JobSearchForm__icon" />
        <TextInput
          className="JobSearchForm__input"
          name="where"
          placeholder="Anywhere"
          value={searchParams.where}
          onClick={() => {
            onInputClick("where");
          }}
          onChange={(e) => {
            setLocationValue(e.target.value);
            dispatch(updateSearchParam("where", e.target.value));
          }}
        />
        {renderDropdown(
          "where",
          "choose or search a location",
          locationChoices
        )}
      </div>

      <button
        className="JobSearchForm__button button button--primary"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default JobSearchForm;
