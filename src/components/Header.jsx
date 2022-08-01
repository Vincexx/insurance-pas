import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed w-full z-10">
      <div className="py-6 px-3 flex justify-between shadow-md">
        <div className="flex items-center">
          {/* <img src="logo192.png" alt="" className="w-6 mr-1" /> */}
          <p className="font-extrabold text-green-500 text-lg">Majesco</p>
        </div>

        <ul className="text-gray-700 flex justify-between w-60">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/login"}>
            <li>Login</li>
          </Link>
          <Link to={"/register"}>
            <li>Register</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
