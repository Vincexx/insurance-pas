import React from "react";
import PropTypes from "prop-types";

const TextBox = ({
  type = "text",
  placeholder,
  icon,
  handleChange,
  field,
  value,
}) => {
  return (
    <div className="flex items-center focus-within:text-gray-600">
      <input
        type={type}
        className="border py-2 pr-3 pl-10 rounded-md shadow-md w-full focus:outline-none -z-10"
        placeholder={placeholder}
        name={field}
        onChange={handleChange}
        value={value}
      />
      <div className="absolute pl-3 -z-10">{icon}</div>
    </div>
  );
};

TextBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.object.isRequired,
};

export default TextBox;
