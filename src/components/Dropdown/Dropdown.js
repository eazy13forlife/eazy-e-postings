import React from "react";

import "./Dropdown.scss";

const Dropdown = ({ title, items, onItemClick }) => {
  let renderedItems;
  if (items && items.length) {
    renderedItems = items.map((item, index) => {
      return (
        <li
          className="Dropdown__item"
          key={index}
          onClick={(e) => {
            onItemClick(e, item);
          }}
        >
          {item}
        </li>
      );
    });
  } else if (items && !items.length) {
    renderedItems = [<p key={1}>No Results Found</p>];
  }

  return (
    <div className="Dropdown">
      <h3 className="Dropdown__title">{title}</h3>
      <ul className="Dropdown__list">{renderedItems}</ul>
    </div>
  );
};

export default Dropdown;
