import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import "./Header.scss";
import history from "../../history.js";
import Dropdown from "../Dropdown/Dropdown.js";
import { fetchLocationOptions } from "./requests.js";
import SelectBox from "../SelectBox";
import countryCodes from "../../countryCodes.js";
import TextInput from "../formInputs/TextInput.js";
import {
  updateSearchParam,
  updateCountryCode,
  fetchJobData,
} from "../../actions";
import {
  jobs,
  companies,
  locations,
} from "../../general/staticDropdownOptions.js";

const Header = () => {
  const dispatch = useDispatch();

  const jobInputRef = useRef();

  const companyInputRef = useRef();

  const locationInputRef = useRef();

  const [showDropdownFor, setShowDropdownFor] = useState(null);

  const [locationChoices, setLocationChoices] = useState(locations);

  const [locationValue, setLocationValue] = useState("");

  const [debouncedLocationValue, setDebouncedLocationValue] = useState("");

  const searchParams = useSelector((state) => {
    return state.searchParams;
  });

  //adds event listener on our body for closing all dropdown components when user
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

    //if we are not clicking on any of the dropdowns, close them all if open
    document.body.addEventListener("click", closeDropdownsOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeDropdownsOutsideClick);
    };
  }, []);

  //sets debouncedLocationValue after a certain time passes without user typing a
  //character in order to avoid many requests.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedLocationValue(locationValue);
    }, 500);

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

  //renders dropdown component for our job search parameters
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
    <header className="Header">
      <div className="container Header__container">
        <h1 className="logo">
          <span className="bold">Eazy-E</span> Postings
        </h1>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchJobData());
            history.push("/");
          }}
        >
          <div
            className="form__input-group"
            onClick={() => {
              setShowDropdownFor("what");
            }}
            ref={jobInputRef}
          >
            <AiOutlineSearch className="form__icon" />
            <TextInput
              className="form__input"
              name="what"
              placeholder="All jobs"
              value={searchParams.what}
              onChange={(e) => {
                dispatch(updateSearchParam("what", e.target.value));
              }}
            />
            {renderDropdown("what", "Popular Job Searches", jobs)}
          </div>

          <div
            className="form__input-group"
            onClick={() => {
              setShowDropdownFor("company");
            }}
            ref={companyInputRef}
          >
            <FaRegBuilding className="form__icon" />
            <TextInput
              className="form__input"
              name="company"
              placeholder="All Companies"
              value={searchParams.company}
              onChange={(e) => {
                dispatch(updateSearchParam("company", e.target.value));
              }}
            />
            {renderDropdown("company", "Popular Company Searches", companies)}
          </div>

          <div className="form__input-group">
            <SelectBox
              title="Country"
              items={countryCodes}
              onItemClick={(code) => {
                dispatch(updateCountryCode(code));
              }}
              value={searchParams.country}
            />
          </div>

          <div
            className="form__input-group"
            onClick={() => {
              setShowDropdownFor("where");
            }}
            ref={locationInputRef}
          >
            <IoLocationSharp className="form__icon" />
            <TextInput
              className="form__input"
              name="where"
              placeholder="Anywhere"
              value={searchParams.where}
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

          <button className="button button--primary form__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
