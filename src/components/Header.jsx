import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMagnet, FaWindowClose, FaHamburger } from "react-icons/fa";
import Button from "./Button";
import { useEffect } from "react";
import { useAuth } from "../App";

const Header = () => {
  const navigate = useNavigate();

  const token = useAuth();
  useEffect(() => {}, [token]);

  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const publicRoutes = [{ name: "Dashboard", link: "/dashboard" }];
  const privateRoutes = [
    { name: "Login", link: "/login" },
    { name: "Register", link: "/register" },
  ];
  const navs = !token ? privateRoutes : publicRoutes;

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <Link to={"/"}>
          <div className="flex items-center font-bold cursor-pointer text-xl">
            <span className="mr-1 text-green-500">
              <FaMagnet />
            </span>
            <p>Majesco</p>
          </div>
        </Link>

        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? (
            <FaWindowClose className="text-2xl text-green-500 absolute right-8 top-5 md:hidden" />
          ) : (
            <FaHamburger className="text-2xl text-green-500 absolute right-8 top-5 md:hidden" />
          )}
        </div>

        <ul
          className={`shadow-md md:shadow-none md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 md:pb-0 pb-7 transition-all duration-500 ease-in
          ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {navs.map((item, id) => (
            <li
              className="my-7 md:my-0 md:ml-8 text-md text-gray-600 hover:text-green-500 transition-all duration-100 font-thin"
              key={id}
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          {!token ? (
            <Button btnName={"Get Started"} />
          ) : (
            <Button btnName={"Logout"} action={() => logout()} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
