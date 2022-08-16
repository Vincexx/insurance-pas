import React from "react";
import { FaCheck } from "react-icons/fa";

const Modal = () => {
  return (
    <div className="bg-zinc-200 opacity-90 fixed inset-0 z-50 transition-all duration-100">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded py-12 px-24 flex flex-col justify-center items-center">
          <FaCheck className="text-green-500 text-4xl" />
          <p className="font-bold text-3xl">Login Success</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
