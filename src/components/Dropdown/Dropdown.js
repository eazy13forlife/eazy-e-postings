import React from "react";

import "./Dropdown.scss";

const Dropdown = React.forwardRef(({ title, items }, ref) => {
  let renderedItems;
  if (items) {
    renderedItems = items.map((item, index) => {
      return (
        <li className="Dropdown__item" key={index}>
          {item}
        </li>
      );
    });
  }

  return (
    <div className="Dropdown" ref={ref}>
      <h3 className="Dropdown__title">{title}</h3>
      <ul className="Dropdown__list">{renderedItems}</ul>
    </div>
  );
});

Dropdown.displayName = "Dropdown";
export default Dropdown;
