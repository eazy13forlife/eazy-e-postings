import React, { useState, useEffect, useRef } from "react";

import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Dropdown from "../Dropdown/Dropdown.js";
const Header = () => {
  const dropdownRef = useRef();
  //the input name our dropdown should show for
  const [showDropdown, setShowDropdown] = useState(null);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!(dropdownRef.current && dropdownRef.current.contains(e.target))) {
        setShowDropdown(null);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);
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
            onClick={(e) => {
              setShowDropdown(e.target.name);
            }}
          />
          {renderDropdown("job type")}
        </div>
        <div className="form__input-group">
          <FaRegBuilding className="form__icon" />
          <input
            type="text"
            className="form__input"
            name="company"
            placeholder="All Companies"
            onClick={(e) => {
              setShowDropdown(e.target.name);
            }}
          />
          {renderDropdown("company")}
        </div>
        <div className="form__input-group">
          <IoLocationSharp className="form__icon" />
          <input
            type="text"
            className="form__input"
            name="location"
            placeholder="Anywhere"
            onClick={(e) => {
              setShowDropdown(e.target.name);
            }}
          />
          {renderDropdown("location")}
        </div>

        <button className="button button--primary" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
