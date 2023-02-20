import React from "react";

import "./Dropdown.scss";

const Dropdown = ({ title, items, onItemClick }) => {
  let renderedItems;

  if (!items || !items.length) {
    renderedItems = [
      <p className="text-regular-2" key={1}>
        No results
      </p>,
    ];
  } else {
    renderedItems = items.map((item, index) => {
      return (
        <button
          className="Dropdown__item"
          key={index}
          onClick={(e) => {
            onItemClick(e, item);
          }}
        >
          {item}
        </button>
      );
    });
  }

  return (
    <div className="Dropdown">
      <h3 className="Dropdown__title">{title}</h3>
      <ul className="Dropdown__list">{renderedItems}</ul>
    </div>
  );
};

export default Dropdown;
