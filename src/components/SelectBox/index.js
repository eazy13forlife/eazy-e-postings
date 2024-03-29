import React, { useState, useEffect, useRef } from "react";

import "./SelectBox.scss";
import { GiPlainArrow } from "react-icons/gi";

const SelectBox = ({ items, title, value, onItemClick }) => {
  const selectBoxRef = useRef();

  const [openSelectOptions, setOpenSelectOptions] = useState(false);

  const [screenTitle, setScreenTitle] = useState(value);

  //adds event listener on our body that closes our SelectBox options when a user
  //clicks outside of it
  useEffect(() => {
    const closeSelectOptions = (e) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
        setOpenSelectOptions(false);
      }
    };

    document.body.addEventListener("click", closeSelectOptions);

    return () => {
      document.body.removeEventListener("click", closeSelectOptions);
    };
  }, []);

  useEffect(() => {
    setScreenTitle(value);
  }, [value]);

  const renderedItems = items.map((item, index) => {
    return (
      <button
        className="SelectBox__item"
        key={index}
        type="button"
        onClick={() => {
          setOpenSelectOptions(false);
          setScreenTitle(item);
          onItemClick(item);
        }}
      >
        {item}
      </button>
    );
  });

  return (
    <div
      className="SelectBox"
      ref={selectBoxRef}
      onClick={() => {
        setOpenSelectOptions(!openSelectOptions);
      }}
    >
      <button
        className="SelectBox__screen"
        type="button"
        onClick={() => {
          setOpenSelectOptions(true);
        }}
      >
        <p className="SelectBox__screen-text">{screenTitle}</p>
        <GiPlainArrow className="SelectBox__icon" />
      </button>

      <ul
        className={`SelectBox__list ${
          openSelectOptions ? "" : "SelectBox__list--closed"
        }`}
      >
        <li className="SelectBox__invalid-item">{title}</li>
        {renderedItems}
      </ul>
    </div>
  );
};

export default SelectBox;
