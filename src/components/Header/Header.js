import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import "./Header.scss";
import Dropdown from "../Dropdown/Dropdown.js";
import {
  jobs,
  companies,
  locations,
} from "../../general/staticDropdownOptions.js";
import { fetchLocationOptions } from "./requests.js";
import SelectBox from "../SelectBox";
import countryCodes from "../../countryCodes.js";

const Header = () => {
  const dropdownRef = useRef();
  //the input name our dropdown should show for
  const [showDropdown, setShowDropdown] = useState(null);
  const [locationChoices, setLocationChoices] = useState(locations);
  const [locationValue, setLocationValue] = useState("");
  const [debouncedLocationValue, setDebouncedLocationValue] = useState("");

  //adds event listener on our body for closing dropdown when user clicks outside of it
  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(null);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("timeout has been created");
      setDebouncedLocationValue(locationValue);
    }, 1000);

    return () => {
      console.log("timeout has been cleared");
      clearInterval(timerId);
    };
  }, [locationValue]);

  //fetches location results based on user's debounced location search value
  useEffect(() => {
    const getLocationOptions = async () => {
      const result = await fetchLocationOptions(debouncedLocationValue);
      setLocationChoices(result);
    };
    if (debouncedLocationValue) {
      getLocationOptions();
    }
  }, [debouncedLocationValue]);

  const onInputClick = (e) => {
    setShowDropdown(e.target.name);
    e.stopPropagation();
  };

  const renderDropdown = (name, title, items) => {
    if (name === showDropdown) {
      return (
        <Dropdown
          ref={dropdownRef}
          title={title}
          items={items}
          onItemClick={() => {
            setShowDropdown(null);
          }}
        />
      );
    }
  };

  return (
    <header className="Header">
      <div className="container">
        <h1 className="logo">
          <span className="bold">Eazy-E</span> Postings
        </h1>
      </div>

      <form
        className="form"
        action="urlofthepageontheserverthatthisformwillgoto"
        method="post"
      >
        <div className="form__input-group">
          <AiOutlineSearch className="form__icon" />
          <input
            type="text"
            className="form__input"
            name="job type"
            placeholder="All jobs"
            onClick={onInputClick}
          />
          {renderDropdown("job type", "Popular Job Searches", jobs)}
        </div>
        <div className="form__input-group">
          <FaRegBuilding className="form__icon" />
          <input
            type="text"
            className="form__input"
            name="company"
            placeholder="All Companies"
            onClick={onInputClick}
          />
          {renderDropdown("company", "Popular Company Searches", companies)}
        </div>
        <SelectBox title="Country" items={countryCodes} />
        <div className="form__input-group">
          <IoLocationSharp className="form__icon" />
          <input
            type="text"
            className="form__input"
            name="location"
            placeholder="Anywhere"
            onClick={(e) => {
              onInputClick(e);
            }}
            onInput={(e) => {
              setLocationValue(e.target.value);
            }}
          />
          {renderDropdown(
            "location",
            "choose or search a location",
            locationChoices
          )}
        </div>

        <button className="button button--primary" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
