import React, { useState, useEffect, useRef } from "react";

import "./SelectBox.scss";
import { GiPlainArrow } from "react-icons/gi";

const SelectBox = ({ items, title }) => {
  const selectBoxRef = useRef();

  const [openSelectOptions, setOpenSelectOptions] = useState(false);
  const [screenTitle, setScreenTitle] = useState(title);

  useEffect(() => {
    const renderSelectOptions = (e) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
        setOpenSelectOptions(false);
      }
    };
    document.body.addEventListener("click", renderSelectOptions);

    return () => {
      document.body.removeEventListener("click", renderSelectOptions);
    };
  }, []);

  const renderedItems = items.map((item, index) => {
    return (
      <li
        className="SelectBox__item"
        key={index}
        onClick={() => {
          setOpenSelectOptions(false);
          setScreenTitle(item.toUpperCase());
        }}
      >
        {item}
      </li>
    );
  });
  return (
    <div className="SelectBox" ref={selectBoxRef}>
      <div
        className="SelectBox__screen"
        onClick={() => {
          setOpenSelectOptions(true);
        }}
      >
        <p>{screenTitle}</p>
        <GiPlainArrow className="SelectBox__icon" />
      </div>
      <ul
        className={`SelectBox__list ${
          openSelectOptions ? "" : "SelectBox__list--closed"
        }`}
      >
        {renderedItems}
      </ul>
    </div>
  );
};

export default SelectBox;
