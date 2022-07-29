import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full">
      <div className="py-6 px-3 flex justify-between shadow-md">
        <div className="flex items-center">
          {/* <img src="logo192.png" alt="" className="w-6 mr-1" /> */}
          <p className="font-extrabold text-green-500 text-lg">Majesco</p>
        </div>

        <ul className="text-gray-700 flex justify-between w-60">
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
