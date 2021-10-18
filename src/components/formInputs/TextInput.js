import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown.js";
import "./TextInput.scss";

const TextInput = ({
  onClick,
  onChange,
  value,
  name,
  placeholder,
  className,
  onInput,
}) => {
  return (
    <input
      type="text"
      className={`TextInput ${className}`}
      name={name}
      placeholder={placeholder}
      onClick={onClick}
      onChange={onChange}
      onInput={onInput}
      value={value}
    />
  );
};

export default TextInput;
