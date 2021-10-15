import React from "react";

import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const Header = () => {
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
            name="job-type"
            placeholder="All jobs"
          />
        </div>
        <div className="form__input-group">
          <FaRegBuilding className="form__icon" />
          <input
            type="text"
            className="form__input"
            name="company"
            placeholder="All Companies"
          />
        </div>
        <div className="form__input-group">
          <IoLocationSharp className="form__icon" />
          <input
            type="text"
            className="form__input"
            name="location"
            placeholder="Anywhere"
          />
        </div>

        <button className="button button--primary" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
