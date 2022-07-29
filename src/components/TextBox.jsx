import React from "react";
import PropTypes from "prop-types";

const TextBox = ({ type = "text", placeholder, icon }) => {
  return (
    <div className="relative flex items-center focus-within:text-gray-600">
      {icon}
      <input
        type={type}
        className="border py-2 pr-3 pl-10 rounded-md shadow-md w-full focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

TextBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.object.isRequired,
};

export default TextBox;
