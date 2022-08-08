import React from "react";

const Button = ({ btnName }) => {
  return (
    <button className="bg-green-600 py-2 px-4 rounded text-white md:ml-8 ">
      {btnName}
    </button>
  );
};

export default Button;
