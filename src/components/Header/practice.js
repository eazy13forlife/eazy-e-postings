import React, { useState, useEffect, useRef } from "react";
import { dispatch, useSelector } from "react-redux";
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
import TextInput from "../formInputs/TextInput.js";
import { updateSearchParam } from "../../actions";
const Header = () => {
  const dropdownRef = useRef();

  const dispatch = useDispatch();
  //the input name our dropdown should show for
  const [showDropdown, setShowDropdown] = useState(null);
  const [locationChoices, setLocationChoices] = useState(locations);
  const [locationValue, setLocationValue] = useState("");
  const [debouncedLocationValue, setDebouncedLocationValue] = useState("");

  //adds event listener on our body for closing dropdown component when user
  //clicks outside of it and outside of the text input that renders the dropdown
  useEffect(() => {
    const renderDropdown = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.className.includes("form__input")
      ) {
        setShowDropdown(null);
      }
    };
    document.body.addEventListener("click", renderDropdown);

    return () => {
      document.body.removeEventListener("click", renderDropdown);
    };
  }, []);

  //sets debouncedLocationValue after a certain time passes without user typing a
  //character in order to avoid many requests.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedLocationValue(locationValue);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [locationValue]);

  /*
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
*/
  //runs when a user clicks a text input
  const onInputClick = (e) => {
    setShowDropdown(e.target.name);
  };

  //renders dropdown component when user clicks text input
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
        <div className="form__input-group">
          <IoLocationSharp className="form__icon" />
          <TextInput
            name="company"
            className="form__input"
            placeholder="Choose city"
            onClick={onInputClick}
          />
          {renderDropdown("company", "Popular Company Searches", companies)}
        </div>
        <button className="button button--primary" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
