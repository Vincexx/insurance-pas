import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const ErrorMessage = () => {
  return (
    <div className="bg-red-500 flex justify-between items-center text-white p-2 rounded-md">
      <p className="text-sm">Invalid Credentials</p>
      <FaExclamationCircle />
    </div>
  );
};

export default ErrorMessage;
