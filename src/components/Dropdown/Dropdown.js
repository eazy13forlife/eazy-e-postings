import React from "react";

import "./Dropdown.scss";

const Dropdown = React.forwardRef(({ title, items, onItemClick }, ref) => {
  let renderedItems;
  if (items && items.length) {
    renderedItems = items.map((item, index) => {
      return (
        <li className="Dropdown__item" key={index} onClick={onItemClick}>
          {item}
        </li>
      );
    });
  } else if (items && !items.length) {
    renderedItems = [<p key={1}>No Results Found</p>];
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
